<template>
  <TheHeader />
  <HeroSection />
  <BookingForm />
  <TheAbout />
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import HeroSection from '@/components/HeroSection.vue'
import BookingForm from '@/components/BookingForm.vue'
import TheAbout from '@/components/TheAbout.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
    HeroSection,
    BookingForm,
    TheAbout
  }
}
</script>
