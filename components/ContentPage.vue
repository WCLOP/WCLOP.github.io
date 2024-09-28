<!-- Render a markdown document as a page with TOC and responsive layout. -->
<script setup lang="ts">
defineProps<{
  path?: string
}>();

const { toc } = useContent()
const showMobileToc = ref(false)
</script>

<template>
  <UContainer class="flex flex-col lg:grid lg:grid-cols-12 lg:gap-4">

    <main class="mt-8 lg:mt-12 max-lg:w-full max-lg:max-w-full lg:col-span-10 prose max-w-none lg:prose-lg dark:prose-invert">
      <ContentDoc :path="path" v-slot="{ doc }">
        <article>
          <h1 class="text-center">{{ doc.title }}</h1>
          <ContentRenderer :value="doc" />
        </article>
      </ContentDoc>
    </main>

    <div class="lg:col-span-2 order-first lg:order-last z-10">
      <div v-if="toc" class="lg:sticky lg:top-20">
        <div class="py-3 border-b border-dashed border-gray-200 dark:border-gray-800 lg:border-0 space-y-3">
          <button class="flex items-center gap-1.5 lg:cursor-text lg:select-text w-full group"
            @click="showMobileToc = !showMobileToc">
            <span class="font-semibold text-sm/6 truncate">Table of Contents</span>
            <UIcon name="i-heroicons-chevron-right" :class="showMobileToc ? 'rotate-90' : ''"
              class="lg:hidden ms-auto" />
          </button>
          <ContentToc :toc="toc" dynamic class="lg:block" :class="showMobileToc ? '' : 'hidden'" />
        </div>
      </div>
    </div>
  </UContainer>
</template>