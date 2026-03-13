<script setup lang="ts">
import { ref, computed } from 'vue'
import { categoryMeta } from '../../../resources'
import type { ResourceCategory } from '../../../resources'

const props = defineProps<{
  category: ResourceCategory
}>()

const lang = ref<'all' | 'zh' | 'en'>('all')
const query = ref('')

const meta = computed(() => categoryMeta[props.category])
</script>

<template>
  <div>
    <p class="oc-intro">
      <span class="oc-pill">
        {{ meta.icon }} {{ meta.label }}
      </span>
    </p>

    <OpenClawResourceFilters v-model:lang="lang" v-model:query="query" />

    <OpenClawResourceSection :category="props.category" :lang="lang" :query="query" />
  </div>
</template>

