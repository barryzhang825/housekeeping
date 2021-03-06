// pages/team/team.js
import {numToTime} from "../../utils/util";

const api = require('../../utils/api.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageNum:1,
    pageSize:20,
    dataList:[]
  },
  fetchData(){
    let that = this
    api.post({
      url: '/Distribution/invite_list/'+this.data.pageNum+'/'+this.data.pageSize,
      data: {
        user_id:wx.getStorageSync('userid'),
        user_token:wx.getStorageSync('token'),
      },
      success: res => {
        console.log(res, 765)

        if (res.code == 200) {
          if(res.list.length>0){
            for (let i = 0; i < res.list.length; i++) {
              res.list[i].create_time=numToTime( res.list[i].create_time)
            }
          }
          that.setData({
            dataList: res.list
          })
        } else {
          console.log('获取数据失败');
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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