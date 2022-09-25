import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/LoginView.vue';
import CustomerInfoView from '../views/CustomerInfoView.vue';

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/customer-info',
    name: 'CustomerInfo',
    component: CustomerInfoView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
// eslint-disable-next-line no-unused-vars
router.beforeEach(async (to, from) => {
  if (!localStorage.getItem('authToken') && to.name !== 'login') {
    return { name: 'login' };
  }
});
export default router;
