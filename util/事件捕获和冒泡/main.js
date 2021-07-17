// 事件委托 
function myaddEventlistent (el,type,fn,children) {
  // 如果是字符串
  if(typeof el === 'string') {
    el = document.querySelector(el)
  }

  // 如果子元素为空 绑定自身
  if(children == null) {
    el.addEventListener(type, fn)
  } else {
    // 绑定子元素
    el.addEventListener(type,function (e) { 
      // 获取点击事件源
      let target = e.target
      // 如果点击对象是子元素
      if(target.matches(children)) {
        // 调用回调
        fn.call(target,e)
      }
    })
  }
  
}