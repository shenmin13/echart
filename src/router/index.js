import VueRouter from 'vue-router'
import Vue from 'vue'
import routes from './router'

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "hash",
  routes,
})

export default router;