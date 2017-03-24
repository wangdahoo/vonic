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

export const _body = {
  freeze: () => {
    document.addEventListener('touchmove', preventDefault)
  },
  unfreeze: () => {
    document.removeEventListener('touchmove', preventDefault)
  }
}
