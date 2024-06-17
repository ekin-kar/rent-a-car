<template>
  <div class="relative">
    <img
      src="@/assets/road_image.png"
      alt="Road"
      class="absolute top-0 left-0 w-full h-full object-cover"
    />
    <div class="z-10 mx-auto py-16 relative">
      <div class="flex justify-center mb-12">
        <img src="@/assets/display_car.png" alt="Cars" class="w-full max-w-5xl" />
      </div>
      <div class="flex flex-col md:flex-row justify-center gap-6 px-16">
        <div class="text-center md:w-1/2 px-4">
          <h2 class="text-4xl font-bold mb-4">Why Choose Us</h2>
          <p class="text-2xl font-semibold mb-4">Best valued deals you will ever find</p>
          <p class="mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum error quo quia possimus
            debitis. Sunt fuga doloribus in veritatis omnis magni aliquam numquam nostrum corporis
            facilis, natus possimus, dolores id!
          </p>
          <button class="bg-orange-500 text-white px-4 py-2 rounded">Find Deals</button>
        </div>
        <div class="flex flex-col justify-center items-center gap-8 md:w-1/2 px-4">
          <div class="text-center">
            <div
              class="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto"
            >
              <font-awesome-icon class="w-8 h-8 text-orange-500" icon="fa-solid fa-dollar-sign" />
            </div>
            <h3 class="font-bold mb-2">All Inclusive Pricing</h3>
            <p>
              Yet uncommonly his ten who diminution astonished. Demesne new manners savings staying
              had.
            </p>
          </div>
          <div class="text-center">
            <div
              class="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto"
            >
              <font-awesome-icon class="w-8 h-8 text-orange-500" icon="fa-solid fa-money-bills" />
            </div>
            <h3 class="font-bold mb-2">No Hidden Charges</h3>
            <p>
              Under folly balls death own point now men. Match way these she avoid see. She whose
              drift their fat off.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WhyChoose'
}
</script>
