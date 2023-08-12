<template>
  <div class="mt-36 mb-24">
    <div class="flex flex-col justify-center text-center">
      <p class="text-xs uppercase text-blue-600 font-semibold text-center">My Work</p>
      <h2 class="text-5xl mt-2 mb-8">
        Nature creates the beauty, <br />
        My camera and I are the witness
      </h2>

      <div class="flex">
        <div class="w-3/12"></div>
        <div class="w-6/12">
          <p class="text-md leading-7 place-content-center">
            Lorem ipsum dolor sit amet consectetur. Sit et tincidunt sagittis posuere.
            Gravida eu pretium lacus arcu elementum sit. Tincidunt fringilla amet volutpat
            ullamcorper posuere ac.
          </p>
        </div>
        <div class="w-3/12"></div>
      </div>
    </div>

    <div class="flex mt-16 space-x-16">
      <div class="w-1/12"></div>

      <div class="flex flex-col w-3/12">
        <!-- Image start -->
        <!-- <div
          class="bg-cover bg-center rounded-l-lg h-96 hover:grayscale"
          style="background-image: url('/src/assets/images/galle1.jpg')"
        ></div> -->
        <div
          class="bg-cover bg-center rounded-l-lg h-96 hover:grayscale"
          style="background-image: url('images/galle1.jpg')"
        ></div>

        <h2 class="text-xl font-medium mt-4 mb-2 ml-0">Galle Fort</h2>

        <p class="text-sm leading-6 place-content-center ml-0">
          Lorem ipsum dolor sit amet consectetur. Sit et tincidunt sagittis posuere.
        </p>
        <!-- Image end -->
      </div>

      <div class="flex flex-col w-3/12">
        <!-- Image start -->
        <!-- <div
          class="bg-cover bg-center h-96 hover:grayscale"
          style="background-image: url('/src/assets/images/nuwara-eliya3.jpg')"
        ></div> -->
        <div
          class="bg-cover bg-center h-96 hover:grayscale"
          style="background-image: url('images/nuwara-eliya3.jpg')"
        ></div>

        <h2 class="text-xl font-medium mt-4 mb-2 ml-0">Nuwara Eliya</h2>

        <p class="text-sm leading-6 place-content-center ml-0">
          Lorem ipsum dolor sit amet consectetur. Sit et tincidunt sagittis posuere.
        </p>
        <!-- Image end -->
      </div>

      <div class="flex flex-col w-3/12">
        <!-- Image start -->
        <!-- <div
          class="bg-cover bg-center rounded-r-lg h-full hover:grayscale"
          style="background-image: url('/src/assets/images/friend1.jpg')"
        ></div> -->
        <div
          class="bg-cover bg-center rounded-r-lg h-full hover:grayscale"
          style="background-image: url('images/friend1.jpg')"
        ></div>

        <h2 class="text-xl font-medium mt-4 mb-2 ml-0">Model Photography</h2>

        <p class="text-sm leading-6 place-content-center ml-0">
          Lorem ipsum dolor sit amet consectetur. Sit et tincidunt sagittis posuere.
        </p>
        <!-- Image end -->
      </div>

      <div class="w-1/12"></div>
    </div>

    <div class="flex mt-16">
      <router-link
        to="/my-work"
        class="mx-auto inline-flex items-center px-5 py-4 text-sm font-medium text-center text-white hover:hover:text-blue-600 bg-black rounded-lg"
      >
        <a
          href="/my-work"
          target="_black"
          class="mx-auto inline-flex items-center px-5 py-4 text-sm font-medium text-center text-white hover:hover:text-blue-600 bg-black rounded-lg"
        >
          View more

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
  </div>
</template>

<style scoped>
.space-x-14 > :not([hidden]) ~ :not([hidden]) {
  margin-left: 0 !important;
}
</style>
