export const timeout = (result = undefined, duration = 0) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => { resolve(result) }, duration);
  })
}

export const is_ios_device = () => {
  return /iPad|iPhone|iPod/.test(navigator.userAgent)
}

function preventDefault (e) {
  e.preventDefault()
}

let frozon = false
export const _body = {
  freeze: () => {
    if (frozon) return
    console.log('freeze body')
    document.body.addEventListener('touchstart', preventDefault)
    document.body.addEventListener('touchend', preventDefault)
    frozon = true
  },
  unfreeze: () => {
    if (!frozon) return
    console.log('unfreeze body')
    document.body.removeEventListener('touchstart', preventDefault)
    document.body.removeEventListener('touchend', preventDefault)
    frozon = false
  }
}

export const page_in_transition = () => {
  let pageSelector = '.page-enter,.page-enter-active,.page-enter-to,.page-leave,.page-leave-active,.page-leave-to'
  return document.querySelectorAll(pageSelector).length > 0
}
