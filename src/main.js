import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
//theme
import "primevue/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primevue/resources/primevue.min.css";
import 'primeicons/primeicons.css';
import "primeflex/primeflex.css";

import Home from '@/views/Home';
import AboutUs from '@/views/AboutUs';
import ContactUs from '@/views/ContactUs';
import signIn from '@/views/sign-in';
import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: AboutUs },
    { path: '/contact', component: ContactUs },
    { path: '/signIn', component: signIn },
  ]

  const router = createRouter({
    history: createWebHashHistory(),
    routes,
  })

const app = createApp(App);
app.use(PrimeVue);
app.use(router)
app.mount('#app');  