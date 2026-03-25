## ADDED Requirements

### Requirement: Background Page Route
項目 SHALL 提供 `/about` 路由，渲染完整的「關於我們」頁面，包含導航欄、主內容區、頁腳三個區塊。

#### Scenario: 直接訪問 /about
- **WHEN** 使用者在瀏覽器導航至 `/about`
- **THEN** 頁面顯示深色背景（`#0b1121`）的完整頁面，包含頂部導航欄、主內容區（Hero、公司簡介、核心理念、AI原生開發流程）及頁腳

### Requirement: Navigation Bar
頁面頂部 SHALL 渲染一個固定高度（80px）的導航欄，包含品牌 Logo、五個導航連結及「聯絡我們」CTA 按鈕。

#### Scenario: 導航連結高亮切換
- **WHEN** 使用者點擊任一導航連結
- **THEN** 被點擊的連結文字變為白色，其他連結保持灰色（`text-slate-400`）

#### Scenario: 初始狀態
- **WHEN** 頁面初次加載
- **THEN** 「關於我們」連結預設為高亮狀態

### Requirement: Technology Overview Section
主內容區 SHALL 包含以下子區塊，使用來自 Anima CDN 的圖片資源：

1. **Hero Banner**：800px 高橫幅、背景圖、Since 2011 徽章、標題 SVG、描述文字
2. **公司簡介**：四個統計數字（12+ 年開發經驗、200+ 服務客戶、AI 核心驅動、100+ 專案交付）
3. **核心理念**：三張卡片（AI 原生思維、品質即效率、持續進化）
4. **AI原生開發流程**：步驟指示器（STEP 1/2/3）及右側配圖

#### Scenario: 核心理念卡片渲染
- **WHEN** 頁面渲染
- **THEN** 顯示三張等寬卡片，每張含圖示、標題、描述文字，背景為半透明白色（`#ffffff1a`）

#### Scenario: 圖片載入
- **WHEN** 頁面渲染
- **THEN** 所有圖片從 `https://c.animaapp.com/mn69fej5o9rxxH/img/` CDN 正確載入

### Requirement: Footer Section
頁面底部 SHALL 渲染頁腳，包含品牌欄、快速連結欄、聯絡資訊欄、追蹤我們欄，以及底部版權列。

#### Scenario: 版權文字
- **WHEN** 頁腳渲染
- **THEN** 底部顯示「© 2026 智慧時尚 Smart Fashion. All rights reserved.」及「隱私權政策」、「服務條款」連結

### Requirement: Tailwind CSS Support
項目 SHALL 透過 `@nuxtjs/tailwindcss` 模組支援 Tailwind CSS v3，使所有頁面和組件可使用 Tailwind utility classes。

#### Scenario: Tailwind 類別生效
- **WHEN** 頁面在瀏覽器渲染
- **THEN** Tailwind utility classes（如 `bg-[#0b1121]`、`text-slate-400`、`flex`）正確套用樣式
