<script setup lang="ts">
import { computed, watch, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { useSearch } from '@/composables/useSearch'
import { useArticleStore } from '@/stores/article'
import { Search, X, ArrowRight } from 'lucide-vue-next'

const router = useRouter()
const articleStore = useArticleStore()
const { isOpen, searchInput, close, handleInput } = useSearch()

const searchResults = computed(() => {
  if (!searchInput.value) return []
  return articleStore.filteredArticles.slice(0, 8)
})

const handleResultClick = (slug: string) => {
  router.push(`/article/${slug}`)
  close()
}

watch(isOpen, (open) => {
  if (open) {
    nextTick(() => {
      document.getElementById('search-input')?.focus()
    })
  }
})
</script>

<template>
  <Teleport to="body">
    <Transition name="fade">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4"
        @click.self="close"
      >
        <div class="absolute inset-0 bg-black/30 backdrop-blur-sm" @click="close"></div>

        <div class="relative w-full max-w-2xl bg-secondary rounded-xl shadow-soft-lg overflow-hidden animate-slide-up">
          <div class="flex items-center gap-3 px-4 py-4 border-b border-border">
            <Search :size="20" class="text-text-secondary" />
            <input
              id="search-input"
              type="text"
              :value="searchInput"
              @input="handleInput(($event.target as HTMLInputElement).value)"
              placeholder="搜索文章..."
              class="flex-1 bg-transparent text-text placeholder-text-secondary focus:outline-none"
            />
            <button
              @click="close"
              class="p-1 text-text-secondary hover:text-text transition-colors duration-200"
            >
              <X :size="20" />
            </button>
          </div>

          <div v-if="searchResults.length > 0" class="max-h-[50vh] overflow-y-auto">
            <button
              v-for="article in searchResults"
              :key="article.slug"
              @click="handleResultClick(article.slug)"
              class="w-full px-4 py-3 flex items-center justify-between hover:bg-primary transition-colors duration-200 text-left"
            >
              <div>
                <h4 class="text-sm font-medium text-text">{{ article.title }}</h4>
                <p class="text-xs text-text-secondary mt-0.5 line-clamp-1">
                  {{ article.excerpt }}
                </p>
              </div>
              <ArrowRight :size="16" class="text-text-secondary flex-shrink-0" />
            </button>
          </div>

          <div v-else-if="searchInput" class="px-4 py-8 text-center text-text-secondary text-sm">
            没有找到相关文章
          </div>

          <div v-else class="px-4 py-6 text-center text-text-secondary text-xs">
            <p>输入关键词搜索文章</p>
            <p class="mt-1">按 <kbd class="px-1.5 py-0.5 bg-primary rounded text-text">Esc</kbd> 关闭</p>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
