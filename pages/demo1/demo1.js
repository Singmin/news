Page({
  data: {
    list: []
  },
  onLoad: function (options) {
    wx.request({
      url: 'https://unidemo.dcloud.net.cn/api/news',
      header: {
        'content-type': 'application/json'
      },
      success: res => {
        console.log(res.data)
        this.setData({
          list: res.data
        })
      }
    })
  },
})
