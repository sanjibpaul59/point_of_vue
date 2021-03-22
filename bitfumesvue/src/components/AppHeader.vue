<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <nav class="bg-green-600 pb-2 md:container">
    <div class="max-w-7xl mx-aupx-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div
          class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
              <router-link
                v-for="page in pageList"
                :key="page.title"
                :to="page.to"
                class="text-gray-900 hover:bg-gray-700 hover:text-white p-2 rounded-md text-lg font-semibold"
              >
                {{ page.title }}
              </router-link>

              <button
                v-if="isLoggedIn"
                class="text-gray-900 hover:bg-gray-700 hover:text-white p-2 rounded-md text-lg font-semibold focus:outline-none"
                @click="logout"
              >
                Logout
              </button>

              <button
                v-else
                class="text-gray-900 hover:bg-gray-700 hover:text-white p-2 rounded-md text-lg font-semibold focus:outline-none"
                @click="$emit('open-login-modal')"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import firebase from '../utilities/firebase';
export default {
  props: {
    isLoggedIn: Boolean,
  },
  data: () => ({
    pageList: [
      {
        title: 'Favourite Songs',
        to: '/play-list',
      },
      {
        title: 'Calendar',
        to: '/calendar',
      },
      {
        title: 'Markdown',
        to: '/markdown',
      },
      {
        title: 'Slider',
        to: '/slider',
      },
      {
        title:'Calculator',
        to:"/calculator"
      },
      // {
      //   title:'Modals',
      //   to:"/modals"
      // },
      // {
      //   title:'Chat',
      //   to:"/chat"
      // },
      // {
      //   title:'CRUD',
      //   to:"/user-crud"
      // },
      // {
      //   title:'Tensorflow',
      //   to:"/tensorflow"
      // },
    ],
  }),
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          // Sign-out successful.
        })
        .catch((error) => {
          // An error happened.
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
