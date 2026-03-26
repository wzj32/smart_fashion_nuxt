<template>
  <section class="flex flex-col items-center gap-[37px] px-6 py-0 w-full max-w-[1200px] mx-auto mt-[49px]">
    <!-- Badge -->
    <div class="flex items-center gap-2 bg-[#06b6d41a] rounded-xl px-4 h-[34.39px]">
      <img
        class="w-4 h-4 flex-shrink-0"
        alt="Iconify icon"
        src="https://c.animaapp.com/mn6whp7lktE587/img/iconify-icon-1.svg"
      />
      <span class="font-medium text-slate-50 text-sm text-center leading-[22.4px] whitespace-nowrap font-inter tracking-[0]">
        Technical Capabilities
      </span>
    </div>

    <!-- Hero heading section with background image -->
    <div class="relative flex flex-col items-center w-full">
      <!-- Background decorative image -->
      <img
        class="absolute top-0 left-1/2 -translate-x-1/2 w-[989px] h-[610px] pointer-events-none"
        alt="Mask group"
        src="https://c.animaapp.com/mn6whp7lktE587/img/mask-group.png"
      />

      <!-- Gradient heading -->
      <div class="relative flex flex-col items-center gap-1.5 z-10">
        <div class="flex flex-col items-center">
          <h1
            class="font-semibold text-5xl text-center tracking-[-0.96px] leading-[57.6px] whitespace-nowrap font-inter"
            style="background: linear-gradient(90deg, rgba(82,85,238,1) 0%, rgba(255,255,255,1) 55%, rgba(60,180,217,1) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;"
          >
            核心技術
          </h1>
        </div>

        <h2 class="font-semibold text-white text-5xl text-center leading-[normal] tracking-[0] font-inter">
          以 AI 為核心的技術生態
        </h2>
      </div>

      <!-- Subtitle text -->
      <div class="relative z-10 mt-6 flex items-center justify-center">
        <p class="font-normal text-white text-lg text-center leading-[28.8px] whitespace-nowrap tracking-[0] font-inter">
          我們精選現代化開源技術，結合自研 AI 模型，構建高擴展、高並發、高安全的企業級軟體系統。
        </p>
      </div>

      <!-- Spacer -->
      <div class="h-[280px]" />
    </div>

    <!-- Tech Stack Section -->
    <div class="relative flex flex-col items-center w-full gap-8">
      <!-- Section heading with decorative shapes -->
      <div class="relative flex flex-col items-center">
        <!-- Background large text -->
        <div class="absolute top-0 left-1/2 -translate-x-1/2 flex items-center font-normal text-[#f8fafc1a] tracking-[0] leading-[normal] whitespace-nowrap pointer-events-none select-none">
          <span class="text-[100px]" style="font-family: 'Bebas Neue', sans-serif;">S</span>
          <span class="text-[40px]" style="font-family: 'Bebas Neue', sans-serif;">TACK</span>
        </div>

        <!-- Decorative shapes -->
        <div class="flex items-center gap-[8.6px] mb-2 mt-[29px] relative z-10">
          <div class="w-[20.57px] h-[20.57px] border border-solid border-violet-600" />
          <div class="w-[20.57px] h-[20.57px] bg-blue-500 rounded-[10.29px] border border-solid" />
          <div class="w-[16.55px] h-[16.55px] border border-solid border-cyan-500 rotate-45" />
        </div>

        <!-- Section title -->
        <h3 class="font-semibold text-slate-50 text-[40px] tracking-[0] leading-[normal] relative z-10 mt-8 font-inter">
          開發技術棧
        </h3>
      </div>

      <!-- Tab buttons -->
      <div class="flex items-center gap-[60px] flex-wrap justify-center">
        <button
          v-for="tab in techTabs"
          :key="tab.id"
          @click="activeTab = tab.id"
          class="flex w-[200px] h-[72px] items-center justify-center gap-2.5 rounded-[10px] transition-colors"
          :class="activeTab === tab.id ? 'bg-violet-600' : 'bg-[#262c3a]'"
        >
          <img class="w-14 h-14" alt="Rectangle" :src="tab.img" />
          <span class="font-normal text-white text-xl tracking-[0] leading-[normal] whitespace-nowrap" style="font-family: 'Bebas Neue', sans-serif;">
            {{ tab.label }}
          </span>
        </button>
      </div>

      <!-- Content area: bullet list + image -->
      <div class="relative flex w-full items-start justify-between mt-4">
        <!-- Bullet points list -->
        <div class="flex flex-col gap-0">
          <div
            v-for="item in bulletItems"
            :key="item.id"
            class="flex items-center gap-4 h-16"
          >
            <img class="w-5 h-5 flex-shrink-0" alt="Group" :src="item.icon" />
            <span class="font-normal text-white text-xl leading-[64px] tracking-[0] whitespace-nowrap font-inter">
              {{ item.text }}
            </span>
          </div>
        </div>

        <!-- 3D decorative image -->
        <img
          class="w-[325px] h-[323px] object-cover flex-shrink-0"
          alt="Image"
          src="https://c.animaapp.com/mn6whp7lktE587/img/image-58.png"
        />
      </div>
    </div>

    <!-- CTA Card -->
    <div class="relative flex flex-col w-full items-center gap-[14.9px] p-16 rounded-[10px] border border-solid border-[#7c3aed33] overflow-hidden" style="background: linear-gradient(164deg, rgba(124,58,237,0.1) 0%, rgba(59,130,246,0.1) 100%)">
      <!-- Background mask image -->
      <img
        class="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
        alt="Mask group"
        src="https://c.animaapp.com/mn6whp7lktE587/img/mask-group-1.png"
      />

      <!-- CTA heading -->
      <div class="relative z-10 flex items-center justify-center">
        <h2 class="font-semibold text-slate-50 text-[32px] text-center leading-[51.2px] whitespace-nowrap tracking-[0] font-inter">
          準備好開始您的專案了嗎？
        </h2>
      </div>

      <!-- CTA subtitle -->
      <div class="relative z-10 flex flex-col max-w-[600px] w-full items-center pb-[17.79px]">
        <p class="font-normal text-slate-400 text-lg text-center leading-[28.8px] tracking-[0] font-inter">
          從概念到落地，我們是您最值得信賴的技術夥伴。立即預約，<br />開啟高效開發之旅。
        </p>
      </div>

      <!-- CTA Button -->
      <div class="relative z-10">
        <button
          class="h-[53.59px] w-[172px] rounded-md flex items-center justify-center gap-2 hover:opacity-90 transition-opacity border-0"
          style="background: linear-gradient(163deg, rgba(124,58,237,1) 0%, rgba(59,130,246,1) 100%)"
        >
          <span class="font-normal text-white text-base leading-[25.6px] whitespace-nowrap tracking-[0] font-inter">
            聯絡我們
          </span>
          <img
            class="w-5 h-5"
            alt="Iconify icon"
            src="https://c.animaapp.com/mn6whp7lktE587/img/iconify-icon.svg"
          />
        </button>
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
    img: 'https://c.animaapp.com/mn6whp7lktE587/img/rectangle-59.png',
    active: true,
  },
  {
    id: 'ai',
    label: 'AI 導入',
    img: 'https://c.animaapp.com/mn6whp7lktE587/img/rectangle-59-1.png',
    active: false,
  },
  {
    id: 'llm',
    label: '私有 LLM',
    img: 'https://c.animaapp.com/mn6whp7lktE587/img/rectangle-59-2.png',
    active: false,
  },
  {
    id: 'rag',
    label: 'RAG 技術',
    img: 'https://c.animaapp.com/mn6whp7lktE587/img/rectangle-59-3.png',
    active: false,
  },
]

const bulletItems: BulletItem[] = [
  {
    id: 'item-1',
    text: '雲原生應用設計：打造彈性高、易擴展的雲端應用架構',
    icon: 'https://c.animaapp.com/mn6whp7lktE587/img/group-29.png',
  },
  {
    id: 'item-2',
    text: '微服務架構：將系統拆分模組，提升維護與擴充效率',
    icon: 'https://c.animaapp.com/mn6whp7lktE587/img/group-30.png',
  },
  {
    id: 'item-3',
    text: '容器化技術：以容器封裝應用，實現快速部署與管理',
    icon: 'https://c.animaapp.com/mn6whp7lktE587/img/group-31.png',
  },
  {
    id: 'item-4',
    text: '無服務器計算：免維護伺服器，按需執行降低營運成本',
    icon: 'https://c.animaapp.com/mn6whp7lktE587/img/group-32.png',
  },
  {
    id: 'item-5',
    text: '高可用架構：確保系統穩定運行，降低中斷風險',
    icon: 'https://c.animaapp.com/mn6whp7lktE587/img/group-33.png',
  },
]

const activeTab = ref<string>('architecture')
</script>
