const is_ios_device = () => {
  return /iPad|iPhone|iPod/.test(navigator.userAgent)
}

export default {
  is_ios_device: is_ios_device
}
