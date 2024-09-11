<script setup>
import { ref } from 'vue';
const selectedButton=ref('Home');
import { useRouter } from 'vue-router';
const router = useRouter();


function setSelectedButton(selected){
selectedButton.value=selected;
let page=selected.toLowerCase();
router.push(`${page}`);
}
</script>
<template>
  <div
    className="bg-transparent top-0 fixed flex justify-center p-4 w-full mt-5 z-10"
  >
  <div class="px-3 flex gap-2 text-dark-green text-2xl font-semibold noto-sans-jp-regular">
    <!-- Home Button -->
    <button
      @click="setSelectedButton('Home')"
      :class="`rounded-full px-7 py-2 border-transparent hover:border-transparent focus:border-transparent 
                focus:outline-none focus-visible:outline-none focus:ring-0 ${selectedButton === 'Home' ? 'backdrop-blur bg-white/50' : ''}`"
    >
      Home
    </button>

    <!-- About Button -->
    <button
      @click="setSelectedButton('About')"
      :class="`rounded-full px-7 py-2 border-transparent hover:border-transparent focus:border-transparent 
                focus:outline-none focus-visible:outline-none focus:ring-0 ${selectedButton === 'About' ? 'backdrop-blur bg-white/50' : ''}`"
    >
      About
    </button>

    <!-- Experience Button -->
    <button
      @click="setSelectedButton('Experience')"
      :class="`rounded-full px-7 py-2 border-transparent hover:border-transparent focus:border-transparent 
                focus:outline-none focus-visible:outline-none focus:ring-0 ${selectedButton === 'Experience' ? 'backdrop-blur bg-white/50' : ''}`"
    >
      Experience
    </button>

    <!-- Projects Button -->
    <button
      @click="setSelectedButton('Projects')"
      :class="`rounded-full px-7 py-2 border-transparent hover:border-transparent focus:border-transparent 
                focus:outline-none focus-visible:outline-none focus:ring-0 ${selectedButton === 'Projects' ? 'backdrop-blur bg-white/50' : ''}`"
    >
      Projects
    </button>
  </div>
  </div>
</template>
<style scoped>
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
button:focus {
  outline: none !important;
  border: none !important;
  box-shadow: none !important;
}
.noto-sans-jp-regular {
  font-family: "Noto Sans JP", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
}
</style>
