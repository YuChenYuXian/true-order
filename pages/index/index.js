//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    theme: app.globalData.theme,
    imgUrls: [
      '../../ui/image/8.jpg',
      '../../ui/image/11.jpg',
    ],
    indicatorDots: true,
    indicatorColor: '#e5e5e5',
    indicatorActiveColor: app.globalData.theme,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    swiperHeight: '150px',
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  foodList: function() {
    wx.navigateTo({
      url: '../foods/foods'
    })
  },
  submitOrder: function () {
    wx.navigateTo({
      url: '../submit/submit'
    })
  },
  onReady: function() {
    var _this = this;
    wx.getSystemInfo({
      success: function(res) {
        var height = (res.windowWidth - 50) * 0.825 + 'px'
        _this.setData({
          swiperHeight: height
        });
      }
    });
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})

