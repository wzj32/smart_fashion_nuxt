<template>
  <div class="px-20 max-lg:px-8 max-md:px-4 flex flex-col w-full items-center relative py-0">
    <!-- Top section: breadcrumb + hero + title -->
    <div class="flex flex-col items-center gap-6 px-0 py-[0px] relative self-stretch w-full">
      <!-- Hero card container -->
      <div class="flex flex-col items-center gap-20 max-lg:gap-10 max-md:gap-6 relative self-stretch w-full rounded-lg overflow-hidden border border-solid border-[#00000014]">
        <!-- Hero image -->
        <div
          class="relative w-full h-[600px] max-lg:h-[400px] max-md:h-[250px] rounded-[20px] overflow-hidden bg-cover bg-center"
          :style="{ backgroundImage: 'url(/images/mn6tdh0s8MHj5j/rectangle-48.png)' }"
        >
          <!-- Cyan circle -->
          <div class="absolute top-[427px] max-lg:top-auto max-lg:bottom-[40px] max-md:bottom-[30px] left-[37px] max-md:left-[20px] w-[140px] max-md:w-[100px] h-[140px] max-md:h-[100px] bg-cyan-500 rounded-full" />
          <!-- Label on image -->
          <div class="absolute top-[479px] max-lg:top-auto max-lg:bottom-[92px] max-md:bottom-[62px] left-[47px] max-md:left-[25px] h-9 flex items-center font-medium text-white text-3xl max-md:text-xl tracking-[0] leading-[normal] whitespace-nowrap">
            電商平台
          </div>
        </div>

        <!-- Title + meta info row -->
        <div class="flex max-lg:flex-col flex-wrap items-start gap-20 max-lg:gap-6 relative w-full pb-8 px-0 max-md:px-2">
          <!-- Project title -->
          <h1 class="flex items-center w-[418px] max-lg:w-full font-bold text-slate-50 text-5xl max-lg:text-4xl max-md:text-3xl tracking-[0] leading-[57.6px] max-md:leading-normal">
            專業知識內容審核系統
          </h1>

          <!-- Meta info card -->
          <div class="flex flex-1 max-lg:w-full items-start justify-center gap-8 max-md:gap-4 pt-[31px] max-md:pt-4 pb-8 max-md:pb-4 px-8 max-md:px-4 bg-[#94a3b833] border-[0.5px] border-solid border-[#e2e8f080] rounded-lg">
            <div
              v-for="(item, index) in metaInfoItems"
              :key="index"
              class="flex flex-col items-start gap-[7px] flex-1"
            >
              <span class="font-normal text-slate-400 text-sm tracking-[0] leading-[22.4px]">
                {{ item.label }}
              </span>
              <span class="font-medium text-slate-50 text-lg max-md:text-base tracking-[0] leading-[28.8px]">
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
          <p class="self-stretch font-normal text-white text-base tracking-[0] leading-[28.8px]">
            專業知識內容需要嚴格審查，以確保準確性、完整性與合規性。然而，傳統人工審核方式面臨多項挑戰:<br />
            人工審核費時費力，難以跟上大量內容產出<br />
            專業領域知識複雜，審核標準難以保持一致性<br />
            容易出現疏漏，特別是在複雜的專業文件中<br />
            跨領域內容審核需要多專業背景，人力資源成本高
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

          <!-- Active solution item -->
          <div class="absolute top-[111px] left-0 h-8 flex items-center font-semibold text-white text-[28px] max-md:text-xl tracking-[0] leading-8 whitespace-nowrap max-lg:relative max-lg:top-auto max-lg:left-auto max-lg:mt-4">
            多模態內容分析
          </div>
          <div class="absolute top-[153px] left-0 w-[566px] max-lg:w-full flex items-center font-normal text-slate-300 text-base tracking-[0] leading-6 max-lg:relative max-lg:top-auto max-lg:left-auto max-lg:mt-2">
            支持文本、語音、視頻等多種內容格式的分析，使用高精度識別技術將各類媒體內容轉換為結構化數據
          </div>

          <!-- Solution list items -->
          <div class="absolute top-[239px] left-0 w-[260px] flex items-center justify-between h-[52px] max-lg:relative max-lg:top-auto max-lg:left-auto max-lg:w-full max-lg:mt-4">
            <span class="flex items-center gap-2 font-medium text-white text-xl max-md:text-base tracking-[0] leading-[25.6px]"><img src="/images/mn6tdh0s8MHj5j/background.svg" class="w-5 h-5" alt="icon" />多模態內容分析</span>
            <span class="font-normal text-white text-xl max-md:text-base tracking-[0] leading-[25.6px]">01.</span>
          </div>
          <div class="absolute top-[291px] left-0 w-[338px] max-lg:w-full h-px bg-white max-lg:relative max-lg:top-auto max-lg:left-auto">
            <div class="h-full w-[15%] bg-cyan-500" />
          </div>

          <div class="absolute top-[341px] left-0 w-[260px] flex items-center justify-between h-[26px] max-lg:relative max-lg:top-auto max-lg:left-auto max-lg:w-full max-lg:mt-2">
            <span class="flex items-center gap-2 font-medium text-slate-300 text-base tracking-[0] leading-[25.6px]">專業知識增強型 LLM</span>
            <span class="font-normal text-slate-400 text-base tracking-[0] leading-[25.6px]">02.</span>
          </div>

          <div class="absolute top-[387px] left-0 w-[260px] flex items-center justify-between h-[26px] max-lg:relative max-lg:top-auto max-lg:left-auto max-lg:w-full max-lg:mt-2">
            <span class="font-medium text-slate-300 text-base tracking-[0] leading-[25.6px]">多維度品質評分系統</span>
            <span class="font-normal text-slate-400 text-base tracking-[0] leading-[25.6px]">03.</span>
          </div>

          <div class="absolute top-[433px] left-0 w-[260px] flex items-center justify-between h-[26px] max-lg:relative max-lg:top-auto max-lg:left-auto max-lg:w-full max-lg:mt-2">
            <span class="font-medium text-slate-300 text-base tracking-[0] leading-[25.6px]">審核輔助界面</span>
            <span class="font-normal text-slate-400 text-base tracking-[0] leading-[25.6px]">04.</span>
          </div>
        </div>

        <!-- Right column: image -->
        <img
          class="w-[459px] max-lg:w-[40%] max-md:w-full h-[459px] max-lg:h-auto rounded-[20px] object-cover flex-shrink-0"
          alt="Rectangle"
          src="/images/mn6tdh0s8MHj5j/rectangle-49.png"
        />
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

        <div class="flex flex-col w-[775px] max-lg:w-full items-start">
          <p class="self-stretch font-normal text-slate-300 text-base tracking-[0] leading-[28.8px]">
            系統成功實現了專業知識內容審核的高效自動化，不僅大幅提升了審核效率，還顯著降低了內容問題漏檢率。系統投入使用後，審核團隊可以將更多精力集中在需要人工判斷的複雜情境上，顯著提高了整體工作質量。此外，系統的數據分析功能還幫助識別常見內容問題模式，為內容創作者提供了有價值的反饋，促進了專業內容整體品質的提升。系統已成功應用於學術出版、專業培訓教材、技術文檔以及多媒體教育內容的審核流程中。
          </p>
        </div>
      </div>
    </section>

    <!-- Stats cards -->
    <div class="flex items-center justify-end max-lg:justify-center w-full py-8">
      <div class="flex max-md:flex-col w-[833px] max-lg:w-full items-start justify-end gap-4">
        <div
          v-for="(stat, index) in statsItems"
          :key="index"
          class="flex-1 max-md:w-full bg-[#ffffff0d] border border-solid border-[#00000014] rounded-lg"
        >
          <div class="flex flex-col items-center gap-[7px] p-6 max-md:p-4">
            <div class="flex flex-col w-full items-center">
              <div
                class="flex items-center justify-center h-16 font-normal text-[40px] max-md:text-[32px] text-center tracking-[0] leading-[64px] whitespace-nowrap"
                :class="stat.valueClass"
              >
                {{ stat.value }}
              </div>
            </div>
            <div class="flex items-center justify-center font-normal text-slate-400 text-sm text-center tracking-[0] leading-[22.4px] whitespace-nowrap">
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
            v-for="(tag, index) in technicalTags"
            :key="index"
            class="flex h-[50px] max-md:h-10 items-center justify-center gap-2.5 rounded-lg border border-solid px-4 max-md:px-3"
            :class="tag.active ? 'border-slate-200' : 'border-slate-400'"
          >
            <span
              class="font-normal text-base max-md:text-sm tracking-[0] leading-[22.4px]"
              :class="tag.active ? 'text-white' : 'text-slate-400'"
            >
              {{ tag.label }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA section -->
    <div class="" style="width: 100%;">
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
const metaInfoItems = [
  { label: '服務 Service', value: 'AI 應用' },
  { label: '產業 Industry', value: '教育, 出版' },
  { label: '關鍵成果 Result', value: '150W+ 下載量' },
]

const statsItems = [
  {
    value: '80%',
    label: '審核效率提升',
    valueClass: 'text-white',
  },
  {
    value: '5%',
    label: '內容問題漏檢率降至',
    valueClass: 'bg-[linear-gradient(90deg,rgba(82,85,238,1)_0%,rgba(255,255,255,1)_55%,rgba(60,180,217,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] text-transparent',
  },
  {
    value: '6%',
    label: '人力成本降低',
    valueClass: 'text-white',
  },
]

const technicalTags = [
  { label: '大語言模型', active: false },
  { label: '自然語言處理', active: false },
  { label: '多模態分析', active: true },
  { label: '品質評估算法', active: false },
  { label: 'RAG 技術', active: false },
  { label: '知識圖譜', active: false },
]
</script>
