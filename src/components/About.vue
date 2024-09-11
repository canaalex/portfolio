<script setup>
import profile from "../assets/profile6.png";
import city from "../assets/kochicity.png"
import water from "../assets/water.png";
import bear from "../assets/bear.jpg";
import { onMounted} from 'vue';
  onMounted(()=>{
    window.scrollTo(0,0);
  });
</script>

<template>
  <div
    class="pb-12 px-8 md:px-24 pt-40 bg-gradient-to-r from-red-200 to-amber-100 h-full w-full flex flex-col items-center"
  >
    <div
      className="relative font-extrabold text-5xl md:text-10xl aladin-regular text-dark-green mb-8"
    >
      <div>I'm Riya.</div>
    </div>
    <div class="flex flex-col md:flex-row justify-between py-12 gap-24">
      <div
        class="w-full md:w-2/5 flex justify-center md:justify-end"
      >
        <div
          class="relative w-72 h-72 md:w-96 md:h-96 overflow-hidden rounded-t-full bg-dark-green"
        >
          <img
            :src="profile"
            alt="Your Image"
            class="w-72 h-72 md:w-96 md:h-96 object-cover object-center"
          />
        </div>
      </div>
      <div class="w-full md:w-3/5">
        <p
          class="tracking-tight text-left text-4xl md:text-8xl aladin-regular text-dark-green"
        >
          I'm a web developer from Cochin, India.
        </p>
        <p class="leading-relaxed text-left text-2xl text-dark-green mt-10">
          Over the past 1.8 years, I've worked as a developer, focusing on
          building responsive and user-friendly web applications. My experience
          spans working with modern front-end frameworks like Vue.js and
          React.js, as well as backend technologies such as Node.js. Currently,
          I'm freelancing, applying my skills to diverse projects and helping
          clients build robust digital solutions.
        </p>
      </div>
    </div>
    <div class="flex flex-col md:flex-row gap-8 md:gap-4 mt-20">
       <div>
        <img :src="city" className="w-96 h-96 md:w-844px md:h-542px rounded-xl"/>
       </div>
       <img :src="water" className="w-96 h-96 md:w-477px md:h-542px rounded-xl"/>
    </div>
   
    <div class="leading-relaxed text-2xl text-dark-green flex justify-center items-center w-4/6 text-left mt-36">
      Outside of work, I enjoy swimming and playing games, as well as exploring new technologies and learning about the latest trends in web development. I also enjoy staying active by going to the gym and keeping up with fashion.
    </div>
    <div class="mt-36">
       <div>
        <img :src="bear" className="w-64 h-auto rounded-xl"/>
       </div>
       
    </div>
  </div>
</template>

<style scoped>
.w-80 {
  width: 20rem;
  height: 40rem;
}

.overflow-hidden {
  overflow: hidden;
}

.rounded-t-full {
  border-top-left-radius: 100%;
  border-top-right-radius: 100%;
}

.object-cover {
  object-fit: cover;
}
.aladin-regular {
  font-family: "Aladin", system-ui;
  font-weight: 400;
  font-style: normal;
}
</style>
