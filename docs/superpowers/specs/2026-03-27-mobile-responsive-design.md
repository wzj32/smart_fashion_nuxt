# Mobile Responsive Design Spec

## Overview

Smart Fashion Nuxt 網站全局移動端適配。目前網站完全為桌面端設計（1440px），需要在不改變桌面端樣式的前提下，增加手機和平板的響應式支援。

## Breakpoints

| 範圍 | 目標裝置 | 策略 |
|------|---------|------|
| < 768px | 手機 | 全面適配，單列佈局 |
| 768px - 1024px | 平板 | 適度適配，雙列佈局 |
| > 1024px | 桌面 | 保持現狀，不做任何修改 |

採用 Desktop-first 策略，使用 Tailwind 的 `max-*` 變體或在 `< lg:` 區間覆蓋樣式。

## Component Adaptation Plan

### 1. Layout (default.vue)

- 移除 `min-w-[1440px]` 限制，改為 `w-full`
- 確保 `min-w-[1440px]` 僅在 `lg:` 以上生效，或直接移除

### 2. NavigationHeader

- `< lg`（1024px 以下）：隱藏桌面導航連結，顯示漢堡按鈕
- 漢堡按鈕點擊後展開全屏覆蓋式選單或下拉式選單
- 選單包含所有導航項目
- Logo 與漢堡按鈕左右分佈
- 需新增響應式狀態管理（`ref` 控制選單開關）

### 3. HeroSection

- `w-[630px]` 改為響應式：手機 `w-full`，平板 `w-full` 或 `max-w-[500px]`
- padding `px-[120px] py-[150px]` 改為：手機 `px-4 py-16`，平板 `px-8 py-20`
- 文字尺寸按比例縮小（如 `text-4xl` → 手機 `text-2xl`，平板 `text-3xl`）
- 保留漸層文字效果不變

### 4. CoreServicesSection

- 絕對定位元素改為流式佈局（`position: relative`）
- 標籤按鈕：手機改為橫向可滾動（`overflow-x-auto`），平板可保留橫排
- 內容區域：手機垂直堆疊，平板可雙列
- 背景裝飾元素在移動端可隱藏

### 5. StatisticsSection

- 統計卡片：手機 2 列網格（`grid-cols-2`），平板 2-3 列
- 卡片內 padding 適當縮小
- 文字尺寸適當縮小

### 6. TechnologyOverview

- 所有絕對定位元素改為流式垂直堆疊
- 圖片和文字區塊各佔全寬
- 裝飾性絕對定位背景元素在移動端隱藏

### 7. AIApplicationSection

- 已有部分 `md:` 響應式基礎
- 完善為全寬單卡輪播，一次顯示一張
- 導航按鈕尺寸適當調整
- 確保觸控滑動體驗

### 8. SelectedCasesSection

- 與 AIApplicationSection 類似處理
- 卡片改為全寬，一次一張
- 左右導航按鈕尺寸調整

### 9. FeaturedCaseStudies

- 篩選按鈕：橫向可滾動容器
- 案例卡片：手機單列，平板雙列
- 圖片保持等比縮放

### 10. FooterSection

- 四欄佈局改為：手機單列垂直堆疊，平板雙列
- 固定寬度（`w-[435px]`、`w-[218px]`）改為 `w-full`
- 間距適當縮小

### 11. ContactFormSection

- 表單全寬，移除固定 max-width 限制（或調整為更小值）
- padding 從 `px-20` 改為移動端 `px-4`

### 12. ClientLogosSection

- Logo 網格在移動端適當調整列數
- CTA 按鈕全寬

### 13. SectionHeader / Title

- 文字尺寸按比例縮小
- 保持居中對齊

### 14. Pages (about, services, technology, contact, cases)

- 跟隨元件的響應式變化自動適配
- 頁面級的固定 padding/margin 需調整

## Unchanged

- 所有 `> 1024px` 的桌面端樣式完全不動
- 色彩系統（CSS variables）不變
- 動畫效果（fade-in, fade-up）不變
- 字體（Inter）不變
- 功能邏輯不變
- Tailwind 配置不變（使用現有斷點）

## Technical Approach

- 使用 Tailwind 的響應式 utilities（`lg:` 前綴保持桌面樣式）
- 對於無法用 Tailwind 處理的行內 style，使用 `<style scoped>` 中的 `@media` 查詢
- NavigationHeader 需新增 Vue 響應式狀態（`useState` 或 `ref`）控制漢堡選單
- 不引入新依賴
