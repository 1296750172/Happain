<script setup>

const props =  defineProps({
  doneList: Array
})

</script>

<template>
  <div class="footer">
    <el-card shadow="always" :body-style="{ padding: '20px' }">
      <p>统计完成: <span>{{doneList.length}}</span> </p>
      <div class="done">
        <el-tag type="success" v-for="(item,index) in doneList" :key="index">{{item}}</el-tag>
      </div>
    </el-card>
  </div>
</template>

<style scoped lang="less">
.footer {

}
.done {

}
</style>
