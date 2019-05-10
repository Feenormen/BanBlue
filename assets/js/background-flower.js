class BackgroundFlower {
  init() {
    const canvas = document.getElementById('canvas') // 选择canvas标签
    const ctx = canvas.getContext('2d') // 设置绘画场景
    let width = (canvas.width = window.innerWidth) // 设置画布大小
    let height = (canvas.height = window.innerHeight) // 设置画布大小
    const particles = [] // 设置装礼花的数组
    const colors = ['#029DAF', '#E5D599', '#FFC219', '#F07C19', '#E32551'] // 礼花的所有会出现的颜色
    const gravity = 0.04 // 重力加速度
    let shux = 0 // 初始X轴
    let shuy = 0 // 初始Y轴

    // 设置时间延迟的同时创建200个礼花
    function initParticles() {
      for (let i = 0; i < 200; i++) {
        setTimeout(createParticle, 20 * i, i)
      }
    }

    // 生成礼花对象的函数
    function createParticle(i) {
      const x = shux
      const y = shuy
      const vx = -2 + Math.random() * 4
      const vy = Math.random() * -3
      const size = 5 + Math.random() * 5
      const color = colors[i % colors.length]
      const opacity = 0.5 + Math.random() * 0.5
      const p = new Particle(x, y, vx, vy, size, color, opacity)
      particles.push(p)
    }

    // 礼花对象函数
    function Particle(x, y, vx, vy, size, color, opacity) {
      // 重置礼花的各项数据
      function reset() {
        x = shux
        y = shuy
        opacity = 0.5 + Math.random() * 0.5
        vx = -2 + Math.random() * 4
        vy = Math.random() * -3
      }
      // 控制礼花的运动轨迹
      this.update = function() {
        // 判断礼花是否还能显示，是则不断虚化直至消失，否则重置数据。
        if (opacity - 0.005 > 0) {
          opacity -= 0.005
        } else {
          reset()
        }
        // 刷新礼花数据
        vy += gravity
        x += vx
        y += vy
      }
      // 礼花的展示函数
      this.draw = function() {
        ctx.globalAlpha = opacity // 礼花的透明度设置
        ctx.fillStyle = color // 礼花的颜色设置
        ctx.fillRect(x, y, size, size) // 礼花的位置设置
      }
    }

    // 通过浏览器的帧动画来不断重绘画布，重绘的过程中会不断展现出礼花的运动轨迹
    function render() {
      ctx.clearRect(0, 0, width, height)
      for (let i = 0; i < particles.length; i++) {
        particles[i].update()
        particles[i].draw()
      }
      requestAnimationFrame(render)
    }

    // 监听浏览器窗口太小的改变，执行resize函数
    window.addEventListener('resize', resize)

    // 浏览器窗口改变的同时，改变画布的大小
    function resize() {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    // 定义event事件，ie浏览器的兼容写法
    document.onmousemove = function(e) {
      // 当鼠标在文档内运动的时候,礼花的初始横纵坐标随鼠标改变，即可实行礼花随鼠标滑动而冒出的效果
      shux = e.clientX
      shuy = e.clientY
    }

    // 启动创建礼花函数
    initParticles()
    // 帧动画启动函数,启动所有效果
    render()
  }
}

export default new BackgroundFlower()
