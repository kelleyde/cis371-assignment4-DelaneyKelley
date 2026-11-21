<template>
  <Mug>
    <Cold v-if="isIced" />
    <Hot v-else />
    <Contents>
      <template v-slot:top>
        <Creamer v-if="creamerColor!='transparent'" :creamerColor="creamerColor" />
      </template>
      <template v-slot:mid>
        <Syrup v-if="syrupColor!='#c6c6c6'" :syrupColor="syrupColor" />
      </template>
      <template v-slot:bottom>
        <Base :baseColor="baseColor" />
      </template>
    </Contents>
  </Mug>
</template>
<script setup lang="ts">
import Contents from "./Contents.vue";
import Mug from "./Mug.vue";
import Syrup from "./Syrup.vue";
import Base from "./Base.vue";
import Creamer from "./Creamer.vue";
import Hot from "./Hot.vue";
import Cold from "./Cold.vue";

// Ai suggested Prop Drilling to pass input from App to Beverage to other components
defineProps({baseColor: String, isIced: Boolean, creamerColor: String, syrupColor: String})


</script>
