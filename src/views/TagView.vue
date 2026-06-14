<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { useArticleStore } from '@/stores/article'
import { articles as articleData } from '@/data/articles'
import ArticleList from '@/components/article/ArticleList.vue'
import Sidebar from '@/components/layout/Sidebar.vue'
import { ArrowLeft, Tag } from 'lucide-vue-next'

const route = useRoute()
const articleStore = useArticleStore()

onMounted(() => {
  articleStore.setArticles(articleData)
})

const tagName = computed(() => route.params.name as string)

const tagArticles = computed(() => {
  return articleStore.getArticlesByTag(tagName.value)
})
</script>

<template>
  <div class="container-custom py-24 lg:py-32">
    <RouterLink
      to="/"
      class="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors duration-200 mb-8"
    >
      <ArrowLeft :size="18" />
      <span>返回首页</span>
    </RouterLink>

    <header class="mb-12">
      <div class="flex items-center gap-3 mb-2">
        <Tag :size="28" class="text-accent" />
        <h1 class="text-3xl lg:text-4xl font-serif font-semibold text-text">
          {{ tagName }}
        </h1>
      </div>
      <p class="text-text-secondary">
        共 {{ tagArticles.length }} 篇文章
      </p>
    </header>

    <div class="lg:grid lg:grid-cols-[1fr_300px] lg:gap-12">
      <main>
        <ArticleList :articles="tagArticles" />
      </main>

      <aside class="mt-12 lg:mt-0">
        <Sidebar />
      </aside>
    </div>
  </div>
</template>
