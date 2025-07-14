<script setup>
import { Toaster } from 'vue-sonner'
import * as locales from '@nuxt/ui/locale'

const { locale } = useI18n()
</script>

<template>
  <Html :lang="locale">
    <Body>
      <LayoutScrollToTop />
      <NuxtLayout>
        <UApp :locale="locales[locale]">
          <NuxtPage />
        </UApp>
      </NuxtLayout>
      <Toaster close-button />
    </Body>
  </Html>
</template>
