<!-- Display a line of avatars -->
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

const width = 'w-28 md:w-48'
const height = 'h-28 md:h-48'
</script>

<template>
  <div class="flex not-prose gap-6 md:gap-8 justify-center my-4 flex-wrap">
    <div v-for="item in avatars" :key="item.name" :class="['flex flex-col items-center gap-3', width]">
      <NuxtImg :src="item.image" alt="Avatar" :class="['rounded-full shadow-lg object-cover', height, width]" />
      <a :href="item.link" target="_blank" class="font-semibold text-primary text-center">{{ item.name }}</a>
      <div class="text-center">{{ item.description }}</div>
    </div>
  </div>
</template>