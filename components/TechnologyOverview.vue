<template>
  <div class="flex flex-col w-full items-center gap-[30px] relative">

    <!-- Hero Banner Section -->
    <section class="flex flex-col h-[800px] max-lg:h-[500px] max-md:h-[400px] items-center justify-center px-60 max-lg:px-8 max-md:px-4 py-20 relative self-stretch w-full overflow-hidden">
      <img
        class="absolute -top-5 left-[-100px] w-[calc(100%+100px)] h-[800px] max-lg:h-[500px] max-md:h-[400px] object-cover"
        alt="Banner"
        src="/images/mn69fej5o9rxxH/banner2-5.png"
      />
      <div class="flex flex-col items-start justify-center gap-12 max-md:gap-6 px-6 max-md:px-0 py-0 relative w-full">
        <!-- Since 2011 Badge -->
        <div v-reveal="{ direction: 'up', delay: 200, duration: 800 }" class="inline-flex items-center justify-center px-3 py-1 bg-[#ffffff33] rounded-xl border border-solid border-[#7c3aed4c]">
          <span class="font-medium text-violet-400 text-[13px] text-center leading-[20.8px] whitespace-nowrap">
            Since 2020
          </span>
        </div>

        <!-- Heading SVG -->
        <div v-reveal="{ direction: 'left', delay: 400, duration: 1000, distance: '60px' }" class="items-start relative self-stretch w-full flex flex-col">
          <img
            class="relative w-[441.7px] max-lg:w-full max-lg:max-w-[350px] max-md:max-w-[280px] h-auto"
            alt="Ai"
            src="/images/mn69fej5o9rxxH/ai-banner.svg"
          />
        </div>

        <!-- Description -->
        <div v-reveal="{ direction: 'up', delay: 600, duration: 800 }" class="flex flex-col max-w-[600px] w-full items-center pt-[7.59px] pb-[49.4px] max-md:pb-6 px-0">
          <p class="relative w-full font-normal text-base max-md:text-sm leading-[28.8px]" style="color: #94A3B8;">
            我們不僅僅是一間軟體開發公司，更是您在 AI 時代的數位轉型加速器。<br class="max-md:hidden" />
            融合十餘年開發經驗與最新人工智慧技術，重新定義交付標準。
          </p>
        </div>
      </div>
    </section>

    <!-- Company Overview / Stats Section -->
    <section class="flex w-full items-center justify-center gap-20 max-lg:gap-8 px-60 max-lg:px-8 max-md:px-4 py-0 relative max-lg:flex-col">
      <!-- Section heading -->
      <div v-reveal="{ direction: 'up', duration: 800 }" class="absolute top-0 left-1/2 -translate-x-1/2 max-lg:relative max-lg:top-auto max-lg:left-auto max-lg:translate-x-0 max-lg:w-full max-lg:flex max-lg:justify-center">
        <SectionHeader first-letter="C" rest-text="OMPANY STORY" title="公司簡介" fill-first fill-second />
      </div>

      <!-- Grid lines and stats -->
      <div class="relative w-full mt-[119px] max-lg:mt-0">
        <div class="relative w-full h-[754px] max-lg:h-auto max-lg:flex max-lg:flex-wrap max-lg:justify-center max-lg:gap-8 max-lg:py-8">
          <!-- Grid lines (desktop only) -->
          <img class="absolute top-[455px] left-0 w-full h-px max-lg:hidden" alt="Line" src="/images/mn69fej5o9rxxH/line-2.svg" />
          <img class="absolute top-0 left-[25%] w-px h-[754px] max-lg:hidden" alt="Line" src="/images/mn69fej5o9rxxH/line-3.svg" />
          <img class="absolute top-[219px] left-[50%] w-px h-[535px] max-lg:hidden" alt="Line" src="/images/mn69fej5o9rxxH/line-4.svg" />
          <img class="absolute top-[219px] left-[75%] w-px h-[535px] max-lg:hidden" alt="Line" src="/images/mn69fej5o9rxxH/line-5.svg" />

          <!-- 12+ 年開發經驗 -->
          <div v-reveal="{ direction: 'up', delay: 0, duration: 800 }" class="stat-item flex flex-col h-[140px] items-center justify-center gap-[7px] absolute top-64 left-[25%] right-[50%] max-lg:relative max-lg:top-auto max-lg:left-auto max-lg:right-auto max-lg:basis-[40%] max-md:basis-full cursor-default">
            <div class="stat-number relative flex items-center justify-center w-[186px] h-[93px] text-transparent text-[80px] max-md:text-[60px] text-center leading-[57.6px]" style="background: linear-gradient(176deg,#fff 0%,#94a3b8 100%); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; font-family:'DIN-Black',Helvetica">
              6+
            </div>
            <div class="relative flex items-center justify-center w-[106px] h-[23px] font-normal text-slate-400 text-base text-center leading-[22.4px] whitespace-nowrap">
              年開發經驗
            </div>
          </div>

          <!-- 200+ 服務客戶 -->
          <div v-reveal="{ direction: 'up', delay: 150, duration: 800 }" class="stat-item flex flex-col h-[140px] items-center justify-center gap-[7px] absolute top-[455px] left-0 right-[75%] max-lg:relative max-lg:top-auto max-lg:left-auto max-lg:right-auto max-lg:basis-[40%] max-md:basis-full cursor-default">
            <div class="stat-number relative flex items-center justify-center w-[186px] h-[93px] text-transparent text-[80px] max-md:text-[60px] text-center leading-[57.6px]" style="background: linear-gradient(176deg,#fff 0%,#94a3b8 100%); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; font-family:'DIN-Black',Helvetica">
              200+
            </div>
            <div class="relative flex items-center justify-center w-[106px] h-[23px] font-normal text-slate-400 text-base text-center leading-[22.4px] whitespace-nowrap">
              服務客戶
            </div>
          </div>

          <!-- AI 核心驅動 -->
          <div v-reveal="{ direction: 'up', delay: 300, duration: 800 }" class="stat-item flex flex-col h-[140px] items-center justify-center gap-[7px] absolute top-[455px] left-[25%] right-[50%] max-lg:relative max-lg:top-auto max-lg:left-auto max-lg:right-auto max-lg:basis-[40%] max-md:basis-full cursor-default">
            <div class="stat-number relative flex items-center justify-center w-[186px] h-[93px] text-transparent text-[80px] max-md:text-[60px] text-center leading-[57.6px]" style="background: linear-gradient(176deg,#fff 0%,#94a3b8 100%); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; font-family:'DIN-Black',Helvetica">
              AI
            </div>
            <div class="relative flex items-center justify-center w-[106px] h-[23px] font-normal text-slate-400 text-base text-center leading-[22.4px] whitespace-nowrap">
              核心驅動
            </div>
          </div>

          <!-- 100+ 專案交付 -->
          <div v-reveal="{ direction: 'up', delay: 450, duration: 800 }" class="stat-item flex flex-col h-[140px] items-center justify-center gap-[7px] absolute top-64 left-[50%] right-[25%] max-lg:relative max-lg:top-auto max-lg:left-auto max-lg:right-auto max-lg:basis-[40%] max-md:basis-full cursor-default">
            <div class="stat-number relative flex items-center justify-center w-[226px] h-[93px] text-transparent text-[80px] max-md:text-[60px] text-center leading-[57.6px]" style="background: linear-gradient(176deg,#fff 0%,#94a3b8 100%); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; font-family:'DIN-Black',Helvetica">
              100+
            </div>
            <div class="relative flex items-center justify-center w-[106px] h-[23px] font-normal text-slate-400 text-base text-center leading-[22.4px] whitespace-nowrap">
              專案交付
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Core Philosophy Section -->
    <section class="flex flex-col w-full items-center gap-16 max-md:gap-8 pt-5 pb-0 px-60 max-lg:px-8 max-md:px-4 relative">
      <div v-reveal="{ direction: 'up', duration: 800 }">
        <SectionHeader first-letter="C" rest-text="ORE PHILOSOPHY" title="核心理念" fill-second />
      </div>

      <!-- Cards -->
      <div
        v-reveal="{ stagger: 200, staggerEl: ':scope > div', duration: 700 }"
        class="flex max-lg:flex-col items-start justify-center gap-8 max-lg:gap-6 relative self-stretch w-full max-lg:items-center"
      >
        <div
          v-for="(card, index) in corePhilosophyCards"
          :key="index"
          class="group relative flex-1 min-w-0 max-lg:w-full max-lg:max-w-[400px] h-[280px] max-md:h-auto bg-[#ffffff1a] rounded-lg border border-solid border-[#00000014] max-md:flex max-md:flex-col max-md:items-center max-md:px-8 max-md:py-6 hover-lift transition-all duration-300 hover:bg-[linear-gradient(135deg,rgba(124,58,237,0.25)_0%,rgba(59,130,246,0.15)_100%)] hover:border-white/40 hover:shadow-[0_0_24px_rgba(124,58,237,0.25)]"
        >
          <img
            class="card-icon absolute top-5 left-1/2 -translate-x-1/2 w-[100px] h-[100px] max-md:relative max-md:top-auto max-md:left-auto max-md:translate-x-0 max-md:w-[80px] max-md:h-[80px]"
            :alt="card.imgAlt"
            :src="card.imgSrc"
          />
          <div class="w-[calc(100%_-_66px)] items-center absolute top-[130px] left-[33px] flex flex-col max-md:relative max-md:top-auto max-md:left-auto max-md:w-full max-md:mt-3">
            <div class="relative flex items-center h-8 font-medium text-slate-50 text-xl leading-8 whitespace-nowrap">
              {{ card.title }}
            </div>
          </div>
          <div class="flex flex-col w-[calc(100%_-_66px)] items-center absolute top-[172px] left-[33px] max-md:relative max-md:top-auto max-md:left-auto max-md:w-full max-md:mt-2">
            <p class="relative flex items-center justify-center w-full h-[72px] max-md:h-auto font-normal text-slate-400 text-[15px] text-center leading-6">
              {{ card.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- AI Development Process Section -->
    <section class="flex flex-col w-full items-start px-60 max-lg:px-8 max-md:px-4 py-[100px] max-lg:py-16 max-md:py-10 relative overflow-hidden">
      <div v-reveal="{ direction: 'left', duration: 800, distance: '40px' }" class="flex flex-col items-start gap-16 max-md:gap-8 py-0 relative w-full">
        <SectionHeader first-letter="D" rest-text="EVELOPMENT PROCESS" title="AI原生開發流程" align="left" />
      </div>

      <!-- Content area -->
      <div class="relative w-full mt-[100px] max-lg:mt-12 max-md:mt-8">
        <!-- Left content -->
        <div class="flex flex-col max-w-[700px] max-lg:max-w-full px-6 max-md:px-0">
          <Transition name="step-content" mode="out-in">
            <div :key="activeStep" class="flex flex-col">
              <div class="max-lg:w-full h-[42px] max-lg:h-auto flex items-center font-semibold text-cyan-500 text-[30px] max-md:text-2xl leading-8 mb-4">
                {{ devProcessSteps[activeStep].number }}-{{ devProcessSteps[activeStep].title }}
              </div>
              <div class="w-full max-w-[831px] font-normal text-white text-[18px] max-md:text-base leading-[44px] max-md:leading-7 mb-16 max-md:mb-8">
                <template v-for="(line, i) in devProcessSteps[activeStep].description.split('\n')" :key="i">
                  {{ line }}<br v-if="i < devProcessSteps[activeStep].description.split('\n').length - 1" class="max-md:hidden" />
                </template>
              </div>
            </div>
          </Transition>

          <!-- Step indicators -->
          <div v-reveal="{ direction: 'up', delay: 300, duration: 800 }" class="relative w-[757px] max-lg:w-full h-[130px] max-lg:h-auto max-lg:flex max-lg:gap-0 max-lg:items-center max-lg:justify-start">
            <div
              v-for="(step, index) in devProcessSteps"
              :key="index"
              class="absolute top-0 w-[157px] h-24 flex items-center text-[20px] leading-8 cursor-pointer max-lg:relative max-lg:!left-auto max-lg:w-auto max-lg:flex-1 max-lg:justify-center max-md:text-[18px] transition-colors duration-300"
              :style="{ left: `${index * 252}px`, fontFamily: '\'DIN-Black\',Helvetica' }"
              @click="activeStep = index"
            >
              <span :class="activeStep === index ? 'text-cyan-500' : 'text-[#404852]'">STEP</span>
              <span
                :class="activeStep === index ? 'text-cyan-500' : 'text-[#404852]'"
                class="max-md:!text-[36px] transition-all duration-300"
                :style="{ fontSize: '60px', fontFamily: '\'DIN-Black\',Helvetica' }"
              >{{ index + 1 }}</span>
            </div>
            <img class="absolute top-[128px] left-1 w-[747px] max-lg:hidden" style="height: 0.5px;" alt="Line" src="/images/mn69fej5o9rxxH/line-6.svg" />
            <div
              class="absolute top-[128px] w-[250px] h-0.5 bg-cyan-500 rounded-[50px] transition-all duration-500 ease-in-out max-lg:hidden"
              :style="{ left: `${activeStep * 252}px` }"
            />
          </div>
        </div>

        <!-- Right image -->
        <Transition name="step-image" mode="out-in">
          <div
            :key="activeStep + '-img'"
            class="absolute top-[-110px] right-[-100px] w-[640px] h-[640px] max-[1400px]:w-[480px] max-[1400px]:h-[480px] max-lg:hidden"
          >
            <img
              class="w-full h-full object-contain process-img-float"
              alt="Image"
              :src="devProcessSteps[activeStep].image"
            />
          </div>
        </Transition>

        <!-- Decorative mask group -->
        <img
          class="absolute top-[459px] right-[-120px] w-[273px] h-[618px] object-contain pointer-events-none max-lg:hidden"
          alt="Mask group"
          src="/images/mn69fej5o9rxxH/mask-group-1.png"
        />
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
const activeStep = ref(0)

const devProcessSteps = [
  {
    number: '01',
    title: '自動化測試',
    description: 'AI 自動生成測試案例與腳本，覆蓋極端邊界情境。\n每一次更新都經過數千次自動驗證，確保系統穩如泰山。',
    image: '/images/01-ceshi.png',
  },
  {
    number: '02',
    title: '智能代碼生成',
    description: 'AI 輔助生成高品質程式碼，大幅提升開發效率。\n自動遵循最佳實踐與編碼規範，減少人為錯誤。',
    image: '/images/02-kaifa.png',
  },
  {
    number: '03',
    title: '持續部署優化',
    description: 'AI 驅動的自動化部署流程，實現零停機更新。\n智能監控與回滾機制，確保服務穩定運行。',
    image: '/images/03-jiankong.png',
  },
]

const corePhilosophyCards = [
  {
    title: 'AI 原生思維',
    description: '從第一天就以 AI 為出發點，重新設計問題的解決方案。',
    imgSrc: '/images/mn69fej5o9rxxH/rectangle-25.png',
    imgAlt: 'Rectangle',
  },
  {
    title: '品質即效率',
    description: '我們打破了「快就品質差」的迷思。AI 讓我們在速度和品質之間不再取捨。',
    imgSrc: '/images/mn69fej5o9rxxH/rectangle-25-1.png',
    imgAlt: 'Rectangle',
  },
  {
    title: '持續進化',
    description: '我們持續追蹤最新的模型與工具，確保客戶永遠享有最先進的技術優勢。',
    imgSrc: '/images/mn69fej5o9rxxH/rectangle-25-2.png',
    imgAlt: 'Rectangle',
  },
]
</script>

<style scoped>
.step-content-enter-active,
.step-content-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.step-content-enter-from {
  opacity: 0;
  transform: translateX(20px);
}
.step-content-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

.process-img-float {
  animation: process-img-float 3.5s ease-in-out infinite;
}

@keyframes process-img-float {
  0%, 100% { transform: scale(0.9) translateY(0); }
  50%       { transform: scale(0.9) translateY(-20px); }
}

.step-image-enter-active,
.step-image-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.step-image-enter-from {
  opacity: 0;
  transform: scale(0.9) translateY(20px);
}
.step-image-leave-to {
  opacity: 0;
  transform: scale(1.05);
}

.stat-item:hover .stat-number {
  background: linear-gradient(135deg, #7c3aed 0%, #ffffff 50%, #3b82f6 100%) !important;
  -webkit-background-clip: text !important;
  background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
  transition: background 0.3s ease;
}

.stat-item:hover .stat-number {
  animation: stat-pop 0.8s ease-out forwards;
}

@keyframes stat-pop {
  0%   { transform: scale(0.75); opacity: 0.5; }
  100% { transform: scale(1.05); opacity: 1; }
}

.card-icon {
  transition: transform 0.3s ease;
}

.group:hover .card-icon {
  transform: translateX(-50%) translateY(-10px);
}
</style>
