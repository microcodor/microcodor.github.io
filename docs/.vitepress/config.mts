import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '一人公司 · AI 实验室',
  description: '一人公司 & AI 工具、自动化、创业思维',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '专题', link: '/topics/' },
      { text: 'OpenClaw', link: '/topics/ai-tools/openclaw/' },
      { text: '关于', link: '/about' }
    ],

    sidebar: {
      '/openclaw/': [
        {
          text: 'OpenClaw（已迁移）',
          items: [
            { text: '前往新地址', link: '/topics/ai-tools/openclaw/' }
          ]
        }
      ],
      '/topics/ai-tools/openclaw/': [
        {
          text: 'OpenClaw',
          items: [
            { text: '专题页', link: '/topics/ai-tools/openclaw/' },
            { text: '📖 官方资源', link: '/topics/ai-tools/openclaw/official' },
            { text: '🏁 入门部署', link: '/topics/ai-tools/openclaw/getting-started' },
            { text: '📱 平台接入', link: '/topics/ai-tools/openclaw/channel-integration' },
            { text: '🧩 技能开发', link: '/topics/ai-tools/openclaw/skill-dev' },
            { text: '📹 视频教程', link: '/topics/ai-tools/openclaw/video' },
            { text: '🔬 深度文章', link: '/topics/ai-tools/openclaw/deep-dive' },
            { text: '🔧 工具与插件', link: '/topics/ai-tools/openclaw/tools' },
            { text: '☁️ 云平台部署', link: '/topics/ai-tools/openclaw/cloud-deploy' },
            { text: '💡 玩法与场景', link: '/topics/ai-tools/openclaw/use-cases' }
          ]
        }
      ],
      '/topics/ai-tools/': [
        {
          text: '🤖 AI工具深度评测',
          items: [
            { text: '概览', link: '/topics/ai-tools/' },
            { text: '主流工具清单', link: '/topics/ai-tools/popular' },
            { text: '选型与评测框架', link: '/topics/ai-tools/playbook' },
            { text: 'OpenClaw 专题', link: '/topics/ai-tools/openclaw/' }
          ]
        }
      ],
      '/topics/automation/': [
        {
          text: '⚙️ 自动化工作流',
          items: [
            { text: '概览', link: '/topics/automation/' },
            { text: '主流平台与生态', link: '/topics/automation/popular' },
            { text: '工作流模板与落地', link: '/topics/automation/playbook' }
          ]
        }
      ],
      '/topics/solopreneur/': [
        {
          text: '📈 一人公司案例',
          items: [
            { text: '概览', link: '/topics/solopreneur/' },
            { text: '主流商业模式与方向', link: '/topics/solopreneur/popular' },
            { text: '拆解模板与复盘方法', link: '/topics/solopreneur/playbook' }
          ]
        }
      ],
      '/topics/ai-trends/': [
        {
          text: '🧠 AI趋势与思考',
          items: [
            { text: '概览', link: '/topics/ai-trends/' },
            { text: '热点主题清单', link: '/topics/ai-trends/popular' },
            { text: '趋势转行动清单', link: '/topics/ai-trends/playbook' }
          ]
        }
      ],
      '/topics/productivity/': [
        {
          text: '💡 效率与心智模型',
          items: [
            { text: '概览', link: '/topics/productivity/' },
            { text: '常用体系与工具', link: '/topics/productivity/popular' },
            { text: '个人操作系统搭建', link: '/topics/productivity/playbook' }
          ]
        }
      ],
      '/topics/product-dev/': [
        {
          text: '🚀 产品开发指南',
          items: [
            { text: '概览', link: '/topics/product-dev/' },
            { text: '主流技术栈与工具', link: '/topics/product-dev/popular' },
            { text: '从0到1路线图', link: '/topics/product-dev/playbook' }
          ]
        }
      ],
      '/topics/': [
        {
          text: '专题',
          items: [
            { text: '🤖 AI工具深度评测', link: '/topics/ai-tools/' },
            { text: '⚙️ 自动化工作流', link: '/topics/automation/' },
            { text: '📈 一人公司案例', link: '/topics/solopreneur/' },
            { text: '🧠 AI趋势与思考', link: '/topics/ai-trends/' },
            { text: '💡 效率与心智模型', link: '/topics/productivity/' },
            { text: '🚀 产品开发指南', link: '/topics/product-dev/' }
          ]
        }
      ],
      '/': [
        {
          text: 'Examples',
          items: [
            { text: 'Markdown Examples', link: '/markdown-examples' },
            { text: 'Runtime API Examples', link: '/api-examples' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/microcodor' }
    ]
  }
})
