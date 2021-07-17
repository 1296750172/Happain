// call 后面是参数  apply 是数组  bind 是返回一个新函数
// 将fn函数内的指针 转为对象obj的指针

function call (fn, obj, ...args) { 
  // 如果对象是为空 则指向全局对象
  if( obj === null || obj === undefined) {
    obj = gloabalThis
  }
  // 为obj添加临时方法
  obj.temp = fn
  let result = obj.temp(...args)
  delete obj.temp
  return result
}

function apply (fn, obj, args) { 
  // 如果对象是为空 则指向全局对象
  if( obj === null || obj === undefined) {
    obj = gloabalThis
  }
  // 为obj添加临时方法
  obj.temp = fn
  // args 是个数组 通过解构传给方法
  let result = obj.temp(...args)
  delete obj.temp
  return result
}

// bind 返回一个可以执行的函数 且 还是可以传参
function bind (fn, obj, ...args) {
  return function(...args1) {
    call(fn,obj,...args,args1)
  }
}


// 节流函数 在一定一时间内只能运行一次 运行的是第一次的
// 防抖函数 等于每次更新最后一次运行的函数 运行最后一次的
function throttle (fn, time) { 
  let start = 0
  return  (e) =>  {
    let now = Date.now()
    // 刚开始如果是大于间隔时间 则执行函数
    if (now - start >= time) {
      // this在事件函数中是指向事件源的  所以这部填写this即可 
      fn.call(this, e)
      start = now
    }
  }
}

function debounce(fn, time) {
  // e 相当于事件对象
  let timer = null
  return (e) => {
    if (timer != null) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      // 将事件对象作为函数的this
      fn.call(this, e)
      timer = null
    }, time);
}
  


}