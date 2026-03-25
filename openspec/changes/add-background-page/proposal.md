# Change: Add Background (About Us) Page

## Why
從 Anima 匯出的 React/TSX 設計稿（`/Users/kemeng/Downloads/_-_background_69jy4l`）包含一個完整的「關於我們」頁面設計，需要轉換為 Nuxt 3 Vue SFC 格式並整合至現有項目，作為可路由的新功能頁面。

## What Changes
- 在 `nuxt.config.ts` 加入 `@nuxtjs/tailwindcss` 模組（原始碼大量依賴 Tailwind CSS）
- 建立 `app/pages/about.vue` 作為 `/about` 路由頁面（對應 Background 螢幕）
- 建立三個子組件（Vue SFC），對應原 React sections：
  - `app/components/about/NavigationBar.vue`
  - `app/components/about/TechnologyOverview.vue`
  - `app/components/about/Footer.vue`
- 將 React 的 `useState` 轉換為 Vue 3 的 `ref()`
- JSX 語法全部轉換為 Vue template 語法
- 圖片資源繼續使用 Anima CDN 外部連結（不需下載）

## Impact
- Affected specs: background-page（新增）
- Affected code:
  - `nuxt.config.ts`（加入 tailwindcss 模組）
  - `package.json`（加入 `@nuxtjs/tailwindcss` 依賴）
  - `app/pages/about.vue`（新增）
  - `app/components/about/` 下三個 Vue 組件（新增）
