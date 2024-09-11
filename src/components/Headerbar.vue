<script setup>
import { useRouter } from 'vue-router';
import { ref, onMounted, onUnmounted } from 'vue';

const router = useRouter();
const headerClass = ref('');
const buttonClass = ref('');
const selectedButton = ref('Home');

function setSelectedButton(selected) {
  selectedButton.value = selected;
  let page = selected.toLowerCase();
  if (selected === 'Home') {
    router.push('/');
  } else {
    router.push(`${page}`);
  }
}

function handleScroll() {
  if (window.scrollY > 0) {
    headerClass.value = 'header-scrolled';
    buttonClass.value = 'button-scrolled';
  } else {
    headerClass.value = '';
    buttonClass.value = '';
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div
    :class="`bg-transparent top-0 fixed flex justify-center p-1 md:p-4 w-full mt-5 z-10 dm-sans-regular `">
    <div :class="`px-3 flex gap-1 rounded-full py-2 text-dark-green text-base md:text-xl font-semibold  ${headerClass}`">
      <!-- Home Button -->
      <button
        @click="setSelectedButton('Home')"
        :class="`rounded-full px-2.5 md:px-7 py-2 border-transparent hover:border-transparent focus:border-transparent 
                  focus:outline-none focus-visible:outline-none focus:ring-0 ${selectedButton === 'Home' ? `backdrop-blur bg-white/50 ${buttonClass}` : ''}`"
      >
        Home
      </button>

      <!-- About Button -->
      <button
        @click="setSelectedButton('About')"
        :class="`rounded-full px-2.5 md:px-7 py-2 border-transparent hover:border-transparent focus:border-transparent 
                  focus:outline-none focus-visible:outline-none focus:ring-0 ${selectedButton === 'About' ? `backdrop-blur bg-white/50 ${buttonClass}` : ''}`"
      >
        About
      </button>

      <!-- Experience Button -->
      <button
        @click="setSelectedButton('Experience')"
        :class="`rounded-full px-2.5 md:px-7 py-2 border-transparent hover:border-transparent focus:border-transparent 
                  focus:outline-none focus-visible:outline-none focus:ring-0 ${selectedButton === 'Experience' ? `backdrop-blur bg-white/50 ${buttonClass}` : ''}`"
      >
        Experience
      </button>

      <!-- Projects Button -->
      <button
        @click="setSelectedButton('Projects')"
        :class="`rounded-full px-2.5 md:px-7 py-2 border-transparent hover:border-transparent focus:border-transparent 
                  focus:outline-none focus-visible:outline-none focus:ring-0 ${selectedButton === 'Projects' ? `backdrop-blur bg-white/50 ${buttonClass}` : ''}`"
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
.dm-sans-regular {
  font-family: "DM Sans", sans-serif;
  font-optical-sizing: auto;
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

.header-scrolled {
  background-color: white;
  backdrop-filter: blur(10px); /* Adjust the blur amount as needed */
}

.button-scrolled {
  background-color: rgb(251, 227, 212) !important;
}

@media (max-width: 768px) {
  /* Custom styles for md breakpoint (mobile) */
  .text-2xl {
    font-size: 1.25rem; /* Adjust font size for mobile */
  }

  .gap-2 {
    gap: 0.5rem;
  }

  .px-3 {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }

  .mt-5 {
    margin-top: 2rem;
  }
}
</style>
