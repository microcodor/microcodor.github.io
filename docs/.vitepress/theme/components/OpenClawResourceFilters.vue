<script setup lang="ts">
type LangFilter = 'all' | 'zh' | 'en'

const props = withDefaults(
  defineProps<{
    lang?: LangFilter
    query?: string
  }>(),
  {
    lang: 'all',
    query: '',
  },
)

const emit = defineEmits<{
  (e: 'update:lang', value: LangFilter): void
  (e: 'update:query', value: string): void
}>()
</script>

<template>
  <div class="oc-toolbar">
    <label class="oc-field">
      <span class="oc-label">语言</span>
      <select
        class="oc-select"
        :value="props.lang"
        @change="emit('update:lang', ($event.target as HTMLSelectElement).value as LangFilter)"
      >
        <option value="all">全部</option>
        <option value="zh">中文</option>
        <option value="en">English</option>
      </select>
    </label>

    <label class="oc-field oc-field-grow">
      <span class="oc-label">搜索</span>
      <input
        class="oc-input"
        type="search"
        placeholder="按标题 / 描述 / 来源 / 标签检索"
        :value="props.query"
        @input="emit('update:query', ($event.target as HTMLInputElement).value)"
      />
    </label>
  </div>
</template>

