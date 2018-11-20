var util = getApp().globalData.util;
Page({
    data: {
      url: 'http://dmc.pk4yo.com:8081/html/travel_js.html',
      randNum: util.randomNum()
    },
    onLoad: function(options){
        options.url ? this.setData({url: options.url}) : '';

    }
});
