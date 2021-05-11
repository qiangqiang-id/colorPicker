import colorPicker from "./colorPicker.vue";
import Vue from "vue";

export default {
  install() {
    Vue.component(colorPicker.name, colorPicker);
  },
};
