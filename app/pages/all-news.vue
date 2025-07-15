<template>
  <UContainer class="p-8">
    <h1 class="text-3xl font-bold mb-6">
      📰 أخبار Hacker News
    </h1>

    <div v-if="pending">
      جاري تحميل الأخبار...
    </div>

    <div v-else>
      <div
        v-for="item in items"
        :key="item._id"
        class="mb-4 p-4 rounded-lg border border-gray-200/5 shadow"
      >
        <h2 class="text-xl font-semibold text-blue-700">
          {{ item.title }}
        </h2>
        <p class="text-sm text-gray-600">
          ✍️ الكاتب: {{ item.by }} |
          ⭐ التقييم: {{ item.score }} |
          🧾 النوع: {{ item.type }}
        </p>
        <p class="text-xs text-gray-400">
          🕒 التاريخ: {{ formatDate(item.time) }}
        </p>
      </div>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
import { UContainer } from '#components'

const { locale } = useI18n()

const { data: items, pending } = await useAsyncData('hackernews', () =>
  queryCollection(`hackernews_${locale.value}`).limit(10).all(),
)

function formatDate(timestamp: number) {
  const date = new Date(timestamp * 1000)
  return date.toLocaleString()
}
</script>
