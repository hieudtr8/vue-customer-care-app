import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/LoginView.vue';
import CustomerInfoView from '../views/CustomerInfoView.vue';
import EditView from '../views/EditView.vue';
import InboxView from '../views/InboxView.vue';
import StatisticView from '../views/StatisticView.vue';

const routes = [
  {
    path: '/',
    redirect: '/customer-info',
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
  {
    path: '/edit',
    name: 'Edit',
    component: EditView,
  },
  {
    path: '/inbox',
    name: 'Inbox',
    component: InboxView,
  },

  {
    path: '/statistic',
    name: 'Statistic',
    component: StatisticView,
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
