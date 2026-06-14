<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { author } from '@/data/articles'
import { Github, Twitter, Mail, Heart, BookOpen, Camera, Coffee } from 'lucide-vue-next'

const hobbies = [
  { icon: BookOpen, name: '阅读', desc: '喜欢散文、小说和诗集' },
  { icon: Camera, name: '摄影', desc: '用镜头记录生活的美好瞬间' },
  { icon: Coffee, name: '咖啡', desc: '每天一杯手冲咖啡是必须的' },
]
</script>

<template>
  <div class="container-custom py-24 lg:py-32">
    <div class="max-w-3xl mx-auto">
      <header class="text-center mb-16">
        <img
          :src="author.avatar"
          :alt="author.name"
          class="w-32 h-32 rounded-full object-cover mx-auto mb-6 animate-fade-in"
        />
        <h1 class="text-3xl lg:text-4xl font-serif font-semibold text-text mb-4 animate-fade-in">
          {{ author.name }}
        </h1>
        <p class="text-text-secondary animate-fade-in" style="animation-delay: 100ms">
          {{ author.bio }}
        </p>

        <div class="flex items-center justify-center gap-4 mt-6 animate-fade-in" style="animation-delay: 200ms">
          <a
            v-if="author.social.github"
            :href="author.social.github"
            target="_blank"
            rel="noopener noreferrer"
            class="p-3 bg-secondary rounded-full shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            <Github :size="22" class="text-text" />
          </a>
          <a
            v-if="author.social.twitter"
            :href="author.social.twitter"
            target="_blank"
            rel="noopener noreferrer"
            class="p-3 bg-secondary rounded-full shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            <Twitter :size="22" class="text-text" />
          </a>
          <a
            v-if="author.social.email"
            :href="`mailto:${author.social.email}`"
            class="p-3 bg-secondary rounded-full shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            <Mail :size="22" class="text-text" />
          </a>
        </div>
      </header>

      <section class="mb-16">
        <h2 class="text-xl font-serif font-semibold text-text mb-8 flex items-center gap-3">
          <span class="w-8 h-0.5 bg-accent"></span>
          关于这个博客
        </h2>
        <div class="card p-8 space-y-4 text-text-secondary leading-relaxed">
          <p>
            这个博客建于2024年，是一个记录生活、分享阅读和观影感想的小天地。
          </p>
          <p>
            选择这个温暖的米白色调，是希望每一个来访的朋友都能感受到舒适和放松。
            就像在咖啡馆里翻阅一本喜欢的书，阳光正好，咖啡正香。
          </p>
          <p>
            如果某篇文章或某句话触动了你，那便是这个博客存在的意义。
          </p>
        </div>
      </section>

      <section class="mb-16">
        <h2 class="text-xl font-serif font-semibold text-text mb-8 flex items-center gap-3">
          <span class="w-8 h-0.5 bg-accent"></span>
          兴趣爱好
        </h2>
        <div class="grid gap-6 md:grid-cols-3">
          <div
            v-for="(hobby, index) in hobbies"
            :key="hobby.name"
            class="card p-6 text-center animate-slide-up"
            :style="{ animationDelay: `${index * 100}ms` }"
          >
            <div class="w-14 h-14 bg-accent-light/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <component :is="hobby.icon" :size="24" class="text-accent" />
            </div>
            <h3 class="font-semibold text-text mb-2">{{ hobby.name }}</h3>
            <p class="text-sm text-text-secondary">{{ hobby.desc }}</p>
          </div>
        </div>
      </section>

      <section class="text-center">
        <h2 class="text-xl font-serif font-semibold text-text mb-4">联系我</h2>
        <p class="text-text-secondary mb-4">
          如果你有任何问题或想聊聊天，欢迎通过邮件联系我。
        </p>
        <a
          :href="`mailto:${author.social.email}`"
          class="btn btn-primary inline-flex items-center gap-2"
        >
          <Mail :size="18" />
          <span>发送邮件</span>
        </a>
      </section>

      <footer class="mt-16 pt-8 border-t border-border text-center text-sm text-text-secondary">
        <p class="flex items-center justify-center gap-1">
          <span>用</span>
          <Heart :size="14" class="text-accent fill-accent" />
          <span>和</span>
          <span class="text-accent">Vue 3</span>
          <span>构建</span>
        </p>
      </footer>
    </div>
  </div>
</template>
