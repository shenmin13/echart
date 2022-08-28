import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router/index'
import * as echarts from 'echarts';
import 'cesium/Widgets/widgets.css'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(echarts);

Vue.prototype.$echarts = echarts;
Vue.prototype.$fontSize = 12;
Vue.prototype.$style='dark';

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
