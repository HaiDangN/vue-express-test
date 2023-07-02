import Vue from 'vue';
import Router from 'vue-router';

// Import your components for each route
import Home from './components/TheWelcome.vue';
import Register from './components/Register.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
});