<script setup>
const prop = defineProps({
  title: {
    type: String,
    required: true,
    default: "TodoList"
  }
})
</script>

<template>
  <div id="header">
    <p>{{prop.title}}</p>
  </div>
</template>

<style scoped>
#header {
  display:flex;
  justify-content:center;
  align-items:center;
  text-align:center;
  font-size: 15px;
  font-weight: bolder;
  letter-spacing:2px;
  height:100%;
  width: 100%;
}
</style>
