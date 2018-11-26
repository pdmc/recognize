var config = getApp().globalData.config;
Page({
  data: {
    config: config,
    list: [],
  },

  onLoad: function () {
    let that = this
    wx.getStorage({
      key: 'searchResultData',
      success: function (res) {
        that.setData({ list: res.data })
      }
    })
  },

  goDetail: function (e) {
    var self = this, 
    data = e.currentTarget.dataset;
    wx.navigateTo({ url: '../detail/index?id=' + data.id })
  }

})