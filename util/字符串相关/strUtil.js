// 反转字符串
function reversestr (str) { 
  let arr = [...str]
  return arr.reverse().join('')

}

// 回文字符串 判断是否相等
function huiwen (str) { 
  return reversestr(str) === str
}

