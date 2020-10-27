Page({
  onShareAppMessage() {
    return {
      title: 'swiper',
      path: 'page/component/pages/swiper/swiper'
    }
  },

  data: {
    background: [{
        url: '../../static/swiper.png'
      },
      {
        url: '../../static/第一张.png'
      },
      {
        url: '../../static/swiper.png'
      }, {
        url: '../../static/第一张.png'
      }
    ],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 5000,
    duration: 500,
    arraybox:[{
      url:'../../static/bg1.png',
      index1:'贰門堂',
      index2:'环球都会8楼',
      index3:'环球都会8楼'
    }
  ,{
    url:'../../static/bg2.png',
    index1:'贰門堂',
    index2:'环球都会8楼',
    index3:'环球都会8楼'
  },
  {
    url:'../../static/bg1.png',
    index1:'叁門堂',
    index2:'环球都会8楼',
    index3:'环球都会8楼'
  },{
    url:'../../static/bg2.png',
    index1:'叁門堂',
    index2:'环球都会58-59楼',
    index3:'环球都会58楼'
  }]
  },

  changeIndicatorDots() {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },

  changeAutoplay() {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },

  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },

  durationChange(e) {
    this.setData({
      duration: e.detail.value
    })
  },
  go(){
    wx.navigateTo({
      url: '../ConferenceRoomReservation/ConferenceRoomReservation',
    })
  }
})