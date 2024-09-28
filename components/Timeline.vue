<script setup lang="ts">
const props = defineProps<{
  items: {
    label: string
    start: Date | string | number
    end?: Date | string | number
  }[]
}>()

const sortedItems = computed(() => props.items.toSorted((a, b) => {
  return new Date(a.start).getTime() - new Date(b.start).getTime()
}).map(item => {
  return {
    ...item,
    start: new Date(item.start),
    end: item.end ? new Date(item.end) : undefined
  }
}))

const lineStyle = 'w-[2px] bg-slate-300 dark:bg-slate-700'

const formatDatetime = (date: Date) => {
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZoneName: 'short',
    hour: 'numeric',
    minute: 'numeric',
  })
}

</script>

<template>
  <div class="flex flex-col">
    <div v-for="item in sortedItems" :key="item.label" class="flex">
      <div class="flex flex-col items-center justify-center">
        <div :class="['grow', lineStyle]"></div>
        <div class="h-4 w-4 rounded-full bg-primary"></div>
        <div :class="['grow', lineStyle]"></div>
      </div>
      <div class="pl-6 py-4">
        <div class="text-sm text-slate-600 dark:text-slate-400">
          <time :datetime="item.start.toISOString()">{{ item.start.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
          }) }}</time>
          <span v-if="item.end"> - <time :datetime="item.end.toISOString()">{{
            item.end.toLocaleTimeString('en-US', {
              hour: 'numeric',
              minute: 'numeric',
            }) }}</time></span>
        </div>
        <div class="font-semibold">{{ item.label }}</div>
      </div>
    </div>
  </div>
</template>