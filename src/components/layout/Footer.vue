<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Heart } from 'lucide-vue-next'
</script>

<template>
  <footer class="mt-16 py-8 border-t border-border bg-primary/50">
    <div class="container-custom">
      <div class="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-text-secondary">
        <div class="flex items-center gap-1">
          <span>made with</span>
          <Heart :size="14" class="text-accent fill-accent" />
          <span>by 小林</span>
        </div>

        <div class="flex items-center gap-6">
          <RouterLink to="/" class="hover:text-accent transition-colors duration-200">
            首页
          </RouterLink>
          <RouterLink to="/about" class="hover:text-accent transition-colors duration-200">
            关于
          </RouterLink>
          <RouterLink to="/archive" class="hover:text-accent transition-colors duration-200">
            归档
          </RouterLink>
        </div>

        <div>
          <span>&copy; {{ new Date().getFullYear() }} 小林的博客. All rights reserved.</span>
        </div>
      </div>
    </div>
  </footer>
</template>
