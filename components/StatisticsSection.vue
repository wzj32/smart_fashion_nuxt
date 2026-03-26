<template>
  <section class="px-10 py-10 border-b border-[#00000014] backdrop-blur-[5px] flex flex-col items-start self-stretch w-full">
    <div class="flex items-stretch justify-center gap-6 self-stretch w-full">
      <div
        v-for="(stat, index) in statisticsData"
        :key="index"
        class="relative flex flex-col items-center justify-center gap-2 flex-1 rounded-[10px] py-6 px-4"
        :style="{ background: stat.cardBg }"
      >
        <!-- Gradient border overlay -->
        <div
          class="absolute inset-0 rounded-[10px] pointer-events-none z-[1]"
          style="padding: 1px; background: linear-gradient(180deg, rgba(226,232,240,0.6) 0%, rgba(148,163,184,0.12) 100%); -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude;"
        />

        <!-- Icon image -->
        <div class="flex flex-col items-center w-full">
          <img class="w-[100px] h-[100px]" :alt="stat.imgAlt" :src="stat.imgSrc" />

          <!-- Stat number -->
          <div
            class="flex items-center justify-center h-[59px] font-normal text-5xl text-center tracking-[0] leading-normal text-transparent"
            style="background-image: linear-gradient(180deg, rgba(248,250,252,1) 0%, rgba(148,163,184,1) 100%); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;"
          >
            {{ stat.value }}
          </div>
        </div>

        <!-- Label -->
        <div class="flex flex-col items-center pb-0.5 w-full">
          <div class="flex items-center justify-center h-5 font-normal text-cyan-500 text-base text-center tracking-[0] leading-normal">
            {{ stat.label }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const statisticsData = [
  {
    value: '12+',
    label: '年開發經驗',
    imgSrc: 'https://c.animaapp.com/mn5gtr03DZ8elR/img/mask-group.png',
    imgAlt: 'Mask group',
    cardBg: 'linear-gradient(136deg, rgba(82,85,238,0.64) 0%, rgba(148,163,184,0.16) 100%)',
  },
  {
    value: '100+',
    label: '完成專案',
    imgSrc: 'https://c.animaapp.com/mn5gtr03DZ8elR/img/mask-group-1.png',
    imgAlt: 'Mask group',
    cardBg: 'linear-gradient(136deg, rgba(148,163,184,0.16) 0%, rgba(148,163,184,0.04) 100%)',
  },
  {
    value: '200+',
    label: '服務客戶',
    imgSrc: 'https://c.animaapp.com/mn5gtr03DZ8elR/img/mask-group-2.png',
    imgAlt: 'Mask group',
    cardBg: 'linear-gradient(136deg, rgba(148,163,184,0.16) 0%, rgba(148,163,184,0.04) 100%)',
  },
  {
    value: '50+',
    label: '團隊成員',
    imgSrc: 'https://c.animaapp.com/mn5gtr03DZ8elR/img/mask-group-3.png',
    imgAlt: 'Mask group',
    cardBg: 'linear-gradient(136deg, rgba(148,163,184,0.16) 0%, rgba(148,163,184,0.04) 100%)',
  },
]
</script>
