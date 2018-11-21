// pages/submit/submit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods: [{
      id: '0001',
      name: '南瓜抹茶/中杯',
      mark: '半糖+温',
      price: 16,
      number: 1
    }, {
        id: '0002',
        name: '法式奶霜烤茶/中杯',
        mark: '常规糖+热',
        price: 11,
        number: 1
    }, {
        id: '0003',
        name: '南瓜欧蕾/中杯',
        mark: '微糖+温',
        price: 14,
        number: 1
    }, {
        id: '0004',
        name: '法式奶霜烤茶/大杯',
        mark: '微糖+去冰',
        price: 14,
        number: 2
    }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    const that = this;
    let goodsArr = that.data.goods;
    let zs = 0;
    let zj = 0;
    for (let i = 0; i < goodsArr.length; i++) {
      zs = zs + goodsArr[i].number;
      zj = zj + goodsArr[i].price * goodsArr[i].number;
    }
    that.setData({
      total: zs,
      sum: zj,
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})