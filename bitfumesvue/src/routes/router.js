import { createRouter, createWebHistory } from 'vue-router';

import Home from '../pages/Home';
import FavSongs from '../pages/FavSongs';
import Calendar from '../pages/Calendar';
import Markdown from '../pages/Markdown';
import Slider from '../pages/Slider';
import Calculator from '../pages/Calculator';
import ReusableModals from '../pages/ReusableModals';
import Chat from '../pages/Chat';
import UserCRUD from '../pages/UserCRUD';
import Tensorflow from '../pages/Tensorflow';

import store from '../store/index';

const routes = [
  { path: '/', component: Home },
  { path: '/play-list', component: FavSongs },
  { path: '/calendar', component: Calendar },
  { path: '/markdown', component: Markdown },
  { path: '/slider', component: Slider },
  { path: '/calculator', component: Calculator },
  { path: '/reusableModals', component: ReusableModals },
  { path: '/chatting', component: Chat, 
  meta: {middleware: 'auth'}, },
  { path: '/user-crud', component: UserCRUD },
  { path: '/tensorflow', component: Tensorflow },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to,_,next)=>{
    if(to.meta.middleware){
        const middleware = require(`../middleware/${to.meta.middleware}`)
        if(middleware){
            middleware.default(next, store);
        }else{
            next();
        }
    }else{
        next();
    }


})


export default router;
