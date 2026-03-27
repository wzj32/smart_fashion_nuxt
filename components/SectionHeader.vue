<template>
  <div class="relative flex flex-col" :class="align === 'left' ? 'items-start' : 'items-center'">
    <!-- Faint background text -->
    <div
      class="absolute top-1/2 -translate-y-1/2 flex items-center font-normal text-[#f8fafc1a] text-[100px] max-lg:text-[60px] max-md:text-[40px] tracking-[0] leading-normal whitespace-nowrap pointer-events-none select-none"
      :class="align === 'left' ? 'left-0' : 'left-1/2 -translate-x-1/2'"
    >
      <span class="text-[#f8fafc33] text-[100px] max-lg:text-[60px] max-md:text-[40px]">{{ firstLetter }}</span>
      <span class="text-[40px] max-lg:text-[24px] max-md:text-[16px]">{{ restText }}</span>
    </div>

    <!-- Decorative shapes with animation -->
    <div class="relative z-10 flex items-center gap-[8.6px] mt-[29px] max-lg:mt-[18px] max-md:mt-[12px] mb-2">
      <div
        class="w-[20.57px] h-[20.57px] max-md:w-[14px] max-md:h-[14px] border border-solid border-violet-600 flex-shrink-0 transition-all duration-500"
        :class="fillFirst ? 'bg-violet-600 rotate-0' : 'rotate-45'"
      />
      <div
        class="w-[20.57px] h-[20.57px] max-md:w-[14px] max-md:h-[14px] rounded-[10.29px] max-md:rounded-[7px] border border-solid border-blue-500 flex-shrink-0 transition-all duration-500 delay-100"
        :class="fillSecond ? 'bg-blue-500 scale-110' : 'scale-100'"
      />
      <div
        class="w-[16.55px] h-[16.55px] max-md:w-[11px] max-md:h-[11px] border border-solid border-cyan-500 rotate-45 flex-shrink-0 transition-all duration-500 delay-200"
        :class="fillThird ? 'bg-cyan-500' : ''"
      />
    </div>

    <!-- Title -->
    <h2 class="relative z-10 font-semibold text-slate-50 text-[40px] max-lg:text-[28px] max-md:text-[24px] tracking-[0] leading-normal whitespace-nowrap">
      {{ title }}
    </h2>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  firstLetter: string
  restText: string
  title: string
  fillFirst?: boolean
  fillSecond?: boolean
  fillThird?: boolean
  align?: 'center' | 'left'
}>()
</script>
