const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function randomNum(Min, Max) {
  var Range = Max - Min;
  var Rand = Math.random();
  var num = Min + Math.round(Rand * Range);
  return num;
}

var requestTask = '';
function makeRequest(thisObj, reqUrl, data, successCallback, method) {
  var self = thisObj;
  self.setData({
    loading: true
  })
  wx.showLoading({ "title": "数据加载中..." });
  if (typeof requestTask == 'object') {
    requestTask.abort() // 取消上次请求任务
  }
  requestTask = wx.request({
    url: reqUrl,
    method: method || 'POST',
    data: data || {},

    success: function (result) {
      wx.hideLoading();
      self.setData({
        loading: false
      })
      if (result.statusCode == 200) {
        successCallback && successCallback(result.data);
      } else {
        wx.showToast({
          title: '网络请求失败！',
          icon: 'none',
          duration: 2000
        })
      }
    },

    fail: function ({ errMsg }) {
      console.log('request fail', errMsg)
      wx.hideLoading();
      self.setData({
        loading: false
      })
    }
  })
}
module.exports = {
  formatTime: formatTime,
  makeRequest: makeRequest,
  randomNum: randomNum
}
