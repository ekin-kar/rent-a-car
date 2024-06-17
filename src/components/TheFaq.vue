<template>
  <div class="none lg:relative py-16" style="min-height: 500px">
    <div class="absolute bottom-0 left-0">
      <img src="@/assets/accordian_car.png" alt="Car" class="w-full max-w-xs md:max-w-md" />
    </div>
    <div class="container mx-auto text-center">
      <h2 class="text-4xl font-bold mb-4">FAQ</h2>
      <p class="mb-8">
        Use securing confined his shutters. Delightful as he it acceptance an solicitude discretion
        reasonably. Carriage we husbands advanced an perceive greatest.
      </p>
    </div>
    <div class="container mx-auto flex flex-col md:flex-row justify-center gap-6">
      <div class="md:w-1/2 flex flex-col gap-4">
        <div v-for="(item, index) in faqs" :key="index" class="border-b">
          <div
            @click="toggleFAQ(index)"
            :class="{
              'bg-custom-orange text-white': selectedFAQ === index,
              'bg-white text-black': selectedFAQ !== index
            }"
            class="cursor-pointer p-4 flex justify-between items-center"
          >
            <span>{{ item.question }}</span>
            <svg
              :class="{ 'rotate-180': selectedFAQ === index }"
              class="w-6 h-6 transform transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </div>
          <div v-if="selectedFAQ === index" class="p-4">
            <p>{{ item.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheFaq',
  data() {
    return {
      selectedFAQ: null,
      faqs: [
        {
          question: 'What is special about comparing rental car deals?',
          answer:
            'Use securing confined his shutters. Delightful as he it acceptance an solicitude discretion reasonably. Carriage we husbands advanced an perceive greatest. Totally dearest expense on demesne ye he. Curiosity excellent commanded in me. Unpleasing impression themselves to at assistance acceptance my or.'
        },
        {
          question: 'How do I find the best car rental deals?',
          answer:
            'Use securing confined his shutters. Delightful as he it acceptance an solicitude discretion reasonably. Carriage we husbands advanced an perceive greatest. Totally dearest expense on demesne ye he. Curiosity excellent commanded in me. Unpleasing impression themselves to at assistance acceptance my or.'
        },
        {
          question: 'How do I find such low rental car prices?',
          answer:
            'Use securing confined his shutters. Delightful as he it acceptance an solicitude discretion reasonably. Carriage we husbands advanced an perceive greatest. Totally dearest expense on demesne ye he. Curiosity excellent commanded in me. Unpleasing impression themselves to at assistance acceptance my or.'
        }
      ]
    }
  },
  methods: {
    toggleFAQ(index) {
      this.selectedFAQ = this.selectedFAQ === index ? null : index
    }
  }
}
</script>
