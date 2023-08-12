<template>
  <div class="main-parent font-sans bg-white">
    <!-- Navigation Bar Start -->
    <div class="flex font-sans mx-24 my-6">
      <div class="font-sans text-2xl font-bold grow leading-3">Seven Photography</div>
      <div class="flex space-x-24">
        <router-link to="/">
          <a class="text-md text-gray-500 hover:text-blue-600" href="/">About Me</a>
        </router-link>
        <router-link to="/">
          <a class="text-md text-gray-500 hover:text-blue-600" href="/">My Services</a>
        </router-link>
        <a class="text-md text-gray-500 hover:text-blue-600" href="#">My Work</a>
        <a class="text-md text-gray-500 hover:text-blue-600" href="#contactUs"
          >Contact Us</a
        >
      </div>
    </div>
    <!-- Navigation Bar End -->

    <!-- Hero section Start -->
    <div class="pb-8 border-b-2 border-gray-300">
      <!-- <div
          class="bg-cover max-w-full h-96"
          style="background-image: url('../assets/images/hero-image1.png')"
        ></div> -->
      <div
        class="bg-cover max-w-full h-96"
        style="background-image: url('images/hero-image2.png')"
      ></div>
      <div class="flex my-4">
        <div class="w-1/12"></div>
        <div class="w-5/12">
          <h1 class="text-6xl font-normal leading-tight">Hope You Enjoy !, My Work</h1>
        </div>

        <div class="w-1/12"></div>

        <div class="w-4/12">
          <p class="text-md mt-4 leading-7">
            Lorem ipsum dolor sit amet consectetur. Sit et tincidunt sagittis posuere.
            Gravida eu pretium lacus arcu elementum sit. Tincidunt fringilla amet volutpat
            ullamcorper posuere ac. Velit arcu purus nunc pulvinar.
            <br />
            <br />
            Tincidunt fringilla amet volutpat ullamcorper posuere ac. Velit arcu purus
            nunc pulvinar.
          </p>
        </div>

        <div class="w-1/12"></div>
      </div>
    </div>
    <!-- Hero section End -->

    <!-- Galle images section Start -->
    <galle-images></galle-images>
    <!-- Galle images section End -->

    <!-- Nuwara-Eliya section Start -->
    <nuwara-eliya></nuwara-eliya>
    <!-- Nuwara-eliya section End -->

    <!-- PersonalPhotography section Start -->
    <personal-photography></personal-photography>
    <!-- PersonalPhotography section End -->

    <!-- Footer section Start -->
    <footer-nav id="contactUs"></footer-nav>
    <!-- Footer section End -->
  </div>
</template>

<script setup>
import GalleImages from "./mywork/GalleImages.vue";
import NuwaraEliya from "./mywork/NuwaraEliya.vue";
import PersonalPhotography from "./mywork/PersonalPhotography.vue";
import FooterNav from "./FooterNav.vue";
</script>

<style scoped></style>
