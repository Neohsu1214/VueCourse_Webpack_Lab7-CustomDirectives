import Vue from 'vue'
import App from './App.vue'

// 建立『客製化』的 v-提示，此例建立的是 v-highlight
Vue.directive('highlight', {
  // v-directive有五個lifecycle hook: bind, inserted, update, componentUpdated, unbind
  /**
   * Directive hook 1: bind
   * @param {*} el element
   * @param {*} binding binding就是 v-directive="這裡所給予的值叫做binding"
   * @param {*} vnode virtual node
   */
  bind: function(el, binding, vnode) { // 也可寫成 bind() {}，以下同理
    // 將 backgroundColor 固定設為 green
    // el.style.backgroundColor = 'green';

    // 以下說明如何透過 v-directive="binding" 來帶入值
    el.style.backgroundColor = binding.value;
  }
});


new Vue({
  el: '#app',
  render: h => h(App)
})
