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

const ui = {
  size: {
    '3xl': 'h-48 w-48 text-3xl',
  }
}
</script>

<template>
  <div class="flex not-prose gap-8 justify-center my-4">
    <div v-for="item in avatars" :key="item.name" class="flex flex-col items-center w-48 gap-3">
      <UAvatar class="shadow-lg" :ui="ui" :src="item.image" alt="Avatar"
        size="3xl" />
      <a :href="item.link" target="_blank" class="font-semibold text-primary">{{ item.name }}</a>
      <div class="text-center">{{ item.description }}</div>
    </div>
  </div>
</template>