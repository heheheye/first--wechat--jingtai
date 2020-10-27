Page({

  data: {
   list:[]

  },
  onLoad: function (options) {
    var that = this
    var list = JSON.parse(options.list)
    that.setData({
        list1: list[4].ContacTperson[0].content,
        list2: list[4].ContacTperson[1].content,
        list3: list[4].ContacTperson[3].content,
        list4: list[0].content,
        list5: list[5].content
      }),
      wx.showShareMenu({
        withShareTicket: true,
        menus: ['shareAppMessage', 'shareTimeline']
      })
     
  }

})