<script setup>
const { locale: current, setLocaleCookie, locales } = useI18n()

const currentLocale = computed(() => {
  return locales.value.find(locale => locale.code === current.value)
})

watch(current, (newLocale) => {
  setLocaleCookie(newLocale)
})

const switchLocalePath = useSwitchLocalePath()
</script>

<template>
  <div class="flex items-center gap-1">
    <ClientOnly>
      <UButton
        v-for="locale in locales"
        :key="locale.code"
        class="cursor-pointer select-none"
        :to="switchLocalePath(locale.code)"
        :color="locale.code === currentLocale?.code ? 'primary' : ''"
      >
        {{ locale.code }}
      </UButton>
      <template #fallback>
        <div class="h-2 w-5" />
      </template>
    </ClientOnly>
  </div>
</template>
