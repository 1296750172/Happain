function man (name, age) { 
  this.name = name
  this.age = age
}

// 手写构造函数
function newInstance (fn, ...args) {
  const obj = {} 
  // 将this绑定新对象
  const res = fn.call(obj,...args)
  // 改变原型链
  obj.__proto__ = fn.prototype
  // 返回新对象
  return obj instanceof Object ? res : obj
}

let obj = newInstance(man,12,33)

function proson () { 
  
}

// 手写判断对象
function myinstance (obj ,obj1) { 
  // 获取对象的原型
  let pro = obj1.prototype
  // 获取隐藏原型对象
  let pro1 = obj.__proto__
  // 如果存在原型链
  while(pro1) {
    if(pro1 === pro ) {
      return true
    }
    pro1 = pro1.__proto__
  }
  return false


}

// 合并对象
function merger (...args) {
  let result = {}
  args.forEach((obj) => {
    for (const item in obj) {
      if (result.hasOwnProperty(item)){
          result[item] = [].concat(obj[item],result[item])
      } else {
        result[item] = obj[item]
      }
     
    }
  })
  return result
}


// 浅拷贝 对于对象里面的对象只是地址引用
function clone1 (target) { 
  let result = null
  // 判断是否是对象
  if (typeof target === 'object' &&  target != null) {
    // 判断是否是数组
    if (Array.isArray(target)){
      // 新的对象数组
      result = [...target]
    } else {
      result = {...target}
    }
    
  } else {
    return result
  }
}

// 使用json实现深拷贝  无法解决循环引用和函数拷贝
function jsonDeepCopy (target) { 
  // 转为字符串
  let jsonstr = JSON.stringify(target)
  // 转为对象
  return JSON.parse(jsonstr)
}


// 面试班拷贝
function deepcopy (target) { 
  if (typeof target === 'object' && target !=null) {
    let result = Array.isArray(target)? []: {}
    for (const item in target) {
      // 判断是否是本身自己的原型属性 不拷贝
      if(target.hasOwnProperty(item)){
          result[item] = deepcopy(target[item])
      }
    }
    return result
  } else {
    return target
  }
}

