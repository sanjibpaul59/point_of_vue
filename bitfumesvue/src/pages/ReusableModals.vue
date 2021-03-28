<template>
  <section class="w-full flex">
    <div class="m-auto">
      <h1 class="text-2xl font-semibold my-5">Reusable Modals</h1>
      <Modal v-if="isModalOpen" @close-reusable-modal="isModalOpen = false">
        <template v-slot:title> Red Modal </template>
        <template v-slot:body>
          <p>In the body</p>
          <section>A section in body</section>
        </template>
      </Modal>
      <button class="border rounded bg-red-400 p-2 m-4 text-white" @click="isModalOpen = true">Red Modal</button>

      <Modal v-if="isModal2Open" @close-reusable-modal="isModal2Open = false">
        <template #title> Blue Modal </template>
        <template #body>
          <p>In the body 2</p>
          <section>A section in body</section>
        </template>
      </Modal>
      <button class="border rounded p-2 m-4 bg-blue-400 text-white" @click="isModal2Open = true">Blue Modal</button>
    </div>
  </section>
</template>

<script>
import Modal from "../components/Modal";
import { ref } from "vue";
export default {
  components: { Modal },
  setup() {
    const isModalOpen = ref(false);
    const isModal2Open = ref(false);

    return { isModalOpen, isModal2Open };
  },
};
</script>

<style>
</style>