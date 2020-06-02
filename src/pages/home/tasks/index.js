import './index.sass';
import Vue from "vue";
import TasksVue from './index.vue'

export default () => {
  new Vue({
    el: '#vue-tasks',
    render: createElem => createElem(TasksVue),
  });
}
