<script setup lang="ts">
import { computed } from 'vue'
import { categoryMeta, resources } from '../../../resources'
import type { Resource, ResourceCategory } from '../../../resources'

type LangFilter = 'all' | 'zh' | 'en'

const props = withDefaults(
  defineProps<{
    category?: ResourceCategory
    featuredOnly?: boolean
    lang?: LangFilter
    query?: string
    showCategory?: boolean
  }>(),
  {
    featuredOnly: false,
    lang: 'all',
    query: '',
    showCategory: false,
  },
)

function normalize(s: string): string {
  return s.trim().toLowerCase()
}

function matchesQuery(r: Resource, q: string): boolean {
  if (!q) return true
  const haystack = [
    r.title,
    r.desc,
    r.source,
    r.url,
    ...(r.tags ?? []),
    r.category,
  ]
    .join(' ')
    .toLowerCase()
  return haystack.includes(q)
}

const items = computed(() => {
  const q = normalize(props.query ?? '')
  return resources
    .filter((r) => (props.featuredOnly ? !!r.featured : true))
    .filter((r) => (props.category ? r.category === props.category : true))
    .filter((r) => (props.lang === 'all' ? true : r.lang === props.lang))
    .filter((r) => matchesQuery(r, q))
    .slice()
    .sort((a, b) => {
      const fa = a.featured ? 1 : 0
      const fb = b.featured ? 1 : 0
      if (fa !== fb) return fb - fa
      return a.title.localeCompare(b.title)
    })
})

const categoryPill = computed(() => {
  if (!props.category) return null
  return categoryMeta[props.category]
})
</script>

<template>
  <div class="oc-section">
    <div v-if="items.length === 0" class="oc-empty">
      暂无匹配资源
    </div>

    <ul v-else class="oc-list">
      <li v-for="r in items" :key="r.url" class="oc-item">
        <div class="oc-item-head">
          <a class="oc-item-title" :href="r.url" target="_blank" rel="noreferrer">
            {{ r.title }}
          </a>
          <span v-if="r.featured" class="oc-badge">精选</span>
        </div>

        <p class="oc-item-desc">
          {{ r.desc }}
        </p>

        <div class="oc-item-meta">
          <span class="oc-meta-item">
            <span class="oc-meta-k">来源</span>
            <span class="oc-meta-v">{{ r.source }}</span>
          </span>
          <span class="oc-meta-item">
            <span class="oc-meta-k">语言</span>
            <span class="oc-meta-v">{{ r.lang }}</span>
          </span>
          <span v-if="props.showCategory" class="oc-meta-item">
            <span class="oc-meta-v">
              <span class="oc-pill">
                {{ categoryMeta[r.category].icon }} {{ categoryMeta[r.category].label }}
              </span>
            </span>
          </span>

          <div v-if="r.tags?.length" class="oc-tags">
            <span v-for="t in r.tags" :key="t" class="oc-tag">{{ t }}</span>
          </div>
        </div>
      </li>
    </ul>

    <div v-if="categoryPill" class="oc-category-tip">
      <span class="oc-pill">
        {{ categoryPill.icon }} {{ categoryPill.label }} ({{ items.length }})
      </span>
    </div>
  </div>
</template>
