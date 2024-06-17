<template>
  <section class="py-20">
    <div class="container mx-auto text-center">
      <div class="mt-8 flex flex-col lg:flex-row items-center lg:justify-center lg:space-x-12">
        <img src="@/assets/about.jpg" alt="About Us" class="w-full max-w-sm mb-8 lg:mb-0" />
        <div class="lg:text-left flex flex-col justify-between gap-4">
          <h2 class="text-4xl font-extrabold">About Company</h2>
          <h3 class="text-3xl font-bold">You start the engine and your adventure begins</h3>
          <p class="mt-4 text-gray-600 max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde nulla tenetur itaque
            velit nam perferendis doloremque nemo consequuntur dignissimos laboriosam culpa facilis
            quod aperiam esse, beatae cum, laudantium in repellendus.
          </p>
          <div
            class="mt-8 flex flex-col lg:flex-row flex-wrap justify-center lg:justify-start items-center gap-6"
          >
            <div class="text-center lg:text-left flex flex-col gap-2">
              <font-awesome-icon class="h-12 text-red-500" icon="fa-solid fa-car-side" />
              <div class="flex justify-center items-center gap-2">
                <span class="block text-4xl font-bold text-red-500">20</span>
                <span class="text-gray-700 text-xl font-semibold">Car Types</span>
              </div>
            </div>
            <div class="text-center lg:text-left flex flex-col gap-2">
              <font-awesome-icon class="h-12 text-red-500" icon="fa-solid fa-store" />
              <div class="flex justify-center items-center gap-2">
                <span class="block text-4xl font-bold text-red-500">85</span>
                <span class="text-gray-700 text-xl font-semibold">Rental Outlets</span>
              </div>
            </div>
            <div class="text-center lg:text-left flex flex-col gap-2">
              <font-awesome-icon class="h-12 text-red-500" icon="fa-solid fa-screwdriver-wrench" />
              <div class="flex justify-center items-center gap-2">
                <span class="block text-4xl font-bold text-red-500">75</span>
                <span class="text-gray-700 text-xl font-semibold">Repair Shops</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TheAbout'
}
</script>
