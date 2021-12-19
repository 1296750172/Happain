<script setup>
  
const props = defineProps({
  item: {
   type: Object,
   required: true
  },
  id: {
    type: Number,
    required: true
  }
})

const emit = defineEmits(['checkItem'])

const check = (id,type) => {
  emit('checkItem',id,type)
}


</script>

<template>
  <div class="left"> 
    <el-checkbox v-model="item.isComplete" :label="item.title"></el-checkbox>
  </div>
  <div class="right">
     <el-button type="danger" size="mini" @click="check(id,'del')">删除</el-button>
     <el-button type="success" size="mini" @click="check(id,'done')">完成</el-button>
  </div>
</template>

<style scoped lang="less">
.left {

}
.right {

}
</style>
