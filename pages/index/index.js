//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    text: "This is page data."
  },
  onShareAppMessage: function () {
    // return custom share data when user share.
  },
  onShow: function () {
    // var flag = true;
    // var time = new Date().getTime();
    // while (flag) {
    //   var timeMonitor = new Date().getTime();
    //   this.setData({
    //     text: 'Set some data for updating view.' + timeMonitor
    //   })
    //   if (timeMonitor - time > 3000) {
    //     flag = false;
    //   }
    // }
  }
})
