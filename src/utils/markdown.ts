import { marked } from 'marked'
import { createHighlighter, type Highlighter } from 'shiki'

let highlighter: Highlighter | null = null

const initHighlighter = async () => {
  if (!highlighter) {
    highlighter = await createHighlighter({
      themes: ['github-light'],
      langs: ['javascript', 'typescript', 'vue', 'html', 'css', 'json', 'bash', 'markdown'],
    })
  }
  return highlighter
}

marked.setOptions({
  gfm: true,
  breaks: true,
})

export const renderMarkdown = async (content: string): Promise<string> => {
  const hl = await initHighlighter()

  const renderer = new marked.Renderer()

  renderer.code = ({ text, lang }: { text: string; lang?: string }) => {
    const language = lang || 'text'
    try {
      const html = hl.codeToHtml(text, {
        lang: language,
        theme: 'github-light',
      })
      return `<div class="code-block">${html}</div>`
    } catch {
      return `<div class="code-block"><pre><code>${text}</code></pre></div>`
    }
  }

  marked.use({ renderer })

  return marked.parse(content) as string
}

export const renderMarkdownSync = (content: string): string => {
  return marked.parse(content) as string
}
