import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
	{
		path: '/',
		name: 'About',
		component: () => import(/* webpackChunkName: "about" */ '../views/Index/index.vue')
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router
