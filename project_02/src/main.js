// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
import store from './store.js'
/* eslint-disable no-new */
new Vue({
	store,
  el: '#app',
  components: { App },
  template: '<App/>'
})
