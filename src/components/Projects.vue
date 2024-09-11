<script setup>
import github from "../assets/github.png"
import country from "../assets/countryexplorer.png";
import kanban from "../assets/kanban.png";
import portfolio from "../assets/portfolio.png";
import { onMounted} from 'vue';
  onMounted(()=>{
    window.scrollTo(0,0);
  });
</script>

<template>
    <div class="pb-12 pt-48 bg-gradient-to-r from-red-200 to-amber-100 h-full w-full flex flex-col items-center">
      <div class="max-w-7xl mx-auto px-4 py-8">
  
  <!-- <div class="flex items-center mb-12">
   
    <div class="w-1/3">
      <img :src="star" alt="Snap Skye Image" class="rounded-lg shadow-md">
    </div>

    <div class="w-2/3 pl-8">
      <h2 class="text-2xl font-bold text-dark-green">Snap Skye</h2>
      <p class="mt-2 text-gray-600">A dashboard that displays live hot news and current weather using the user’s geolocation via News and OpenWeather API.</p>
      <div class="mt-4 flex justify-center gap-2">
        <img :src="github" alt="github" class="w-5 h-5 rounded-full"/>
        <a href="https://github.com/canaalex/pixi-news" class="text-blue-700 align-middle flex hover:underline">Snap Skye</a>
      </div>
    </div>
  </div> -->

  
  <!-- <hr class="border-t border-gray-300 my-8"> -->

  <!-- Project 2: Kanban Board -->
  <div class="flex gap-8 md:gap-0 flex-col md:flex-row items-center mb-12">
    <!-- Project Image (Placeholder for now) -->
    <div class="w-full md:w-1/3">
      <img :src="kanban" alt="Kanban Board Image" class="rounded-lg shadow-md">
    </div>
    <!-- Project Info -->
    <div class="w-full md:w-2/3 pl-0 md:pl-8">
      <h2 class="text-2xl font-bold text-dark-green">Kanban Board</h2>
      <p class="mt-2 text-xl text-gray-600">Provides a visual representation of tasks as cards that can be moved through various stages of completion.</p>
      <div class="mt-4 flex justify-center gap-2">
        <img :src="github" alt="github" class="w-5 h-5 rounded-full"/>
        <a href="https://github.com/canaalex/kanban-board" class="text-blue-700 text-lg align-middle flex hover:underline">Kanban Board</a>
      </div>
    </div>
  </div>

  <!-- Divider -->
  <hr class="border-t-2 border-dark-green my-8">
  <div class="flex gap-8 md:gap-0 flex-col md:flex-row items-center mb-12">
    <!-- Project Image (Placeholder for now) -->
    <div class="w-full md:w-1/3">
      <img :src="country" alt="Country" class="rounded-lg shadow-md">
    </div>
    <!-- Project Info -->
    <div class="w-full md:w-2/3 pl-0 md:pl-8">
      <h2 class="text-2xl font-bold text-dark-green">Country Explorer</h2>
      <p class="mt-2 text-xl text-gray-600">A web application designed to help users explore detailed information about countries around the world. This project leverages the REST Countries API to provide users with comprehensive data on various countries, including their languages, currencies, population, and more.</p>
      <div class="mt-4 flex justify-center gap-2">
        <img :src="github" alt="github" class="w-5 h-5 rounded-full"/>
        <a href="https://github.com/canaalex/country-explorer" class="text-blue-700 text-lg align-middle flex hover:underline">Country explorer</a>
      </div>
    </div>
  </div>
  <hr class="border-t-2 border-dark-green my-8">
  <div class="flex gap-8 md:gap-0 flex-col md:flex-row items-center mb-12">
  <!-- Project Image (Placeholder for now) -->
  <div class="w-full md:w-1/3">
    <img :src="portfolio" alt="Portfolio Image" class="rounded-lg shadow-md">
  </div>
  <!-- Project Info -->
  <div class="w-full md:w-2/3 pl-0 md:pl-8">
    <h2 class="text-2xl font-bold text-dark-green">Portfolio Website</h2>
    <p class="mt-2 text-xl text-gray-600">A personal portfolio showcasing my skills, projects, and experience as a web developer. Built using modern web technologies like Vue.js, Tailwind CSS, and Node.js.</p>
    <div class="mt-4 flex justify-center gap-2">
      <img :src="github" alt="github" class="w-5 h-5 rounded-full"/>
      <a href="https://github.com/canaalex/portfolio" class="text-blue-700  text-lg align-middle flex hover:underline">Portfolio</a>
    </div>
  
  </div>
</div>
</div>


    </div>
</template>