<template>
  <div class="main-parent font-sans bg-white">
    <!-- Navigation Bar Start -->
    <div class="flex font-sans md:mx-24 my-6 xs:mx-12">
      <div class="font-sans md:text-2xl font-bold grow leading-3 xs:text-lg md:">
        Seven Photography
      </div>
      <div class="flex space-x-0">
        <a class="text-md mx-3 text-gray-500 hover:text-blue-600" href="#aboutMe"
          >About Me
          <span class="mx-3">|</span>
        </a>
        <a class="text-md mx-3 text-gray-500 hover:text-blue-600" href="#myServices"
          >My Services
          <span class="mx-3">|</span>
        </a>
        <a class="text-md mx-3 text-gray-500 hover:text-blue-600" href="#myWork"
          >My Work
          <span class="mr-3">|</span>
        </a>
        <a class="text-md mx-3 text-gray-500 hover:text-blue-600" href="#contactUs"
          >Contact Us</a
        >
      </div>
    </div>

    <!-- Navigation Bar End -->

    <!-- Hero section Start -->
    <div class="pb-5 border-b-2 border-gray-300">
      <!-- <div
        class="bg-cover max-w-full h-96"
        style="background-image: url('../assets/images/hero-image1.png')"
      ></div> -->
      <div
        class="bg-cover w-full md:h-96 xs:h-48"
        style="background-image: url('images/hero-image1.png')"
      ></div>
      <div class="flex md:flex-row my-4 xs:flex-col">
        <div class="md:w-1/12 xs:w-0"></div>
        <div class="md:w-5/12 xs:w-full">
          <h1
            class="md:text-4xl md:text-left font-semibold leading-tight xs:text-3xl xs:text-center mt-24"
          >
            <!-- It’s all about Capturing moments and Creating memories -->
            Capturerd the great moments
          </h1>
        </div>

        <div class="md:w-1/12 xs:w-0"></div>

        <div class="md:w-4/12 xs:w-full">
          <p class="text-md mt-4 leading-7">
            Lorem ipsum dolor sit amet consectetur. Sit et tincidunt sagittis posuere.
            Gravida eu pretium lacus arcu elementum sit. Tincidunt fringilla amet volutpat
            ullamcorper posuere ac. Velit arcu purus nunc pulvinar.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur. Sit et tincidunt sagittis posuere.
            Gravida eu pretium lacus arcu elementum sit. Tincidunt fringilla amet volutpat
            ullamcorper posuere ac. Velit arcu purus nunc pulvinar.
          </p>
        </div>

        <div class="md:w-1/12 xs:w-0"></div>
      </div>
    </div>
    <!-- Hero section End -->

    <!-- About Me section Start -->
    <about-me id="aboutMe"></about-me>
    <!-- About Me section End -->

    <!-- My services section Start -->
    <my-services id="myServices"></my-services>
    <!-- My services section End -->

    <!-- My work section Start -->
    <my-work id="myWork"></my-work>
    <!-- My work section End -->

    <!-- Footer section Start -->
    <footer-nav id="contactUs"></footer-nav>
    <!-- Footer section End -->
  </div>
</template>

<script setup>
import AboutMe from "./AboutMe.vue";
import MyServices from "./MyServices.vue";
import MyWork from "./MyWork1.vue";
import FooterNav from "./FooterNav.vue";
</script>

<style scoped></style>
