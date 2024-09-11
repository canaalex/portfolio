<script setup>
import { ref } from 'vue'
import star from "../assets/star.svg";

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div className="bg-gradient-to-r from-red-200 to-amber-100 h-screen w-full justify-center flex flex-col">
    <div className="relative font-extrabold text-6xl md:text-8xl aladin-regular text-dark-green ">
      <img :src="star" alt="star" class="absolute right-0 -top-28 md:-top-16 md:right-64 w-28 h-32" />
      <img :src="star" alt="star" class="absolute left-4 -bottom-32 md:-bottom-20 md:left-56 w-28 h-32 " />
    <div>Hi. I'm Riya.</div>
   
    <div>A Web Developer.</div>
  </div>
    
  </div>
  
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
.courgette-regular {
  font-family: "Courgette", cursive;
  font-weight: 400;
  font-style: normal;
}
.dela-gothic-one-regular {
  font-family: "Dela Gothic One", sans-serif;
  font-weight: 400;
  font-style: normal;
}
.suez-one-regular {
  font-family: "Suez One", serif;
  font-weight: 400;
  font-style: normal;
}
.pirata-one-regular {
  font-family: "Pirata One", system-ui;
  font-weight: 400;
  font-style: normal;
}
.dancing-script-regular {
  font-family: "Dancing Script", cursive;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
}
.aladin-regular {
  font-family: "Aladin", system-ui;
  font-weight: 400;
  font-style: normal;
}
/* .dark-green{
  color: #025A4E;
} */
</style>
