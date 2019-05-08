// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.config.productionTip = false
Vue.use(MintUI) // 注册全局组件，给Vue。prototype挂载对象
/* eslint-disable no-new */
import MyUl from './components/common/MyUL'
Vue.component(MyUl.name,MyUl)
import MyLi from './components/common/MyLi'
Vue.component(MyLi.name, MyLi)

import Axios from 'axios'
Vue.prototype.$axios = Axios
Axios.defaults.baseURL = 'http://localhost:4000'

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
