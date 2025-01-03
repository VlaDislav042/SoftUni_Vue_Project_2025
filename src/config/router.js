import { createRouter, createWebHashHistory } from 'vue-router';
import About from '../pages/About.vue';
import Cart from '../pages/Cart/Cart.vue';
import Contacts from '../pages/Contacts.vue';
import Favorites from '../pages/Favorites.vue';
import Home from '../pages/Home.vue';
import Login from '../pages/Login.vue';
import NotFound from '../pages/NotFound.vue';
import SingleProducts from '../pages/Product/components/SingleProducts.vue';
import Products from '../pages/Products.vue';
import Register from '../pages/Register/Register.vue';
import User from '../pages/User.vue';
import { useUserStore } from '../stores/useUserStore';

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/about', name: 'about', component: About },
  { path: '/contacts', name: 'contacts', component: Contacts },
  {
    path: '/user',
    name: 'user',
    component: User,
    beforeEnter: async () => {
      const store = useUserStore();
      if (!store.user) {
        const isLogged = await store.reAuthUser();
        if (!isLogged) {
          return { name: 'login' };
        }
      }
    },
  },

  {
    path: '/cart',
    name: 'cart',
    component: Cart,
    beforeEnter: async () => {
      const store = useUserStore();
      if (!store.user) {
        const isLogged = await store.reAuthUser();
        if (!isLogged) {
          return { name: 'login' };
        }
      }
    },
  },
  { path: '/products/:id', name: 'singleProduct', component: SingleProducts },
  {
    path: '/products',
    name: 'recipes',
    component: Products,
    beforeEnter: async () => {
      const store = useUserStore();
      if (!store.user) {
        const isLogged = await store.reAuthUser();
        if (!isLogged) {
          return { name: 'login' };
        }
      }
    },
  },

  {
    path: '/register',
    name: 'register',
    component: Register,
    beforeEnter: async () => {
      const store = useUserStore();
      if (store.user) {
        return false;
      }

      const isLogged = await store.reAuthUser();
      if (isLogged) {
        return false;
      }
    },
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    beforeEnter: async () => {
      const store = useUserStore();
      if (store.user) {
        return false;
      }

      const isLogged = await store.reAuthUser();
      if (isLogged) {
        return false;
      }
    },
  },
  {
    path: '/favorites',
    name: 'liked',
    component: Favorites,
    beforeEnter: async () => {
      const store = useUserStore();
      if (!store.user) {
        const isLogged = await store.reAuthUser();
        if (!isLogged) {
          return { name: 'login' };
        }
      }
    },
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },

];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
