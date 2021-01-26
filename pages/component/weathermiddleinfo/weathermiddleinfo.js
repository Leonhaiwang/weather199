Component({
  properties: {
    tomorrowTempMin:String,
    tomorrowWind: String,//明天风向
    afterTomtomorrowTempMin:String,//后天最低气温
    afterTomtomorrowWind:String,//后天风向
    tomorrowText: String,
    tomorrowTempMax:String,
    afterTomtomorrowText: String,
    afterTomtomorrowTempMax: String,
  },
  on(e){
    console.log(e)
  },
  data: {
    name:"ssssssss"
  }, // 私有数据，可用于模板渲染

  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () { },
    moved: function () { },
    detached: function () { },
  },

  pageLifetimes: {
   
  },

  methods: {
    
  }

})