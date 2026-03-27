<template>
  <section class="px-[120px] max-lg:px-8 max-md:px-4 flex flex-col items-center gap-[37px] py-0 w-full mx-auto mt-[49px] max-md:mt-6">
    <!-- Badge -->
    <div v-reveal="{ direction: 'up', delay: 200, duration: 800 }" class="flex items-center gap-2 bg-[#06b6d41a] rounded-xl px-4 h-[34.39px]">
      <img
        class="w-4 h-4 flex-shrink-0"
        alt="Iconify icon"
        src="/images/mn6whp7lktE587/iconify-icon-1.svg"
      />
      <span class="font-medium text-slate-50 text-sm text-center leading-[22.4px] whitespace-nowrap font-inter tracking-[0]">
        Technical Capabilities
      </span>
    </div>

    <!-- Hero heading section with background image -->
    <div class="relative flex flex-col items-center w-full">
      <!-- Background decorative image -->
      <img
        class="absolute top-0 left-1/2 -translate-x-1/2 w-[989px] max-lg:w-full h-[610px] pointer-events-none"
        alt="Mask group"
        src="/images/mn6whp7lktE587/mask-group.png"
      />

      <!-- Gradient heading -->
      <div v-reveal="{ direction: 'up', delay: 400, duration: 1000 }" class="relative flex flex-col items-center gap-1.5 z-10">
        <div class="flex flex-col items-center">
          <h1
            class="font-semibold text-5xl max-lg:text-4xl max-md:text-3xl text-center tracking-[-0.96px] leading-[57.6px] max-md:leading-normal whitespace-nowrap font-inter"
            style="background: linear-gradient(90deg, rgba(82,85,238,1) 0%, rgba(255,255,255,1) 55%, rgba(60,180,217,1) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;"
          >
            核心技術
          </h1>
        </div>

        <h2 class="font-semibold text-white text-5xl max-lg:text-4xl max-md:text-3xl text-center leading-[normal] tracking-[0] font-inter max-md:whitespace-normal whitespace-nowrap">
          以 AI 為核心的技術生態
        </h2>
      </div>

      <!-- Subtitle text -->
      <div v-reveal="{ direction: 'up', delay: 600, duration: 800 }" class="relative z-10 mt-6 flex items-center justify-center max-md:px-2">
        <p class="font-normal text-white text-lg max-md:text-base text-center leading-[28.8px] whitespace-nowrap max-lg:whitespace-normal tracking-[0] font-inter">
          我們精選現代化開源技術，結合自研 AI 模型，構建高擴展、高並發、高安全的企業級軟體系統。
        </p>
      </div>

      <!-- Spacer -->
      <div class="h-[280px] max-lg:h-[180px] max-md:h-[100px]" />
    </div>

    <!-- Tech Stack Section -->
    <div class="relative flex flex-col items-center w-full gap-8">
      <!-- Section heading with decorative shapes -->
      <div v-reveal="{ direction: 'up', duration: 800 }">
        <SectionHeader first-letter="S" rest-text="TACK" title="開發技術棧" fill-second />
      </div>

      <!-- Tab buttons -->
      <div v-reveal="{ direction: 'up', delay: 200, duration: 800 }" class="flex items-center gap-[60px] max-lg:gap-4 max-md:gap-3 flex-wrap justify-center">
        <button
          v-for="tab in techTabs"
          :key="tab.id"
          @click="activeTab = tab.id"
          class="flex w-[200px] max-md:w-[140px] h-[72px] max-md:h-[56px] items-center justify-center gap-2.5 rounded-[10px] transition-all duration-300 cursor-pointer border-none"
          :class="activeTab === tab.id ? 'bg-violet-600 scale-105' : 'bg-[#262c3a] hover:bg-[#363d4f]'"
        >
          <img class="w-14 max-md:w-10 h-14 max-md:h-10" alt="Rectangle" :src="tab.img" />
          <span class="font-normal text-white text-xl max-md:text-base tracking-[0] leading-[normal] whitespace-nowrap" style="font-family: 'Bebas Neue', sans-serif;">
            {{ tab.label }}
          </span>
        </button>
      </div>

      <!-- Content area: bullet list + image -->
      <div class="relative flex max-lg:flex-col w-full items-start max-lg:items-center justify-between mt-4 max-lg:gap-8">
        <!-- Bullet points list -->
        <Transition name="tab-bullets" mode="out-in">
          <div :key="activeTab" class="flex flex-col gap-0">
            <div
              v-for="(item, index) in bulletItems"
              :key="item.id"
              class="flex items-center gap-4 h-16"
              :style="{ transitionDelay: `${index * 80}ms` }"
            >
              <img class="w-5 h-5 flex-shrink-0" alt="Group" :src="item.icon" />
              <span class="font-normal text-white text-xl max-md:text-base leading-[64px] max-md:leading-normal tracking-[0] whitespace-nowrap max-lg:whitespace-normal font-inter">
                {{ item.text }}
              </span>
            </div>
          </div>
        </Transition>

        <!-- 3D decorative image -->
        <Transition name="tab-image" mode="out-in">
          <img
            :key="activeTab + '-img'"
            class="w-[325px] max-lg:w-full max-lg:max-w-[280px] h-[323px] max-lg:h-auto object-cover flex-shrink-0"
            alt="Image"
            :src="contentImage"
          />
        </Transition>
      </div>
    </div>

    <!-- CTA Card -->
    <div
      v-reveal="{ direction: 'up', delay: 200, duration: 900 }"
      class="relative flex flex-col w-full items-center gap-[14.9px] p-16 max-lg:p-10 max-md:p-6 rounded-[10px] border border-solid border-[#7c3aed33] overflow-hidden hover-border-glow"
      style="background: linear-gradient(164deg, rgba(124,58,237,0.1) 0%, rgba(59,130,246,0.1) 100%)"
    >
      <!-- Background mask image -->
      <img
        class="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
        alt="Mask group"
        src="/images/mn6whp7lktE587/mask-group-1.png"
      />

      <!-- CTA heading -->
      <div class="relative z-10 flex items-center justify-center">
        <h2 class="font-semibold text-slate-50 text-[32px] max-md:text-2xl text-center leading-[51.2px] max-md:leading-normal whitespace-nowrap max-md:whitespace-normal tracking-[0] font-inter">
          準備好開始您的專案了嗎？
        </h2>
      </div>

      <!-- CTA subtitle -->
      <div class="relative z-10 flex flex-col max-w-[600px] w-full items-center pb-[17.79px]">
        <p class="font-normal text-slate-400 text-lg max-md:text-base text-center leading-[28.8px] tracking-[0] font-inter">
          從概念到落地，我們是您最值得信賴的技術夥伴。立即預約，開啟高效開發之旅。
        </p>
      </div>

      <!-- CTA Button -->
      <div class="relative z-10">
        <NuxtLink
          to="/contact"
          class="h-[53.59px] w-[172px] rounded-md flex items-center justify-center gap-2 hover-glow border-0 no-underline"
          style="background: linear-gradient(163deg, rgba(124,58,237,1) 0%, rgba(59,130,246,1) 100%)"
        >
          <span class="font-normal text-white text-base leading-[25.6px] whitespace-nowrap tracking-[0] font-inter">
            聯絡我們
          </span>
          <img
            class="w-5 h-5"
            alt="Iconify icon"
            src="/images/mn6whp7lktE587/iconify-icon.svg"
          />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface TechTab {
  id: string
  label: string
  img: string
  active: boolean
}

interface BulletItem {
  id: string
  text: string
  icon: string
}

const techTabs: TechTab[] = [
  {
    id: 'architecture',
    label: '架構設計',
    img: '/images/mn6whp7lktE587/rectangle-59.png',
    active: true,
  },
  {
    id: 'ai',
    label: 'AI 導入',
    img: '/images/mn6whp7lktE587/rectangle-59-1.png',
    active: false,
  },
  {
    id: 'llm',
    label: '私有 LLM',
    img: '/images/mn6whp7lktE587/rectangle-59-2.png',
    active: false,
  },
  {
    id: 'rag',
    label: 'RAG 技術',
    img: '/images/mn6whp7lktE587/rectangle-59-3.png',
    active: false,
  },
]

const tabBulletItems: Record<string, BulletItem[]> = {
  architecture: [
    { id: 'arch-1', text: '雲原生應用設計：打造彈性高、易擴展的雲端應用架構', icon: '/images/mn6whp7lktE587/group-29.png' },
    { id: 'arch-2', text: '微服務架構：將系統拆分模組，提升維護與擴充效率', icon: '/images/mn6whp7lktE587/group-30.png' },
    { id: 'arch-3', text: '容器化技術：以容器封裝應用，實現快速部署與管理', icon: '/images/mn6whp7lktE587/group-31.png' },
    { id: 'arch-4', text: '無服務器計算：免維護伺服器，按需執行降低營運成本', icon: '/images/mn6whp7lktE587/group-32.png' },
    { id: 'arch-5', text: '高可用架構：確保系統穩定運行，降低中斷風險', icon: '/images/mn6whp7lktE587/group-33.png' },
  ],
  ai: [
    { id: 'ai-1', text: '大語言模型應用：基於 LLM 實現智慧對話、內容生成、知識問答等場景落地。', icon: '/images/mn6whp7lktE587/group-29.png' },
    { id: 'ai-2', text: '預訓練與微調：以通用大模型為基礎，針對企業資料進行微調，提升專業效果。', icon: '/images/mn6whp7lktE587/group-30.png' },
    { id: 'ai-3', text: '領域適應：針對金融、製造、客服等垂直場景做知識與規則适配，更貼近業務。', icon: '/images/mn6whp7lktE587/group-31.png' },
    { id: 'ai-4', text: 'AI 流程自動化：將重複性人工流程交由 AI 自動執行，降低成本、提升效率。', icon: '/images/mn6whp7lktE587/group-32.png' },
  ],
  llm: [
    { id: 'llm-1', text: '模型部署優化：針對伺服器、邊緣設備進行調校，提升推理速度與資源利用率。', icon: '/images/mn6whp7lktE587/group-29.png' },
    { id: 'llm-2', text: '垂直領域適應：融入行業知識與業務規則，讓模型回答更專業、更貼近場景需求。', icon: '/images/mn6whp7lktE587/group-30.png' },
    { id: 'llm-3', text: '知識蒸餾：將大模型能力遷移至輕量模型，在效果損失極小前提下大幅簡化模型。', icon: '/images/mn6whp7lktE587/group-31.png' },
    { id: 'llm-4', text: '量化與壓縮：透過數值精度優化與模型壓縮，減少佔用空間，提升部署與執行效率。', icon: '/images/mn6whp7lktE587/group-32.png' },
  ],
  rag: [
    { id: 'rag-1', text: '向量數據庫：高效存儲與檢索語義向量，為快速相似性匹配提供底層支撐。', icon: '/images/mn6whp7lktE587/group-29.png' },
    { id: 'rag-2', text: '語義搜索：突破關鍵字匹配限制，依據語義含義理解並召回相關內容。', icon: '/images/mn6whp7lktE587/group-30.png' },
    { id: 'rag-3', text: '證據檢索：從企業知識庫中精準抽取事實依據，為模型生成提供可信來源。', icon: '/images/mn6whp7lktE587/group-31.png' },
    { id: 'rag-4', text: '知識融合：將檢索到的多個知識片段進行關聯與彙整，形成完整邏輯。', icon: '/images/mn6whp7lktE587/group-32.png' },
    { id: 'rag-5', text: '信息整合：對雜散信息進行梳理與提煉，讓輸出內容更連貫、更具參考價值。', icon: '/images/mn6whp7lktE587/group-33.png' },
  ],
}

const tabImages: Record<string, string> = {
  architecture: '/images/jiagousheji.png',
  ai: '/images/AIdaoru.png',
  llm: '/images/siyou.png',
  rag: '/images/RAGjishu.png',
}

const activeTab = ref<string>('architecture')

const bulletItems = computed(() => tabBulletItems[activeTab.value])
const contentImage = computed(() => tabImages[activeTab.value])
</script>

<style scoped>
.tab-bullets-enter-active,
.tab-bullets-leave-active {
  transition: opacity 0.35s ease, transform 0.35s ease;
}
.tab-bullets-enter-from {
  opacity: 0;
  transform: translateY(15px);
}
.tab-bullets-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.tab-image-enter-active,
.tab-image-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.tab-image-enter-from {
  opacity: 0;
  transform: scale(0.95);
}
.tab-image-leave-to {
  opacity: 0;
  transform: scale(1.02);
}
</style>
