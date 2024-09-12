
<template>
    <div class="pb-12 pt-28 md:pt-48 bg-gradient-to-r from-red-200 to-amber-100 h-full w-full flex flex-col items-center">
      <div class="px-8 lg:px-28">
        <!-- Experience Items -->
        <div
          v-for="(experience, index) in experiences"
          :key="index"
          class="bg-transparent p-6 shadow-lg rounded-lg mb-12 flex transition-transform transform hover:scale-105 hover:shadow-2xl bg-white backdrop-blur-lg border-transparent"
        >
          <!-- Dates on the Left Side -->
          <div class="w-1/4 flex-col md:flex-none pr-6">
            <p class="text-dark-green text-lg font-semibold hover:text-white transition-colors">{{ experience.dates }}</p>
          </div>
  
          <!-- Experience Info on the Right Side -->
          <div class="w-3/4">
            <h3 class="text-xl font-bold text-dark-green">{{ experience.role }}</h3>
            <p class="text-lg text-gray-600">{{ experience.company }}</p>
            <p class="mt-2 text-base text-gray-700">{{ experience.description }}</p>
  
            <!-- Skills in Capsules -->
            <div class="flex flex-wrap gap-2 mt-4">
              <span
                v-for="(skill, skillIndex) in experience.skills"
                :key="skillIndex"
                class="bg-dark-green text-white text-sm font-medium px-3 py-1 rounded-full"
              >{{ skill }}</span>
            </div>
          </div>
        </div>
       
        <div class="bg-white p-6 shadow-lg rounded-lg mb-12 flex items-center transition-transform transform hover:scale-105 hover:shadow-2xl">
       
        <div class="w-1/4 flex-none pr-6">
          <img :src="cusat" alt="School Emblem" class="w-24 md:w-72 h-24 object-contain"/>
        </div>

       
        <div class="w-3/4">
          <h3 class="text-xl font-bold text-gray-900">BTech in Computer Science</h3>
          <p class="text-lg text-gray-600">Cochin University of Science and Technology</p>
          <p class="mt-2 text-lg text-gray-700">GPA: 8.78</p>
        </div>
        
      </div>
      <a class="text-3xl text-dark-green aladin-regular mt-10" href="https://drive.google.com/file/d/1wP6PnY-4BLjZjw5ZjYXpUjmEMvQ6HRwy/view?usp=sharing">
          View full resume
      </a>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue';
  import cusat from "../assets/cusat.png";
  onMounted(()=>{
    window.scrollTo(0,0);
  });
  
  const experiences = ref([
    {
      dates: 'Jul 2024 – Aug 2024',
      role: 'Web Developer (Contract)',
      company: 'Truelift, Mangalore',
      description: `Created web pages using React.js and Node.js.
        Developed responsive landing pages, enhancing digital presence.
        Worked closely with a small team, participating in stand-up meetings and sprint planning sessions.`,
      skills: ['React.js', 'Node.js', 'Responsive Design','Javascript','CSS'],
    },
    {
      dates: 'Feb 2023 – Feb 2024',
      role: 'Junior Web Developer',
      company: 'Superhire, Cochin',
      description: `Designed and developed web pages using Vue.js, React.js, Node.js, Hapi.js, and PostgreSQL.
        Increased website engagement by 30% through mobile-responsive design techniques.
        Utilized Tailwind CSS and JavaScript to create distinctive landing pages.
        Collaborated with the team through stand-up meetings, sprint planning, and BitBucket for user stories and bug tracking.`,
      skills: ['Vue.js', 'React.js', 'Tailwind CSS','Typescript', 'JavaScript', 'Node.js', 'Hapi.js', 'PostgreSQL'],
    },
    {
      dates: 'Aug 2022 – Jan 2023',
      role: 'Associate Software Engineer Trainee',
      company: 'Keyvalue Software Systems, Cochin',
      description: `Worked with senior developers to create user interfaces with Tailwind CSS.
        Developed features using React and conducted testing with Jest.
        Supported senior developers during code revamp and integration tasks.`,
      skills: ['Tailwind CSS', 'React.js', 'Jest','Node'],
    },
    // Add more experiences here...
  ]);
  </script>
  
  <style scoped>
  /* Glass effect on hover */
  .bg-white-30 {
    background-color: rgba(255, 255, 255, 0.3);
  }
  .backdrop-blur-lg {
    backdrop-filter: blur(10px);
  }
  
  /* Transition for card scaling and shadow on hover */
  .transition-transform {
    transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
  }
  .transform {
    transform: scale(1);
  }
  .hover\:scale-105:hover {
    transform: scale(1.0003);
  }
  
  /* Hover effects */
  .hover\:shadow-2xl:hover {
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }
  
  /* Dates color */
  .text-dark-green {
    color: #025A4E;
  }
  
  /* Skill capsules */
  .bg-dark-green {
    background-color: #025A4E;
  }
  .aladin-regular {
  font-family: "Aladin", system-ui;
  font-weight: 400;
  font-style: normal;
}
  </style>
  
  
  
  
  