<template>
  <div class="syrup" :style="bgColor"></div>
</template>

<script setup lang="ts">

import { computed } from "vue"

// source: https://vuejs.org/guide/components/props.html, https://www.youtube.com/watch?v=D0BxnIDo-FU
const props = defineProps({syrupColor: {type: String}});

// source: https://www.telerik.com/blogs/passing-variables-to-css-on-a-vue-component
const bgColor = computed( () => {
  console.log(props.syrupColor)
  if(!props.syrupColor){
    return false;
  }
  return props.syrupColor
})


</script>

<style lang="scss" scoped>
.syrup {
  transform: translateY(400%);
  background-color: #c6c6c6;
  position: relative;
  width: 100%;
  height: 20%;
  animation: pour-tea 2s 1s forwards;
  z-index: 2;
  background: repeating-linear-gradient(45deg,
            v-bind(bgColor),
            v-bind(bgColor) 10px,
            rgba(225, 207, 149, 1) 10px,
            rgba(225, 207, 149, 1) 20px);
}
</style>
