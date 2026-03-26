<template>
  <section class="min-h-[800px] justify-end px-[120px] py-[150px] flex flex-col items-start relative self-stretch w-full overflow-hidden">
    <!-- Background SVG -->
    <img
      class="absolute w-full h-full top-0 left-0 object-cover"
      alt="AI background"
      src="/images/mn5gtr03DZ8elR/img---ai-background-mask-group.svg"
    />

    <!-- Hero content -->
    <div class="inline-flex flex-col max-w-[800px] items-start justify-end gap-2.5 relative flex-[0_0_auto]">
      <!-- Headline 1 -->
      <div class="h-[60px] items-start justify-center flex flex-col relative self-stretch w-full">
        <div
          class="w-[630px] h-20 mt-[-11px] mb-[-9px] font-black text-transparent text-[56px] tracking-[-1px] leading-[61.6px] relative flex items-center"
          style="background: linear-gradient(104deg, rgba(60,180,217,1) 0%, rgba(255,255,255,1) 45%, rgba(82,85,238,1) 100%); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;"
        >
          一切始于科技
        </div>
      </div>

      <!-- Headline 2 -->
      <div
        class="w-[630px] h-20 font-semibold text-[56px] relative flex items-center text-transparent tracking-[0] leading-normal"
        style="background: linear-gradient(90deg, rgba(127,205,230,1) 11%, rgba(255,255,255,1) 26%, rgba(255,255,255,1) 70%, rgba(137,210,232,1) 93%); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;"
      >
        智慧交付每一行程式碼
      </div>

      <!-- Subtitle -->
      <div class="flex flex-col items-start pt-[1.19px] relative self-stretch w-full flex-[0_0_auto]">
        <p class="relative flex items-center w-[630px] h-[46px] mt-[-1px] font-normal text-slate-400 text-xl leading-8">
          專業的 AI 應用開發與系統架構設計，助您邁向數位轉型
        </p>
      </div>

      <!-- CTA button -->
      <div class="flex items-start gap-4 pt-[17.2px] relative self-stretch w-full flex-[0_0_auto]">
        <NuxtLink
          to="/contact"
          class="h-auto flex w-[180px] items-center justify-center py-[13px] px-8 rounded-[99px] border-[0.5px] border-solid border-slate-400 hover:opacity-90 transition-opacity text-white font-medium text-base no-underline"
          style="background: linear-gradient(141deg, rgba(59,130,246,1) 0%, rgba(124,58,237,1) 100%); box-shadow: 0px 4px 14px rgba(124,58,237,0.3);"
        >
          開始您的專案
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
