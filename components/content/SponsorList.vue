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
    <div v-for="item in avatars" :key="item.name" class="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-8">
      <!-- Logo section -->
      <div class="flex-shrink-0">
        <NuxtImg :src="item.image" alt="Sponsor Logo" :class="['rounded-lg shadow-lg object-contain', logoHeight, logoWidth]" />
      </div>
      
      <!-- Text description section -->
      <div class="flex-1 text-center lg:text-left">
        <a :href="item.link" target="_blank" class="font-semibold text-primary text-xl lg:text-2xl block mb-3">{{ item.name }}</a>
        <div class="text-gray-700 dark:text-gray-300 text-base lg:text-lg leading-relaxed">{{ item.description }}</div>
      </div>
    </div>
  </div>
</template>
