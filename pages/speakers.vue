<script setup lang="ts">
const ui = useAppConfig().ui

const speakers = (await queryContent('/content/speakers').find()).filter(a => a._type === 'markdown')
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
        <ContentRenderer :value="speaker" class="prose-h1:text-3xl prose-h2:text-xl prose-h3:text-lg prose-h2:font-semibold prose-h2:text-blue-600 dark:prose-h2:text-blue-400 prose-h2:mb-4 prose-h2:mt-6 prose-h2:border-b prose-h2:border-gray-200 dark:prose-h2:border-gray-700 prose-h2:pb-2" />
      </div>
    </div>
  </UContainer>
</template>