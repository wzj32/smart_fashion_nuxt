# Mobile Responsive Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add mobile (< 768px) and tablet (768px-1024px) responsive support to all components while keeping desktop (> 1024px) styles unchanged.

**Architecture:** Desktop-first approach — add responsive overrides using Tailwind `max-lg:` and `max-md:` variants. Remove the global `min-w-[1440px]` constraint. Add hamburger menu for mobile navigation.

**Tech Stack:** Tailwind CSS responsive utilities, Vue 3 refs for menu state

---

### Task 1: Layout — Remove min-width constraint

**Files:**
- Modify: `layouts/default.vue:2`

- [ ] **Step 1: Remove min-w-[1440px]**

Change line 2 from:
```html
<div class="bg-[#0b1121] w-full min-w-[1440px] relative flex flex-col min-h-screen">
```
to:
```html
<div class="bg-[#0b1121] w-full lg:min-w-[1440px] relative flex flex-col min-h-screen">
```

- [ ] **Step 2: Verify desktop unchanged, mobile scrollable**

Run: `npm run dev` and check at 1440px+ (unchanged) and 375px (no horizontal scroll)

- [ ] **Step 3: Commit**

```bash
git add layouts/default.vue
git commit -m "fix: remove min-width constraint for mobile viewports"
```

---

### Task 2: NavigationHeader — Hamburger menu

**Files:**
- Modify: `components/NavigationHeader.vue`

- [ ] **Step 1: Add mobile hamburger menu**

Replace the entire NavigationHeader template and script to:
- Keep desktop nav identical (wrapped in `hidden lg:inline-flex`)
- Add hamburger button visible only on `< lg` screens
- Add full-screen mobile menu overlay with all nav links
- Add `mobileMenuOpen` ref to control menu state
- Reduce `px-20` to `max-lg:px-4` for mobile padding

- [ ] **Step 2: Commit**

```bash
git add components/NavigationHeader.vue
git commit -m "feat: add responsive hamburger menu for mobile/tablet"
```

---

### Task 3: HeroSection — Responsive text and padding

**Files:**
- Modify: `components/HeroSection.vue`

- [ ] **Step 1: Make hero responsive**

Key changes:
- Section: `px-[120px] py-[150px]` → add `max-lg:px-8 max-lg:py-20 max-md:px-4 max-md:py-16`
- Headline containers: `w-[630px]` → add `max-lg:w-full`
- Text size `text-[56px]` → add `max-lg:text-4xl max-md:text-3xl`
- Subtitle: `w-[630px]` → add `max-lg:w-full`
- Subtitle text: `text-xl` → add `max-md:text-base`
- CTA button: `w-[180px]` → add `max-md:w-full`
- `min-h-[800px]` → add `max-lg:min-h-[500px] max-md:min-h-[400px]`

- [ ] **Step 2: Commit**

```bash
git add components/HeroSection.vue
git commit -m "feat: make HeroSection responsive for mobile/tablet"
```

---

### Task 4: StatisticsSection — Responsive grid

**Files:**
- Modify: `components/StatisticsSection.vue`

- [ ] **Step 1: Make stats cards responsive**

Key changes:
- Section: `px-20` → add `max-lg:px-8 max-md:px-4`
- Cards container: `flex` → `flex max-md:flex-wrap`
- Each card: `flex-1` → `flex-1 max-md:basis-[calc(50%-1rem)] max-md:flex-grow-0`
- Stat number: `text-5xl` → add `max-md:text-3xl`
- Icon: `w-[100px] h-[100px]` → add `max-md:w-16 max-md:h-16`

- [ ] **Step 2: Commit**

```bash
git add components/StatisticsSection.vue
git commit -m "feat: make StatisticsSection responsive"
```

---

### Task 5: CoreServicesSection — Flow layout for mobile

**Files:**
- Modify: `components/CoreServicesSection.vue`

- [ ] **Step 1: Convert absolute positioning to flow layout on mobile**

Key changes:
- Section: `h-[800px]` → add `max-lg:h-auto max-lg:py-16 max-md:py-10`
- SectionHeader wrapper: keep absolute on desktop, add `max-lg:relative max-lg:top-auto max-lg:left-auto max-lg:translate-x-0 max-lg:mb-8`
- Nav tabs: absolute → `max-lg:relative max-lg:top-auto max-lg:left-auto max-lg:right-auto max-lg:flex-wrap max-lg:gap-4 max-md:gap-2 max-lg:px-4`; `gap-[120px]` → add `max-lg:gap-4`
- Content area: absolute → `max-lg:relative max-lg:top-auto max-lg:left-auto max-lg:px-4 max-lg:mt-8`; all child absolutes → `max-lg:relative max-lg:top-auto max-lg:left-auto`
- Image: absolute → `max-lg:relative max-lg:top-auto max-lg:left-auto max-lg:w-full max-lg:max-w-[400px] max-lg:mx-auto max-lg:mt-8`
- Footer text: same pattern as content
- Fixed widths (`w-[494px]`, `w-[490px]`, etc.) → add `max-lg:w-full`

- [ ] **Step 2: Commit**

```bash
git add components/CoreServicesSection.vue
git commit -m "feat: make CoreServicesSection responsive with flow layout"
```

---

### Task 6: AIApplicationSection — Already partially responsive, complete it

**Files:**
- Modify: `components/AIApplicationSection.vue`

- [ ] **Step 1: Review and complete responsive support**

This component already has `md:` breakpoints. Ensure consistency with the `lg:` / `max-lg:` pattern used elsewhere. Adjust any remaining fixed-width elements.

- [ ] **Step 2: Commit**

```bash
git add components/AIApplicationSection.vue
git commit -m "feat: complete AIApplicationSection responsive support"
```

---

### Task 7: SelectedCasesSection — Already partially responsive

**Files:**
- Modify: `components/SelectedCasesSection.vue` (if needed)

This component already has good mobile support with `md:` breakpoints and mobile dots. Minimal changes expected.

- [ ] **Step 1: Verify and adjust if needed**
- [ ] **Step 2: Commit if changes made**

---

### Task 8: FeaturedCaseStudies — Responsive gallery

**Files:**
- Modify: `components/FeaturedCaseStudies.vue`

- [ ] **Step 1: Make gallery responsive**

Key changes:
- Filter tabs: add `max-md:flex-wrap max-md:px-4`
- Gallery: `flex gap-5` → add `max-lg:flex-wrap max-lg:justify-center`
- Gallery images: fixed widths `w-80` → add `max-lg:w-[45%] max-md:w-full`; remove fixed `mt-[70px]`/`mt-20` on mobile
- Progress bar: `w-[380px]` → add `max-md:w-full max-md:px-4`
- CTA section: `p-16` → add `max-md:p-6 max-lg:p-10`
- Spacer width calculation needs mobile adjustment

- [ ] **Step 2: Commit**

```bash
git add components/FeaturedCaseStudies.vue
git commit -m "feat: make FeaturedCaseStudies responsive"
```

---

### Task 9: ClientLogosSection — Responsive CTA

**Files:**
- Modify: `components/ClientLogosSection.vue`

- [ ] **Step 1: Make CTA responsive**

Key changes:
- Section: `py-[120px]` → add `max-lg:py-16 max-md:py-10`
- Heading: `text-5xl` → add `max-md:text-3xl max-lg:text-4xl`
- Subtitle: add `max-md:whitespace-normal max-md:px-4`
- Decorative background: scale down or hide on mobile

- [ ] **Step 2: Commit**

```bash
git add components/ClientLogosSection.vue
git commit -m "feat: make ClientLogosSection responsive"
```

---

### Task 10: FooterSection — Stack columns on mobile

**Files:**
- Modify: `components/FooterSection.vue`

- [ ] **Step 1: Make footer responsive**

Key changes:
- Footer: `px-20` → add `max-lg:px-8 max-md:px-4`; `pt-[79px]` → add `max-md:pt-10`
- Columns container: `flex items-end gap-12` → add `max-lg:flex-col max-lg:items-start max-lg:gap-8`
- Brand column: `w-[435px]` → add `max-lg:w-full`
- Other columns: `w-[218px]` → add `max-lg:w-full`
- Description: `w-80` → add `max-lg:w-full`
- Bottom bar: `flex items-center justify-between` → add `max-md:flex-col max-md:items-start max-md:gap-4`

- [ ] **Step 2: Commit**

```bash
git add components/FooterSection.vue
git commit -m "feat: make FooterSection responsive"
```

---

### Task 11: ContactFormSection — Responsive form layout

**Files:**
- Modify: `components/ContactFormSection.vue`

- [ ] **Step 1: Make contact form responsive**

Key changes:
- Section: `px-20` → add `max-lg:px-8 max-md:px-4`
- Header title: `text-5xl` → add `max-md:text-3xl max-lg:text-4xl`; `whitespace-nowrap` → add `max-md:whitespace-normal`
- Two-column layout: `flex items-start gap-20` → add `max-lg:flex-col max-lg:gap-10`
- Left column: `w-[428px]` → add `max-lg:w-full`
- Name+Email row: `flex gap-6` → add `max-md:flex-col`
- Form padding: `px-10` → add `max-md:px-4`

- [ ] **Step 2: Commit**

```bash
git add components/ContactFormSection.vue
git commit -m "feat: make ContactFormSection responsive"
```

---

### Task 12: TechnologyOverview (About page) — Responsive layout

**Files:**
- Modify: `components/TechnologyOverview.vue`

- [ ] **Step 1: Make overview responsive**

Key changes:
- Hero section: `px-[120px]` → add `max-lg:px-8 max-md:px-4`; `h-[800px]` → add `max-lg:h-[500px] max-md:h-[400px]`
- Heading SVG: `w-[441.7px]` → add `max-lg:w-full max-lg:max-w-[300px]`
- Company stats section: absolute positioned stats → `max-lg:relative max-lg:flex max-lg:flex-wrap max-lg:justify-center`; hide grid lines on mobile
- Stats grid: `h-[754px]` → `max-lg:h-auto`
- Core philosophy cards: `flex gap-8` → add `max-lg:flex-col max-lg:items-center`; cards `h-[280px]` → add `max-lg:w-full max-lg:max-w-[400px]`
- AI Development section: `px-[120px]` → add `max-lg:px-8 max-md:px-4`
- Right image: absolute → `max-lg:relative max-lg:w-full max-lg:max-w-[400px] max-lg:mx-auto` or hidden on mobile
- Step indicators: `w-[757px]` → add `max-lg:w-full`

- [ ] **Step 2: Commit**

```bash
git add components/TechnologyOverview.vue
git commit -m "feat: make TechnologyOverview responsive"
```

---

### Task 13: TechnicalCapabilities (Technology page) — Responsive layout

**Files:**
- Modify: `components/TechnicalCapabilities.vue`

- [ ] **Step 1: Make tech capabilities responsive**

Key changes:
- Section: `px-[120px]` → add `max-lg:px-8 max-md:px-4`
- Heading: `text-5xl` → add `max-md:text-3xl max-lg:text-4xl`; `whitespace-nowrap` → add `max-md:whitespace-normal`
- Subtitle: `whitespace-nowrap` → add `max-md:whitespace-normal`
- Tab buttons: `w-[200px] h-[72px]` → add `max-md:w-[140px] max-md:h-[56px]`; `gap-[60px]` → add `max-lg:gap-4`
- Content area: `flex justify-between` → add `max-lg:flex-col max-lg:items-center max-lg:gap-8`
- Bullet text: `whitespace-nowrap` → add `max-lg:whitespace-normal`
- 3D image: `w-[325px]` → add `max-lg:w-full max-lg:max-w-[280px]`
- CTA: `p-16` → add `max-md:p-6`

- [ ] **Step 2: Commit**

```bash
git add components/TechnicalCapabilities.vue
git commit -m "feat: make TechnicalCapabilities responsive"
```

---

### Task 14: KnowledgeReviewMain (Cases detail page) — Responsive layout

**Files:**
- Modify: `components/KnowledgeReviewMain.vue`
- Modify: `pages/cases/detail.vue`

- [ ] **Step 1: Make case detail responsive**

Key changes:
- Container: `px-[120px]` → add `max-lg:px-8 max-md:px-4`
- Hero image: `h-[600px]` → add `max-lg:h-[400px] max-md:h-[250px]`
- Title: `w-[418px]` → add `max-lg:w-full`; `text-5xl` → add `max-md:text-3xl`
- Meta info + title row: `flex gap-20` → add `max-lg:flex-col max-lg:gap-6`
- Background/Solution/Benefits sections: two-column → `max-lg:flex-col`
- Solution image: `w-[459px]` → add `max-lg:w-full max-lg:max-w-[350px]`
- Solution absolute items → `max-lg:relative max-lg:top-auto max-lg:left-auto`
- Stats row: `w-[833px]` → add `max-lg:w-full`
- Tags: `gap-[34px]` → add `max-md:gap-3`
- CTA: `p-16` → add `max-md:p-6`
- `pages/cases/detail.vue`: decorative absolute lines → add `max-lg:hidden`

- [ ] **Step 2: Commit**

```bash
git add components/KnowledgeReviewMain.vue pages/cases/detail.vue
git commit -m "feat: make KnowledgeReviewMain responsive"
```

---

### Task 15: SectionHeader — Responsive text size

**Files:**
- Modify: `components/SectionHeader.vue`

- [ ] **Step 1: Scale down header text on mobile**

Key changes:
- Background text: `text-[100px]` → add `max-lg:text-[60px] max-md:text-[40px]`
- Rest text: `text-[40px]` → add `max-lg:text-[24px] max-md:text-[16px]`
- Title: `text-[40px]` → add `max-lg:text-[28px] max-md:text-[24px]`

- [ ] **Step 2: Commit**

```bash
git add components/SectionHeader.vue
git commit -m "feat: make SectionHeader responsive"
```

---

### Task 16: SelectedCasesSection badges — Responsive

**Files:**
- Modify: `components/SelectedCasesSection.vue` (the client logos one, actually named ClientLogosSection in the page but this is about the badges)

No changes needed — already has `overflow-hidden` and fixed widths that work.

---

### Task 17: Final visual verification

- [ ] **Step 1: Test all pages at 375px (iPhone), 768px (iPad), 1440px+ (desktop)**
- [ ] **Step 2: Fix any remaining issues**
- [ ] **Step 3: Final commit**
