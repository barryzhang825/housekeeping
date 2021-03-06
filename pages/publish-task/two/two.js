// pages/publish-task/two/two.js
const api = require('../../../utils/api.js');
import { numToTime } from "../../../utils/util";
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderId: '',
    renlist: {},
    offerNum:0,//报价人数
  },
  goTo (e) {
    wx.navigateTo({
      url: '/pages/publish-task/selected/selected?dataset=' + JSON.stringify(e.currentTarget.dataset.item) + '&demand=' + this.data.renlist.demand_title + '&demand_id=' + this.data.orderId
    })

  },
  demandDetails () {
    console.log(this.data)
    wx.navigateTo({
      url: '/pages/publish-task/detail/detail?demand_id=' + this.data.orderId
    })
  },
  goMaster(e){
    let id=e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/master-details/master-details?master_user_id=' + id
    })
  },
  // 获取列表
  retrieveData () {
    let that = this
    api.post({
      url: `/Order/demand_offer_list/${1}/${100}`,
      data: {
        user_id: wx.getStorageSync('userid'),
        user_token: wx.getStorageSync('token'),
        demand_id: this.data.orderId
      },
      success: res => {
        res.list.offer_endtime = numToTime(res.list.offer_endtime)
        res.offer_endtime = numToTime(res.offer_endtime)
        that.setData({
          offerNum:res.list.length,
          renlist: res
        })
        console.log(that.data.renlist, "111")
      }
    })
  },
  // 拨打电话
  contact (e) {
    wx.makePhoneCall({
      phoneNumber: e.currentTarget.dataset.phone
    })
    console.log(e.currentTarget.dataset.phone)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      orderId: options.demandid
    })
    this.retrieveData()
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
