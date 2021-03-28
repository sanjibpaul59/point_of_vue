<template>
<button
          @click="isModalOpen = true"
          class="px-2 py-1 border rounded m-4"
        >
          Add User
        </button>
    <teleport to="body">
    <Modal v-if="isModalOpen" @close="isModalOpen = false">
      
      <template #title> Add New User </template>
      <template #body>
        <form @submit.prevent = "submit">
          <div class="p-2">
            <label>Name</label>
            <input
              class="w-full p-2 rounded border"
              placeholder="User Name"
              type="text"
              v-model="state.form.name"
            />
          </div>
          <div class="p-2">
            <label>Email</label>
            <input
              class="w-full p-2 rounded border"
              placeholder="User Email"
              type="email"
              v-model="state.form.email"
            />
          </div>
          <div class="p-2">
            <label>Avatar</label>
            <input
              class="w-full p-2 rounded border"
              placeholder="Avatar URL"
              type="text"
              v-model="state.form.avatar"
            />
          </div>
          <div class="p-2">
            <input
              class="w-full p-2 rounded border hover:bg-green-500 cursor-pointer"
              type="submit"
              value="Create"
            />
          </div>
        </form>
      </template>
    </Modal>
  </teleport>
</template>

<script>
import Modal from '../Modal';
import axios from "../../plugins/axios";
import { reactive, ref } from "vue";
export default {
    components: { Modal },
    setup(_,{emit}){
        const isModalOpen = ref(false);

        const state = reactive({
            users: [],
        form: {
          name: "",
          email: "",
          avatar: ""
      }
        })

        async  function submit(){
        const { data } = await axios.post('/users', state.form);
        emit('new-user-added', data);
        state.form.name = "";
        state.form.email = "";
        state.form.avatar = "";

        isModalOpen.value = false;
    }

        return { state, isModalOpen, submit }
    }

}
</script>

<style>

</style>