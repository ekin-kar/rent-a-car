<template>
  <div class="py-20">
    <img src="@/assets/banner_image.png" alt="bg" class="absolute top-0 right-0 -z-10" />
    <div class="container mx-auto flex flex-col md:flex-row items-center mt-16 px-2 md:px-6">
      <div class="text-center md:text-left md:w-1/3">
        <h1 class="text-4xl md:text-5xl font-extrabold mb-6">
          Save <span class="text-red-500">big</span> with our car rental
        </h1>
        <p class="text-gray-600 mb-6">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat perspiciatis neque a at
          soluta dignissimos necessitatibus dolores, incidunt ad enim ratione delectus tenetur sit
          doloribus odit rem commodi itaque sint.
        </p>
        <div class="flex justify-center md:justify-start space-x-4 font-semibold text-sm">
          <button class="bg-custom-red text-white py-4 px-8 rounded-md hover:bg-red-600">
            Book Ride
          </button>
          <button class="bg-gray-700 text-white py-4 px-8 rounded-md hover:bg-gray-800">
            Learn More
          </button>
        </div>
      </div>
      <div class="mt-10 md:mt-0 md:w-2/3">
        <img src="@/assets/car.png" alt="Car" class="w-full md:w-full" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroSection'
}
</script>
