import Pro1 from '../components/projects/pro1/Index.vue'
import Pro2 from '../components/projects/pro2/Index.vue'
import Pro3 from '../components/projects/pro3/Index.vue'

const routes = [
    { path: '/', redirect: { name: '/pro1' } },
    { path: '/pro1', component: Pro1 },
    { path: '/pro2', component: Pro2 },
    { path: '/pro3', component: Pro3 },
]

export default routes;