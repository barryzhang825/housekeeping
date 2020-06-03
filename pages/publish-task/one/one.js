// pages/publish-task/one/one.js
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        time: '请选择',
        date: '请选择',
        pid: '',		/* 分类id */
        files: [],		/*保存上传图片url的数组*/
        description: '',
        desLength: 0,
    },
    goTo() {
        app.navigateTo('/pages/address/list/list')
    },
    bindinput(e) {
        this.setData({
            desLength: e.detail.value.length
        })
    },
    chooseImage(e) {
        var that = this;
        wx.chooseImage({
            count: 6,
            sizeType: ['original', 'compressed'],
            // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera'],
            // 可以指定来源是相册还是相机，默认二者都有
            success: function(res) {
                console.log(res.tempFilePaths)
                // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
                that.setData({
                    files: that.data.files.concat(res.tempFilePaths)
                });
            }
        })
    },
    /* 预览图片 */
    previewImage(e) {
        wx.previewImage({
            current: e.currentTarget.id,
            // 当前显示图片的http链接
            urls: this.data.files // 需要预览的图片http链接列表
        })
    },
    /* 删除图片 */
    clearImg: function(e) {
        var that = this;
        var nowList = []; /*新数据*/
        var files = that.data.files; /*原数据*/

        for (let i = 0; i < files.length; i++) {
            console.log(e.currentTarget.dataset.index)
            if (i == e.currentTarget.dataset.index) {
                // var arr = that.data.joinString.split(',')
                // arr.splice(i, 1); /*删除图片的同时删除掉其对应的ID*/
                // var newArr = arr.join(',')
                // that.setData({
                // 	joinString: newArr,
                // 	id: newArr + ','
                // })
            } else {
                //nowList.push(files[i])
            }
        }
        // this.setData({
        // 	uploaderNum: this.data.uploaderNum - 1,
        // 	files: nowList,
        // 	showUpload: true,
        // })
    },

    clearImg2: function(e) {
        var that = this;
        var nowList = []; /*新数据*/
        var files = that.data.files; /*原数据*/

        for (let i = 0; i < files.length; i++) {
            if (i == e.currentTarget.dataset.index) {
                var arr = that.data.joinString.split(',')
                arr.splice(i, 1); /*删除图片的同时删除掉其对应的ID*/
                var newArr = arr.join(',')
                that.setData({
                    joinString: newArr,
                    id: newArr + ','
                })
            } else {
                nowList.push(files[i])
            }
        }
        this.setData({
            uploaderNum: this.data.uploaderNum - 1,
            files: nowList,
            showUpload: true,
        })
    },



    bindTimeChange(e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            time: e.detail.value
        })
    },
    bindDateChange(e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            date: e.detail.value
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        console.log(options)
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})