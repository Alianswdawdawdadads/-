<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRoute, useRouter, RouterLink } from 'vue-router'
import { useArticleStore } from '@/stores/article'
import { articles as articleData } from '@/data/articles'
import MarkdownRenderer from '@/components/article/MarkdownRenderer.vue'
import { formatDate } from '@/utils/date'
import { Calendar, Clock, ArrowLeft, ArrowRight, Tag } from 'lucide-vue-next'

const route = useRoute()
const router = useRouter()
const articleStore = useArticleStore()

const slug = computed(() => route.params.slug as string)
const article = computed(() => articleStore.getArticleBySlug(slug.value))
const { prev, next } = computed(() => articleStore.getPrevNextArticle(slug.value)).value

onMounted(() => {
  articleStore.setArticles(articleData)
})

const handleBack = () => {
  router.back()
}
</script>

<template>
  <div class="container-custom py-24 lg:py-32">
    <button
      @click="handleBack"
      class="flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors duration-200 mb-8"
    >
      <ArrowLeft :size="18" />
      <span>返回</span>
    </button>

    <article v-if="article">
      <header class="mb-12 text-center">
        <div class="flex items-center justify-center gap-4 text-sm text-text-secondary mb-4">
          <span class="flex items-center gap-1">
            <Calendar :size="14" />
            {{ formatDate(article.date) }}
          </span>
          <span class="flex items-center gap-1">
            <Clock :size="14" />
            {{ article.readingTime }} 分钟阅读
          </span>
        </div>

        <h1 class="text-3xl lg:text-4xl font-serif font-semibold text-text mb-6">
          {{ article.title }}
        </h1>

        <div class="flex items-center justify-center gap-3">
          <RouterLink
            :to="`/category/${article.category.toLowerCase()}`"
            class="category-badge"
          >
            {{ article.category }}
          </RouterLink>
          <span
            v-for="tag in article.tags"
            :key="tag"
            class="tag flex items-center gap-1"
          >
            <Tag :size="12" />
            <RouterLink :to="`/tag/${tag.toLowerCase()}`" class="hover:text-accent">
              {{ tag }}
            </RouterLink>
          </span>
        </div>
      </header>

      <div v-if="article.coverImage" class="mb-12 rounded-lg overflow-hidden">
        <img
          :src="article.coverImage"
          :alt="article.title"
          class="w-full h-auto object-cover animate-fade-in"
        />
      </div>

      <div class="max-w-[800px] mx-auto">
        <MarkdownRenderer :content="article.content" />
      </div>

      <footer class="max-w-[800px] mx-auto mt-16 pt-8 border-t border-border">
        <div class="flex items-center justify-between">
          <RouterLink
            v-if="prev"
            :to="`/article/${prev.slug}`"
            class="flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors duration-200 max-w-[45%]"
          >
            <ArrowLeft :size="16" />
            <span class="line-clamp-1">{{ prev.title }}</span>
          </RouterLink>
          <div v-else></div>

          <RouterLink
            v-if="next"
            :to="`/article/${next.slug}`"
            class="flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors duration-200 max-w-[45%] text-right"
          >
            <span class="line-clamp-1">{{ next.title }}</span>
            <ArrowRight :size="16" />
          </RouterLink>
          <div v-else></div>
        </div>
      </footer>
    </article>

    <div v-else class="text-center py-16">
      <p class="text-text-secondary">文章不存在</p>
      <RouterLink to="/" class="link mt-4 inline-block">返回首页</RouterLink>
    </div>
  </div>
</template>
