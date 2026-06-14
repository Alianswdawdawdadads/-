<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useArticleStore } from '@/stores/article'
import { author } from '@/data/articles'
import { Github, Twitter, Mail, Tag } from 'lucide-vue-next'

const articleStore = useArticleStore()
</script>

<template>
  <aside class="space-y-8">
    <div class="card p-6">
      <div class="flex flex-col items-center text-center">
        <img
          :src="author.avatar"
          :alt="author.name"
          class="w-24 h-24 rounded-full object-cover mb-4"
        />
        <h3 class="text-lg font-serif font-semibold text-text">{{ author.name }}</h3>
        <p class="mt-2 text-sm text-text-secondary leading-relaxed">{{ author.bio }}</p>

        <div class="flex gap-4 mt-4">
          <a
            v-if="author.social.github"
            :href="author.social.github"
            target="_blank"
            rel="noopener noreferrer"
            class="p-2 text-text-secondary hover:text-accent transition-colors duration-200"
          >
            <Github :size="20" />
          </a>
          <a
            v-if="author.social.twitter"
            :href="author.social.twitter"
            target="_blank"
            rel="noopener noreferrer"
            class="p-2 text-text-secondary hover:text-accent transition-colors duration-200"
          >
            <Twitter :size="20" />
          </a>
          <a
            v-if="author.social.email"
            :href="`mailto:${author.social.email}`"
            class="p-2 text-text-secondary hover:text-accent transition-colors duration-200"
          >
            <Mail :size="20" />
          </a>
        </div>
      </div>
    </div>

    <div class="card p-6">
      <h4 class="text-sm font-semibold text-text mb-4">分类</h4>
      <div class="space-y-2">
        <RouterLink
          v-for="category in articleStore.categories"
          :key="category.slug"
          :to="`/category/${category.slug}`"
          class="flex items-center justify-between py-2 text-sm text-text-secondary hover:text-accent transition-colors duration-200"
        >
          <span>{{ category.name }}</span>
          <span class="text-xs text-accent/60">{{ category.count }}</span>
        </RouterLink>
      </div>
    </div>

    <div class="card p-6">
      <h4 class="text-sm font-semibold text-text mb-4 flex items-center gap-2">
        <Tag :size="16" />
        <span>标签云</span>
      </h4>
      <div class="flex flex-wrap gap-2">
        <RouterLink
          v-for="tag in articleStore.tags"
          :key="tag.slug"
          :to="`/tag/${tag.slug}`"
          class="tag"
        >
          {{ tag.name }}
        </RouterLink>
      </div>
    </div>
  </aside>
</template>
