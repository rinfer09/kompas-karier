import { createRouter, createWebHistory } from 'vue-router';
import DetailLowongan from '../pages/DetailLowongan';
import DaftarLowongan from '../pages/DaftarLowongan';
import Home from '../pages/Home';

const routes = [
	{
		path: '/detaillowongan/:id',
		name: 'detaillowongan',
		component: DetailLowongan,
	},
	{
		path: '/daftarlowongan',
		name: 'daftarlowongan',
		component: DaftarLowongan,
	},
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
