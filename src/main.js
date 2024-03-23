import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router' // Importez les fonctions de cette manière

import Search from './components/Search.vue'
import PhotoCard from './components/PhotoCard.vue'

const routes = [
    { path: '/', component: Search },
    { path: '/pagePhoto', component: PhotoCard }
]

// Utilisez createRouter pour créer le routeur
const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App)

// Utilisez le routeur créé
//app.use(router)

// Montez l'application
app.mount('#app')

