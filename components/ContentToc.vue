<script lang="ts" setup>
import type { Toc } from '@nuxt/content';
import { useThrottleFn } from '@vueuse/core';

const props = defineProps<{
  toc: Toc,
  dynamic?: boolean // no reactivity
}>()

const curToc = ref<(string | undefined)[]>([undefined, undefined])
function getCurrentToc() {
  const cur = props.toc
  let curH2, curH3;
  for (const item of cur?.links || []) {
    const rect = document.getElementById(item.id)?.getBoundingClientRect()
    if (rect) {
      if (rect.top < 1) curH2 = item.id, curH3 = undefined
    }
    for (const subitem of item.children || []) {
      const rect = document.getElementById(subitem.id)?.getBoundingClientRect()
      if (rect) {
        if (rect.top < 1) curH3 = subitem.id
      }
    }
  }
  return [curH2, curH3]
}
const updateCurrentToc = useThrottleFn(() => {
  curToc.value = getCurrentToc()
}, 100)

onMounted(() => {
  if (props.dynamic === true) {
    updateCurrentToc()
    document.addEventListener('scroll', updateCurrentToc, { passive: true })
  }
})
onBeforeUnmount(() => {
  if (props.dynamic === true) {
    document.removeEventListener('scroll', updateCurrentToc)
  }
})

</script>
<template>
  <ul>
    <li v-for="item in toc.links" :key="item.id" class="mt-1">
      <a class="block text-sm/6 truncate" :class="curToc.at(0) == item.id ? 'text-primary' : ''"
        :href="'#' + item.id">{{ item.text }}</a>
      <ul v-if="item.children">
        <li v-for="subitem in item.children" :key="subitem.id" class="mt-1 ml-3">
          <a class="block text-sm/6 truncate" :class="curToc.at(1) == subitem.id ? 'text-primary' : ''"
            :href="'#' + subitem.id">{{ subitem.text }}</a>
        </li>
      </ul>
    </li>
  </ul>
</template>