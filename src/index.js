import Vue from "vue";
import main from "./components/main.vue";

new Vue({
  render: c => c(main)
}).$mount(".root");
