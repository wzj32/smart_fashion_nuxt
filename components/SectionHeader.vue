<template>
  <div class="relative flex flex-col" :class="align === 'left' ? 'items-start' : 'items-center'">
    <!-- Faint background text -->
    <div
      class="absolute top-0 flex items-center font-normal text-[#f8fafc1a] text-[100px] tracking-[0] leading-normal whitespace-nowrap pointer-events-none select-none"
      :class="align === 'left' ? 'left-0' : 'left-1/2 -translate-x-1/2'"
    >
      <span class="text-[#f8fafc33] text-[100px]">{{ firstLetter }}</span>
      <span class="text-[40px]">{{ restText }}</span>
    </div>

    <!-- Decorative shapes -->
    <div class="relative z-10 flex items-center gap-[8.6px] mt-[29px] mb-2">
      <div class="w-[20.57px] h-[20.57px] border border-solid border-violet-600 flex-shrink-0" :class="fillFirst ? 'bg-violet-600' : ''" />
      <div class="w-[20.57px] h-[20.57px] rounded-[10.29px] border border-solid border-blue-500 flex-shrink-0" :class="fillSecond ? 'bg-blue-500' : ''" />
      <div class="w-[16.55px] h-[16.55px] border border-solid border-cyan-500 rotate-45 flex-shrink-0" :class="fillThird ? 'bg-cyan-500' : ''" />
    </div>

    <!-- Title -->
    <h2 class="relative z-10 font-semibold text-slate-50 text-[40px] tracking-[0] leading-normal whitespace-nowrap">
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
