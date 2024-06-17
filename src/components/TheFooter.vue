<template>
  <footer class="h-60 max-w-7xl mx-auto px-4 md:px-0 flex flex-col justify-between items-center">
    <div class="flex flex-col md:flex-row items-start justify-around w-full md:items-center">
      <div class="flex flex-col py-4 md:w-1/3">
        <h2 class="text-3xl font-bold mb-2">CAR Rental</h2>
        <p class="text-lg">(123) 498-4600</p>
        <p class="text-lg">example@carrental.com</p>
      </div>

      <div class="flex flex-col py-4 md:w-1/3">
        <h2 class="text-3xl font-bold mb-2">Working Hours</h2>
        <p class="text-lg">Mon - Fri: 09:00AM - 09:00PM</p>
        <p class="text-lg">Sat: 09:00AM - 07:00PM</p>
        <p class="text-lg">Sun: Closed</p>
      </div>

      <div class="flex flex-col py-4 md:w-1/3">
        <h2 class="text-3xl font-bold mb-2">Newsletter</h2>
        <form class="flex flex-col mt-2" @submit.prevent>
          <input type="email" placeholder="Enter your email" class="p-3 rounded-md bg-slate-300" />
          <button type="submit" class="bg-custom-orange text-white p-3 rounded-md mt-2">
            Subscribe
          </button>
        </form>
      </div>
    </div>
    <p class="text-lg mb-6 font-bold">&copy; 2024</p>
  </footer>
</template>
