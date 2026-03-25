<script setup lang="ts">
const corePhilosophyCards = [
  {
    title: 'AI 原生思維',
    description: '從第一天就以 AI 為出發點，重新設計問題的解決方案。',
    imgSrc: 'https://c.animaapp.com/mn69fej5o9rxxH/img/rectangle-25.png',
    imgAlt: 'Rectangle',
  },
  {
    title: '品質即效率',
    description: '我們打破了「快就品質差」的迷思。AI 讓我們在速度和品質之間不再取捨。',
    imgSrc: 'https://c.animaapp.com/mn69fej5o9rxxH/img/rectangle-25-1.png',
    imgAlt: 'Rectangle',
  },
  {
    title: '持續進化',
    description: '我們持續追蹤最新的模型與工具，確保客戶永遠享有最先進的技術優勢。',
    imgSrc: 'https://c.animaapp.com/mn69fej5o9rxxH/img/rectangle-25-2.png',
    imgAlt: 'Rectangle',
  },
]

const steps = [
  {
    title: '01-自動化測試',
    lines: [
      'AI 自動生成測試案例與腳本，覆蓋極端邊界情境。',
      '每一次更新都經過數千次自動驗證，確保系統穩如泰山。',
    ],
    imgSrc: 'https://c.animaapp.com/mn69fej5o9rxxH/img/image-34.png',
  },
  {
    title: '02-智能代碼審查',
    lines: [
      'AI 即時分析程式碼品質與潛在風險，提供精準的優化建議。',
      '每一行程式碼都通過嚴格審視，確保可維護性與效能兼顧。',
    ],
    imgSrc: 'https://c.animaapp.com/mn69fej5o9rxxH/img/image-34.png',
  },
  {
    title: '03-自動化部署',
    lines: [
      'AI 驅動的 CI/CD 流水線，智能監控部署狀態並即時修復異常。',
      '從提交到上線，全程零人工干預，交付效率提升十倍。',
    ],
    imgSrc: 'https://c.animaapp.com/mn69fej5o9rxxH/img/image-34.png',
  },
]

const activeStep = ref(0)
const underlinePositions = [0, 252, 502]
const underlineStyle = computed(() => ({
  left: `${underlinePositions[activeStep.value]}px`,
  transition: 'left 0.3s ease',
}))
</script>

<template>
  <div class="flex flex-col w-full items-center gap-[30px] relative">

    <!-- Hero Banner Section -->
    <section class="flex flex-col h-[800px] items-center justify-center px-[120px] py-20 relative self-stretch w-full overflow-hidden">
      <img
        class="absolute top-0 left-0 w-full h-[800px] object-cover"
        alt="Banner"
        src="https://c.animaapp.com/mn69fej5o9rxxH/img/banner2-5.png"
      >

      <div class="flex flex-col max-w-[1200px] items-start justify-center gap-6 px-6 py-0 relative w-full">
        <!-- Since 2011 Badge -->
        <div class="inline-flex items-center justify-center px-3 py-1 bg-[#ffffff33] rounded-xl border border-solid border-[#7c3aed4c]">
          <span class="font-medium text-violet-400 text-[13px] text-center tracking-[0] leading-[20.8px] whitespace-nowrap">
            Since 2011
          </span>
        </div>

        <!-- Heading SVG -->
        <div class="items-start relative self-stretch w-full flex flex-col">
          <img
            class="relative w-[441.7px] h-[103.46px]"
            alt="Ai"
            src="https://c.animaapp.com/mn69fej5o9rxxH/img/--------ai--------.svg"
          >
        </div>

        <!-- Description -->
        <div class="flex flex-col max-w-[600px] w-full items-center pt-[7.59px] pb-[49.4px] px-0">
          <p class="relative w-full font-normal text-white text-lg tracking-[0] leading-[28.8px]">
            我們不僅僅是一間軟體開發公司，更是您在 AI 時代的數位轉型加速器。<br>
            融合十餘年開發經驗與最新人工智慧技術，重新定義交付標準。
          </p>
        </div>
      </div>
    </section>

    <!-- Company Overview / Stats Section -->
    <section class="flex max-w-[1200px] w-full items-center justify-center gap-20 px-6 py-0 relative">
      <!-- Section heading -->
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[249px] h-[119px]">
        <!-- Background text -->
        <div class="absolute top-0 left-0 w-full h-[95px] flex items-center font-normal text-[#f8fafc1a] text-[100px] tracking-[0] leading-[normal] whitespace-nowrap">
          <span class="font-normal text-[#f8fafc1a] text-[100px] tracking-[0]">C</span>
          <span class="text-[40px]">OMPANY STORY</span>
        </div>

        <!-- Decorative shapes -->
        <div class="absolute top-[29px] left-[83px] w-[78px] h-[21px] flex items-center">
          <div class="w-[20.57px] h-[20.57px] bg-violet-600 flex-shrink-0" />
          <div class="w-[20.57px] h-[20.57px] ml-[8.6px] bg-blue-500 rounded-[10.29px] border border-solid flex-shrink-0" />
          <div class="w-[16.55px] h-[16.55px] ml-[9.7px] mt-[2px] border border-solid border-cyan-500 rotate-45 flex-shrink-0" />
        </div>

        <!-- Title -->
        <div class="absolute top-[70px] left-1/2 -translate-x-1/2 w-40 h-[49px] flex items-center font-semibold text-slate-50 text-[40px] tracking-[0] leading-[normal] whitespace-nowrap">
          公司簡介
        </div>
      </div>

      <!-- Grid lines and stats container -->
      <div class="relative w-full mt-[119px]">
        <div class="relative w-full h-[754px]">
          <img class="absolute top-[455px] left-0 w-full h-px" alt="Line" src="https://c.animaapp.com/mn69fej5o9rxxH/img/line-2.svg">
          <img class="absolute top-0 left-[25%] w-px h-[754px]" alt="Line" src="https://c.animaapp.com/mn69fej5o9rxxH/img/line-3.svg">
          <img class="absolute top-[219px] left-[50%] w-px h-[535px]" alt="Line" src="https://c.animaapp.com/mn69fej5o9rxxH/img/line-4.svg">
          <img class="absolute top-[219px] left-[75%] w-px h-[535px]" alt="Line" src="https://c.animaapp.com/mn69fej5o9rxxH/img/line-5.svg">

          <!-- 12+ 年開發經驗 -->
          <div class="inline-flex flex-col h-[140px] items-center gap-[7px] absolute top-64 left-[33.5%]">
            <div class="flex flex-col items-center pt-0 pb-[0.59px] px-0 relative self-stretch w-full">
              <div class="relative flex items-center justify-center w-[186px] h-[93px] mt-[-1.00px] bg-[linear-gradient(176deg,rgba(255,255,255,1)_0%,rgba(148,163,184,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-normal text-transparent text-[80px] text-center tracking-[0] leading-[57.6px]">
                12+
              </div>
            </div>
            <div class="relative flex items-center justify-center w-[106px] h-[23px] font-normal text-slate-400 text-base text-center tracking-[0] leading-[22.4px] whitespace-nowrap">
              年開發經驗
            </div>
          </div>

          <!-- 200+ 服務客戶 -->
          <div class="inline-flex flex-col h-[140px] items-center gap-[7px] absolute top-[455px] left-[8%]">
            <div class="flex flex-col items-center pt-0 pb-[0.59px] px-0 relative self-stretch w-full">
              <div class="relative flex items-center justify-center w-[186px] h-[93px] mt-[-1.00px] bg-[linear-gradient(176deg,rgba(255,255,255,1)_0%,rgba(148,163,184,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-normal text-transparent text-[80px] text-center tracking-[0] leading-[57.6px]">
                200+
              </div>
            </div>
            <div class="relative flex items-center justify-center w-[106px] h-[23px] font-normal text-slate-400 text-base text-center tracking-[0] leading-[22.4px] whitespace-nowrap">
              服務客戶
            </div>
          </div>

          <!-- AI 核心驅動 -->
          <div class="inline-flex flex-col h-[140px] items-center gap-[7px] absolute top-[455px] left-[33.5%]">
            <div class="flex flex-col items-center pt-0 pb-[0.59px] px-0 relative self-stretch w-full">
              <div class="relative flex items-center justify-center w-[186px] h-[93px] mt-[-1.00px] bg-[linear-gradient(152deg,rgba(82,85,238,1)_0%,rgba(255,255,255,1)_55%,rgba(60,180,217,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-normal text-transparent text-[80px] text-center tracking-[0] leading-[57.6px]">
                AI
              </div>
            </div>
            <div class="relative flex items-center justify-center w-[106px] h-[23px] font-normal text-slate-400 text-base text-center tracking-[0] leading-[22.4px] whitespace-nowrap">
              核心驅動
            </div>
          </div>

          <!-- 100+ 專案交付 -->
          <div class="inline-flex flex-col h-[140px] items-center gap-[7px] absolute top-64 left-[56.8%]">
            <div class="flex flex-col items-center pt-0 pb-[0.59px] px-0 relative self-stretch w-full">
              <div class="relative flex items-center justify-center w-[226px] h-[93px] mt-[-1.00px] bg-[linear-gradient(176deg,rgba(255,255,255,1)_0%,rgba(148,163,184,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-normal text-transparent text-[80px] text-center tracking-[0] leading-[57.6px]">
                100+
              </div>
            </div>
            <div class="relative flex items-center justify-center w-[106px] h-[23px] font-normal text-slate-400 text-base text-center tracking-[0] leading-[22.4px] whitespace-nowrap">
              專案交付
            </div>
          </div>

          <!-- Decorative mask group image -->
          <img
            class="absolute top-0 left-[-10%] w-[332px] h-[593px] object-contain pointer-events-none"
            alt="Mask group"
            src="https://c.animaapp.com/mn69fej5o9rxxH/img/mask-group.png"
          >
        </div>
      </div>
    </section>

    <!-- Core Philosophy Section -->
    <section class="flex flex-col max-w-[1200px] w-full items-center gap-16 pt-5 pb-0 px-6 relative">
      <!-- Section heading -->
      <div class="w-[273px] relative h-[119px]">
        <!-- Background text -->
        <div class="absolute top-0 left-0 w-[269px] h-[95px] flex items-center font-normal text-[#f8fafc1a] text-[100px] tracking-[0] leading-[normal] whitespace-nowrap">
          <span class="font-normal text-[#f8fafc1a] text-[100px] tracking-[0]">C</span>
          <span class="text-[40px]">ORE PHILOSOPHY</span>
        </div>

        <!-- Decorative shapes -->
        <div class="left-[52px] absolute top-[29px] w-[78px] h-[21px] flex items-center">
          <div class="w-[20.57px] h-[20.57px] border border-solid border-violet-600 flex-shrink-0" />
          <div class="w-[20.57px] h-[20.57px] ml-[8.6px] bg-blue-500 rounded-[10.29px] flex-shrink-0" />
          <div class="w-[16.55px] h-[16.55px] ml-[9.7px] mt-[2px] border border-solid border-cyan-500 rotate-45 flex-shrink-0" />
        </div>

        <!-- Title -->
        <div class="absolute top-[70px] left-1/2 -translate-x-1/2 w-40 h-[49px] flex items-center font-semibold text-slate-50 text-[40px] tracking-[0] leading-[normal] whitespace-nowrap">
          核心理念
        </div>
      </div>

      <!-- Cards -->
      <div class="flex items-start justify-center gap-8 relative self-stretch w-full">
        <div
          v-for="(card, index) in corePhilosophyCards"
          :key="index"
          class="relative flex-1 min-w-0 h-[280px] bg-[#ffffff1a] rounded-lg border border-solid border-[#00000014]"
        >
          <!-- Card icon -->
          <img
            class="absolute top-5 left-1/2 -translate-x-1/2 w-[100px] h-[100px]"
            :alt="card.imgAlt"
            :src="card.imgSrc"
          >

          <!-- Card title -->
          <div class="w-[calc(100%_-_66px)] items-center absolute top-[130px] left-[33px] flex flex-col">
            <div class="relative flex items-center h-8 mt-[-1.00px] font-medium text-slate-50 text-xl tracking-[0] leading-8 whitespace-nowrap">
              {{ card.title }}
            </div>
          </div>

          <!-- Card description -->
          <div class="flex flex-col w-[calc(100%_-_66px)] items-center absolute top-[172px] left-[33px]">
            <p class="relative flex items-center justify-center w-full h-[72px] mt-[-1.00px] font-normal text-slate-400 text-[15px] text-center tracking-[0] leading-6">
              {{ card.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- AI Development Process Section -->
    <section class="flex flex-col w-full items-start px-[120px] py-[100px] relative overflow-hidden">
      <!-- Section heading -->
      <div class="flex flex-col max-w-[1200px] items-start gap-16 px-6 py-0 relative w-full">
        <div class="w-[351px] relative h-[119px]">
          <!-- Background text -->
          <div class="absolute top-0 left-0 w-[347px] h-[95px] flex items-center font-normal text-[#f8fafc1a] text-[100px] tracking-[0] leading-[normal] whitespace-nowrap">
            <span class="font-normal text-[#f8fafc1a] text-[100px] tracking-[0]">D</span>
            <span class="text-[40px]">EVELOPMENT PROCESS</span>
          </div>

          <!-- Decorative shapes -->
          <div class="left-12 absolute top-[29px] w-[78px] h-[21px] flex items-center">
            <div class="w-[20.57px] h-[20.57px] border border-solid border-violet-600 flex-shrink-0" />
            <div class="w-[22.57px] h-[22.57px] ml-[7.6px] mt-[-1px] rounded-[11.29px] border border-solid border-blue-500 flex-shrink-0" />
            <div class="w-[16.55px] h-[16.55px] ml-[8.7px] mt-[2px] border border-solid border-cyan-500 rotate-45 flex-shrink-0" />
          </div>

          <!-- Title -->
          <div class="absolute top-[70px] left-0 w-[285px] h-[49px] flex items-center font-semibold text-slate-50 text-[40px] tracking-[0] leading-[normal]">
            AI原生開發流程
          </div>
        </div>
      </div>

      <!-- Content area -->
      <div class="relative w-full mt-[100px]">
        <!-- Left content -->
        <div class="flex flex-col max-w-[700px] px-6">
          <!-- Animated title + description -->
          <div class="relative min-h-[160px]">
            <Transition name="step-content" mode="out-in">
              <div :key="activeStep" class="flex flex-col">
                <div class="h-[42px] flex items-center font-semibold text-cyan-500 text-[34px] tracking-[0] leading-8 mb-4">
                  {{ steps[activeStep].title }}
                </div>
                <div class="w-full max-w-[831px] font-normal text-white text-2xl tracking-[0] leading-[48px] mb-16">
                  {{ steps[activeStep].lines[0] }}<br>
                  {{ steps[activeStep].lines[1] }}
                </div>
              </div>
            </Transition>
          </div>

          <!-- Step indicators -->
          <div class="relative w-[757px] h-[130px]">
            <!-- STEP 1 -->
            <button
              class="absolute top-0 left-0 w-[152px] h-24 flex items-center font-normal text-transparent text-2xl tracking-[0] leading-8 cursor-pointer bg-transparent border-none p-0"
              @click="activeStep = 0"
            >
              <span :class="activeStep === 0 ? 'text-cyan-500' : 'text-[#404852]'">STEP</span>
              <span :class="['text-[64px]', activeStep === 0 ? 'font-bold text-cyan-500' : 'text-[#404852]']">1</span>
            </button>

            <!-- STEP 2 -->
            <button
              class="absolute top-0 left-[252px] w-[157px] h-24 flex items-center font-normal text-transparent text-2xl tracking-[0] leading-8 cursor-pointer bg-transparent border-none p-0"
              @click="activeStep = 1"
            >
              <span :class="activeStep === 1 ? 'text-cyan-500' : 'text-[#404852]'">STEP</span>
              <span :class="['text-[64px]', activeStep === 1 ? 'font-bold text-cyan-500' : 'text-[#404852]']">2</span>
            </button>

            <!-- STEP 3 -->
            <button
              class="absolute top-0 left-[502px] w-[157px] h-24 flex items-center font-normal text-transparent text-2xl tracking-[0] leading-8 cursor-pointer bg-transparent border-none p-0"
              @click="activeStep = 2"
            >
              <span :class="activeStep === 2 ? 'text-cyan-500' : 'text-[#404852]'">STEP</span>
              <span :class="['text-[64px]', activeStep === 2 ? 'font-bold text-cyan-500' : 'text-[#404852]']">3</span>
            </button>

            <!-- Base line -->
            <img
              class="absolute top-[128px] left-1 w-[747px] h-px"
              alt="Line"
              src="https://c.animaapp.com/mn69fej5o9rxxH/img/line-6.svg"
            >

            <!-- Active step highlight (sliding underline) -->
            <div
              class="absolute top-[128px] w-[250px] h-0.5 bg-cyan-500 rounded-[50px]"
              :style="underlineStyle"
            />
          </div>
        </div>

        <!-- Right image (fade transition on step change) -->
        <Transition name="step-image" mode="out-in">
          <img
            :key="activeStep"
            class="absolute top-[-100px] right-0 w-[640px] h-[640px] object-contain"
            alt="Image"
            :src="steps[activeStep].imgSrc"
          >
        </Transition>

        <!-- Decorative mask group -->
        <img
          class="absolute top-[459px] right-[-120px] w-[273px] h-[618px] object-contain pointer-events-none"
          alt="Mask group"
          src="https://c.animaapp.com/mn69fej5o9rxxH/img/mask-group-1.png"
        >
      </div>
    </section>

  </div>
</template>

<style scoped>
/* Step content: fade + slide-up */
.step-content-enter-active,
.step-content-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.step-content-enter-from {
  opacity: 0;
  transform: translateY(12px);
}
.step-content-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}
.step-content-leave-active {
  position: absolute;
  width: 100%;
}

/* Step image: fade only */
.step-image-enter-active,
.step-image-leave-active {
  transition: opacity 0.25s ease;
}
.step-image-enter-from,
.step-image-leave-to {
  opacity: 0;
}
</style>
