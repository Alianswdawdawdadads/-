<script setup lang="ts">
import type { Article } from '@/data/articles'
import ArticleCard from './ArticleCard.vue'

defineProps<{
  articles: Article[]
}>()
</script>

<template>
  <div class="grid gap-6">
    <ArticleCard
      v-for="(article, index) in articles"
      :key="article.slug"
      :article="article"
      class="animate-slide-up"
      :style="{ animationDelay: `${index * 100}ms` }"
    />

    <div v-if="articles.length === 0" class="text-center py-12">
      <p class="text-text-secondary">暂无文章</p>
    </div>
  </div>
</template>
