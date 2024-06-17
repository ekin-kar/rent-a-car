<template>
  <div class="cta-banner relative h-64">
    <div class="absolute top-0 w-1/2 bg-slate-900 h-full"></div>
    <img
      src="@/assets/cta_car_action.webp"
      alt="Car"
      class="absolute top-0 right-0 w-1/2 h-full object-cover z-0"
    />
    <div class="flex justify-center items-center h-full px-4 md:px-36 relative z-10">
      <div class="p-4 md:p-6 rounded-lg w-full flex justify-between">
        <div>
          <h1 class="text-2xl md:text-3xl font-extrabold text-white mb-2">
            Save <span class="text-red-500">big</span> with our cheap car rental!
          </h1>
          <p class="text-gray-300 text-sm md:text-base mb-4">
            Top Airports. Local Suppliers. 24/7 Support.
          </p>
        </div>
        <div>
          <button
            class="bg-red-500 text-white py-4 px-8 rounded-md hover:bg-red-600 font-semibold text-sm shadow-[0_10px_15px_0_rgba(255,83,48,0.35)]"
          >
            Book a Ride
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
