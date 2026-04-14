<template>
  <section class="relative w-full flex flex-col items-center overflow-hidden px-60 max-lg:px-8 max-md:px-4">
    <!-- Header Section -->
    <div class="flex flex-col w-full items-center justify-center gap-12 max-md:gap-6 px-0 py-12 max-md:py-8">
      <!-- Title block -->
      <div v-reveal="{ direction: 'up', duration: 800 }">
        <SectionHeader first-letter="C" rest-text="ASE" title="精選案例" fill-first fill-second />
      </div>

      <!-- Subtitle -->
      <div v-reveal="{ direction: 'up', delay: 200, duration: 800 }" class="flex flex-col w-full items-center relative mt-[-10px]">
        <p class="text-slate-400 text-base max-md:text-sm text-center leading-[28.8px] [font-family:'Inter',Helvetica] font-normal tracking-[0] whitespace-nowrap max-md:whitespace-normal">
          我們與各領域的領導品牌合作，透過 AI 與技術創新，打造具備商業價值的數位產品。
        </p>
      </div>
    </div>

    <!-- Filter Tabs -->
    <div v-reveal="{ direction: 'up', delay: 300, duration: 800 }" class="flex w-full items-center justify-center gap-3 max-md:gap-2 mb-8 max-md:px-4 max-md:flex-wrap">
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
    <div class="relative w-full overflow-hidden max-md:px-4 group/gallery">
      <!-- Left arrow -->
      <button
        class="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full border border-slate-500 bg-[#0b1121cc] backdrop-blur-sm cursor-pointer transition-all duration-300 opacity-0 group-hover/gallery:opacity-100 hover:border-violet-500 hover:scale-110 active:scale-95 max-md:hidden"
        @click="goLeft"
        aria-label="向左"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.5 15L7.5 10L12.5 5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>

      <!-- Right arrow -->
      <button
        class="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full border border-slate-500 bg-[#0b1121cc] backdrop-blur-sm cursor-pointer transition-all duration-300 opacity-0 group-hover/gallery:opacity-100 hover:border-violet-500 hover:scale-110 active:scale-95 max-md:hidden"
        @click="goRight"
        aria-label="向右"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.5 5L12.5 10L7.5 15" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>

      <TransitionGroup
        tag="div"
        name="card-slide"
        class="flex gap-5 max-md:gap-3 justify-center w-full max-[1400px]:flex-wrap max-[1400px]:max-w-[700px] max-[1400px]:mx-auto max-md:max-w-full"
      >
        <div
          v-for="(image, i) in displayedImages"
          :key="image.caseId"
          :class="[
            image.className,
            'max-[1400px]:!mt-0 max-[1400px]:w-[calc(50%-10px)] max-md:w-full max-[1400px]:!flex-none',
            'group overflow-hidden transition-all duration-500 ease-out cursor-pointer',
            image.isPlaceholder
              ? 'border border-dashed border-slate-600 bg-[#ffffff05] flex items-center justify-center'
              : activeIndex === windowStart + i
                ? '-translate-y-4 max-[1400px]:translate-y-0 shadow-[0_24px_48px_rgba(124,58,237,0.35)]'
                : 'hover:-translate-y-2 hover:shadow-[0_12px_32px_rgba(124,58,237,0.2)]',
          ]"
          @click="!image.isPlaceholder && (activeIndex = windowStart + i)"
        >
          <template v-if="image.isPlaceholder">
            <div class="flex flex-col items-center gap-3 text-slate-500">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/>
                <path d="M12 8v4M12 16h.01" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
              <span class="text-sm font-normal">敬請期待</span>
            </div>
          </template>
          <img
            v-else
            :class="[
              'w-full h-full object-cover transition-transform duration-500 ease-out',
              activeIndex === windowStart + i ? 'scale-105' : 'group-hover:scale-105',
            ]"
            :alt="image.alt"
            :src="image.src"
          />
        </div>
      </TransitionGroup>
    </div>

    <!-- Case Study Info + Navigation -->
    <div
      class="relative z-10 w-full flex flex-col items-start transition-all duration-[400ms] ease-in-out"
      :style="{ marginTop: infoMarginTop }"
    >
      <div class="flex w-full">
        <!-- Animated spacer -->
        <div
          :style="{ width: spacerWidth }"
          class="flex-shrink-0 transition-all duration-[400ms] ease-in-out"
        />

        <div class="flex flex-col w-80 max-md:w-full transition-all duration-[400ms] ease-in-out">
          <h3 class="font-semibold text-white text-xl leading-7 whitespace-nowrap [font-family:'Inter',Helvetica] tracking-[0]">
            {{ currentImage.title }}
          </h3>
          <div class="flex items-end gap-3 mt-1">
            <p class="w-[245px] max-md:w-full max-md:flex-1 text-slate-400 text-sm leading-5 [font-family:'Inter',Helvetica] font-normal tracking-[0]">
              {{ currentImage.description }}
            </p>
            <NuxtLink
              :to="`/cases/${currentImage.caseId}`"
              class="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full border border-white/40 transition-all duration-300 hover:scale-110 hover:border-violet-400 hover:drop-shadow-[0_0_8px_rgba(124,58,237,0.7)] active:scale-95"
              aria-label="查看詳情"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.75 9H14.25M14.25 9L9.75 4.5M14.25 9L9.75 13.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Mobile navigation arrows -->
      <div class="flex items-center justify-center w-full gap-4 mt-6 md:hidden">
        <button
          class="w-10 h-10 flex-shrink-0 cursor-pointer active:scale-90 transition-all duration-200 rounded-full border border-slate-500 flex items-center justify-center bg-transparent"
          @click="goLeft"
          aria-label="向左"
        >
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 15L7.5 10L12.5 5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <button
          class="w-10 h-10 flex-shrink-0 cursor-pointer active:scale-90 transition-all duration-200 rounded-full border border-slate-500 flex items-center justify-center bg-transparent"
          @click="goRight"
          aria-label="向右"
        >
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.5 5L12.5 10L7.5 15" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- CTA Section -->
    <div v-reveal="{ direction: 'up', delay: 200, duration: 900 }" class="relative w-full mt-16 mb-0 max-md:px-4">
      <div class="relative flex flex-col w-full items-center gap-[14.9px] p-16 max-lg:p-10 max-md:p-6 rounded-[10px] border border-solid border-[#7c3aed33] bg-[linear-gradient(164deg,rgba(124,58,237,0.1)_0%,rgba(59,130,246,0.1)_100%)] overflow-hidden hover-border-glow">
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
          <div class="flex flex-col w-full items-center pb-[17.79px]">
            <p class="font-normal text-slate-400 text-base max-md:text-sm text-center leading-[28.8px] [font-family:'Inter',Helvetica] tracking-[0] whitespace-nowrap max-md:whitespace-normal">
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
import { ref, computed, onMounted, watch } from 'vue'

const filterTabs = [
  { id: 'all', label: '全部案例' },
  { id: 'webapp', label: 'Web App' },
  { id: 'mobileapp', label: 'Mobile App' },
  { id: 'ai', label: 'AI 整合' },
  { id: 'enterprise', label: '企業系統' },
]

const allGalleryImages = [
  {
    src: '/shenhe.jpg',
    alt: '內容審核系統',
    className: 'mt-[70px] flex-1 min-w-0 h-[400px] rounded-[20px] object-cover',
    title: '專業知識內容審核系統',
    description: '使用 AI 技術分析專業文件與媒體內容，即時識別準確性與合規性問題，提升審核效率與內容品質',
    tabs: ['all', 'ai'],
    caseId: 'content-review',
  },
  {
    src: '/shouyi.jpg',
    alt: 'AI 輔助獸醫系統',
    className: 'flex-1 min-w-0 h-[400px] rounded-[20px] object-cover',
    title: 'AI 輔助獸醫系統',
    description: '運用 AI 技術輔助寵物診斷，整合智能病歷預覽、症狀診斷輔助與飼主知識解釋器，提升獸醫診療效率',
    tabs: ['all', 'ai'],
    caseId: 'vet-ai',
  },
  {
    src: '/24:7.jpg',
    alt: 'AI 客服',
    className: 'mt-20 flex-1 min-w-0 h-80 rounded-[20px] object-cover',
    title: '24/7 AI 智能客服',
    description: '整合大語言模型打造智能客服系統，自動處理常見問題，降低人工客服成本，提升客戶滿意度',
    tabs: ['all', 'ai', 'webapp'],
    caseId: 'ai-customer-service',
  },
  {
    src: '/IM.jpg',
    alt: '即時通訊',
    className: 'flex-1 min-w-0 h-[400px] rounded-[20px] object-cover',
    title: 'IM SaaS 即時通訊平台',
    description: '提供完整 SDK 與預建 UI 組件，快速整合聊天、群組、檔案共享等功能，支援雲端與私有化部署',
    tabs: ['all', 'webapp', 'enterprise'],
    caseId: 'realtime-chat',
  },
  {
    src: '/images/mn6sgmdo6ocCMY/rectangle-42.png',
    alt: '移動端購物',
    className: 'mt-[70px] flex-1 min-w-0 h-[400px] rounded-[20px] object-cover',
    title: '零售 O2O 購物 App',
    description: '打通線上線下消費場景，支援掃碼購、門店自取等創新功能，整合會員體系與個性化推薦服務',
    tabs: ['mobileapp'],
    caseId: 'content-review',
  },
  {
    src: '/yupenglai.jpeg',
    alt: '興蓬萊台菜餐廳',
    className: 'mt-20 flex-1 min-w-0 h-80 rounded-[20px] object-cover',
    title: '興蓬萊',
    description: '為米其林餐盤推薦台菜餐廳打造數位化平台，整合線上訂位、數位菜單、電商購物與多語言介面，全面提升品牌數位競爭力',
    tabs: ['all', 'webapp'],
    caseId: 'hsing-penglai',
  },
  {
    src: '/zujie.png',
    alt: '台灣租借WiFi',
    className: 'flex-1 min-w-0 h-[400px] rounded-[20px] object-cover',
    title: '台灣租借WiFi',
    description: '為行動 WiFi 租借服務商打造線上預訂平台，整合多元領還方式與自動化訂單管理，集團累計服務用戶突破 2,000 萬',
    tabs: ['all'],
    caseId: 'wifi-rental',
  },
  {
    src: '/wifi.jpg',
    alt: 'GLOBAL WiFi',
    className: 'mt-20 flex-1 min-w-0 h-80 rounded-[20px] object-cover',
    title: 'GLOBAL WiFi',
    description: '為出境旅遊 WiFi 租借品牌打造多語言預訂平台，整合機場、宅配、門市等彈性取還貨渠道，提升旅客訂購體驗',
    tabs: ['all', 'webapp'],
    caseId: 'global-wifi',
  },
  {
    src: '',
    alt: '',
    className: 'flex-1 min-w-0 h-[400px] rounded-[20px]',
    title: '',
    description: '',
    tabs: ['all', 'ai', 'webapp', 'enterprise'],
    caseId: 'placeholder-2',
    isPlaceholder: true,
  },
  {
    src: '/images/mn6sgmdo6ocCMY/rectangle-43.png',
    alt: '移動辦公',
    className: 'flex-1 min-w-0 h-[400px] rounded-[20px] object-cover',
    title: '企業移動辦公平台',
    description: '涵蓋審批流程、考勤管理與移動 CRM 的企業辦公 App，助力業務人員隨時隨地高效完成工作',
    tabs: ['mobileapp'],
    caseId: 'content-review',
  },
  {
    src: '/images/mn6sgmdo6ocCMY/rectangle-44.png',
    alt: 'SaaS 平台',
    className: 'mt-20 flex-1 min-w-0 h-80 rounded-[20px] object-cover',
    title: '企業級 SaaS 管理平台',
    description: '採用微服務架構打造的多租戶 SaaS 系統，支援千人同時在線，系統可用性 99.99%，彈性擴展無上限',
    tabs: ['webapp'],
    caseId: 'content-review',
  },
  {
    src: '/images/mn6sgmdo6ocCMY/rectangle-45.png',
    alt: 'ERP 系統',
    className: 'flex-1 min-w-0 h-[400px] rounded-[20px] object-cover',
    title: '智慧製造 ERP 系統',
    description: '針對製造業打造的全流程 ERP 解決方案，整合生產排程、物料管理與品質追溯，助力工廠智慧化升級',
    tabs: ['enterprise'],
    caseId: 'enterprise-arch',
  },
]

const activeTab = ref('all')
const activeIndex = ref(0)

const galleryImages = computed(() =>
  allGalleryImages.filter(img => img.tabs.includes(activeTab.value))
)

const PAGE_SIZE = 4

const currentPage = computed(() => Math.floor(activeIndex.value / PAGE_SIZE))

const totalPages = computed(() => Math.ceil(galleryImages.value.length / PAGE_SIZE))

const windowStart = computed(() => currentPage.value * PAGE_SIZE)

const displayedImages = computed(() =>
  galleryImages.value.slice(windowStart.value, windowStart.value + PAGE_SIZE)
)


// flush: 'sync' 確保 activeIndex 在下次渲染前就已重置
watch(activeTab, () => {
  activeIndex.value = 0
}, { flush: 'sync' })

// 安全的當前圖片，避免 undefined 訪問
const currentImage = computed(() =>
  galleryImages.value[activeIndex.value] ?? galleryImages.value[0]
)

const windowWidth = ref(1600)

onMounted(() => {
  windowWidth.value = window.innerWidth
  window.addEventListener('resize', () => {
    windowWidth.value = window.innerWidth
  })
})

const spacerWidth = computed(() => {
  if (windowWidth.value <= 768) {
    return '0px'
  }
  const posInWindow = activeIndex.value - windowStart.value
  if (windowWidth.value <= 1400) {
    const col = posInWindow % 2
    return col === 0 ? '0px' : 'calc(50%)'
  }
  // 桌面：根據視窗內位置計算步距
  const n = displayedImages.value.length
  const contentWidth = windowWidth.value - 480
  const imageWidth = (contentWidth - (n - 1) * 20) / n
  const stride = imageWidth + 20
  const maxSpacer = Math.max(0, contentWidth - 320)
  return `${Math.min(posInWindow * stride, maxSpacer)}px`
})

const infoMarginTop = computed(() => {
  if (windowWidth.value <= 1400) {
    return '20px'
  }
  return '20px'
})

function goLeft() {
  const prevPage = (currentPage.value - 1 + totalPages.value) % totalPages.value
  activeIndex.value = prevPage * PAGE_SIZE
}
function goRight() {
  const nextPage = (currentPage.value + 1) % totalPages.value
  activeIndex.value = nextPage * PAGE_SIZE
}
</script>

<style scoped>
.card-slide-enter-active {
  transition: opacity 0.45s ease, transform 0.45s ease;
}
.card-slide-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.card-slide-enter-from {
  opacity: 0;
  transform: translateX(40px) scale(0.96);
}
.card-slide-leave-to {
  opacity: 0;
  transform: translateX(-40px) scale(0.96);
}
</style>
