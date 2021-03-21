<template>
  <div class="m-auto">
    <h1 class="text-center font-bold text-5xl p-4">{{ title }}</h1>
    <h3 class="text-center font-bold text-lg pb-3">
      Create playlist with your favourite songs
    </h3>
    <ul class="m-8">
      <li
        class="cursor-pointer p-2 focus:bg-current flex justify-between text-lg"
        v-for="song in favSongs"
        :key="song.name"
      >
        {{ song.name }} -- {{ song.artist }}
        &nbsp;
        <span
          ><button
            class="hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-900 focus:ring-opacity-25"
            @click="removeSong(song.name)"
          >
            &times;
          </button></span
        >
      </li>
    </ul>

    <form @submit.prevent="addSong" class="mt-2 p-3">
      <input
        ref="songName"
        class="focus:text-purple-900 focus:outline-none focus:ring-1 border rounded-md"
        placeholder="Add New Song"
        v-model="newSong.name"
      />
      &nbsp;
      <input
        class="focus:text-purple-900 focus:outline-none focus:ring-1 border rounded-md"
        placeholder="Artist"
        v-model="newSong.artist"
      />
      &nbsp;
      <button
        class="bg-green-500 rounded focus:outline-none pl-1.5 pr-1.5 font-medium"
        type="submit"
      >
        Add
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data: () => ({
    title: "Songs",
    favSongs: [
      {
        name: "Scientist",
        artist: "Coldplay",
      },
      {
        name: "Introspection",
        artist: "Estas Tonne",
      },
    ],
    list: [1, 2, 3, 4],
    newSong: {
      name: "",
      artist: "",
    },
  }),
  methods: {
    addSong() {
      if (this.newSong.name && this.newSong.artist) {
        this.favSongs.push({
          name: this.newSong.name,
          artist: this.newSong.artist,
        });
        this.newSong.name = "";
        this.newSong.artist = "";
      }
    },
    removeSong(songName) {
      this.favSongs = this.favSongs.filter((item) => item.name != songName);
    },
  },
  mounted(){
    this.$refs.songName.focus();
  }
};
</script>
