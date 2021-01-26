
Component({
  options: {
    multipleSlots: true,// 在组件定义时的选项中启用多slot支持
  },
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    innerText: {
      type: String,
      value: 'default value',
    }
  },
  data: {
    email: "",
    phonebumber:"",
    message: "请输入",
    phonemessage:"请输入",
    number:{
      name: "",
      class: ""
    }

  },
  lifetimes: {
    created() {
      //创建
    },
    attached() {
    
    },
    detached() {
      //组件实例被从页面节点树移除
    }
  },
  methods: {
    emailChange(e) {
      var reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");
      this.setData({
        username: e.detail.value,
      })
      if(this.data.username.trim() === ""){
        this.setData({
          message:"输入不能为空"
        })
      }else if(!reg.test(this.data.username.trim())){
        this.setData({
          message:"格式错误"
        })
      }else if(reg.test(this.data.username.trim())){
        this.setData({
          message:"格式正确"
        })
      }
     
    },
    phoneChange(e) {
      var reg = new RegExp("/^1(3|4|5|6|7|8|9)d{9}$/");
      this.setData({
        phonebumber: e.detail.value,
      })
      if(this.data.phonebumber.trim() === ""){
        this.setData({
          phonemessage:"输入不能为空"
        })
      }else if(!reg.test(this.data.phonebumber.trim())){
        this.setData({
          phonemessage:"格式错误"
        })
      }else if(reg.test(this.data.phonebumber.trim())){
        this.setData({
          phonemessage:"格式正确"
        })
      }
     
    },
    

  }
})
