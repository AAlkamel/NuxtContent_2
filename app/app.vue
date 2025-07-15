<script setup>
import { Toaster } from 'vue-sonner';
import * as locales from '@nuxt/ui/locale';
const { locale } = useI18n();
</script>

<template>
  <LayoutScrollToTop />
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <UApp :locale="locales[locale]">
      <NuxtPage />
    </UApp>
  </NuxtLayout>
  <Toaster close-button />
</template>
<style>
.page-enter-active,
.page-leave-active,
.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(-100px);
  filter: blur(2px);
}
.page-enter-from {
  transform: translateY(150px);
}
.layout-enter-from,
.layout-leave-to {
  opacity: 0;
  transform: translateX(-150px);
  filter: blur(2px);
}

.layout-enter-from {
  transform: translateX(150px);
}
</style>
