<template>
  <section class="shadow-lg rounded-lg p-8 mt-8 max-w-6xl mx-auto">
    <h2 class="text-3xl font-bold mb-6">Book a car</h2>
    <form class="grid grid-cols-1 md:grid-cols-3 gap-6" @submit.prevent>
      <div class="md:col-span-1">
        <label class="block text-gray-700 font-semibold mb-2">
          <font-awesome-icon icon="fa-solid fa-car" class="mr-2 text-custom-orange" />Select Your
          Car Type
        </label>
        <select class="mt-2 p-2 border border-gray-300 rounded w-full">
          <option>Select your car type</option>
        </select>
      </div>
      <div class="md:col-span-1">
        <label class="block text-gray-700 font-semibold mb-2">
          <font-awesome-icon icon="fa-solid fa-map-pin" class="mr-2 text-custom-orange" />Pick-up
          Location
        </label>
        <select class="mt-2 p-2 border border-gray-300 rounded w-full">
          <option>Santa Monica - 2102 Lincoln Blvd</option>
        </select>
      </div>
      <div class="md:col-span-1">
        <label class="block text-gray-700 font-semibold mb-2">
          <font-awesome-icon icon="fa-solid fa-map-pin" class="mr-2 text-custom-orange" />Drop-off
          Location
        </label>
        <select class="mt-2 p-2 border border-gray-300 rounded w-full">
          <option>3669 Oliver Street Wedgewood Texas</option>
        </select>
      </div>
      <div class="md:col-span-2">
        <label class="block text-gray-700 font-semibold mb-2">
          <font-awesome-icon icon="fa-solid fa-calendar" class="mr-2 text-custom-orange" />Pick-up
          Date
        </label>
        <input type="date" class="mt-2 p-2 border border-gray-300 rounded w-full" />
      </div>
      <div class="md:col-span-1">
        <label class="block text-gray-700 font-semibold mb-2">
          <font-awesome-icon icon="clock" class="mr-2 text-custom-orange" />Pick-up Time
        </label>
        <input type="time" class="mt-2 p-2 border border-gray-300 rounded w-full" />
      </div>
      <div class="md:col-span-2">
        <label class="block text-gray-700 font-semibold mb-2">
          <font-awesome-icon icon="fa-solid fa-calendar" class="mr-2 text-custom-orange" />Drop-off
          Date
        </label>
        <input type="date" class="mt-2 p-2 border border-gray-300 rounded w-full" />
      </div>
      <div class="md:col-span-1">
        <label class="block text-gray-700 font-semibold mb-2">
          <font-awesome-icon icon="clock" class="mr-2 text-custom-orange" />Drop-off Time
        </label>
        <input type="time" class="mt-2 p-2 border border-gray-300 rounded w-full" />
      </div>
      <div class="md:col-span-3">
        <button
          class="bg-red-500 text-white py-3 font-semibold px-8 rounded w-full hover:bg-red-600"
        >
          Search
        </button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: 'BookingForm'
}
</script>
<style scoped>
section {
  position: relative;
}

section::before {
  content: 'SAVE 15% if you prepay your booking';
  position: absolute;
  top: -1.5rem;
  right: 1rem;
  background: #4a5568;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  letter-spacing: normal;
}
</style>
