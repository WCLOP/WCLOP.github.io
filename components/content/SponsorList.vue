<!-- Display sponsors with rectangular logos -->
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

const width = 'w-48 md:w-72'
const height = 'h-16 md:h-24'
</script>

<template>
  <div class="flex not-prose gap-6 md:gap-8 justify-center my-4 flex-wrap">
    <div v-for="item in avatars" :key="item.name" :class="['flex flex-col items-center gap-3', width]">
      <NuxtImg :src="item.image" alt="Sponsor Logo" :class="['rounded-lg shadow-lg object-contain', height, width]" />
      <a :href="item.link" target="_blank" class="font-semibold text-primary text-center">{{ item.name }}</a>
      <div class="text-center">{{ item.description }}</div>
    </div>
  </div>
</template>
