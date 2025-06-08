import { createRouter, createWebHashHistory } from 'vue-router';
import Login from '../views/LoginView.vue';
import Profile from '../views/ProfileView.vue';
import Showcase from '../views/ShowcaseView.vue';
import Contact from '../views/ContactView.vue';
import Creative from '../views/CreativeView.vue';

let isAuthenticated = false;

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/portfolio/profile', component: Profile, meta: { requiresAuth: true } },
  { path: '/portfolio/showcase', component: Showcase, meta: { requiresAuth: true } },
  { path: '/portfolio/contact', component: Contact, meta: { requiresAuth: true } },
  { path: '/portfolio/creative', component: Creative, meta: { requiresAuth: true } },
  { path: '/:pathMatch(.*)*', redirect: '/login' }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    isAuthenticated = false;
    next();
  } else if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});

export function setAuthenticated(val) {
  isAuthenticated = val;
}

export default router;
