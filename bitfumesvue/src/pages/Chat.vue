<template>
  <section class="flex w-full">
    <div class="m-auto">
      <h1 class="text-center text-2xl">Real Time Chat</h1>
      <div class="border rounded-lg">
        <div class="h-64 p-2">
          <div v-for="chat in state.chats" 
              :key="chat.message" 
              class="w-full" 
              :class="chat.userId === userId ? 'text-right': ''">
            {{ chat.message }}
          </div>
        </div>
        <div class="h-8 p-2">
          <input
            @keydown.enter="sendMessage"
            v-model="state.message"
            placeholder="Start Typing..."
            class="p-1 border rounded shadow"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { computed, onMounted, reactive } from "vue";
import { msgRefs } from "../utilities/firebase";
import { useStore } from "vuex";

export default {
  setup() {
    const state = reactive({
      chats: [],
      message: "",
    });

    const store = useStore();
    const userId = computed(()=> store.state.authUser.uid);

    onMounted(async () => {    
      msgRefs.on("child_added", (snapshot)=> {
        state.chats.push({key: snapshot.key,...snapshot.val()});
      });
    });

    function sendMessage() {
      const newMessage = msgRefs.push();
      newMessage.set({ 
        userId:  userId.value, 
        message: state.message 
        });
        state.message = "";
    }
    return { state, sendMessage, userId };
  },
};
</script>

<style>
</style>