<script setup>
import {ref,reactive,getCurrentInstance} from 'vue'
import { ElMessage } from 'element-plus'
import List from '@/components/List.vue'


const listItem = reactive([])
const name = ref("")

const add  = () => {
  if(name.value.trim() === '') {
    ElMessage.error({
      message: "输入不能为空"
    })
    return 
  }
  listItem.push({
    title: name.value,
    isComplete: false
  })
  ElMessage.success({
    message: "添加成功"
  })
}

const emit = defineEmits(['changeDone'])


const checkItem = (id,type) => {
  let sel = listItem.find((item,index) => {
      if(index == id) {
        return item
      }
  })
  if(type === 'del') {
    listItem.splice(id)
    ElMessage.success({
      message: "删除成功"
    })
  }
  if(type === 'done') {
    listItem.splice(id)
    ElMessage.success({
      message: "任务完成"
    })
    emit('changeDone',sel)
  }
}

</script>

<template>
  <div id="main">
    <div class="input">
      <el-input v-model="name" placeholder="请输入任务" size="small" clearable ></el-input>
    </div>


    <div class="btn">
      <el-button type="primary" size="small" @click="add" >添加</el-button>
    </div>
  </div>

  <div class="list">
    <el-card shadow="always" :body-style="{ padding: '20px' }">
      <List v-for="(item,index) in listItem" :key="index" :id="index" :item="item" @checkItem="checkItem"></List>
    </el-card>
  </div>  
</template>

<style scoped lang="less">
#main {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  .input {
    padding-right: 20px;
    flex-grow: 10; 
  }
  .btn {
    padding-left: 20px;
    flex-grow: 1;
  }
}
.list {
  padding: 20px 0;
}
</style>
