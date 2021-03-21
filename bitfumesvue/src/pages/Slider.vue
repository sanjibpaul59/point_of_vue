<template>
  <div class="w-full flex flex-wrap relative">
    <div
    class="w-full absolute"
    v-for="(slide,index) in slides" :key="slide" >
     <transition name="fade">
     <div 
      v-if="currentSlide == index" 
      :class="slide"
      style="height:350px;">
     </div>
     </transition>
  </div>

  <div class="w-full" style="height:340px">
    <div class="absolute bottom-0 w-full flex justify-center">
      <div
       v-for="(slider,index) in slides" 
       :key="slider" 
       @click="makeActive(index)"
       :class="currentSlide == index ? 'bg-gray-700': 'bg-gray-300' "
       class="w-4 h-4 mx-2 rounded-full cursor-pointer shadow-md"></div>
    </div>
  </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 0,
      slides: ['bg-blue-500','bg-red-500','bg-yellow-500','bg-green-700','bg-gray-800'],
      interval:"",
    };
  },
  mounted(){
    this.interval= setInterval(()=>{
      this.currentSlide = this.currentSlide === this.slides.length-1 ? 0 : this.currentSlide+1},2000)
  },
  beforeUnmount(){
    clearInterval(this.interval)
  },
  methods:{
    makeActive(index){
      this.currentSlide = index;
    }
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active{
  transition: all 2s ease;
}

.fade-enter-from{
    opacity: 0;
    transform: translateX(100%);
}
.fade-leave-to{
  opacity: 0;
  transform: translateX(-100%);
}
</style>
