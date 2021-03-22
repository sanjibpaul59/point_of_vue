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
        <span>
          <button
            class="hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-900 focus:ring-opacity-25"
            @click="removeSong(song.name)"
          >
            &times;
          </button>
        </span>
      </li>
    </ul>

    <form @submit.prevent="addSong" class="mt-2 p-3">
      <input
        ref="songNameRef"
        class="focus:text-purple-900 focus:outline-none focus:ring-1 border rounded-md"
        placeholder="Add New Song"
        v-model.trim="newSong.name"
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
import { onMounted, ref } from 'vue';

export default {
  setup() {
    const songNameRef = ref('');
    const favSongs = ref([
      {
        name: 'Scientist',
        artist: 'Coldplay',
      },
      {
        name: 'Introspection',
        artist: 'Estas Tonne',
      },
    ]);
    const title = ref('Songs');
    const list = ref([1, 2, 3, 4]);
    const newSong = ref({
      name: '',
      artist: '',
    });
    function removeSong(songName) {
      favSongs.value = favSongs.value.filter((item) => item.name != songName);
    }
    function addSong() {
      if (newSong.value.name && newSong.value.artist) {
        favSongs.value.push({
          name: newSong.value.name,
          artist: newSong.value.artist,
        });
        newSong.value.name = '';
        newSong.value.artist = '';
      }
    }
    onMounted(() => {
      songNameRef.value.focus();
    });

    return { title, favSongs, list, newSong, addSong, removeSong, songNameRef };
  },
};
</script>
