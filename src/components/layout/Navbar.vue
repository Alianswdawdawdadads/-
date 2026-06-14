<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useTheme } from '@/composables/useTheme'
import { useSearch } from '@/composables/useSearch'
import { useThemeStore } from '@/stores/theme'
import { Menu, X, Search } from 'lucide-vue-next'

const { navbarBackground } = useTheme()
const themeStore = useThemeStore()
const { toggle } = useSearch()

const navLinks = [
  { name: '首页', path: '/' },
  { name: '关于', path: '/about' },
  { name: '归档', path: '/archive' },
]
</script>

<template>
  <header
    :class="['fixed top-0 left-0 right-0 z-50 transition-all duration-300', navbarBackground]"
  >
    <nav class="container-custom">
      <div class="flex items-center justify-between h-16 lg:h-18">
        <RouterLink to="/" class="flex items-center gap-2">
          <span class="text-xl font-serif font-semibold text-accent">小林的博客</span>
        </RouterLink>

        <div class="hidden md:flex items-center gap-8">
          <RouterLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="text-sm text-text-secondary hover:text-accent transition-colors duration-200"
            active-class="text-accent"
          >
            {{ link.name }}
          </RouterLink>

          <button
            @click="toggle"
            class="p-2 text-text-secondary hover:text-accent transition-colors duration-200"
            aria-label="搜索"
          >
            <Search :size="20" />
          </button>
        </div>

        <button
          class="md:hidden p-2 text-text-secondary hover:text-accent transition-colors duration-200"
          @click="themeStore.toggleMobileMenu()"
          aria-label="菜单"
        >
          <Menu v-if="!themeStore.isMobileMenuOpen" :size="24" />
          <X v-else :size="24" />
        </button>
      </div>

      <div
        v-if="themeStore.isMobileMenuOpen"
        class="md:hidden py-4 border-t border-border animate-slide-up"
      >
        <div class="flex flex-col gap-4">
          <RouterLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="text-sm text-text-secondary hover:text-accent transition-colors duration-200 py-2"
            active-class="text-accent"
            @click="themeStore.closeMobileMenu()"
          >
            {{ link.name }}
          </RouterLink>

          <button
            @click="toggle(); themeStore.closeMobileMenu()"
            class="flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors duration-200 py-2"
          >
            <Search :size="18" />
            <span>搜索</span>
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>
