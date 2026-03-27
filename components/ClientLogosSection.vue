<template>
  <section class="relative flex justify-center items-center w-full py-[120px] max-lg:py-16 max-md:py-10 overflow-hidden">
    <!-- Decorative large background text -->
    <div class="absolute top-[81px] max-lg:top-10 left-1/2 -translate-x-1/2 w-[247px] h-[95px] pointer-events-none select-none max-md:hidden">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[245px] h-[95px] flex items-center font-normal text-[#f8fafc1a] text-[100px] tracking-[0] leading-normal whitespace-nowrap">
        <span class="text-[100px]">S</span>
        <span class="text-[40px]">ELECTED CASES</span>
      </div>

      <!-- Decorative shapes -->
      <div class="absolute top-3.5 left-[45px] w-[78px] h-[21px] flex items-center">
        <div class="mt-[-1px] w-[22.57px] h-[22.57px] ml-[-1px] border border-solid border-violet-600 flex-shrink-0" />
        <div class="w-[20.57px] h-[20.57px] ml-[7.6px] bg-blue-500 rounded-[10.29px] border border-solid flex-shrink-0" />
        <div class="mt-[2px] w-[16.55px] h-[16.55px] ml-[9.7px] border border-solid border-cyan-500 rotate-45 flex-shrink-0" />
      </div>
    </div>

    <!-- Main content -->
    <div class="relative flex flex-col items-center gap-6 px-6 max-md:px-4 py-0 w-full max-w-[600px]">
      <!-- Heading -->
      <div class="flex flex-col items-center pt-px pb-1 px-0 w-full">
        <h2 class="font-semibold text-slate-50 text-5xl max-lg:text-4xl max-md:text-3xl text-center tracking-[0] leading-normal">
          您有專案想討論？
        </h2>
      </div>

      <!-- Subtitle -->
      <div class="flex flex-col items-center gap-[3px] pt-px pb-[18px] px-0 w-full">
        <p class="font-medium text-slate-400 text-lg max-md:text-base text-center tracking-[0] leading-normal whitespace-nowrap max-md:whitespace-normal">
          無論是技術諮詢還是專案開發，我們都樂意與您分享經驗。
        </p>
      </div>

      <!-- CTA Button -->
      <NuxtLink
        to="/contact"
        class="h-auto inline-flex items-center justify-center py-[17px] max-md:py-3 px-12 max-md:px-8 rounded-[99px] hover:opacity-90 transition-opacity text-white text-lg max-md:text-base font-normal whitespace-nowrap no-underline"
        style="background: linear-gradient(163deg, rgba(124,58,237,1) 0%, rgba(59,130,246,1) 100%); box-shadow: 0px 4px 14px rgba(124,58,237,0.3);"
      >
        和我們聊聊
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
