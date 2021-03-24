<template>
  <section
   @click="closeModal"
    class="z-10 h-screen w-screen fixed top-0 left-0 opacity-60 bg-gray-700"
  ></section>

  <div class="absolute inset-0">
    <div class="flex h-full">
      <div class="z-20 m-auto bg-white p-4 shadow-md rounded w-1/3">
        <div class="p-2 border">
            <slot> </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    setup(_, {emit}){
    const closeModal =()=> emit("close-reusable-modal");
    

    return { closeModal }
    }
};
</script>

<style>
</style>