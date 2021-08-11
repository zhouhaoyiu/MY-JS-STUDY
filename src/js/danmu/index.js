import { isObject, isArray } from './util'
import Danmu from './Danmu'
class VideoDanmu {
  constructor(video, canvas, options) {
    if (!video || !canvas || !options || !isObject(options)) {
      return
    }
    if (!options.danmuData || !isArray(options.danmuData)) {
      console.log(444)
      return
    }
    this.video = video
    this.canvas = canvas
    this.canvasCtx = canvas.getContext('2d')
    this.canvas.width = video.offsetWidth
    this.canvas.height = video.offsetHeight
    this.danmuPaused = true

    Object.assign(this, options, {
      speed: 2,
      runTime: 0,
      color: '#fff'
    })


    this.danmuPool = this.createDanmuPool()
    this.render()

  }
  createDanmuPool() {
    return this.danmuData.map(dm => new Danmu(dm, this))
  }

  render() {
    this.clearRect()
    this.drawDanmu()
    !this.danmuPaused && requestAnimationFrame(this.render.bind(this))
  }

  drawDanmu() {
    let currentTime = this.video.currentTime
    this.danmuPool.map((danmu) => {
      console.log(2)
      if (!danmu.stopDrawing && currentTime >= danmu.runTime) {
        if (!danmu.isInitialized) {
          danmu.initialize()
          danmu.isInitialized = true
        }
        danmu.X -= danmu.speed
        danmu.draw()

        if (danmu.X <= danmu.width * -1) {
          danmu.stopDrawing = true
        }
      }
    })
  }

  reset() {
    this.clearRect()
    let currentTime = this.video.currentTime
    this.danmuPool.map((danmu) => {
      danmu.stopDrawing = false
      if (currentTime <= danmu.runTime) {
        danmu.isInitialized = false
      } else {
        danmu.stopDrawing = true
      }
    })
  }

  addDanmu(data) {
    this.danmuPool.push(new Danmu(data, this))
  }

  clearRect() {
    this.canvasCtx.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }
}

export default VideoDanmu