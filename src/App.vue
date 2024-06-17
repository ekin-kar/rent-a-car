<template>
  <TheHeader />
  <HeroSection />
  <BookingForm />
  <TheAbout />
  <TheSupport />
  <WhyChoose />
  <TheFaq />
  <AppDownload />
  <TheFooter />
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import HeroSection from '@/components/HeroSection.vue'
import BookingForm from '@/components/BookingForm.vue'
import TheAbout from '@/components/TheAbout.vue'
import TheSupport from '@/components/TheSupport.vue'
import WhyChoose from '@/components/WhyChoose.vue'
import TheFaq from '@/components/TheFaq.vue'
import AppDownload from '@/components/AppDownload.vue'
import TheFooter from '@/components/TheFooter.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
    HeroSection,
    BookingForm,
    TheAbout,
    TheSupport,
    WhyChoose,
    TheFaq,
    AppDownload,
    TheFooter
  }
}
</script>
