# 治愈系生活随笔博客 - 技术架构文档

## 1. 架构设计

### 1.1 整体架构

```mermaid
graph TB
    subgraph 前端层
        A[Vue 3 App]
        B[Vue Router 4]
        C[Pinia Store]
    end

    subgraph 视图层
        D[Views 页面组件]
        E[Components 公共组件]
    end

    subgraph 样式层
        F[Tailwind CSS 3.x]
        G[全局样式变量]
    end

    subgraph 内容层
        H[Markdown 文章]
        I[Shiki 代码高亮]
        J[vite-plugin-vue-markdown]
    end

    subgraph 工具层
        K[VueUse]
        L[dayjs]
        M[@vueuse/head]
    end

    A --> B
    A --> C
    D --> E
    E --> F
    A --> G
    H --> J
    J --> I
    A --> K
    A --> L
    A --> M

    style A fill:#b4846c,color:#fff
    style F fill:#d7c4b8
    style H fill:#faf8f5
```

### 1.2 技术架构分层

| 层级 | 职责 | 技术实现 |
|------|------|----------|
| 应用层 | 根组件、路由挂载 | Vue 3 App |
| 路由层 | 页面导航、权限控制 | Vue Router 4 (History 模式) |
| 状态层 | 全局状态、主题、搜索 | Pinia + localStorage 持久化 |
| 视图层 | 页面与组件渲染 | Vue 3 Composition API |
| 样式层 | 样式隔离、主题切换 | Tailwind CSS 3.x |
| 内容层 | Markdown 解析、代码高亮 | vite-plugin-vue-markdown + Shiki |
| 工具层 | 组合式函数、日期处理、SEO | VueUse、dayjs、@vueuse/head |

---

## 2. 技术选型详解

### 2.1 核心框架

| 技术 | 版本 | 说明 |
|------|------|------|
| Vue | 3.4+ | 组合式 API (Composition API) 开发 |
| Vite | 5.x | 快速的开发服务器和构建工具 |

### 2.2 路由配置

```typescript
// Vue Router 4.x History 模式配置
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/article/:slug', name: 'article', component: ArticleView },
    { path: '/about', name: 'about', component: AboutView },
    { path: '/archive', name: 'archive', component: ArchiveView },
    { path: '/category/:name', name: 'category', component: CategoryView },
    { path: '/tag/:name', name: 'tag', component: TagView },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})
```

### 2.3 状态管理 (Pinia)

| Store | 用途 | 持久化 |
|-------|------|--------|
| themeStore | 主题配置 | localStorage |
| articleStore | 文章数据 | 内存 |
| searchStore | 搜索状态 | 内存 |

### 2.4 CSS 方案

**Tailwind CSS 配置**

```javascript
// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#faf8f5',
        secondary: '#ffffff',
        accent: '#b4846c',
        'accent-light': '#d7c4b8',
        text: '#4a4a4a',
        'text-secondary': '#8a8a8a',
        border: '#e8e4df',
      },
      fontFamily: {
        serif: ['Noto Serif SC', 'STKaiti', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 2px 12px rgba(0,0,0,0.06)',
      },
      maxWidth: {
        container: '1200px',
        content: '800px',
        sidebar: '300px',
      },
    },
  },
  plugins: [],
}
```

### 2.5 Markdown 处理

| 技术 | 用途 |
|------|------|
| vite-plugin-vue-markdown | 将 .md 文件作为 Vue 组件导入，支持在 Markdown 中写 Vue 组件 |
| Shiki | 高质量代码高亮，支持多种主题 |

---

## 3. 路由定义

| 路由 | 页面组件 | 传参 | 说明 |
|------|----------|------|------|
| `/` | HomeView | - | 首页文章列表 |
| `/article/:slug` | ArticleView | slug: 文章别名 | 文章详情页 |
| `/about` | AboutView | - | 关于页面 |
| `/archive` | ArchiveView | - | 归档页面 |
| `/category/:name` | CategoryView | name: 分类名 | 分类文章列表 |
| `/tag/:name` | TagView | name: 标签名 | 标签文章列表 |

---

## 4. 组件设计

### 4.1 布局组件

| 组件 | 路径 | 说明 |
|------|------|------|
| Navbar | components/layout/Navbar.vue | 顶部导航栏，支持滚动变色 |
| Sidebar | components/layout/Sidebar.vue | 侧边栏，包含博主信息、分类、标签 |
| Footer | components/layout/Footer.vue | 页脚 |

### 4.2 文章组件

| 组件 | 路径 | 说明 |
|------|------|------|
| ArticleCard | components/article/ArticleCard.vue | 文章卡片，悬停上浮效果 |
| ArticleList | components/article/ArticleList.vue | 文章列表容器 |
| MarkdownRenderer | components/article/MarkdownRenderer.vue | Markdown 渲染器 |

### 4.3 通用组件

| 组件 | 路径 | 说明 |
|------|------|------|
| SearchModal | components/common/SearchModal.vue | 搜索弹窗 (Cmd+K) |
| ImageLightbox | components/common/ImageLightbox.vue | 图片灯箱，点击放大 |

---

## 5. 组合式函数 (Composables)

| 函数 | 文件 | 功能 |
|------|------|------|
| useTheme | composables/useTheme.ts | 主题管理、滚动检测 |
| useSearch | composables/useSearch.ts | 全局搜索逻辑 |
| useScroll | composables/useScroll.ts | 滚动位置跟踪 |
| useArticle | composables/useArticle.ts | 文章数据获取 |
| useCategory | composables/useCategory.ts | 分类数据处理 |
| useTag | composables/useTag.ts | 标签数据处理 |

---

## 6. 静态数据模型

### 6.1 文章数据结构

```typescript
interface Article {
  slug: string;           // 文章别名 (URL 路径)
  title: string;          // 标题
  date: string;          // 发布日期 (YYYY-MM-DD)
  category: string;     // 分类
  tags: string[];        // 标签数组
  excerpt: string;       // 摘要
  coverImage?: string;  // 封面图
  readingTime: number;   // 阅读时长 (分钟)
  content: string;       // Markdown 内容
}
```

### 6.2 分类结构

```typescript
interface Category {
  name: string;         // 分类名称
  slug: string;         // 分类别名
  count: number;         // 文章数量
}
```

### 6.3 标签结构

```typescript
interface Tag {
  name: string;         // 标签名称
  slug: string;         // 标签别名
  count: number;         // 文章数量
}
```

---

## 7. 部署适配

### 7.1 纯静态打包

```javascript
// vite.config.ts
export default {
  build: {
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: {
          'vue-vendor': ['vue', 'vue-router', 'pinia'],
          'markdown-vendor': ['vite-plugin-vue-markdown', 'shiki'],
        },
      },
    },
  },
}
```

### 7.2 可选预渲染

使用 `vite-plugin-prerender` 对固定页面（首页、关于、归档）进行预渲染，提升 SEO 效果。

---

## 8. 开发规范

### 8.1 组件规范

- 单一职责：每个组件只负责一个功能
- 文件命名：PascalCase 命名法 (如 `ArticleCard.vue`)
- 代码行数：单个组件不超过 300 行
- 组合式函数：以 `use` 开头命名

### 8.2 样式规范

- 使用 Tailwind CSS 原子类
- 避免内联样式，特殊情况使用 CSS 变量
- 响应式优先，使用 `sm:`、`md:`、`lg:` 断点前缀

### 8.3 Git 提交规范

| 类型 | 说明 |
|------|------|
| feat | 新功能 |
| fix | 修复 bug |
| docs | 文档更新 |
| style | 代码格式调整 |
| refactor | 重构 |
| test | 测试相关 |
