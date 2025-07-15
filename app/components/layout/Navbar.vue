<script setup lang="ts">
const navigation = getNavigation('home');
const links = computed(() => {
  return Object.values(navigation).map((item) => ({
    label: item.name,
    icon: item.icon,
    to: item.to,
  }));
});
</script>

<template>
  <div
    class="bg-elevated/80 dark:bg-dark-blue-950/30 backdrop-blur-lg fixed top-0 left-0 right-0 z-50"
  >
    <UContainer class="flex items-center justify-between py-2">
      <ULink to="/">
        <img src="/logo-dark.svg" class="h-8 w-auto mb-2 me-6" alt="logo" />
      </ULink>
      <UNavigationMenu :items="links" />
      <div class="flex">
        <LayoutColorMode class="ms-3 me-1" />
        <SettingsLanguageToggle />
      </div>
    </UContainer>
  </div>
</template>
