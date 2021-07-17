const eventbus = {
  callbackmap = {

  }
}

eventbus.on = (name, callback) => {
  if(callback[name]) {
    callbackmap[name].push(callback)
  } else {
    callbackmap[name] = [callback]
  }
}

eventbus.emit = (name,...args)=> {
  if(name) {
    if(callbackmap[name] && callbackmap[name].length != 0) {
      callbackmap[name].forEach(ele => {
        ele(...args)
      })
    }
  }
}

eventbus.off = (name) => {
  if(name) {
    callbackmap[name] = {}
  } else {
    callbackmap = {}
  }
}
