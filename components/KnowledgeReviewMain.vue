<template>
  <div class="px-60 max-lg:px-8 max-md:px-4 flex flex-col w-full items-center relative py-0">
    <!-- Top section: breadcrumb + hero + title -->
    <div class="flex flex-col items-center gap-6 px-0 py-[0px] relative self-stretch w-full">
      <!-- Hero card container -->
      <div class="flex flex-col items-center gap-20 max-lg:gap-10 max-md:gap-6 relative self-stretch w-full rounded-lg border border-solid border-[#00000014]">
        <!-- Hero banner: 左下角破角 -->
        <div class="relative w-full">
          <!-- Background frame -->
          <div
            class="relative w-full h-[560px] max-lg:h-[400px] max-md:h-[260px] rounded-[20px] overflow-hidden"
            style="background: linear-gradient(135deg, #0d1117 0%, #1a2840 55%, #0d1117 100%)"
          >
            <!-- Right side glow -->
            <div class="absolute right-0 top-0 w-1/2 h-full pointer-events-none"
              style="background: radial-gradient(ellipse at 85% 50%, rgba(124,58,237,0.25) 0%, transparent 65%)" />
          </div>

          <!-- Breaking image: left side, extends 64px below frame -->
          <img
            class="absolute left-0 bottom-[-64px] max-md:bottom-0 w-[62%] max-md:w-full h-[calc(100%+64px)] max-md:h-full object-cover rounded-tl-[20px] rounded-bl-[20px]"
            :src="caseData.heroImage"
          />

          <!-- Blend: right edge of image into background -->
          <div
            class="absolute left-[42%] bottom-[-64px] max-md:hidden w-[22%] h-[calc(100%+64px)] pointer-events-none"
            style="background: linear-gradient(to right, transparent 0%, #0d1117 100%)"
          />

          <!-- Cyan circle -->
          <div class="absolute bottom-[-24px] max-md:hidden left-[37px] w-[140px] h-[140px] bg-cyan-500 rounded-full z-20" />
          <!-- Label -->
          <div class="absolute bottom-[28px] max-md:hidden left-[47px] z-30 h-9 flex items-center font-medium text-white text-3xl tracking-[0] leading-[normal] whitespace-nowrap">
            {{ caseData.heroLabel }}
          </div>

          <!-- Mobile: label inside frame -->
          <div class="absolute bottom-[20px] left-[20px] md:hidden z-30 h-9 flex items-center font-medium text-white text-xl tracking-[0] leading-[normal] whitespace-nowrap">
            {{ caseData.heroLabel }}
          </div>

          <!-- Bottom spacer for breaking image -->
          <div class="h-[64px] max-md:h-0" />
        </div>

        <!-- Title + meta info row -->
        <div class="flex max-lg:flex-col flex-wrap items-start gap-20 max-lg:gap-6 relative w-full pb-8 px-0 max-md:px-2">
          <!-- Project title -->
          <h1 class="flex items-center w-[418px] max-lg:w-full font-bold text-slate-50 text-5xl max-lg:text-4xl max-md:text-3xl tracking-[0] leading-[57.6px] max-md:leading-normal">
            {{ caseData.title }}
          </h1>

          <!-- Meta info card -->
          <div class="flex flex-1 max-lg:w-full items-start justify-center gap-8 max-md:gap-4 pt-[31px] max-md:pt-4 pb-8 max-md:pb-4 px-8 max-md:px-4 bg-[#94a3b833] border-[0.5px] border-solid border-[#e2e8f080] rounded-lg">
            <div
              v-for="(item, index) in caseData.meta"
              :key="index"
              class="flex flex-col items-start gap-[7px] flex-1"
            >
              <span class="font-normal text-slate-400 text-xs tracking-[0] leading-[22.4px]">
                {{ item.label }}
              </span>
              <span class="font-medium text-slate-300 text-base max-md:text-sm tracking-[0] leading-[28.8px]">
                {{ item.value }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- BACKGROUND / 挑戰 section -->
    <section class="flex items-center justify-center gap-16 max-lg:gap-8 relative self-stretch w-full py-8">
      <div class="flex max-lg:flex-col w-full items-center max-lg:items-start justify-center gap-[23.4px] max-lg:gap-4 relative">
        <div class="flex flex-col w-[182px] max-lg:w-full items-start flex-shrink-0">
          <div class="flex items-center self-stretch font-semibold text-cyan-500 text-4xl max-md:text-3xl tracking-[0] leading-[26px]">
            <span class="font-semibold text-cyan-500 text-4xl max-md:text-3xl tracking-[0] leading-[26px]">B</span>
            <span class="text-2xl max-md:text-xl">ACKGROUND</span>
          </div>
          <div class="flex items-center self-stretch font-semibold text-slate-50 text-[32px] max-md:text-2xl tracking-[0] leading-[51.2px]">
            挑戰
          </div>
        </div>

        <div class="flex-1 h-[52px] max-lg:hidden" />

        <div class="flex flex-col w-[775px] max-lg:w-full items-start">
          <p class="self-stretch font-normal text-slate-300 text-sm tracking-[0] leading-[28.8px]">
            <template v-for="(line, i) in caseData.background" :key="i">
              {{ line }}<br v-if="i < caseData.background.length - 1" />
            </template>
          </p>
        </div>
      </div>
    </section>

    <!-- SOLUTION / 解決方案 section -->
    <section class="flex items-start justify-center gap-16 relative self-stretch w-full py-8">
      <div class="relative flex max-md:flex-col w-full items-start gap-[509px] max-lg:gap-6">
        <!-- Left column: all text content -->
        <div class="flex flex-col items-start flex-1 min-w-0">
          <!-- Label -->
          <div class="flex flex-col items-start w-[182px] max-lg:w-full flex-shrink-0">
            <div class="flex items-center self-stretch font-semibold text-cyan-500 text-4xl max-md:text-3xl tracking-[0] leading-[26px]">
              <span class="font-semibold text-cyan-500 text-4xl max-md:text-3xl tracking-[0] leading-[26px]">S</span>
              <span class="text-2xl max-md:text-xl">OLUTION</span>
            </div>
            <div class="flex items-center self-stretch font-semibold text-slate-50 text-[32px] max-md:text-2xl tracking-[0] leading-[51.2px]">
              解決方案
            </div>
          </div>

          <!-- Active solution detail (dynamic) -->
          <Transition name="solution-fade" mode="out-in">
            <div :key="activeSolutionId" class="absolute top-[111px] left-0 max-lg:relative max-lg:top-auto max-lg:left-auto max-lg:mt-4">
              <div class="w-[566px] max-lg:w-full font-normal text-slate-300 text-sm tracking-[0] leading-6">
                {{ activeSolution.detail }}
              </div>
            </div>
          </Transition>

          <!-- Solution list items -->
          <div
            v-for="item in caseData.solutions"
            :key="item.id"
            class="absolute max-lg:relative max-lg:top-auto max-lg:left-auto max-lg:w-full max-lg:mt-2 w-[260px] flex items-center justify-between h-[52px] cursor-pointer"
            :style="{ top: `${239 + (item.id - 1) * 50}px`, left: '0' }"
            @mouseenter="activeSolutionId = item.id"
          >
            <span
              class="flex items-center gap-2 font-medium tracking-[0] leading-[25.6px] transition-colors duration-300"
              :class="activeSolutionId === item.id ? 'text-white text-xl max-md:text-base' : 'text-slate-300 text-base'"
            >
              <img v-if="activeSolutionId === item.id" src="/images/mn6tdh0s8MHj5j/background.svg" class="w-5 h-5" alt="icon" />
              {{ item.title }}
            </span>
            <span
              class="font-normal tracking-[0] leading-[25.6px] transition-colors duration-300"
              :class="activeSolutionId === item.id ? 'text-white text-xl max-md:text-base' : 'text-slate-400 text-base'"
            >
              {{ item.number }}
            </span>
          </div>

          <!-- Divider under active item -->
          <div
            class="absolute left-0 w-[338px] max-lg:w-full h-px bg-white max-lg:relative max-lg:top-auto max-lg:left-auto max-lg:mt-1"
            :style="{ top: `${239 + (activeSolutionId - 1) * 50 + 52}px` }"
          >
            <div class="h-full w-[15%] bg-cyan-500" />
          </div>
        </div>

        <!-- Right column: image -->
        <Transition name="solution-fade" mode="out-in">
          <img
            :key="activeSolutionId"
            class="w-[459px] max-lg:w-[40%] max-md:w-full h-[459px] max-lg:h-auto rounded-[20px] object-cover flex-shrink-0"
            alt="Rectangle"
            :src="activeSolution.image"
          />
        </Transition>
      </div>
    </section>

    <!-- BENEFITS / 成果與效益 section -->
    <section class="flex items-start justify-center gap-16 max-lg:gap-8 relative self-stretch w-full py-8">
      <div class="flex max-lg:flex-col w-full items-center max-lg:items-start justify-center gap-[23.4px] max-lg:gap-4 relative">
        <div class="flex flex-col w-[182px] max-lg:w-full items-start flex-shrink-0">
          <div class="flex items-center self-stretch font-semibold text-cyan-500 text-4xl max-md:text-3xl tracking-[0] leading-[26px]">
            <span class="font-semibold text-cyan-500 text-4xl max-md:text-3xl tracking-[0] leading-[26px]">B</span>
            <span class="text-2xl max-md:text-xl">ENEFITS</span>
          </div>
          <div class="flex items-center self-stretch font-semibold text-slate-50 text-[32px] max-md:text-2xl tracking-[0] leading-[51.2px]">
            成果與效益
          </div>
        </div>

        <div class="flex-1 h-[52px] max-lg:hidden" />

        <div class="flex flex-col w-[833px] max-lg:w-full items-start">
          <p class="self-stretch font-normal text-slate-300 text-sm tracking-[0] leading-[28.8px]">
            {{ caseData.benefits }}
          </p>
        </div>
      </div>
    </section>

    <!-- Stats cards -->
    <div class="flex items-center justify-end max-lg:justify-center w-full py-8">
      <div class="flex max-md:flex-col w-[833px] max-lg:w-full items-start justify-end gap-4">
        <div
          v-for="(stat, index) in caseData.stats"
          :key="index"
          class="group flex-1 max-md:w-full bg-[#ffffff0d] border border-solid border-[#00000014] rounded-lg transition-all duration-300 hover:border-violet-600/40 hover:bg-[#ffffff14]"
        >
          <div class="flex flex-col items-center gap-[7px] p-6 max-md:p-4">
            <div class="flex flex-col w-full items-center">
              <div
                class="flex items-center justify-center h-16 font-normal text-[40px] max-md:text-[32px] text-center tracking-[0] leading-[64px] whitespace-nowrap transition-all duration-300"
                :class="[stat.valueClass, !stat.skipHover && 'stat-value']"
              >
                {{ stat.value }}
              </div>
            </div>
            <div class="flex items-center justify-center font-normal text-slate-300 text-xs text-center tracking-[0] leading-[22.4px] whitespace-nowrap">
              {{ stat.label }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- TECHNICAL / 技術標籤 section -->
    <section class="flex items-start justify-center gap-16 max-lg:gap-8 relative self-stretch w-full py-8">
      <div class="flex max-lg:flex-col w-full items-center max-lg:items-start justify-center gap-[23.4px] max-lg:gap-4 relative">
        <div class="flex flex-col w-[182px] max-lg:w-full items-start flex-shrink-0">
          <div class="flex items-center self-stretch font-semibold text-cyan-500 text-4xl max-md:text-3xl tracking-[0] leading-[26px]">
            <span class="font-semibold text-cyan-500 text-4xl max-md:text-3xl tracking-[0] leading-[26px]">T</span>
            <span class="text-2xl max-md:text-xl">ECHNICAL</span>
          </div>
          <div class="flex items-center self-stretch font-semibold text-slate-50 text-[32px] max-md:text-2xl tracking-[0] leading-[51.2px]">
            技術標籤
          </div>
        </div>

        <div class="flex-1 h-[52px] max-lg:hidden" />

        <!-- Tags -->
        <div class="flex flex-wrap items-center gap-[34px] max-md:gap-3">
          <div
            v-for="(tag, index) in caseData.tags"
            :key="index"
            class="group flex h-[50px] max-md:h-10 items-center justify-center gap-2.5 rounded-lg border border-solid px-4 max-md:px-3 cursor-pointer transition-all duration-300 hover:border-violet-500/70 hover:bg-[#7c3aed18] hover:shadow-[0_0_14px_rgba(124,58,237,0.35)]"
            :class="tag.active ? 'border-slate-200' : 'border-slate-400'"
          >
            <span
              class="font-normal text-sm max-md:text-xs tracking-[0] leading-[22.4px] transition-colors duration-300 group-hover:text-white text-slate-300"
            >
              {{ tag.label }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA section -->
    <div style="width: 100%;">
      <div class="relative flex flex-col w-full items-center gap-[14.9px] p-16 max-lg:p-10 max-md:p-6 mt-8 rounded-[10px] border border-solid border-[#7c3aed33] overflow-hidden"
         style="background: linear-gradient(164deg, rgba(124,58,237,0.1) 0%, rgba(59,130,246,0.1) 100%)"
       >
         <!-- Background mask image -->
         <img
           class="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
           alt="Mask group"
           src="/images/mn6tdh0s8MHj5j/mask-group.png"
         />

         <!-- Title -->
         <div class="relative flex flex-col items-center z-10">
           <h2 class="flex items-center justify-center font-semibold text-slate-50 text-[32px] max-md:text-2xl text-center tracking-[0] leading-[51.2px] max-md:leading-normal whitespace-nowrap max-md:whitespace-normal">
             準備好開始您的專案了嗎？
           </h2>
         </div>

         <!-- Subtitle -->
         <div class="relative flex flex-col max-w-[600px] w-full items-center z-10">
           <p class="self-stretch font-normal text-slate-400 text-lg max-md:text-base text-center tracking-[0] leading-[28.8px]">
             從概念到落地，我們是您最值得信賴的技術夥伴。立即預約，開啟高效開發之旅。
           </p>
         </div>

         <!-- CTA Button -->
         <NuxtLink
           to="/contact"
           class="relative z-10 w-[172px] h-[53.59px] rounded-md flex items-center justify-center gap-2 cursor-pointer hover:opacity-90 transition-opacity no-underline"
           style="background: linear-gradient(163deg, rgba(124,58,237,1) 0%, rgba(59,130,246,1) 100%)"
         >
           <span class="font-normal text-white text-base text-center tracking-[0] leading-[25.6px] whitespace-nowrap">
             聯絡我們
           </span>
           <img
             class="w-5 h-5"
             alt="Iconify icon"
             src="/images/mn6tdh0s8MHj5j/iconify-icon-1.svg"
           />
         </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { CaseStudy } from '~/data/cases'

const props = defineProps<{
  caseData: CaseStudy
}>()

const activeSolutionId = ref(props.caseData.solutions[0]?.id ?? 1)
const activeSolution = computed(
  () => props.caseData.solutions.find(s => s.id === activeSolutionId.value) ?? props.caseData.solutions[0]
)
</script>

<style scoped>
.group:hover .stat-value {
  background: linear-gradient(135deg, #7c3aed 0%, #ffffff 50%, #3b82f6 100%) !important;
  -webkit-background-clip: text !important;
  background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
  color: transparent !important;
}

.solution-fade-enter-active,
.solution-fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.solution-fade-enter-from {
  opacity: 0;
  transform: translateY(8px);
}
.solution-fade-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
