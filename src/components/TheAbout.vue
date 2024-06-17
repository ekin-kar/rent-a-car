<template>
  <section class="py-20">
    <div class="container mx-auto text-center">
      <h2 class="text-4xl font-bold">About Company</h2>
      <div class="mt-8 flex flex-col lg:flex-row items-center lg:justify-center lg:space-x-12">
        <img src="@/assets/about.jpg" alt="About Us" class="w-full max-w-sm mb-8 lg:mb-0" />
        <div class="lg:text-left">
          <p class="mt-4 text-gray-700 max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde nulla tenetur itaque
            velit nam perferendis doloremque nemo consequuntur dignissimos laboriosam culpa facilis
            quod aperiam esse, beatae cum, laudantium in repellendus.
          </p>
          <div class="mt-8 flex flex-wrap justify-center space-x-12 lg:justify-start">
            <div class="text-center lg:text-left">
              <span class="block text-5xl font-bold text-red-500">20</span>
              <span class="text-gray-700">Car Types</span>
            </div>
            <div class="text-center lg:text-left">
              <span class="block text-5xl font-bold text-red-500">85</span>
              <span class="text-gray-700">Rental Outlets</span>
            </div>
            <div class="text-center lg:text-left">
              <span class="block text-5xl font-bold text-red-500">75</span>
              <span class="text-gray-700">Repair Shops</span>
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
