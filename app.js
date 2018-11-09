var host = "api.efanji.com/evmsv3/",
util = require('./utils/util.js'),
imageUrl = "http://image.efanji.com";

var config = {
    host,
    imageUrl,
    searchSimilarImage: `https://${host}/api/Maintenance/searchImg`,
    getDetailImage: `https://${host}/api/Maintenance/getDetailImage`,
};


App({
  onLaunch: function () {

  },
  globalData: {
    userInfo: null,
    util: util,
    config: config
  }
})