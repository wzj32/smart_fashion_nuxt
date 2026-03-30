<template>
  <section class="relative flex justify-center items-center w-full py-[120px] max-lg:py-16 max-md:py-10 overflow-hidden">
    <!-- Main content -->
    <div class="relative flex flex-col items-center gap-6 px-6 max-md:px-4 py-0 w-full max-w-[600px]">
      <!-- Heading -->
      <div v-reveal="{ direction: 'up', duration: 800 }">
        <SectionHeader first-letter="S" rest-text="ELECTED CASES" title="您有專案想討論？" fill-first fill-second />
      </div>

      <!-- Subtitle -->
      <div v-reveal="{ direction: 'up', delay: 200, duration: 800 }" class="flex flex-col items-center gap-[3px] pt-px pb-[18px] px-0 w-full">
        <p class="font-medium text-slate-400 text-lg max-md:text-base text-center tracking-[0] leading-normal whitespace-nowrap max-md:whitespace-normal">
          無論是技術諮詢還是專案開發，我們都樂意與您分享經驗。
        </p>
      </div>

      <!-- CTA Button -->
      <div v-reveal="{ direction: 'up', delay: 400, duration: 800 }">
        <NuxtLink
          to="/contact"
          class="h-auto inline-flex items-center justify-center py-[17px] max-md:py-3 px-12 max-md:px-8 rounded-[99px] hover-glow text-white text-lg max-md:text-base font-normal whitespace-nowrap no-underline animate-pulse-glow"
          style="background: linear-gradient(163deg, rgba(124,58,237,1) 0%, rgba(59,130,246,1) 100%); box-shadow: 0px 4px 14px rgba(124,58,237,0.3);"
        >
          和我們聊聊
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
