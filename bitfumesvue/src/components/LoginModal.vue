<template>
  <section
    @click="closeModal"
    class="z-10 h-screen w-screen fixed top-0 opacity-60 bg-gray-700"
  ></section>
  <div class="absolute inset-0">
    <div class="flex h-full">
      <div class="z-20 m-auto bg-white p-4 shadow-md rounded w-1/3">
        <div class="p-2 border">
          <h1 class="text-center text-2xl font-semibold">Login</h1>
          <form class="p-2 my-1" @submit.prevent="submit">
            <div class="my-4">
              <label for="mail">Email or UserName</label>
              <input
                v-model="form.email"
                id="mail"
                class="rounded shadow p-2 w-full"
                placeholder="Enter Email or UserName"
                ref="emailAddress"
              />
            </div>
            <div class="my-2">
              <label for="password">Password</label>
              <input
                v-model="form.password"
                id="password"
                type="password"
                class="rounded shadow p-2 w-full"
                placeholder="Enter Password"
              />
            </div>
            <div class="my-2">
              <button
                type="submit"
                class="w-full shadow rounded text-white bg-gradient-to-r from-blue-700 to-green-500"
              >
                <span v-if="!isLoading">Login</span>
                <span v-else>Loading....</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "../utilities/firebase";
export default {
  data() {
    return {
      form: {
        email: "test@test.com",
        password: "pass123",
      },
      isLoading: false,
    };
  },
  methods: {
    submit() {
      this.isLoading = true;
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(() => {
          // Signed in
          this.isLoading = false;
          this.form = {};
          // this.form.email = "";
          // this.form.password = "";
          this.closeModal();
          // ...
        })
        .catch((error) => {
          console.log(`error!!!: ${error}`);
          this.isLoading = false;
        });
    },
    closeModal() {
      this.$emit("close-login-modal");
    },
  },
  mounted(){
      this.$refs.emailAddress.focus();
  }
};
</script>

<style>
</style>