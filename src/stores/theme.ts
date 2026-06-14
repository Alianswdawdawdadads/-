import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const isScrolled = ref(false)
  const isSearchOpen = ref(false)
  const isMobileMenuOpen = ref(false)

  const setScrolled = (value: boolean) => {
    isScrolled.value = value
  }

  const toggleSearch = () => {
    isSearchOpen.value = !isSearchOpen.value
  }

  const openSearch = () => {
    isSearchOpen.value = true
  }

  const closeSearch = () => {
    isSearchOpen.value = false
  }

  const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
  }

  const closeMobileMenu = () => {
    isMobileMenuOpen.value = false
  }

  return {
    isScrolled,
    isSearchOpen,
    isMobileMenuOpen,
    setScrolled,
    toggleSearch,
    openSearch,
    closeSearch,
    toggleMobileMenu,
    closeMobileMenu,
  }
})
