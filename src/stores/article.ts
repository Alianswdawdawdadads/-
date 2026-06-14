import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Article, Category, Tag } from '@/data/articles'

export const useArticleStore = defineStore('article', () => {
  const articles = ref<Article[]>([])
  const searchQuery = ref('')
  const isLoading = ref(false)

  const categories = computed<Category[]>(() => {
    const categoryMap = new Map<string, Category>()
    articles.value.forEach((article) => {
      const existing = categoryMap.get(article.category)
      if (existing) {
        existing.count++
      } else {
        categoryMap.set(article.category, {
          name: article.category,
          slug: article.category.toLowerCase(),
          count: 1,
        })
      }
    })
    return Array.from(categoryMap.values())
  })

  const tags = computed<Tag[]>(() => {
    const tagMap = new Map<string, Tag>()
    articles.value.forEach((article) => {
      article.tags.forEach((tag) => {
        const existing = tagMap.get(tag)
        if (existing) {
          existing.count++
        } else {
          tagMap.set(tag, {
            name: tag,
            slug: tag.toLowerCase(),
            count: 1,
          })
        }
      })
    })
    return Array.from(tagMap.values())
  })

  const filteredArticles = computed(() => {
    if (!searchQuery.value) return articles.value
    const query = searchQuery.value.toLowerCase()
    return articles.value.filter(
      (article) =>
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query) ||
        article.content.toLowerCase().includes(query)
    )
  })

  const getArticlesByCategory = (categoryName: string) => {
    return articles.value.filter(
      (article) => article.category.toLowerCase() === categoryName.toLowerCase()
    )
  }

  const getArticlesByTag = (tagName: string) => {
    return articles.value.filter((article) =>
      article.tags.some((tag) => tag.toLowerCase() === tagName.toLowerCase())
    )
  }

  const getArticleBySlug = (slug: string) => {
    return articles.value.find((article) => article.slug === slug)
  }

  const getPrevNextArticle = (slug: string) => {
    const index = articles.value.findIndex((article) => article.slug === slug)
    return {
      prev: index > 0 ? articles.value[index - 1] : null,
      next: index < articles.value.length - 1 ? articles.value[index + 1] : null,
    }
  }

  const setArticles = (data: Article[]) => {
    articles.value = data
  }

  const setSearchQuery = (query: string) => {
    searchQuery.value = query
  }

  const setLoading = (value: boolean) => {
    isLoading.value = value
  }

  return {
    articles,
    searchQuery,
    isLoading,
    categories,
    tags,
    filteredArticles,
    getArticlesByCategory,
    getArticlesByTag,
    getArticleBySlug,
    getPrevNextArticle,
    setArticles,
    setSearchQuery,
    setLoading,
  }
})
