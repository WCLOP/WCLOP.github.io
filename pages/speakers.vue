<script setup lang="ts">
const ui = useAppConfig().ui

const speakers = await queryContent('/content/speakers').find();

// console.log(speakers)

const toAvatar = (speaker: any) => ({
  name: speaker.name,
  link: speaker.link,
  description: speaker.description,
  image: speaker.image
})
</script>

<template>
  <UContainer :class="[ui.global.prose, 'mt-8 lg:mt-12']">
    <h1 class="text-center">Speakers</h1>

    <div class="divide-y divide-dashed divide-gray-300 dark:divide-gray-700">
      <div v-for="speaker in speakers" class="lg:pt-8 flex max-lg:flex-col lg:gap-12">
        <div class="max-lg:py-4">
          <AvatarSingle :avatar="toAvatar(speaker)" />
        </div>
        <ContentRenderer :value="speaker" class="prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl" />
      </div>
    </div>
  </UContainer>
</template>