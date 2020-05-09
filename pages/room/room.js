// pages/room/room.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userList: [
            {avatar: 'http://wx4.sinaimg.cn/mw600/007Xv5XOgy1g8o7py7563j30g00g0mz8.jpg', name: 'foo'},
            {avatar: 'http://wx4.sinaimg.cn/mw600/007Xv5XOgy1g8o7py7563j30g00g0mz8.jpg', name: 'bar'},
            {avatar: 'http://wx4.sinaimg.cn/mw600/007Xv5XOgy1g8o7py7563j30g00g0mz8.jpg', name: 'size'},
            {avatar: 'http://wx4.sinaimg.cn/mw600/007Xv5XOgy1g8o7py7563j30g00g0mz8.jpg', name: 'fk'},
            {avatar: 'http://wx4.sinaimg.cn/mw600/007Xv5XOgy1g8o7py7563j30g00g0mz8.jpg', name: 'ha'},
            {avatar: 'http://wx4.sinaimg.cn/mw600/007Xv5XOgy1g8o7py7563j30g00g0mz8.jpg', name: 'ha'},
            {avatar: 'http://wx4.sinaimg.cn/mw600/007Xv5XOgy1g8o7py7563j30g00g0mz8.jpg', name: 'ha'},
            {avatar: 'http://wx4.sinaimg.cn/mw600/007Xv5XOgy1g8o7py7563j30g00g0mz8.jpg', name: 'ha'},
            {avatar: 'http://wx4.sinaimg.cn/mw600/007Xv5XOgy1g8o7py7563j30g00g0mz8.jpg', name: 'ha'},
            {avatar: 'http://wx4.sinaimg.cn/mw600/007Xv5XOgy1g8o7py7563j30g00g0mz8.jpg', name: 'ha'},
            {avatar: 'http://wx4.sinaimg.cn/mw600/007Xv5XOgy1g8o7py7563j30g00g0mz8.jpg', name: 'ha'},
            {avatar: 'http://wx4.sinaimg.cn/mw600/007Xv5XOgy1g8o7py7563j30g00g0mz8.jpg', name: 'ha'},
            {avatar: 'http://wx4.sinaimg.cn/mw600/007Xv5XOgy1g8o7py7563j30g00g0mz8.jpg', name: 'ha'},
            {avatar: 'http://wx4.sinaimg.cn/mw600/007Xv5XOgy1g8o7py7563j30g00g0mz8.jpg', name: 'ha'},
            {avatar: 'http://wx4.sinaimg.cn/mw600/007Xv5XOgy1g8o7py7563j30g00g0mz8.jpg', name: 'ha'},
            {avatar: 'http://wx4.sinaimg.cn/mw600/007Xv5XOgy1g8o7py7563j30g00g0mz8.jpg', name: 'ha'},
            {avatar: 'http://wx4.sinaimg.cn/mw600/007Xv5XOgy1g8o7py7563j30g00g0mz8.jpg', name: 'ha'},
            {}
        ],
        des: "game state 0:等待玩家  1:游戏中",
        gameState: 1,

        myWord: "haha",

        myWordPopIsShow: false,

        dialogExposeIsShow:false
    },

    addBtnClick: function () {
        wx.showToast({
            title: 'haha',
            icon: 'success',
            duration: 2000
        })
    },

    /**
     * 查看我的词组
     */
    btnSeeWord: function () {
        this.showWord(true)
    },
    btnUnSeeWord: function () {
        this.showWord(false)
    },

    /**
     * 显示或不显示 word pop
     * @param isShow
     */
    showWord: function (isShow) {
        this.setData({
            myWordPopIsShow: isShow
        })
    },

    /**
     * 揭露身份
     */
    exposeUser(e) {
        this.setData({
            dialogShow: false,
            showOneButtonDialog: false
        })
    },

    /**
     * 玩家被点击时
     */
    itemClick: function (user) {
        // console.log(user.target)
        /**
         * 游戏中，点击表示翻身份
         */

        if (this.data.gameState == 1) {
            // wx.showToast({
            //     title: user.currentTarget.dataset.user.name,
            //     icon: 'success',
            //     duration: 1000
            // })
            // this.setData({
            //     dialogExposeIsShow:true
            // })
        }

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