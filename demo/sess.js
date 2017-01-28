export default {
  get (name) {
    let value = sessionStorage.getItem(name)
    if (/^\{.*\}$/.test(value)) value = JSON.parse(value)
    return value
  },
  set (name, value) {
    if (typeof value === typeof {}) value = JSON.stringify(value)
    return sessionStorage.setItem(name, value)
  },
  remove (name) {
    return sessionStorage.removeItem(name)
  }
}
