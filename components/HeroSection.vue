<template>
  <section class="min-h-[800px] max-lg:min-h-[500px] max-md:min-h-[400px] justify-end max-md:justify-center px-60 max-lg:px-8 max-md:px-4 py-[150px] max-lg:py-20 max-md:py-16 flex flex-col items-start relative self-stretch w-full overflow-hidden">
    <!-- Background GIF -->
    <img
      class="absolute w-full h-full top-0 left-0 object-cover"
      alt="AI background"
      src="/kling_20260401_作品_外圈箭头旋转_中间的_2644_0.gif"
    />

    <!-- Hero content -->
    <div class="inline-flex flex-col max-w-[800px] items-start justify-end gap-2.5 max-md:gap-2 relative flex-[0_0_auto]">
      <!-- Decorative image: outer wrapper handles float, inner img handles reveal -->
      <div class="diamond-float w-[280px] max-lg:w-[50%] max-md:w-[40%] mb-[50px] max-lg:mb-[20px] max-md:mb-0">
        <img
          v-reveal="{ direction: 'left', delay: 100, duration: 1000, distance: '60px' }"
          src="/20260330-094754.png"
          alt=""
          class="w-full h-auto"
        />
      </div>

      <!-- Headline 1 -->
      <div class="h-[60px] max-md:h-auto items-start justify-center flex flex-col relative self-stretch w-full">
        <div
          v-reveal="{ direction: 'left', delay: 200, duration: 1000, distance: '60px' }"
          class="w-[630px] max-lg:w-full h-20 max-md:h-auto mt-[-11px] mb-[-9px] max-md:mt-0 max-md:mb-0 font-black text-transparent text-[56px] max-lg:text-4xl max-md:text-3xl tracking-[-1px] leading-[61.6px] max-lg:leading-tight relative flex items-center"
          style="background: linear-gradient(104deg, rgba(60,180,217,1) 0%, rgba(255,255,255,1) 45%, rgba(82,85,238,1) 100%); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;"
        >
          一切始于科技
        </div>
      </div>

      <!-- Headline 2 -->
      <div
        v-reveal="{ direction: 'left', delay: 400, duration: 1000, distance: '60px' }"
        class="w-[630px] max-lg:w-full h-20 max-md:h-auto font-semibold text-[56px] max-lg:text-4xl max-md:text-3xl relative flex items-center text-transparent tracking-[0] leading-normal"
        style="background: linear-gradient(90deg, rgba(127,205,230,1) 11%, rgba(255,255,255,1) 26%, rgba(255,255,255,1) 70%, rgba(137,210,232,1) 93%); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;"
      >
        智慧交付每一行程式碼
      </div>

      <!-- Subtitle -->
      <div
        v-reveal="{ direction: 'up', delay: 600, duration: 800 }"
        class="flex flex-col items-start pt-[1.19px] relative self-stretch w-full flex-[0_0_auto]"
      >
        <p class="relative flex items-center w-[630px] max-lg:w-full h-[46px] max-md:h-auto mt-[-1px] font-normal text-slate-400 text-xl max-md:text-base leading-8">
          專業的 AI 應用開發與系統架構設計，助您邁向數位轉型
        </p>
      </div>

      <!-- CTA button -->
      <div
        v-reveal="{ direction: 'up', delay: 800, duration: 800 }"
        class="flex items-start gap-4 pt-[17.2px] max-md:pt-2 relative self-stretch w-full flex-[0_0_auto]"
      >
        <NuxtLink
          to="/contact"
          class="h-auto flex w-[180px] max-md:w-full items-center justify-center py-[13px] px-8 rounded-[99px] border-[0.5px] border-solid border-slate-400 hover-glow text-white font-medium text-base no-underline"
          style="background: linear-gradient(141deg, rgba(59,130,246,1) 0%, rgba(124,58,237,1) 100%); box-shadow: 0px 4px 14px rgba(124,58,237,0.3);"
        >
          開始您的專案
        </NuxtLink>
      </div>

      <!-- Scroll indicator -->
      <div
        v-reveal="{ direction: 'up', delay: 1200, duration: 600 }"
        class="flex flex-col items-center mt-8 max-md:mt-4"
      >
        <div class="w-6 h-10 rounded-full border-2 border-slate-500/50 flex items-start justify-center p-1.5">
          <div class="w-1 h-2.5 bg-slate-400 rounded-full animate-scroll-indicator" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.diamond-float {
  animation: diamond-float 3.5s ease-in-out infinite;
}

@keyframes diamond-float {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-18px); }
}
</style>
