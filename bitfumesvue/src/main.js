import {createApp} from 'vue'
import App from './App.vue'
import "tailwindcss/tailwind.css"
import router from './routes/router'
import store from "./store/index";

const app = createApp(App);


app.use(router);
app.use(store);
app.mount('#app')
