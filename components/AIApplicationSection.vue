<template>
  <section class="relative w-full bg-[#ffffff03] py-16 overflow-hidden">
    <!-- Section Header -->
    <div class="relative flex flex-col items-center mb-12">
      <!-- Faint background text -->
      <div class="absolute top-0 left-1/2 -translate-x-1/2 flex items-center font-normal text-[#f8fafc1a] text-[100px] tracking-[0] leading-normal whitespace-nowrap pointer-events-none select-none">
        <span class="text-[100px]">S</span>
        <span class="text-[40px]">ELECTED CASES</span>
      </div>

      <!-- Decorative shapes -->
      <div class="relative z-10 flex items-center gap-[8.6px] mt-[29px] mb-2">
        <div class="w-[20.57px] h-[20.57px] border border-solid border-violet-600" />
        <div class="w-[20.57px] h-[20.57px] rounded-[10.29px] border border-solid border-blue-500" />
        <div class="w-[18.55px] h-[18.55px] bg-cyan-500 border border-solid rotate-45" />
      </div>

      <!-- Title -->
      <div class="relative z-10 flex items-center font-semibold text-slate-50 text-[40px] tracking-[0] leading-normal mt-1">
        精選案例
      </div>
    </div>

    <!-- Cards Row -->
    <div class="relative flex items-stretch justify-center gap-0 px-8 max-w-[1440px] mx-auto">
      <!-- Left Card -->
      <div class="relative flex-1 max-w-[387px]">
        <img
          class="absolute top-0 left-0 w-[357px] h-[294px] z-10 pointer-events-none"
          alt="Subtract"
          src="https://c.animaapp.com/mn5gtr03DZ8elR/img/subtract-1.svg"
        />
        <div class="relative w-full h-[295px] rounded-[10px] border-[0.4px] border-solid border-slate-700 overflow-hidden"
          style="background: linear-gradient(135deg, rgba(20,30,60,0.6) 0%, rgba(11,17,33,1) 100%);">
          <div class="absolute top-[53px] left-[20px] w-[364px] h-[205px]">
            <!-- Badge -->
            <div class="inline-flex flex-col w-[153px] h-[26px] items-center justify-center rounded-[20px] border-[0.5px] border-solid border-violet-600">
              <span class="font-normal text-violet-600 text-base text-center tracking-[0.50px] leading-normal">AI CUSTOMER SERVICE</span>
            </div>
            <!-- Title & Desc -->
            <div class="mt-[14px] flex flex-col gap-5">
              <div class="flex items-center w-[227px] h-6 font-medium text-slate-50 text-xl tracking-[0] leading-normal">AI 輔助獸醫系統</div>
              <div class="w-[263px] font-normal text-slate-400 text-sm leading-[22px] tracking-[0]">
                使用 AI 模型，輔助獸醫進行病歷預覽，加速診斷進度，並提供寵物主人專業知識解釋的管道
              </div>
            </div>
            <div class="mt-[20px]">
              <span class="font-normal text-slate-400 text-base tracking-[0] leading-[21px]">了解更多</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Center Card (featured) -->
      <div class="relative flex-1 max-w-[387px] z-20">
        <!-- Navigation arrows -->
        <div class="absolute left-[-24px] top-1/2 -translate-y-1/2 z-30 flex items-center justify-center w-10 h-10 rounded-full border border-solid border-slate-600 bg-[rgba(11,17,33,0.8)] cursor-pointer">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 12L6 8L10 4" stroke="#94a3b8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="absolute right-[-24px] top-1/2 -translate-y-1/2 z-30 flex items-center justify-center w-10 h-10 rounded-full border border-solid border-slate-600 bg-[rgba(11,17,33,0.8)] cursor-pointer">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 4L10 8L6 12" stroke="#94a3b8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>

        <!-- Rectangle top-right decoration -->
        <img class="absolute top-[26px] right-0 w-20 h-20 z-20 pointer-events-none" alt="Rectangle" src="https://c.animaapp.com/mn5gtr03DZ8elR/img/rectangle-58.png" />

        <div class="relative w-full h-[295px] rounded-[10px] border-[0.4px] border-solid border-slate-200 overflow-hidden"
          style="background: linear-gradient(135deg, rgba(45,70,135,0.4) 0%, rgba(11,17,33,1) 100%);">
          <!-- Group icon -->
          <img class="absolute top-[70px] left-[-93px] w-12 h-12 z-10 pointer-events-none" alt="Group" src="https://c.animaapp.com/mn5gtr03DZ8elR/img/group-24.png" />

          <div class="absolute top-[53px] left-[20px] w-[364px] h-[205px]">
            <!-- Badge -->
            <div class="inline-flex flex-col w-[126px] h-[26px] items-center justify-center rounded-[20px] border-[0.5px] border-solid border-blue-500">
              <span class="font-normal text-blue-500 text-base text-center tracking-[0.50px] leading-normal">BACKEND SYSTEM</span>
            </div>
            <!-- Title & Desc -->
            <div class="mt-[14px] flex flex-col gap-5">
              <div class="flex items-center w-[227px] h-6 font-medium text-slate-50 text-xl tracking-[0] leading-normal">專業知識內容審核系統</div>
              <div class="w-[327px] font-normal text-slate-400 text-sm leading-[22px] tracking-[0]">
                使用 AI 技術分析專業文件與媒體內容，<br />即時識別準確性與合規性問題，提升審核效率
              </div>
            </div>
            <!-- Learn More -->
            <div class="mt-[20px] flex items-center gap-2">
              <span class="font-extralight text-white text-base tracking-[0] leading-[21px]">了解更多</span>
              <img class="w-[21px] h-[7px]" alt="Arrow" src="https://c.animaapp.com/mn5gtr03DZ8elR/img/arrow-2.svg" />
            </div>
          </div>
        </div>
      </div>

      <!-- Right Card -->
      <div class="relative flex-1 max-w-[387px]">
        <img class="absolute top-0 right-0 w-[357px] h-[294px] z-10 pointer-events-none" alt="Subtract" src="https://c.animaapp.com/mn5gtr03DZ8elR/img/subtract.svg" />
        <img class="absolute top-[70px] right-[-10px] w-12 h-12 z-20 pointer-events-none" alt="Group" src="https://c.animaapp.com/mn5gtr03DZ8elR/img/group-23.png" />
        <div class="relative w-full h-[295px] rounded-[10px] border-[0.4px] border-solid border-slate-700 overflow-hidden"
          style="background: linear-gradient(135deg, rgba(20,30,60,0.6) 0%, rgba(11,17,33,1) 100%);">
          <div class="absolute top-[53px] left-[20px] w-[364px] h-[205px]">
            <!-- Badge -->
            <div class="inline-flex flex-col w-[153px] h-[26px] items-center justify-center rounded-[20px] border-[0.5px] border-solid border-cyan-500">
              <span class="font-normal text-cyan-500 text-base text-center tracking-[0.50px] leading-normal">AI CUSTOMER SERVICE</span>
            </div>
            <!-- Title & Desc -->
            <div class="mt-[14px] flex flex-col gap-5">
              <div class="flex items-center w-[227px] h-6 font-medium text-slate-50 text-xl tracking-[0] leading-normal">24/7 AI 智能客服</div>
              <div class="w-[286px] font-normal text-slate-400 text-sm leading-[22px] tracking-[0]">
                使用 AI 模型協助客服 7*24 不間斷服務，<br />確保降低真人客服 Loading
              </div>
            </div>
            <div class="mt-[20px]">
              <span class="font-normal text-slate-400 text-base tracking-[0] leading-[21px]">了解更多</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
