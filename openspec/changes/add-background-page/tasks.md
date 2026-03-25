## 1. 環境配置
- [x] 1.1 安裝 `@nuxtjs/tailwindcss` 依賴（`npm install --save-dev @nuxtjs/tailwindcss`）
- [x] 1.2 在 `nuxt.config.ts` 的 `modules` 中加入 `@nuxtjs/tailwindcss`
- [x] 1.3 建立 `tailwind.config.ts`，設定 content 掃描路徑（`app/**/*.vue`）
- [x] 1.4 建立 `app/assets/css/main.css`，加入 Tailwind directives 及特殊字體回退聲明
- [x] 1.5 在 `nuxt.config.ts` 的 `css` 中引入 `~/assets/css/main.css`

## 2. 頁面與組件骨架
- [x] 2.1 建立 `app/pages/` 目錄（Nuxt 3 自動啟用路由）
- [x] 2.2 建立 `app/components/about/` 目錄

## 3. NavigationBar 組件
- [x] 3.1 建立 `app/components/about/NavigationBar.vue`
- [x] 3.2 將 `NavigationBarSection.tsx` 的 JSX 轉換為 Vue template
- [x] 3.3 將 `useState` 轉換為 `ref()`，`onClick` 轉換為 `@click`
- [x] 3.4 將 shadcn `<Button>` 替換為原生 `<button>` + Tailwind 類別

## 4. TechnologyOverview 組件
- [x] 4.1 建立 `app/components/about/TechnologyOverview.vue`
- [x] 4.2 轉換 Hero Banner section（圖片、徽章、標題、描述）
- [x] 4.3 轉換公司簡介 section（四個統計數字、裝飾線條）
- [x] 4.4 轉換核心理念 section（三張卡片，使用 `v-for`）
- [x] 4.5 轉換 AI原生開發流程 section（步驟指示器、右側圖片）
- [x] 4.6 將 `corePhilosophyCards` 資料移至 `<script setup>` 中的 `const`

## 5. Footer 組件
- [x] 5.1 建立 `app/components/about/Footer.vue`
- [x] 5.2 轉換頁腳四欄佈局（`v-for` 渲染連結列表）
- [x] 5.3 轉換底部版權列

## 6. About 頁面整合
- [x] 6.1 建立 `app/pages/about.vue`
- [x] 6.2 引入三個子組件並組裝頁面（對應原 `Background.tsx`）
- [x] 6.3 設定頁面 `<head>` meta（title、description）

## 7. 驗證
- [ ] 7.1 執行 `npm run dev`，訪問 `http://localhost:3000/about` 確認頁面渲染正常
- [ ] 7.2 確認 Tailwind 樣式正確套用（深色背景、漸層按鈕、卡片佈局）
- [ ] 7.3 確認 Anima CDN 圖片正常顯示
- [ ] 7.4 確認導航連結點擊高亮切換正常
