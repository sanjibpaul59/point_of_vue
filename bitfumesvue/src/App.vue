<template>
  <Header />
  <div class="w-full flex">
    <router-view></router-view>
  </div>

  <LoginModal  />
</template>

<script>
import Header from "./components/AppHeader";
import LoginModal from "./components/LoginModal";
import firebase from "./utilities/firebase";

export default {
  components: {
    Header,
    LoginModal,
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.commit("setIsLoggedIn", true);
        this.$store.commit("setAuthUser", user);
        // User is signed in.
      } else {
        this.$store.commit("setIsLoggedIn", false);
        this.$store.commit("setAuthUser", {});

        // No user is signed in.
      }
    });
  },
};
</script>
