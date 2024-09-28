<script setup lang="ts">
const links = [
  [{
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/'
  }, {
    label: 'Speakers',
    icon: 'i-heroicons-presentation-chart-bar',
    to: '/speakers'
  }, {
    label: 'Schedule',
    icon: 'i-heroicons-calendar-days',
    to: '/schedule'
  }, {
    label: 'Call for papers',
    icon: 'i-heroicons-paper-airplane',
    to: '/call-for-papers'
  }], [{
    label: 'Settings',
    icon: 'i-heroicons-cog',
    to: '/settings'
  }, {
    label: 'Contact Us',
    icon: 'i-heroicons-information-circle',
    to: '/about'
  }]
]

const appConfig = useAppConfig()
</script>

<template>
  <div class="w-full">
    <header class="w-full border-b border-gray-200 dark:border-gray-700 sticky top-0 bg-white/90 dark:bg-gray-900/80 backdrop-blur z-30">
      <!-- Wrap a container to align header's width with content -->
      <UContainer>
        <div class="w-full flex gap-4">
          <div class="py-3.5 font-semibold text-nowrap"><span class="text-primary">{{ appConfig.brandTitle }}</span></div>
          <UHorizontalNavigation :links="links" />
        </div>
      </UContainer>
    </header>
    <NuxtPage />
    <UNotifications />
  </div>
</template>