<!-- Display a line of avatars -->
<script setup lang="ts">
withDefaults(defineProps<{
  avatar: {
    name: string,
    link: string,
    description: string
    image: string
  }
}>(), {
});

const width = 'w-24 lg:w-60'
const height = 'h-24 lg:h-60'
</script>

<template>
  <div class="flex not-prose gap-8 flex-wrap">
    <div :class="['flex lg:flex-col items-center gap-3', 'lg:w-60']">
      <NuxtImg :src="avatar.image" alt="Avatar" :class="['rounded-full shadow-lg object-cover', height, width]" />
      <div class="flex flex-col items-center">
        <a :href="avatar.link" target="_blank" class="font-semibold text-primary text-center">{{ avatar.name }}</a>
        <div class="text-center">{{ avatar.description }}</div>
      </div>
    </div>
  </div>
</template>