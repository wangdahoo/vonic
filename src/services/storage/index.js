import stub from './stub'
import tracking from './tracking'

let global = window

function isStorageSupported(localStorage) {
  let supported = localStorage

  // When Safari (OS X or iOS) is in private browsing mode, it appears as though localStorage
  // is available, but trying to call .setItem throws an exception below:
  // "QUOTA_EXCEEDED_ERR: DOM Exception 22: An attempt was made to add something to storage that exceeded the quota."
  if (supported) {
    let key = '__' + Math.round(Math.random() * 1e7)

    try {
      localStorage.setItem(key, key)
      localStorage.removeItem(key)
    }
    catch (err) {
      supported = false
    }
  }

  return supported
}

let ls = 'localStorage' in global && global.localStorage ? global.localStorage : stub

let se = document.createEvent("StorageEvent")

function dispatch(key, value) {
  se.initStorageEvent('storage', false, false, key, ls.getItem(key) || null, JSON.stringify(value) || null, '', '')
  global.dispatchEvent(se);
}

if (!isStorageSupported(ls)) {
  ls = stub
}

function Accessor(key, value) {
  if (arguments.length === 1) {
    return get(key)
  }
  return set(key, value)
}

function get(key) {
  try {
    return JSON.parse(ls.getItem(key))
  } catch(e) {
    return ls.getItem(key)
  }
}

function set(key, value) {
  try {
    dispatch(key, value)
    ls.setItem(key, JSON.stringify(value))
    return true
  } catch (e) {
    return false
  }
}

function remove(key) {
  dispatch(key, undefined)
  return ls.removeItem(key)
}

function clear() {
  return ls.clear()
}

Accessor.set = set
Accessor.get = get
Accessor.remove = remove
Accessor.clear = clear
Accessor.on = tracking.on
Accessor.off = tracking.off

window.$storage = Accessor
