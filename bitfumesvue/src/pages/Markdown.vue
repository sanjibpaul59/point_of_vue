<template>
  <div class="w-full m-auto flex flex-wrap">
    <h2 class="text-center m-4 text-2xl font-bold">Markdown App</h2>
    <section class="flex w-10/12 m-auto h-screen">
      <article class="w-1/2 border">
        <h3 class="bg-blue-900 text-lg text-white">Input Here</h3>
        <textarea
          ref="inputArea"
          class="w-full h-full bg-blue-200"
          :value="text"
          @input="update"
        >
        </textarea>
      </article>
      <article class="w-1/2 border">
        <h3 class="bg-yellow-900 text-lg text-white">Output</h3>
        <textarea class="w-full h-full bg-yellow-200" v-html="markedText">
        </textarea>
      </article>
    </section>
  </div>
</template>

<script>
import marked from "marked";
import useDebounce from '../utilities/composition/useDebounce';
export default {
  data() {
    return { 
      text: "",
      debounce: "",
    };
  },
  computed: {
    markedText() {
      return marked(this.text);
    },
  },
  methods: {
    update(e) {
      const task = () => (this.text = e.target.value);
      this.debounce(task, 1000);
    },
  },
  mounted(){
    this.debounce = useDebounce();
      this.$refs.inputArea.focus();
  }
};
</script>

<style>
</style>