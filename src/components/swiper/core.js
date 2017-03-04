// default options
const DEFAULT_OPTIONS = {
  itemClass: '.swiper-item',
  direction: 'vertical',
  threshold: 30,
  duration: 250,
  transitionEnd: noop
}

// utilities
const extend = (target, source) => {
  for (var key in source) {
    target[key] = source[key]
  }
  return target
}

function noop() {}
function execFn(fn) { setTimeout(fn || noop, 0)}

module.exports = function Swiper(container, swiperOptions) {
  let options = extend(DEFAULT_OPTIONS, swiperOptions)

  let prev = 0
  let current = 0
  let offset = 0

  let items =  container.querySelectorAll(options.itemClass)
  let count = items.length

  let width = container.getBoundingClientRect().width || container.offsetWidth
  let height = container.getBoundingClientRect().height || container.offsetHeight

  // Setup
  function setup() {
    // reset container's width and height
    var w = width;
    var h = height * count

    if (options.direction === 'horizontal') {
      w = width * count
      h = height
    }

    container.style.width = w + 'px'
    container.style.height = h + 'px'

    // set width and height for every single swipe item
    let pos = count
    while (pos--) {
      let item = items[pos]
      item.style.width = width + 'px'
      item.style.height = height + 'px'
    }
  }

  // Activate a item
  function activate(index) {
    offset = index * height
    transform = 'translate3d(0, -' + offset + 'px, 0)'

    if (options.direction == 'horizontal') {
      offset = index * width;
      transform = 'translate3d(-' + offset + 'px, 0, 0)';
    }

    let duration = options.duration + 'ms'

    let style = container.style
    style.webkitTransition =
    style.transition = duration

    style.webkitTransform =
    style.transform = transform
  }

  // Events

  // init varialbles

  let start = {}
  let move = {}
  let end = {}

  const events = {
    start: function (e) {
      let touch = e.changedTouches[0]
      start.x = touch.pageX
      start.y = touch.pageY
      start.time = +new Date()

      let style = container.style
      style.webkitTransition =
      style.transition = 'none'
    },

    move: function (e) {
      // ensure swiping with one touch and not pinching
      // if ( event.touches.length > 1 || event.scale && event.scale !== 1) return

      let touch = e.changedTouches[0]
      move.x = touch.pageX
      move.y = touch.pageY

      let dist = move.y - start.y
      let transform = 'translate3d(0, ' + (dist - offset) + 'px, 0)'

      if (options.direction == 'horizontal') {
        dist = move.x - start.x
        transform = 'translate3d(' + (dist - offset) + 'px, 0, 0)'
      }

      let style = container.style
      style.webkitTransform =
      style.transfrom = transform

      e.preventDefault()
    },

    end: function (e) {
      let touch = e.changedTouches[0]
      end.x = touch.pageX
      end.y = touch.pageY

      let dist = end.y - start.y
      if (options.direction == 'horizontal') {
        dist = end.x - start.x
      }

      prev = current

      if (dist > options.threshold) {
        current = current == 0 ? 0 : --current
        e.preventDefault()
      } else if (dist < -options.threshold) {
        current = current < count - 1 ? ++current : current
        e.preventDefault()
      }

      activate(current)
    },

    transitionEnd: function (e) {
      options.transitionEnd && options.transitionEnd.call(e, prev, current)
      e.preventDefault()
    }
  }

  function resize() {
    execFn(setup)
  }

  // bind events
  function bind() {
    container.addEventListener('touchstart', events.start)
    container.addEventListener('touchmove', events.move)
    container.addEventListener('touchend', events.end)
    container.addEventListener('transitionEnd', noop)
    container.addEventListener('webkitTransitionEnd', events.transitionEnd)
    container.addEventListener('resize', resize)
  }

  function unbind() {
    container.removeEventListener('touchstart', events.start)
    container.removeEventListener('touchmove', events.move)
    container.removeEventListener('touchend', events.end)
    container.removeEventListener('transitionEnd', noop)
    container.removeEventListener('webkitTransitionEnd', events.transitonEnd)
    container.removeEventListener('resize', resize)
  }

  window.addEventListener('resize', resize)

  setup()
  bind()


  // Publish APIs

  function noTransition() {
    let style = container.style
    style.webkitTransition =
    style.transition = 'none'
  }

  return {
    resize: setup,
    destroy: function () {
      unbind()
      window.removeEventListener('resize', resize)
    },

    next: function () {
      noTransition()
      current = current < count - 1 ? ++current : current
      activate(current)
    },

    prev: function () {
      noTransition()
      current = current == 0 ? 0 : --current
      activate(current)
    },

    go: function (index) {
      noTransition()
      current = index
      activate(current)
    },

    count: count,

    activeIndex: function () {
      return current;
    }
  }
}
