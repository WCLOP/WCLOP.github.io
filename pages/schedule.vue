<script setup lang="ts">
const ui = useAppConfig().ui

const items: any = (await queryContent('/content/schedule').findOne()).body

const date = new Date(items[0].start)
</script>

<template>
  <UContainer :class="[ui.global.prose, 'mt-8 lg:mt-12']">
    <h1 class="text-center">Schedule</h1>

    <div class="text-center">
      Date: 
      <span class="font-semibold text-primary">{{ date.toLocaleDateString('en-US', {
        timeZoneName: 'short', year: 'numeric', month: 'short', day: '2-digit'
      }) }}</span>
    </div>

    <Timeline :items="items" class="max-w-3xl mx-auto pb-8" />
  </UContainer>
</template>