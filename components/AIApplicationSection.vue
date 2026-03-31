<template>
  <section
    class="relative w-full py-12 md:py-16 overflow-hidden px-60 max-lg:px-8 max-md:px-4"
    @touchstart="onTouchStart"
    @touchmove="onTouchMove"
    @touchend="onTouchEnd"
  >
    <!-- Section Header -->
    <div v-reveal="{ direction: 'up', duration: 800 }" class="mb-8 md:mb-12">
      <SectionHeader first-letter="S" rest-text="ELECTED CASES" title="精選案例" fill-third />
    </div>

    <!-- Carousel -->
    <div v-reveal="{ direction: 'up', delay: 200, duration: 800 }" class="relative mx-auto">
      <!-- Cards + arrows wrapper -->
      <div class="relative min-h-[295px]">
        <!-- Arrows overlay: mirrors card layout, always on top, unaffected by transitions -->
        <div class="absolute inset-0 hidden md:flex items-center justify-center gap-[60px] pointer-events-none z-30">
          <div class="w-[387px] h-full relative flex-shrink-0">
            <button @click="prev" class="absolute right-[5px] top-1/2 -translate-y-1/2 bg-transparent border-none p-0 cursor-pointer pointer-events-auto">
              <img src="/images/mn5gtr03DZ8elR/group-24.png" alt="上一個" class="w-12 h-12" />
            </button>
          </div>
          <div class="w-[387px] flex-shrink-0"></div>
          <div class="w-[387px] h-full relative flex-shrink-0">
            <button @click="next" class="absolute left-[5px] top-1/2 -translate-y-1/2 bg-transparent border-none p-0 cursor-pointer pointer-events-auto">
              <img src="/images/mn5gtr03DZ8elR/group-23.png" alt="下一個" class="w-12 h-12" />
            </button>
          </div>
        </div>

        <!-- Cards container -->
        <TransitionGroup :name="`slide-${direction}`" tag="div" class="flex items-stretch justify-center gap-[60px] overflow-hidden relative">
          <div
            v-for="pos in visibleCards"
            :key="pos.item.id"
            class="relative flex-shrink-0 transition-all duration-500 ease-in-out bg-no-repeat"
            :class="[
              pos.position === 'center' ? 'z-20 w-full md:w-[387px]' : 'z-10 hidden md:block md:w-[387px]',
            ]"
            :style="cardBgStyle(pos.position)"
          >

          <!-- Center card decoration -->
          <img
            v-if="pos.position === 'center'"
            class="absolute top-[24px] right-5 w-16 h-16 md:w-20 md:h-20 z-20 pointer-events-none"
            alt=""
            :src="pos.item.icon"
          />

          <!-- Card body -->
          <div
            class="relative w-full h-[280px] md:h-[295px] rounded-[10px] overflow-hidden transition-all duration-500"
            :class="pos.position === 'center' ? 'border border-slate-200/30' : ''"
            :style="{ background: pos.position === 'center'
              ? 'linear-gradient(135deg, rgba(45,70,135,0.4) 0%, rgba(11,17,33,1) 100%)'
              : ''
            }"
          >
            <div
              class="flex flex-col justify-center h-full px-5 py-8 md:px-6 md:py-0 md:absolute md:top-[-3px]"
              :class="pos.position === 'center' ? 'md:left-1' : pos.position === 'left' ? 'md:left-3 md:right-10' : 'md:left-10'"
            >
              <!-- Badge -->
              <span
                class="inline-block self-start rounded-full border px-4 py-0.5 text-[8px] md:text-[10px] whitespace-nowrap transition-colors duration-300"
                :class="[pos.item.badgeBorderClass, pos.item.badgeTextClass]"
              >
                {{ pos.item.badge }}
              </span>

              <!-- Title -->
              <h3 class="mt-4 text-lg md:text-xl font-medium text-slate-50 leading-normal">
                {{ pos.item.title }}
              </h3>

              <!-- Description -->
              <p class="mt-4 md:mt-5 text-sm text-slate-400 leading-relaxed max-w-[327px]">
                {{ pos.item.description }}
              </p>

              <!-- Learn More -->
              <NuxtLink
                :to="pos.item.link"
                class="mt-10 inline-flex items-center gap-2 no-underline group"
              >
                <span
                  class="text-base transition-colors duration-300"
                  :class="pos.position === 'center' ? 'font-light text-white group-hover:text-cyan-300' : 'text-slate-400 group-hover:text-slate-200'"
                >
                  了解更多
                </span>
                <img
                  v-if="pos.position === 'center'"
                  class="w-5 h-[7px] transition-transform duration-300 group-hover:translate-x-1"
                  alt=""
                  src="/images/mn5gtr03DZ8elR/arrow-2.svg"
                />
              </NuxtLink>
            </div>
          </div>
        </div>
        </TransitionGroup>
      </div>

      <!-- Mobile dots indicator -->
      <div class="flex md:hidden items-center justify-center gap-2 mt-6">
        <button
          v-for="(item, index) in cases"
          :key="item.id"
          @click="currentIndex = index"
          class="w-2 h-2 rounded-full border-none cursor-pointer transition-all duration-300 p-0"
          :class="index === currentIndex ? 'bg-blue-500 w-4' : 'bg-slate-600'"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface CaseItem {
  id: string
  badge: string
  badgeBorderClass: string
  badgeTextClass: string
  title: string
  description: string
  link: string
  icon: string
}

const cases: CaseItem[] = [
  {
    id: 'vet-ai',
    badge: 'AI CUSTOMER SERVICE',
    badgeBorderClass: 'border-violet-600',
    badgeTextClass: 'text-violet-600',
    title: 'AI 輔助獸醫系統',
    description: '使用 AI 模型，輔助獸醫進行病歷預覽，加速診斷進度，並提供寵物主人專業知識解釋的管道',
    link: '/cases',
    icon: '/images/A.png',
  },
  {
    id: 'content-review',
    badge: 'BACKEND SYSTEM',
    badgeBorderClass: 'border-blue-500',
    badgeTextClass: 'text-blue-500',
    title: '專業知識內容審核系統',
    description: '使用 AI 技術分析專業文件與媒體內容，即時識別準確性與合規性問題，提升審核效率',
    link: '/cases/detail',
    icon: '/images/B.png',
  },
  {
    id: 'ai-cs',
    badge: 'AI CUSTOMER SERVICE',
    badgeBorderClass: 'border-cyan-500',
    badgeTextClass: 'text-cyan-500',
    title: '24/7 AI 智能客服',
    description: '使用 AI 模型協助客服 7*24 不間斷服務，確保降低真人客服 Loading',
    link: '/cases',
    icon: '/images/C.png',
  },
  {
    id: 'ecommerce',
    badge: 'WEB APPLICATION',
    badgeBorderClass: 'border-violet-600',
    badgeTextClass: 'text-violet-600',
    title: '電商平台整合系統',
    description: '整合多通路電商平台，提供統一的商品管理、訂單處理與數據分析解決方案',
    link: '/cases',
    icon: '/images/D.png',
  },
  {
    id: 'data-platform',
    badge: 'DATA PLATFORM',
    badgeBorderClass: 'border-blue-500',
    badgeTextClass: 'text-blue-500',
    title: '企業數據中台',
    description: '建構企業級數據中台，整合多源數據，提供即時分析與智能決策支援',
    link: '/cases',
    icon: '/images/E.png',
  },
]

const currentIndex = ref(0)
const direction = ref('next')

// Touch swipe support for mobile
const touchStartX = ref(0)
const touchStartY = ref(0)
const isSwiping = ref(false)

function onTouchStart(e: TouchEvent) {
  touchStartX.value = e.touches[0].clientX
  touchStartY.value = e.touches[0].clientY
  isSwiping.value = false
}

function onTouchMove(e: TouchEvent) {
  const diffX = Math.abs(e.touches[0].clientX - touchStartX.value)
  const diffY = Math.abs(e.touches[0].clientY - touchStartY.value)
  if (diffX > diffY && diffX > 10) {
    isSwiping.value = true
    e.preventDefault()
  }
}

function onTouchEnd(e: TouchEvent) {
  const endX = e.changedTouches[0].clientX
  const diff = touchStartX.value - endX
  if (isSwiping.value && Math.abs(diff) > 40) {
    if (diff > 0) next()
    else prev()
  }
}

function getWrappedIndex(index: number) {
  return ((index % cases.length) + cases.length) % cases.length
}

const visibleCards = computed(() => [
  { position: 'left' as const, item: cases[getWrappedIndex(currentIndex.value - 1)] },
  { position: 'center' as const, item: cases[getWrappedIndex(currentIndex.value)] },
  { position: 'right' as const, item: cases[getWrappedIndex(currentIndex.value + 1)] },
])

function prev() {
  direction.value = 'prev'
  currentIndex.value = getWrappedIndex(currentIndex.value - 1)
}

function next() {
  direction.value = 'next'
  currentIndex.value = getWrappedIndex(currentIndex.value + 1)
}

function cardBgStyle(position: string) {
  if (position === 'left') {
    return {
      backgroundImage: 'url(/images/mn5gtr03DZ8elR/subtract-1.svg)',
      backgroundPosition: 'left top',
      backgroundSize: '357px 294px',
    }
  }
  if (position === 'right') {
    return {
      backgroundImage: 'url(/images/mn5gtr03DZ8elR/subtract.svg)',
      backgroundPosition: 'right top',
      backgroundSize: '357px 294px',
    }
  }
  return {}
}
</script>

<style scoped>
.slide-next-move,
.slide-prev-move {
  transition: all 0.5s ease;
}
.slide-next-enter-active,
.slide-next-leave-active,
.slide-prev-enter-active,
.slide-prev-leave-active {
  transition: all 0.5s ease;
}
.slide-next-leave-active,
.slide-prev-leave-active {
  position: absolute;
  pointer-events: none;
}
.slide-next-enter-from {
  opacity: 0;
  transform: translateX(120px) scale(0.9);
}
.slide-next-leave-to {
  opacity: 0;
  transform: translateX(-120px) scale(0.9);
}
.slide-prev-enter-from {
  opacity: 0;
  transform: translateX(-120px) scale(0.9);
}
.slide-prev-leave-to {
  opacity: 0;
  transform: translateX(120px) scale(0.9);
}
</style>
