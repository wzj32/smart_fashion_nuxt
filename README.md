# 智慧時尚 Smart Fashion — Nuxt 3

## 專案結構

```
nuxt3-export/
├── assets/
│   └── css/
│       └── tailwind.css       # 全域 Tailwind CSS + CSS 變數
├── components/
│   ├── NavigationHeader.vue   # 頂部導航列
│   ├── KnowledgeReviewMain.vue # 主要內容區塊（案例頁）
│   └── FooterSection.vue      # 頁尾
├── pages/
│   └── index.vue              # 首頁（自動路由）
├── app.vue                    # 根元件
├── nuxt.config.ts             # Nuxt 設定
├── tailwind.config.js         # Tailwind CSS 設定
└── package.json
```

## 快速開始

### 安裝依賴

```bash
npm install
# 或
pnpm install
# 或
yarn install
```

### 開發環境

```bash
npm run dev
```

開啟 http://localhost:3000

### 建置生產版本

```bash
npm run build
```

### 靜態生成（SSG）

```bash
npm run generate
```

## 技術說明

| 技術 | 版本 | 用途 |
|------|------|------|
| Nuxt 3 | ^3.11.0 | Vue 3 全端框架 |
| @nuxtjs/tailwindcss | ^6.12.0 | Tailwind CSS 整合 |
| TypeScript | ^5.4.0 | 型別安全 |

## 元件說明

### `NavigationHeader.vue`
- 頂部固定導航列
- 使用 `ref()` 管理 activeLink 狀態（同 React `useState`）
- 漸層 CTA 按鈕

### `KnowledgeReviewMain.vue`
- 案例詳情頁主體
- 包含：麵包屑、Hero 圖、挑戰/解決方案/成果/技術 四個區塊、統計卡片、CTA 區塊
- 資料以 script setup 內定義的 `const` 陣列管理

### `FooterSection.vue`
- 頁尾：品牌介紹、快速連結、聯絡資訊、社群連結
- 版權聲明列

## 從 React 轉換對照

| React | Nuxt 3 / Vue 3 |
|-------|---------------|
| `useState` | `ref()` |
| `props` | `defineProps()` |
| `className` | `class` / `:class` |
| `style={{ ... }}` | `:style="{ ... }"` |
| `map()` JSX | `v-for` |
| 條件渲染 `&&` | `v-if` |
| `import` 手動 | 自動 Auto Import |
