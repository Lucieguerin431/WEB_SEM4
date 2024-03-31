import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router' // Importez les fonctions de cette manière

import HomePage from './pages/HomePage.vue'
import FullPhoto from './components/FullPhoto.vue'

const routes = [
    { path: '/', component: HomePage },
    { path: '/photo/:id', name:'FullPhoto', component: FullPhoto, props:true }
]

// Utilisez createRouter pour créer le routeur
const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App)

// Utilisez le routeur créé
app.use(router)

// Montez l'application
app.mount('#app')

