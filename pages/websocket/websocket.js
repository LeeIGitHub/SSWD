// pages/websocket/websocket.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var _this = this
    /**
     * 启动WebSocket
     */
    wx.connectSocket({
      // url:'ws://121.40.165.18:8800'
      // url:'ws://127.0.0.1:8443/v1'

      //可以链接
      // url: 'wss://www.pv-cloud.cn:5100'

      url: 'wss://www.qvdv.com/Websocket'
    })
    wx.onSocketOpen(function (res) {
      _this.data.list.push("WebSocket链接成功")
      _this.setData({
        list: _this.data.list
      })
    })
    wx.onSocketMessage(function (res) {
      console.log(res.data);
      _this.data.list.push(res.data);
      _this.setData({
        list: _this.data.list
      })
    })
    wx.onSocketClose(function (res) {
      _this.data.list.push("WebSocket连接关闭");
      _this.setData({
        list: _this.data.list
      })
    })
  },

  inputTitle: function (e) {
    this.setData({
      title: e.detail.value
    })
  },
  send: function () {
    // wx.sendSocketMessage({
      // data: this.data.title
    // })
    // _this.data.list.push(this.data.title);
    this.data.list.push("Leee")
    this.setData({list: _this.data.list})
    // console.log(this.data.title);
  },
  closeWebSocket: function () {
    wx.closeSocket({})
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})