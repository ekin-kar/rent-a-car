<template>
  <TheHeader />
  <HeroSection />
  <BookingForm />
  <TheAbout />
  <TheSupport />
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import HeroSection from '@/components/HeroSection.vue'
import BookingForm from '@/components/BookingForm.vue'
import TheAbout from '@/components/TheAbout.vue'
import TheSupport from '@/components/TheSupport.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
    HeroSection,
    BookingForm,
    TheAbout,
    TheSupport
  }
}
</script>
