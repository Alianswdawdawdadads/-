<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { renderMarkdown } from '@/utils/markdown'

const props = defineProps<{
  content: string
}>()

const html = ref('')
const isLoading = ref(true)

const render = async () => {
  isLoading.value = true
  try {
    html.value = await renderMarkdown(props.content)
  } catch (error) {
    console.error('Markdown render error:', error)
    html.value = '<p>渲染失败</p>'
  }
  isLoading.value = false
}

onMounted(render)
watch(() => props.content, render)
</script>

<template>
  <div class="prose">
    <div v-if="isLoading" class="animate-pulse space-y-4">
      <div class="h-6 bg-primary rounded w-3/4"></div>
      <div class="h-4 bg-primary rounded w-full"></div>
      <div class="h-4 bg-primary rounded w-5/6"></div>
      <div class="h-4 bg-primary rounded w-4/5"></div>
    </div>
    <div v-else v-html="html"></div>
  </div>
</template>

<style>
.code-block {
  @apply mb-6 rounded-lg overflow-hidden;
}

.code-block pre {
  @apply p-0 bg-primary rounded-lg overflow-x-auto;
}

.code-block code {
  @apply block p-4 text-sm leading-relaxed;
}

.code-block .shiki {
  @apply bg-primary !important;
}
</style>
