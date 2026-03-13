<template>
  <div class="recent-posts">
    <div v-for="post in posts" :key="post.url" class="post-card">
      <h3><a :href="post.url">{{ post.title }}</a></h3>
      <p class="date">{{ formatDate(post.date) }}</p>
      <p class="description">{{ post.description }}</p>
    </div>
  </div>
</template>

<script setup>
import { data } from '../../posts.data.js'

// 只展示最新的 5 篇
const posts = data.slice(0, 5)

function formatDate(date) {
  return new Date(date).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
}
</script>

<style scoped>
.recent-posts {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}
.post-card {
  border: 1px solid #e2e8f0;
  border-radius: 0.75rem;
  padding: 1.25rem;
  transition: all 0.2s;
  background-color: var(--vp-c-bg-soft);
}
.post-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}
.post-card h3 {
  margin: 0 0 0.5rem;
  font-size: 1.2rem;
}
.post-card h3 a {
  color: var(--vp-c-text-1);
  text-decoration: none;
  font-weight: 600;
}
.post-card h3 a:hover {
  color: var(--vp-c-brand-1);
}
.date {
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  margin-bottom: 0.75rem;
}
.description {
  color: var(--vp-c-text-2);
  line-height: 1.5;
}
</style>