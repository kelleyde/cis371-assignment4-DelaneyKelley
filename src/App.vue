<template>
  <div>
    <Beverage :isIced="currentTemp === 'Cold'" :baseColor="currentBase.color"
      :creamerColor="currentCreamer.color" :syrupColor="currentSyrup.color"
    />
    <ul>
      <li>
        <template v-for="temp in temps" :key="temp">
          <label>
            <input
              type="radio"
              name="temperature"
              :id="`r${temp}`"
              :value="temp"
              v-model="currentTemp"
            />
            {{ temp }}
          </label>
        </template>
      </li>
    </ul>
    <ul>
      <li>
        <template v-for="base in bases" :key="base.id">
          <label>
            <input
              type="radio"
              name="base.name"
              :id="`r${base}`"
              :value="base"
              v-model="currentBase"
            />
            {{ base.name }}
          </label>
        </template>
      </li>
    </ul>
    <ul>
      <li>
        <template v-for="syrup in syrups" :key="syrup.id">
          <label>
            <input
              type="radio"
              name="syrup.name"
              :id="`r${syrup}`"
              :value="syrup"
              v-model="currentSyrup"
            />
            {{ syrup.name }}
          </label>
        </template>
      </li>
    </ul>
    <ul>
      <li>
        <template v-for="creamer in creamers" :key="creamer.id">
          <label>
            <input
              type="radio"
              name="creamer.name"
              :id="`r${creamer}`"
              :value="creamer"
              v-model="currentCreamer"
            />
            {{ creamer.name }}
          </label>
        </template>
      </li>
    </ul>
    <input type="text" v-model="bevName" placeholder="Beverage Name"/>
    <button @click="makeBeverage()">🍺 Make Beverage</button>
    
  </div>
  <div id="beverage-container" style="margin-top: 20px">
    <template v-for="bev in userBev" :key="bev.id">
      <label>
        <input
          type="radio"
          name="beverages"
          :id="`r${bev}`"
          :value="bev"
          v-model="currentBev"
          @change="showBeverage()"
        />
        <!--start Ai code @change end Ai code-->
        {{ bev.name }}
      </label>
    </template>
  </div>
</template>

<script setup lang="ts">
import Beverage from "./components/Beverage.vue";
import { useBeverageStore } from "./stores/beverageStore.ts"
import { storeToRefs } from "pinia"

const bevStore = useBeverageStore();
const { currentBase } = storeToRefs(bevStore);
const { currentCreamer } = storeToRefs(bevStore);
const { currentSyrup } = storeToRefs(bevStore);
const { currentTemp } = storeToRefs(bevStore);

const { bases } = bevStore;
const { creamers } = bevStore;
const { syrups } = bevStore;
const { temps } = bevStore;

const { bevName } = storeToRefs(bevStore);
const { userBev } = storeToRefs(bevStore);
const { makeBeverage } = bevStore;
const { showBeverage } = bevStore;
const { currentBev } = storeToRefs(bevStore);

</script>

<style lang="scss">
body,
html {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #6e4228;
  background: linear-gradient(to bottom, #6e4228 0%, #956f5a 100%);
}
ul {
  list-style: none;
}
</style>
