// pages/Appin/Appin.js
Page({
  data: {
    arraycontent: [{
        name: '姓名(Name)',
        content: '琴景盛'
      },
      {
        name: '下单时间(Order up)',
        content: '2020年09月23日 18:17'
      },
      /* 负责人资料 */
      {
        name: '负责人资料(Contact Person)',
        content: '',

        ContacTperson: [{
          name: '姓名(Name)',
          content: '琴景盛'
        }, {
          name: '电话(Phone)',
          content: '18081235587'
        }, {
          name: '公司名(company Name)',
          content: '测试'
        }]
      },
      /* 会议室 */
      {
        name: '会议室（Meeting Room）',
        content: '',
        ContacTperson: [{
          name: "叁門堂"
        }]
      },
      /* 租期设定 */
      {
        name: '租期设定(Lease Term Setting)',
        content: '',
        ContacTperson: [{
            name: '预约开始时间(Start Time)',
            content: '2020年09月24日 12:00'
          }, {
            name: '预约结束时间(End Time)',
            content: '2020年09月24日 13:30'
          }, {
            name: '延迟分钟(Delay Time)',
            content: '0分钟'
          },
          {
            name: '总共使用时长(Durtiom)',
            content: '1小时30分0秒'
          }
        ]
      }, {
        name: '状态(Status)',
        content: '预约成功',
        color: "#70BAEC"
      }
    ]
  },
  share() {
     var list=JSON.stringify(this.data.arraycontent)
   
  wx.navigateTo({
     url: "../share/share?list="+list
   })

  },
  cancel() {
    console.log("hello")
  },
  onLoad() {

  }


})