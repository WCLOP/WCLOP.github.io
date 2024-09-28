<!-- This component is extracted from
    https://github.com/nuxt/ui/blob/dev/src/runtime/components/navigation/HorizontalNavigation.vue
    in order to place an item near the horizontal navigation bar with similar styles
    -->
<script setup lang="ts">
import { twMerge, twJoin } from 'tailwind-merge'
import type { HorizontalNavigationLink } from '#ui/types'

import { horizontalNavigation } from '#ui/ui.config'
import { getULinkProps, mergeConfig } from '#ui/utils'

// @ts-expect-error
import appConfig from '#build/app.config'

const config = mergeConfig<typeof horizontalNavigation>(appConfig.ui.strategy, appConfig.ui.horizontalNavigation, horizontalNavigation)

const props = defineProps<{ link: HorizontalNavigationLink, ui?: any, class?: any }>()

const { ui } = useUI('horizontalNavigation', toRef(props, 'ui'), config, toRef(props, 'class'))

const mergedAttrs = computed(() => ({
  class: props.class,
  ...getULinkProps(props.link)
}))

</script>
<template>
  <ULink v-slot="{ isActive }" v-bind="mergedAttrs" :class="[ui.base, ui.before, ui.after]" :active-class="ui.active"
    :inactive-class="ui.inactive" @keyup.enter="$event.target.blur()">
    <UIcon v-if="link.icon" :name="link.icon"
      :class="twMerge(twJoin(ui.icon.base, isActive ? ui.icon.active : ui.icon.inactive), link.iconClass)" />
    <span v-if="link.label" :class="twMerge(ui.label, link.labelClass)">
      <span v-if="isActive" class="sr-only">
        Current page:
      </span>
      {{ link.label }}
    </span>
    <UBadge v-if="link.badge" v-bind="{
      size: ui.badge.size,
      color: ui.badge.color,
      variant: ui.badge.variant,
      ...((typeof link.badge === 'string' || typeof link.badge === 'number') ? { label: link.badge } : link.badge)
    }" :class="ui.badge.base" />
  </ULink>
</template>