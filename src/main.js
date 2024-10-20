import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

import { initializeApp, getApps} from "firebase/app";


const app = createApp(App)
app.use(PrimeVue, { theme: { preset: Aura } })
app.use(router)

app.mount('#app')

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeOOvu_Qxf3DxIhiQHWJCox2-xIA4GKvU",
  authDomain: "week7-jiantao.firebaseapp.com",
  projectId: "week7-jiantao",
  storageBucket: "week7-jiantao.appspot.com",
  messagingSenderId: "769720477247",
  appId: "1:769720477247:web:892ab9ccbf82310d333a8a"
  };

// Initialize Firebase
if (!getApps().length) {
    initializeApp(firebaseConfig);
}

