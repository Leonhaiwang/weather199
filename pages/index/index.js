
const app = getApp()

//引入SDK核心类
var QQMapWX = require('../../utils/qqmap-wx-jssdk.js');
var qqmapsdk;
Page({
  data: {
    tomorrowText: "晴",
    tomorrowTempMax: '0',
    afterTomtomorrowText: '晴',
    afterTomtomorrowTempMax: '0',
    cityLon: '',
    cityLat: '',
    cityID: '101010100',
    searchCity: 'searchCity',
    nowlocation: '',
    nowtemp: '0',//温度
    nowfeelsLike: '0',//体感温度
    nowhumidity: '0',// 相对湿度，百分比数值
    nowtext: '晴',//实况天气文字描述
    nowwindSpeed: '0',//风速
    nowwindDir: 'XX风',//风向
    nowwindScale: '0',//风力等级
    nowvis: '0',//能见度
    tomorrowTempMin: '0',//明天最低气温
    tomorrowWind: 'XX风',//明天风向
    afterTomtomorrowTempMin:'0',//后天最低气温
    afterTomtomorrowWind:'XX风'//后天风向
  },
  getChildComponent(){
    const child = this.selectComponent('.namemmm')
  },
  //改变搜索信息
  nowlocaChange(e) {
    this.setData({
      nowlocation: e.detail.value
    })
  },
  //获取用户输入城市
  searchBox(e) {
    const { value } = e.detail
    this.setData({
      nowlocation: e.detail.value.searchCityValue
    })
  },
  //城市信息搜索
  searchCityInfo() {
    let result = this.data.nowlocation;
    wx.request({
      url: 'https://geoapi.qweather.com/v2/city/lookup?',
      data: {
        "location": result,
        key: "c8b1246f368e4eaa802165b0fd5dde76"
      },
      success: (res) => {
        //返回搜索城市的id信息
        const resultData = res.data.location[0];
        if (res.data.code === "200") {
          this.setData({
            cityID: resultData.id,
            cityLon: resultData.lon,
            cityLat: resultData.lat,
            nowlocation: resultData.name
          })
          this.getNowLocationinfo()
        }
        else {
          wx.showToast({
            title: '查询地名无效',
            icon: "error",
            duration: 2000
          })
          that.setData({
            nowlocation: "未知"
          })
        }
      }
    })
  },
  //获取当前位置天气信息
  getNowLocationinfo() {
    const result = this.data.cityID
    wx.request({
      url: 'https://devapi.qweather.com/v7/weather/3d?',
      data: {
        location: result,
        key: "c8b1246f368e4eaa802165b0fd5dde76"
      },
      success: (res) => {
        const today = res.data.daily[0];
        const tomorrow = res.data.daily[1];
        const aftertomorrow = res.data.daily[2];
        this.setData({
          nowtemp: today.tempMax,
          nowwindDir: today.windDirDay,
          nowwindSpeed: today.windSpeedDay,
          nowwindScale: today.windScaleDay,
          nowvis: today.vis,
          nowtext: today.textDay,
          tomorrowText: tomorrow.textDay,
          tomorrowTempMax: tomorrow.tempMax,
          tomorrowTempMin:tomorrow.tempMin,
          tomorrowWind:tomorrow.windDirDay,
          afterTomtomorrowText: aftertomorrow.textDay,
          afterTomtomorrowTempMax: aftertomorrow.tempMax,
          afterTomtomorrowTempMin:aftertomorrow.tempMin,
          afterTomtomorrowWind:aftertomorrow.windDirDay,
        })
      }
    })
  },
  //逆地址解析函数
  address() {
    qqmapsdk.reverseGeocoder({
      location: {
        latitude: this.data.cityLat,
        longitude: this.data.cityLon
      },
      success: (res) => {
        this.setData({
          nowlocation: res.result.address
        })
      },
    })
  },
  //获取当前的位置坐标
  getNowaddress() {
    //获取当前的位置坐标
    wx.getLocation({
      type: 'gcj02',
      success: res => {
        this.setData({
          cityLon: res.longitude,
          cityLat: res.latitude
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //获取当前位置坐标
    this.getNowaddress()
    //逆地址解析
    setTimeout(() => { this.address() }, 1500)
    //获取当前位置天气信息
    this.getNowLocationinfo()
    this.getChildComponent()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    //调用接口
    qqmapsdk.search({
      keyword: '',
      success: function (res) {
        console.log(res);
      },
      fail: function (res) {
        // console.log(res);
      },
      complete: function (res) {
        // console.log(res);
      }
    });

  },
  //页面加载函数
  onLoad: function () {
    // 实例化API核心类
    qqmapsdk = new QQMapWX({
      key: 'NZUBZ-7EKRF-R6BJF-J3YZE-G5T33-BDFER'
    });
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