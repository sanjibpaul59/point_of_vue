<template>
  <section class="w-full flex">
    <div class="m-auto">
      <div class="mt-10">
        <h1 class="text-2xl">Tensorflow Object Detection</h1>
        <div class="flex flex-wrap justify-center">
          <img
            ref="imgRef"
            src="https://images.unsplash.com/photo-1570891836654-d4961a7b6929?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80"
            width="200"
            crossorigin="anonymous"
          />
          <div class="w-full text-center">
            <button @click="detect" class="border p-2 m-2 rounded">
              <span v-if="isLoading">Loading....</span>
              <span v-else>Detect Object</span>
              
            </button>
            <div v-if="result.legth > 0">
              <p>{{ result[0].class }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
require("@tensorflow/tfjs-backend-cpu");
require("@tensorflow/tfjs-backend-webgl");
const cocoSsd = require("@tensorflow-models/coco-ssd");
export default {
  setup() {
    const imgRef = ref(" ");
    const result = ref([]);
    const isLoading = ref(false);
    async function detect() {
      console.log(imgRef);
      const img = imgRef.value;
      // Load the model.
      const model = await cocoSsd.load();
      isLoading.value = true;
      // Classify the image.
      const predictions = await model.detect(img);

      result.value = predictions;
      console.log("Predictions: ");
      console.log(predictions);
      isLoading.value = false;
    }
    return { imgRef, result, detect, isLoading };
  },
};
</script>

<style>
</style>