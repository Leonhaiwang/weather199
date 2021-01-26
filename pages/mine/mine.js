
Page({

  /**
   * 页面的初始数据
   */
  data: {
    x: 10,
    y: 20,
  },
  cle() {
    this.setData({
      x: 200,
      y: 200
    })
  },
  getChildComponent(){
    const child = this.selectComponent('.comform')
    console.log(child)
  },
  onMyEvent: function (e) {
    console.log(1111) // 自定义组件触发事件时提供的detail对象
  },
  nameChange(e) {
    console.log(e.detail)
    this.setData({
      "form.name": e.detail.value,
      "from.class": e.detail.value
    })
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