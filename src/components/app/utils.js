export const timeout = (result = undefined, duration = 0) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => { resolve(result) }, duration);
  })
}

export const is_ios_device = () => {
  return /iPad|iPhone|iPod/.test(navigator.userAgent)
}
