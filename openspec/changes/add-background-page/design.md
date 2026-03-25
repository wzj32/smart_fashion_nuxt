# Design: Background Page Nuxt 3 Migration

## Context
源碼是 Anima 從設計稿生成的 React + Vite + Tailwind CSS 項目，包含一個完整的公司介紹頁（"Background" screen）。目標項目是 Nuxt 3（無 Tailwind、無 pages 目錄）。

## Goals / Non-Goals
- Goals:
  - 忠實還原視覺設計（版面、顏色、字體、間距）
  - 轉換為 Nuxt 3 慣用架構（pages + components）
  - 引入 Tailwind CSS 支援
- Non-Goals:
  - 不修改設計（不調整視覺、不增刪內容）
  - 不添加路由邏輯至現有 `app.vue`（暫不做導航整合）
  - 不下載外部圖片（保留 Anima CDN 連結）

## Decisions

### 1. Tailwind CSS 整合方式
- **Decision**: 使用 `@nuxtjs/tailwindcss` 官方模組
- **Why**: 最簡單的 Nuxt 3 整合方式，自動掃描 template 類別，無需手動設定 PostCSS
- **Alternatives**: 手動配置 PostCSS → 較複雜，不必要

### 2. 頁面路由
- **Decision**: 使用 `/about` 路由（`app/pages/about.vue`）
- **Why**: 原 React 螢幕名稱 "Background" 語義上對應「關於我們」，`/about` 更符合慣例
- **Alternatives**: `/background` → 不符合語義慣例

### 3. 組件拆分策略
- **Decision**: 三個子組件對應原三個 sections，頁面組件作為容器
- **Why**: 與原始 React 結構一一對應，便於後續維護；每個 section 約 50-150 行，適合獨立檔案
- **Alternatives**: 全部放在單一 `about.vue` → 過長，難以維護

### 4. React → Vue 語法轉換要點
| React | Vue 3 |
|-------|-------|
| `const [x, setX] = useState(v)` | `const x = ref(v)` |
| `onClick={() => setX(v)}` | `@click="x = v"` |
| `{condition ? a : b}` | `{{ condition ? a : b }}` 或 `v-if/v-else` |
| `{arr.map((i) => <div key={i.id}>)}` | `<div v-for="i in arr" :key="i.id">` |
| `className` | `class` |
| `src={var}` | `:src="var"` |
| `alt={var}` | `:alt="var"` |

### 5. `Button` 組件
- **Decision**: 直接使用原生 `<button>` 元素搭配 Tailwind 類別，不引入 shadcn-vue
- **Why**: 只有一個 CTA 按鈕，引入整個組件庫不必要
- **Alternatives**: 安裝 shadcn-vue → 過度複雜

## Risks / Trade-offs
- 圖片資源依賴 Anima CDN（`c.animaapp.com`）→ 若 CDN 失效圖片消失。**緩解**: 當前階段不處理，後續可替換為本地資產。
- 特殊字體（`DIN_BlackAlternate-Regular`、`Bebas-Regular`）未在 Nuxt 項目中載入 → 瀏覽器回退至 Helvetica，視覺有差異。**緩解**: 在 `app/assets/css/main.css` 中加入字體聲明（任務中含此項）。

## Open Questions
- 導航欄的連結是否需要接入 Nuxt Router（`<NuxtLink>`）？→ 提案暫定為靜態展示，點擊切換高亮但不跳頁。
