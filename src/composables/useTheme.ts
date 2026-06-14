import { computed } from 'vue'
import { useThemeStore } from '@/stores/theme'
import { useScroll } from './useScroll'

export function useTheme() {
  const themeStore = useThemeStore()
  const { scrollY } = useScroll()

  const isScrolled = computed(() => themeStore.isScrolled)
  const navbarBackground = computed(() => {
    return isScrolled.value ? 'bg-secondary/95 backdrop-blur-sm shadow-soft' : 'bg-transparent'
  })

  return {
    isScrolled,
    scrollY,
    navbarBackground,
  }
}
