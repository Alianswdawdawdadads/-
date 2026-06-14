import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useArticleStore } from '@/stores/article'
import { useThemeStore } from '@/stores/theme'

export function useSearch() {
  const articleStore = useArticleStore()
  const themeStore = useThemeStore()
  const searchInput = ref('')

  const isOpen = computed(() => themeStore.isSearchOpen)

  const open = () => {
    themeStore.openSearch()
    searchInput.value = ''
    articleStore.setSearchQuery('')
  }

  const close = () => {
    themeStore.closeSearch()
    searchInput.value = ''
    articleStore.setSearchQuery('')
  }

  const toggle = () => {
    if (isOpen.value) {
      close()
    } else {
      open()
    }
  }

  const handleInput = (value: string) => {
    searchInput.value = value
    articleStore.setSearchQuery(value)
  }

  const handleKeydown = (e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault()
      toggle()
    }
    if (e.key === 'Escape' && isOpen.value) {
      close()
    }
  }

  onMounted(() => {
    window.addEventListener('keydown', handleKeydown)
  })

  onUnmounted(() => {
    window.removeEventListener('keydown', handleKeydown)
  })

  return {
    isOpen,
    searchInput,
    open,
    close,
    toggle,
    handleInput,
  }
}
