<template>
  <header class="flex justify-between items-center max-w-6xl m-auto p-6 tracking-tighter">
    <img :src="logoSrc" alt="Logo" class="w-36" />
    <div class="flex space-x-4 gap-4">
      <router-link to="/" class="hover:text-gray-500 cursor-pointer font-semibold"
        >Home</router-link
      >
      <router-link to="/" class="hover:text-gray-500 cursor-pointer font-semibold"
        >About</router-link
      >
      <router-link to="/" class="hover:text-gray-500 cursor-pointer font-semibold"
        >Vehicles</router-link
      >
      <router-link to="/" class="hover:text-gray-500 cursor-pointer font-semibold"
        >Our Team</router-link
      >
      <router-link to="/" class="hover:text-gray-500 cursor-pointer font-semibold"
        >Contact</router-link
      >
    </div>
    <div class="flex justify-center items-center gap-5 tracking-normal">
      <button class="font-semibold">Sign In</button>
      <button
        class="font-semibold bg-custom-red py-3 px-7 text-white rounded-sm shadow-[0_10px_15px_0_rgba(255,83,48,0.35)]"
      >
        Register
      </button>
    </div>
  </header>
</template>

<script>
import logoSrc from '@/assets/logo.png'

export default {
  data() {
    return {
      logoSrc
    }
  }
}
</script>
