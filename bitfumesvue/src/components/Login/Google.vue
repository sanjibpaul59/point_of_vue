<template>
            <section class="p-2 my-3 text-center">
            <button class="border shadow-sm" @click="loginWithGoogle">
              Login with Google
            </button>
          </section>
</template>

<script>
import firebase from '../../utilities/firebase'
export default {
    methods: {
            loginWithGoogle() {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider).then(()=>{
          this.$emit("close-google-login");
        });
    },
    }

}
</script>

<style>

</style>