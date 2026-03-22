---
title: 主流平台与生态
description: 一人公司常见自动化平台、适用场景与选型要点
---

# 主流平台与生态

> 最后更新：自动汇总

## 近期动态

### 2026-03-22
- **[WordPress MCP 集成：AI Agent 自动化内容发布](https://techcrunch.com/2026/03/20/wordpress-com-now-lets-ai-agents-write-and-publish-posts-and-more/)** WordPress.com 开放 MCP 协议，Claude、ChatGPT 等 AI Agent 可直接起草、审核并发布博客内容，开启 AI 驱动的内容自动化新范式

### 2026-03-21
- **[AI 内容监管标准统一化进程](https://www.bbc.co.uk/news/articles/cj0d6el50ppo)** BBC 统计显示已有 8 个不同组织尝试建立"人类创作"标识体系，专家呼吁统一标准避免消费者混淆

### 2026-03-20
- **[Google Stitch 设计工具语音化](https://blog.google/innovation-and-ai/models-and-research/google-labs/stitch-ai-ui-design/)** Google Stitch AI UI 设计工具加入语音能力，降低设计自动化门槛

## 低代码 / 无代码自动化

- Make：可视化编排强，适合复杂分支与数据处理
- Zapier：连接器丰富，适合“触发即执行”的业务流
- n8n：可自托管、可扩展，适合更强可控性与成本优化

## 开发者友好自动化

- Pipedream：代码 + 连接器混合；适合需要自定义逻辑
- GitHub Actions：适合代码库相关的定时任务与发布流程
- Cloudflare Workers / Serverless：适合轻量 webhook 与边缘任务

## 企业/办公自动化

- Power Automate：微软生态；适合 Office/Teams 流程
- Google Apps Script：谷歌表格与文档自动化；适合轻量办公流程

## 数据与协作底座

- Airtable / Notion：常作为“内容与任务数据库”
- Slack / 飞书 / 企业微信：常作为“通知与审批入口”

## 选型建议（最常见的坑）

- 先选“数据库”：Airtable/Notion/表格/数据库，否则流程会变成散乱脚本
- 为失败设计：重试、幂等、告警、死信队列，至少要有告警
- 统一身份与权限：别让所有 webhook 都拥有最高权限

