<template>
  <div class="baseBeverage" :style="bgColor"></div>
</template>

<script setup lang="ts">
import { computed } from "vue"

// source: https://vuejs.org/guide/components/props.html, https://www.youtube.com/watch?v=D0BxnIDo-FU
const props = defineProps({baseColor: {type: String}});

// source: https://www.telerik.com/blogs/passing-variables-to-css-on-a-vue-component
const bgColor = computed( () => {
  console.log(props.baseColor)
  if(!props.baseColor){
    return false;
  }
  return{
    "background-color": props.baseColor
  }
})


</script>

<style scoped>
.baseBeverage {
  position: relative;
  width: 100%;
  height: 300%;
  bottom: 0;
  animation: pour-tea 2s;
  z-index: 300;
  background-color: red;
  /* border-radius: 0.05em 0.05em 2.2em 2.2em; */
}
</style>
