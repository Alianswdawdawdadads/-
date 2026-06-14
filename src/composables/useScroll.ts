import { ref, onMounted, onUnmounted } from 'vue'
import { useThemeStore } from '@/stores/theme'

export function useScroll() {
  const scrollY = ref(0)
  const themeStore = useThemeStore()

  const handleScroll = () => {
    scrollY.value = window.scrollY
    themeStore.setScrolled(window.scrollY > 50)
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return {
    scrollY,
  }
}
