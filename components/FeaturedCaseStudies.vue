<template>
  <section class="relative w-full flex flex-col items-center overflow-hidden">
    <!-- Header Section -->
    <div class="flex flex-col w-full items-center justify-center gap-12 max-md:gap-6 px-0 py-12 max-md:py-8">
      <!-- Title block -->
      <SectionHeader first-letter="C" rest-text="ASE" title="精選案例" fill-first fill-second />

      <!-- Subtitle -->
      <div class="flex flex-col max-w-[600px] w-full items-center relative max-md:px-4">
        <p class="text-slate-400 text-lg max-md:text-base text-center leading-[28.8px] [font-family:'Inter',Helvetica] font-normal tracking-[0]">
          我們與各領域的領導品牌合作，透過 AI 與技術創新，打造具備商業價值的數位產品。
        </p>
      </div>
    </div>

    <!-- Filter Tabs -->
    <div class="flex w-full items-center justify-center gap-3 max-md:gap-2 mb-8 max-md:px-4 max-md:flex-wrap">
      <button
        v-for="tab in filterTabs"
        :key="tab.id"
        @click="activeTab = tab.id"
        :class="[
          'px-5 max-md:px-3 py-2.5 max-md:py-2 rounded-[20px] border border-solid inline-flex flex-col items-center justify-center flex-shrink-0 cursor-pointer',
          'transition-all duration-300 ease-in-out',
          'hover:scale-105 active:scale-95',
          activeTab === tab.id
            ? 'border-violet-600 bg-[linear-gradient(135deg,rgba(124,58,237,0.18)_0%,rgba(59,130,246,0.12)_100%)] shadow-[0_0_16px_2px_rgba(124,58,237,0.35)] hover:shadow-[0_0_22px_4px_rgba(124,58,237,0.5)]'
            : 'border-[#ffffff14] bg-[#ffffff05] hover:border-violet-600/50 hover:bg-[#ffffff0d] hover:shadow-[0_0_10px_1px_rgba(124,58,237,0.15)]',
        ]"
      >
        <span
          :class="[
            'flex items-center justify-center h-4 text-base max-md:text-sm text-center leading-[normal] whitespace-nowrap [font-family:\'Inter\',Helvetica] tracking-[0]',
            'transition-colors duration-300',
            activeTab === tab.id ? 'font-semibold text-white' : 'font-normal text-slate-400',
          ]"
        >
          {{ tab.label }}
        </span>
      </button>
    </div>

    <!-- Gallery Section -->
    <div class="relative w-full overflow-hidden max-md:px-4">
      <div class="flex gap-5 max-md:gap-3 justify-center w-full max-[1400px]:flex-wrap max-[1400px]:max-w-[700px] max-[1400px]:mx-auto max-md:max-w-full px-6 max-md:px-0">
        <div
          v-for="(image, index) in galleryImages"
          :key="index"
          :class="[
            image.className,
            'max-[1400px]:!mt-0 max-[1400px]:w-[calc(50%-10px)] max-md:w-full max-[1400px]:!flex-shrink-0',
            'group overflow-hidden transition-all duration-500 ease-out cursor-pointer',
            activeIndex === index
              ? '-translate-y-4 max-[1400px]:translate-y-0 shadow-[0_24px_48px_rgba(124,58,237,0.35)]'
              : 'hover:-translate-y-2 hover:shadow-[0_12px_32px_rgba(124,58,237,0.2)]',
          ]"
          @click="activeIndex = index"
        >
          <img
            :class="[
              'w-full h-full object-cover transition-transform duration-500 ease-out',
              activeIndex === index ? 'scale-105' : 'group-hover:scale-105',
            ]"
            :alt="image.alt"
            :src="image.src"
          />
        </div>
      </div>
    </div>

    <!-- Case Study Info + Navigation -->
    <div class="relative w-full max-w-[1280px] flex flex-col items-start px-4 mt-[20px]">
      <div class="flex w-full justify-center max-[1400px]:justify-start">
        <!-- Animated spacer (desktop only) -->
        <div
          :style="{ width: spacerWidth }"
          class="flex-shrink-0 transition-all duration-[400ms] ease-in-out max-[1400px]:hidden"
        />

        <div class="flex flex-col w-80 max-md:w-full transition-all duration-[400ms] ease-in-out">
          <h3 class="font-semibold text-white text-xl leading-7 whitespace-nowrap [font-family:'Inter',Helvetica] tracking-[0]">
            專業知識內容審核系統
          </h3>
          <div class="flex items-end gap-3 mt-1">
            <p class="w-[245px] max-md:w-full max-md:flex-1 text-slate-400 text-sm leading-5 [font-family:'Inter',Helvetica] font-normal tracking-[0]">
              使用 AI 技術分析專業文件與媒體內容，即時識別準確性與合規性問題，提升審核效率與內容品質
            </p>
            <NuxtLink
              to="/cases/detail"
              class="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(124,58,237,0.7)] active:scale-95"
              aria-label="查看詳情"
            >
              <img
                class="w-10 h-10"
                alt="詳情"
                src="/images/mn6sgmdo6ocCMY/group-20.png"
              />
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Progress bar + navigation arrows -->
      <div class="flex items-center justify-center w-full gap-6 max-md:gap-3 mt-8">
        <!-- Left arrow -->
        <img
          class="w-12 h-12 max-md:w-10 max-md:h-10 flex-shrink-0 cursor-pointer hover:opacity-80 active:scale-90 transition-all duration-200"
          alt="向左"
          src="/images/mn6sgmdo6ocCMY/group-18.png"
          @click="goLeft"
        />

        <!-- Progress bar -->
        <div class="relative w-[380px] max-md:flex-1 h-0.5 flex-shrink-0 max-md:flex-shrink">
          <div class="w-full h-0.5 bg-slate-500 rounded-[10px]" />
          <div
            class="absolute top-0 h-0.5 bg-cyan-500 rounded-[10px] transition-all duration-[400ms] ease-in-out"
            :style="{ width: (100 / TOTAL) + '%', left: (activeIndex * 100 / TOTAL) + '%' }"
          />
        </div>

        <!-- Right arrow -->
        <img
          class="w-12 h-12 max-md:w-10 max-md:h-10 flex-shrink-0 cursor-pointer hover:opacity-80 active:scale-90 transition-all duration-200"
          alt="向右"
          src="/images/mn6sgmdo6ocCMY/group-17.png"
          @click="goRight"
        />
      </div>
    </div>

    <!-- CTA Section -->
    <div class="relative w-full max-w-[1200px] mt-16 mb-0 max-md:px-4">
      <div class="relative flex flex-col w-full items-center gap-[14.9px] p-16 max-lg:p-10 max-md:p-6 rounded-[10px] border border-solid border-[#7c3aed33] bg-[linear-gradient(164deg,rgba(124,58,237,0.1)_0%,rgba(59,130,246,0.1)_100%)] overflow-hidden">
        <img
          class="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
          alt="Mask group"
          src="/images/mn6sgmdo6ocCMY/mask-group.png"
        />
        <div class="relative z-10 flex flex-col items-center gap-[14.9px] w-full">
          <div class="flex items-center justify-center">
            <h2 class="font-semibold text-slate-50 text-[32px] max-md:text-2xl text-center leading-[51.2px] max-md:leading-normal whitespace-nowrap max-md:whitespace-normal [font-family:'Inter',Helvetica] tracking-[0]">
              準備好開始您的專案了嗎？
            </h2>
          </div>
          <div class="flex flex-col max-w-[600px] w-full items-center pb-[17.79px]">
            <p class="font-normal text-slate-400 text-lg max-md:text-base text-center leading-[28.8px] [font-family:'Inter',Helvetica] tracking-[0]">
              從概念到落地，我們是您最值得信賴的技術夥伴。立即預約，開啟高效開發之旅。
            </p>
          </div>
          <div class="relative w-[172px] h-[53.59px] rounded-md bg-[linear-gradient(163deg,rgba(124,58,237,1)_0%,rgba(59,130,246,1)_100%)] flex items-center justify-center cursor-pointer">
            <span class="font-normal text-white text-base text-center leading-[25.6px] whitespace-nowrap [font-family:'Inter',Helvetica] tracking-[0] mr-2">
              聯絡我們
            </span>
            <img
              class="w-5 h-5"
              alt="Iconify icon"
              src="/images/mn6sgmdo6ocCMY/iconify-icon.svg"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const filterTabs = [
  { id: 'all', label: '全部案例' },
  { id: 'webapp', label: 'Web App' },
  { id: 'mobileapp', label: 'Mobile App' },
  { id: 'ai', label: 'AI 整合' },
  { id: 'enterprise', label: '企業系統' },
]

const galleryImages = [
  {
    src: '/images/mn6sgmdo6ocCMY/rectangle-42.png',
    alt: 'Rectangle',
    className: 'mt-[70px] w-80 h-[400px] rounded-[20px] object-cover flex-shrink-0',
  },
  {
    src: '/images/mn6sgmdo6ocCMY/rectangle-43.png',
    alt: 'Rectangle',
    className: 'w-80 h-[400px] rounded-[20px] object-cover flex-shrink-0',
  },
  {
    src: '/images/mn6sgmdo6ocCMY/rectangle-44.png',
    alt: 'Rectangle',
    className: 'mt-20 w-80 h-80 rounded-[20px] object-cover flex-shrink-0',
  },
  {
    src: '/images/mn6sgmdo6ocCMY/rectangle-45.png',
    alt: 'Rectangle',
    className: 'w-80 h-[400px] rounded-[20px] object-cover flex-shrink-0',
  },
]

const TOTAL = galleryImages.length
const BAR_WIDTH = 380

const activeTab = ref('all')
const activeIndex = ref(0)

const segW = computed(() => BAR_WIDTH / TOTAL)
const indicatorLeft = computed(() => activeIndex.value * segW.value)
const spacerWidth = computed(() => `calc(50% - 670px + ${activeIndex.value * 340}px)`)

function goLeft() {
  activeIndex.value = (activeIndex.value - 1 + TOTAL) % TOTAL
}
function goRight() {
  activeIndex.value = (activeIndex.value + 1) % TOTAL
}
</script>
