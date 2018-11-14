const app = getApp();
var config = app.globalData.config, util = getApp().globalData.util;
Page({
  data: { 
    Height: 0,
    BtnTop: 0,
    //countries: ["切换景区", "云冈石窟", "五台山", "洪洞大槐树"],
    countries: ["景山公园"],
    countryIndex: 0,
    bgList:[
      '../../images/index_bg.png',
      //'http://image.efanji.com/image/yungang_bg.png',
      //'http://image.efanji.com/image/wutaishan_bg.png',
      //'http://image.efanji.com/image/dahuaishu_bg.jpg',
    ],
    wd: '',
    jd: ''
  },

  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          Height: res.windowHeight,
          BtnTop: res.windowHeight/2 -40,
        });
      }
    });
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        console.log(res)
        let wd = parseInt(res.latitude), jd = parseInt(res.longitude), val = 0;
        console.log(wd, jd)
        //山西大同  40.109810，113.144800
        //五台山  38.968620,113.590720
        //大槐树 36.271250,111.677110
        //北京  40.22077  116.23128
        if (wd == 40 && jd == 113) val = 1
        if (wd >= 38 && wd < 40 && jd == 113) val = 2
        if (wd >= 36 && wd < 37 && jd == 111) val = 3
        that.setData({
          countryIndex: val
        })
      }
    })
  },
  bindCountryChange: function (e) {
    this.setData({
      countryIndex: e.detail.value
    })
  },

  goToAi: function () {
    wx.navigateTo({
      url: '/pages/home/index'
    })
  },

  goToMap: function () {
    wx.navigateTo({
      url: '/pages/webview/index?url=https://openapi.efanji.com/map.html'
    })
  },

  goToRobot: function () {
    wx.navigateTo({
      url: '/pages/webview/index'
    })
  }

})
