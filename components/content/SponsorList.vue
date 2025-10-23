<!-- Display sponsors with rectangular logos and text descriptions -->
<script setup lang="ts">
withDefaults(defineProps<{
  avatars: {
    name: string,
    link: string,
    description: string
    image: string
  }[]
}>(), {
});

const logoWidth = 'w-48 md:w-72'
const logoHeight = 'h-16 md:h-24'
</script>

<template>
  <div class="flex not-prose gap-8 my-8 flex-col">
    <div v-for="item in avatars" :key="item.name" class="flex flex-col items-center gap-6">
      <!-- Logo section -->
      <div class="flex-shrink-0">
        <NuxtImg :src="item.image" alt="Sponsor Logo" :class="['rounded-lg shadow-lg object-contain', logoHeight, logoWidth]" />
      </div>
      
      <!-- Company name -->
      <div class="text-center">
        <a :href="item.link" target="_blank" class="font-semibold text-primary text-xl lg:text-2xl">{{ item.name }}</a>
      </div>
      
      <!-- Text description section -->
      <div class="w-full max-w-4xl text-justify">
        <div class="text-gray-700 dark:text-gray-300 text-base lg:text-lg leading-relaxed">{{ item.description }}</div>
      </div>
    </div>
  </div>
</template>
