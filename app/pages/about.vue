<script setup lang="ts">
useHead({
  title: '關於我們 - 智慧時尚',
  meta: [
    { name: 'description', content: '融合十餘年開發經驗與最新人工智慧技術，重新定義交付標準。' },
  ],
})
</script>

<template>
  <div class="bg-[#0b1121] w-full min-w-[1440px] relative flex flex-col">
    <AboutNavigationBar />
    <AboutTechnologyOverview />
    <AboutFooter />
  </div>
</template>
