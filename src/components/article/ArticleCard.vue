<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { Article } from '@/data/articles'
import { formatDate, getRelativeTime } from '@/utils/date'
import { Clock, Calendar } from 'lucide-vue-next'

defineProps<{
  article: Article
}>()
</script>

<template>
  <article class="card overflow-hidden group">
    <RouterLink v-if="article.coverImage" :to="`/article/${article.slug}`" class="block">
      <div class="relative overflow-hidden aspect-[2/1]">
        <img
          :src="article.coverImage"
          :alt="article.title"
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    </RouterLink>

    <div class="p-6">
      <div class="flex items-center gap-4 text-xs text-text-secondary mb-3">
        <span class="flex items-center gap-1">
          <Calendar :size="12" />
          {{ formatDate(article.date) }}
        </span>
        <span class="flex items-center gap-1">
          <Clock :size="12" />
          {{ article.readingTime }} 分钟
        </span>
      </div>

      <RouterLink :to="`/article/${article.slug}`">
        <h3
          class="text-lg font-serif font-semibold text-text mb-2 group-hover:text-accent transition-colors duration-200 line-clamp-2"
        >
          {{ article.title }}
        </h3>
      </RouterLink>

      <p class="text-sm text-text-secondary mb-4 line-clamp-3">
        {{ article.excerpt }}
      </p>

      <div class="flex items-center justify-between">
        <RouterLink
          :to="`/category/${article.category.toLowerCase()}`"
          class="category-badge"
        >
          {{ article.category }}
        </RouterLink>

        <div class="flex gap-2">
          <RouterLink
            v-for="tag in article.tags.slice(0, 2)"
            :key="tag"
            :to="`/tag/${tag.toLowerCase()}`"
            class="tag text-xs"
          >
            {{ tag }}
          </RouterLink>
        </div>
      </div>
    </div>
  </article>
</template>
