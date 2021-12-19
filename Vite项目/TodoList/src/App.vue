<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Main from '@/components/Main.vue'
import {reactive} from 'vue'

const doneList = reactive([])


const done = (data) => {
  doneList.push(data.title)
}

</script>

<template>
  <div id="app">
    <el-container :direction="vertical">
      <el-header height="60px">
        <Header title="TodoList"></Header>
      </el-header>
      <el-main>
        <Main @changeDone="done"></Main>
      </el-main>
      <el-footer height="60px">
        <Footer :doneList="doneList"></Footer>
      </el-footer>
    </el-container>
  </div>
</template>

<style>
#app {
  margin: 0;
  padding: 0;
}
</style>
