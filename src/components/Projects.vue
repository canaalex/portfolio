<script setup>
import star from "../assets/star.svg";
</script>

<template>
    <div class="pb-12 pt-48 bg-gradient-to-r from-red-200 to-amber-100 h-full w-full flex flex-col items-center">
        <div class="max-w-7xl mx-auto px-4 py-8">
  <!-- Project 1 -->
  <div class="flex items-center mb-12">
    <!-- Project Image -->
    <div class="w-1/3">
      <img :src="star" alt="Project 1 Image" class="rounded-lg shadow-md">
    </div>
    <!-- Project Info -->
    <div class="w-2/3 pl-8">
      <h2 class="text-2xl font-bold text-gray-800">Project Name 1</h2>
      <p class="mt-2 text-gray-600">Brief description of the project, its functionality, and technologies used.</p>
      <div class="mt-4">
        <a href="https://github.com/your-repo" class="text-blue-500 hover:underline">GitHub Repository</a>
      </div>
    </div>
  </div>

  <!-- Divider -->
  <hr class="border-t border-gray-300 my-8">

  <!-- Project 2 -->
  <div class="flex items-center mb-12">
    <!-- Project Image -->
    <div class="w-1/3">
      <img :src="star" alt="Project 2 Image" class="rounded-lg shadow-md">
    </div>
    <!-- Project Info -->
    <div class="w-2/3 pl-8">
      <h2 class="text-2xl font-bold text-gray-800">Project Name 2</h2>
      <p class="mt-2 text-gray-600">Brief description of the project, its functionality, and technologies used.</p>
      <div class="mt-4">
        <a href="https://github.com/your-repo" class="text-blue-500 hover:underline">GitHub Repository</a>
      </div>
    </div>
  </div>

  <!-- Divider -->
  <hr class="border-t border-gray-300 my-8">

  <!-- Add more projects as needed... -->
</div>

    </div>
</template>