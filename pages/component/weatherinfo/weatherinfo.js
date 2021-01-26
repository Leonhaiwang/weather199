Component({
  properties: {
    nowlocation:String,
    nowtemp:String,
    nowtext:String,
    nowwindDir:String,
    nowwindScale:String,
    nowwindSpeed:String,
    nowvis:String,
    name:String
  },
  
  data: {
    
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