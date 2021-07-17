// 手写map

function map(arr, callback) {
  let result = []
  for (const item in arr) {
    result.push(callback(arr[item],item))
  }
  return result
}

// 手写reduce
function reduce(arr, callback, init) {
  let result = init
  
  for (const item in arr) {
    result = callback(result,parseInt(arr[item]),parseInt(item))
  }
  return result
}


// 手写filter
function filter(arr, callback) {
  let arrn = []
  for (const item in arr) {
    if(callback(arr[item]))
      arrn.push(arr[item])
  }
  return arrn
}

// 手写find
function find(arr,callback) {
  for (const item in arr) {
      if(callback(arr[item]))
        return arr[item]
  }
  return undefined
}

// 手写findindex
function findindex(arr, callback) {
  for (const item in arr) {
    if(callback(arr[item]))
        return item
  }
  return -1
}

// 手写数组差集 返回新数组对象
function diffentarr(arr1, arr2) {
  if(arr1.length === 0) {
    return []
  }
  if(arr2.length === 0) {
    return arr1.slice()
  }
  return arr1.filter((ele) => {
    return !arr2.includes(ele)
  })
}
// 手写删除



