<template>
<Header @open-login-modal="isLoginOpen = true" />
<div class="w-full flex">
  <router-view></router-view>
  </div>

  <LoginModal v-if="isLoginOpen" @close-login-modal="isLoginOpen = false" />

</template>

<script>

import Header from './components/AppHeader';
import LoginModal from './components/LoginModal';
import firebase from './utilities/firebase'

export default {
  data(){
        return{
            isLoginOpen: false,
            isLoggedIn: false,
            authUser: {},
        }
    },
  components: {
    Header,
    LoginModal,   
  },
  mounted(){
    firebase.auth().onAuthStateChanged((user)=> {
    if (user) {
      this.isLoggedIn = true;
      this.authUser = user;
    // User is signed in.
    } else {
      this.isLoggedIn = false;
      this.authUser = {};
    // No user is signed in.
   }
  });
},




   

}
</script>

FavSongs