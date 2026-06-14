<script setup lang="ts">
import { onMounted } from 'vue'
import { useArticleStore } from '@/stores/article'
import { articles as articleData } from '@/data/articles'
import ArticleList from '@/components/article/ArticleList.vue'
import Sidebar from '@/components/layout/Sidebar.vue'
import { PenLine } from 'lucide-vue-next'

const articleStore = useArticleStore()

onMounted(() => {
  articleStore.setArticles(articleData)
})
</script>

<template>
  <div class="container-custom py-24 lg:py-32">
    <section class="mb-16 text-center">
      <h1 class="text-4xl lg:text-5xl font-serif font-semibold text-text mb-4 animate-fade-in">
        生活的温度
      </h1>
      <p class="text-text-secondary max-w-md mx-auto animate-fade-in" style="animation-delay: 100ms">
        在这里记录生活的点滴，阅读的感悟，观影的心情。愿这些文字能温暖你的时光。
      </p>
      <div class="flex items-center justify-center gap-2 mt-6 text-accent animate-fade-in" style="animation-delay: 200ms">
        <PenLine :size="18" />
        <span class="text-sm">记录生活，传递温暖</span>
      </div>
    </section>

    <div class="lg:grid lg:grid-cols-[1fr_300px] lg:gap-12">
      <main>
        <ArticleList :articles="articleStore.articles" />
      </main>

      <aside class="mt-12 lg:mt-0">
        <Sidebar />
      </aside>
    </div>
  </div>
</template>
