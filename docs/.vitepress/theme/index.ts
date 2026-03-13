import DefaultTheme from 'vitepress/theme'
import RecentPosts from './components/RecentPosts.vue'
import OpenClawResourceFilters from './components/OpenClawResourceFilters.vue'
import OpenClawResourceSection from './components/OpenClawResourceSection.vue'
import OpenClawCategoryPage from './components/OpenClawCategoryPage.vue'
import './custom.css'   // 引入自定义样式（可选）

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('RecentPosts', RecentPosts)
    app.component('OpenClawResourceFilters', OpenClawResourceFilters)
    app.component('OpenClawResourceSection', OpenClawResourceSection)
    app.component('OpenClawCategoryPage', OpenClawCategoryPage)
  },
}
