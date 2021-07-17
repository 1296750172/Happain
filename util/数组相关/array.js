let a = [1,2,34]

let c = null
// 遍历数组每个元素执行函数  返回新的数组
c = a.map((item,index)=>{
  return item+index
})


c= a.reduce((save, item, index)=>{
  return save + item+ index
})


c= a.filter((item, index)=> {
  return item % 2 === 1
})


c=a.find((item)=>{
  return item%2==0
})

