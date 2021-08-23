Page({
	/**
   * 页面的初始数据
   */
	data: {
		title: '',
		detail: []
	},

	/**
   * 生命周期函数--监听页面加载
   */
	onLoad: function(options) {
		wx.request({
			url: `https://unidemo.dcloud.net.cn/api/news/36kr/${options.id}`,
			data: {},
			header: {
				'content-type': 'application/json'
			},
			success: (res) => {
					console.log(res);
					this.setData({
						title: res.data.title,
						detail: res.data.content
					});
			}
		});
	},
});