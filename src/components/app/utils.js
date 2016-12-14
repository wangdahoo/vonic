const is_ios_device = () => {
  return /iPad|iPhone|iPod/.test(navigator.userAgent)
}

const createElement = (marker, tag) => {
  let el = document.createElement(tag || 'div')
  el.setAttribute(marker, '')
  document.body.appendChild(el)
}

export default {
  is_ios_device: is_ios_device,
  createElement: createElement
}
