import { defineStore } from "pinia";
import tempretures from "../data/tempretures.json";
import bases from "../data/bases.json";
import creamers from "../data/creamers.json";
import syrups from "../data/syrups.json";
import { BeverageType} from "../types/beverage"

// let userBev = new Map<Number, BeverageType>();
let userBev: BeverageType[] = [];
let bevName: string = ""; 
let count: number = 0;

export const useBeverageStore = defineStore("BeverageStore", {
  state: () => ({
    temps: tempretures,
    currentTemp: tempretures[0],
    bases: bases,
    currentBase: bases[0],
    creamers: creamers,
    currentCreamer: creamers[0],
    syrups: syrups,
    currentSyrup: syrups[0],
    bevName: bevName,
    userBev: userBev,
    countBev: count,
    currentBev: userBev[0]
  }),

  actions: {
    makeBeverage() {
      this.countBev += 1;
      const recipe: BeverageType = {
        id: "bev" + this.countBev,
        name: this.bevName,
        temp: this.currentTemp,
        base: this.currentBase,
        syrup: this.currentSyrup,
        creamer: this.currentCreamer
      }
      // console.log(recipe);
      this.userBev.push(recipe);
      // for(const bev of this.userBev){console.log("user bev list: " + bev.name)}
    },
    showBeverage() {
      // console.log("show bev: " + this.currentBev)
      this.currentBase = this.currentBev.base;
      this.currentTemp = this.currentBev.temp;
      this.currentSyrup = this.currentBev.syrup;
      this.currentCreamer = this.currentBev.creamer;
    },
  },
  persist: true,
});
