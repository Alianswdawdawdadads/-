<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useArticleStore } from '@/stores/article'
import { articles as articleData } from '@/data/articles'
import { RouterLink } from 'vue-router'
import { formatDate, getYearMonth } from '@/utils/date'
import { Calendar, Clock } from 'lucide-vue-next'

const articleStore = useArticleStore()

onMounted(() => {
  articleStore.setArticles(articleData)
})

const groupedArticles = computed(() => {
  const groups: Record<string, typeof articleStore.articles> = {}
  articleStore.articles.forEach((article) => {
    const yearMonth = getYearMonth(article.date)
    if (!groups[yearMonth]) {
      groups[yearMonth] = []
    }
    groups[yearMonth].push(article)
  })
  return Object.entries(groups).sort((a, b) => b[0].localeCompare(a[0]))
})
</script>

<template>
  <div class="container-custom py-24 lg:py-32">
    <header class="mb-16 text-center">
      <h1 class="text-3xl lg:text-4xl font-serif font-semibold text-text mb-4 animate-fade-in">
        文章归档
      </h1>
      <p class="text-text-secondary animate-fade-in" style="animation-delay: 100ms">
        共 {{ articleStore.articles.length }} 篇文章
      </p>
    </header>

    <div class="max-w-3xl mx-auto">
      <div
        v-for="([yearMonth, articles], index) in groupedArticles"
        :key="yearMonth"
        class="mb-12 animate-slide-up"
        :style="{ animationDelay: `${index * 100}ms` }"
      >
        <div class="flex items-center gap-3 mb-6">
          <Calendar :size="18" class="text-accent" />
          <h2 class="text-lg font-serif font-semibold text-text">{{ yearMonth }}</h2>
          <span class="text-sm text-text-secondary">{{ articles.length }} 篇</span>
        </div>

        <div class="space-y-4">
          <RouterLink
            v-for="article in articles"
            :key="article.slug"
            :to="`/article/${article.slug}`"
            class="card block p-5 hover:border-accent/30 transition-colors duration-200"
          >
            <div class="flex items-start justify-between gap-4">
              <div class="flex-1 min-w-0">
                <h3 class="text-base font-medium text-text hover:text-accent transition-colors duration-200 line-clamp-1">
                  {{ article.title }}
                </h3>
                <p class="text-sm text-text-secondary mt-1 line-clamp-1">
                  {{ article.excerpt }}
                </p>
                <div class="flex items-center gap-4 mt-2 text-xs text-text-secondary">
                  <span class="flex items-center gap-1">
                    <Clock :size="12" />
                    {{ article.readingTime }} 分钟
                  </span>
                  <RouterLink
                    :to="`/category/${article.category.toLowerCase()}`"
                    class="text-accent hover:text-accent/80"
                    @click.stop
                  >
                    {{ article.category }}
                  </RouterLink>
                </div>
              </div>
              <span class="text-sm text-text-secondary flex-shrink-0">
                {{ formatDate(article.date).slice(5) }}
              </span>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
