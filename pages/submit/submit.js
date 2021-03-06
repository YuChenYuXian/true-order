const util = require('../../utils/util.js')

const formatLocation = util.formatLocation


Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag: false,//是否可选时间
    array: ['中国', '美国', '巴西', '日本'],//取餐时间数组
    index: 0,
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
    zsnum:0,
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

    /**
     * 商品总数总价
     */
    let goodsArr = that.data.goods;
    let zs = 0;//总数
    let zj = 0;//总价
    for (let i = 0; i < goodsArr.length; i++) {
      zs = zs + goodsArr[i].number;
      zj = zj + goodsArr[i].price * goodsArr[i].number;
    }


    /**
     * 取餐时间
     */
    let jg = 15;//时间间隔
    let sl = 200;//数组长度（没用）
    let now = util.formatTime(new Date());//当前时间
    let sfm = now.split(" ")[1];//当前时间时分秒
    let s = parseInt(sfm.split(":")[0]);//当前时间 时
    let f = parseInt(sfm.split(":")[1]);//当前时间 分
    if (0 <= f && f < 30) {//如果分钟在0-30之间
      f = 30;
    } else {
      s = s + 1;
      f = '00';
    }
    s = parseInt(s);
    f = parseInt(f);
    let sf = s + ':' + f;
    let timearr = new Array();
    for (let i = 0; i < sl; i++) {
      f = f + 15
      if (f == 60) {
        s = s + 1;
        f = '00';
      }
      timearr[i] = s + ':' + f;
      s = parseInt(s);
      f = parseInt(f);
      if (s == 24) {
        break;//当时间到24点跳出
      }
    }

    /**
     * data赋值
     */
    that.setData({
      time: sf,
      total: zs,
      sum: zj,
      array: timearr,
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

  },

  /**
     * 备注字数
     */
  bindinputNum(e) {
    this.setData({
      zsnum: e.detail.value.length
    })
  },
 
  /**
   * 用户选择时间
   */
  bindPickerChange: function(e) {
    this.setData({
      index: e.detail.value
    })
  },
})