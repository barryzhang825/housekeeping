// pages/agreement-detail/agreement-detail.js
const api = require('../../utils/api.js');
var WxParse = require('../../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:'',
    dataDetail:''
  },
  fetchData(){
    let that = this
    api.get({
      url: '/Article/article_info/'+this.data.id,
      data: {},
      success: res => {
        console.log(res,765)
        if(res.code == 200){
          that.setData({
            dataDetail:res.data
          })
          var art = res.data.content;
          WxParse.wxParse('articleContent', 'html', art, that, 5);
        }else{
          console.log('获取数据失败');
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id,99)
    this.setData({
      id:options.id
    })
    if(options.title){
      wx.setNavigationBarTitle({
        title: options.title
      })
    }else {
      wx.setNavigationBarTitle({
        title: '协议详情'
      })
    }
    this.fetchData()
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