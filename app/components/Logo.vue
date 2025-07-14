<script setup lang="ts">
const { appName } = useAppConfig()

defineProps({
  isText: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <NuxtLinkLocale
    to="/"
    class="flex shrink-0 items-center"
    aria-label="Go back to home page"
  >
      <img src="/logo-dark.svg" class="h-8 w-auto mb-2 me-6"alt="logo">

    <span
      v-if="isText"
      class="ml-1 text-xs font-semibold"
    >
      {{ appName }}
    </span>
  </NuxtLinkLocale>
</template>
