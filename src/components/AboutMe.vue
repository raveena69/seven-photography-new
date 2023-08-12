<template>
  <div class="">
    <div class="flex my-24 bg-white">
      <div class="w-1/12"></div>
      <!-- <div
        class="bg-cover bg-center rounded-lg w-5/12"
        style="background-image: url('/src/assets/images/tharusha1.jpg')"
      ></div> -->
      <div
        class="bg-cover bg-center rounded-lg w-5/12"
        style="background-image: url('images/tharusha1.jpg')"
      ></div>
      <div class="w-1/12"></div>
      <div class="w-4/12 my-20">
        <p class="text-xs uppercase text-blue-600 font-semibold">About Me</p>
        <h2 class="text-5xl mt-2 mb-12">I am ready to capture your best moments</h2>
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

        <router-link to="/my-work">
          <a
            href="/my-work"
            target="_black"
            class="inline-flex items-center px-5 py-4 mt-10 text-sm font-medium text-center text-white bg-black rounded-lg"
          >
            Explore my work

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="19"
              viewBox="0 0 25 24"
              fill="none"
              class="ml-3"
            >
              <path
                d="M12.5 22C18.0228 22 22.5 17.5228 22.5 12C22.5 6.47715 18.0228 2 12.5 2C6.97715 2 2.5 6.47715 2.5 12C2.5 17.5228 6.97715 22 12.5 22Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.5 16L16.5 12L12.5 8"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.5 12H16.5"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </router-link>
      </div>

      <div class="w-1/12"></div>
    </div>
  </div>
</template>
