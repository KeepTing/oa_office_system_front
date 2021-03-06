// pages/me/meItems/meItems.
var qiniuHost=getApp().globalData.qiniuHost;

Page({
  data: {
    // taskInfo: [{
    //   title: "任务标题3",
    //   dateTime: '截至时间3'
    // }, {
    //   title: "任务标题2",
    //   dateTime: '截至时间2'
    // }]
    username:'',
    job:'',
    headImg:'',
  },
  exit:function(){
    wx.reLaunch({
      url: '/pages/login/login',
    })
  },
  onLoad: function (e) {
 
    var that=this;

    wx.setNavigationBarTitle({
      title: '我'
    })

    var user=wx.getStorageSync("user");
    
    if(user!=null){
      that.setData({
        username:user.username,
        headImg:qiniuHost+user.image,
        job:user.job
      })

      // console.log(that);
    }

  },
  clickto: function (e) {
    //根据e.currentTarget.dataset.caption查询任务，提交请求
    // 把要传递的json对象转换成字符串
    var taskInfo = JSON.stringify(this.data.taskInfo);
    console.log(taskInfo);
    wx.navigateTo({
      url: "/pages/taskItems/taskItems?title=" + e.currentTarget.dataset.caption + "&taskInfo=" + taskInfo
    })
    /*    wx.request({
          url: 'http://www.keepspy.cn:8080/user/login',
          data: JSON.stringify({
            'opert': e.currentTarget.dataset.caption,
          }),
          header: {
            'content-type': 'application/json'
          },
          method: 'POST',
          success: function (res) {
            console.log(res.data)
             // 把要传递的json对象转换成字符串
           var taskInfo = JSON.stringify(res.data);
           console.log(taskInfo);
           wx.navigateTo({
             url: "/pages/taskItems/taskItems?title=" + e.currentTarget.dataset.caption + "&taskInfo="+taskInfo
           })
            that.setData({
              phoneNum: e.detail.value.phoneNum,
              pwd: e.detail.value.pwd
            });
          }
        });
    */
  }
})