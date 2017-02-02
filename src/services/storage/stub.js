let ms = {};

export default {
  getItem(key) {
    return key in ms ? ms[key] : null
  },

  setItem(key, value) {
    ms[key] = value
    return true
  },

  removeItem(key) {
    let found = key in ms;
    if (found) {
      return delete ms[key]
    }
    return false
  },

  clear() {
    ms = {}
    return true
  }
}
