<template>
<section class="w-full flex">
    <div class="m-auto">
        <h1 class="text-2xl font-semibold my-5 ">Reusable Modals</h1>
        <Modal v-if="isModalOpen"  @close-reusable-modal="isModalOpen = false">
            <h1 class="text-red-700">Red Modal</h1>
        </Modal>

        <button @click="isModalOpen = true"> Red Modal </button>
    </div>

</section>
</template>

<script>
import Modal from "../components/Modal";
import { ref } from "vue";
export default {
  components: { Modal },
  setup(){
      const isModalOpen = ref(false);

      return { isModalOpen };

  }

}
</script>

<style>

</style>