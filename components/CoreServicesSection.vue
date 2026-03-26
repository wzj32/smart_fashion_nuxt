<template>
  <section class="flex flex-col h-[800px] items-start gap-2.5 relative self-stretch w-full overflow-hidden">
    <!-- Section header decoration -->
    <div class="absolute top-[69px] left-1/2 -translate-x-1/2">
      <SectionHeader first-letter="C" rest-text="ORE SERVICES" title="核心服務" fill-first />
    </div>

    <!-- Service tabs with dynamic underline -->
    <nav
      ref="tabsNavRef"
      class="flex w-full max-w-screen-xl mx-auto items-center justify-center gap-[120px] absolute top-[286px] left-0 right-0 pb-[14px]"
    >
      <button
        v-for="tab in serviceTabs"
        :key="tab.id"
        :ref="(el) => setTabRef(tab.id, el)"
        @click="activeTab = tab.id"
        class="relative flex items-center tracking-[0] leading-normal transition-colors cursor-pointer bg-transparent border-none p-0 hover:text-slate-200"
        :class="activeTab === tab.id
          ? 'font-semibold text-slate-50 text-2xl'
          : 'font-normal text-slate-400 text-xl'"
      >
        {{ tab.label }}
      </button>

      <!-- Divider line -->
      <div class="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800" />

      <!-- Active tab accent underline -->
      <div
        class="absolute bottom-[-1px] h-[3px] rounded-[10px] transition-all duration-300 ease-in-out"
        :style="{ left: underlineLeft + 'px', width: underlineWidth + 'px' }"
        style="background: linear-gradient(90deg, rgba(82,85,238,1) 0%, rgba(255,255,255,1) 55%, rgba(60,180,217,1) 100%);"
      />
    </nav>

    <!-- Content area -->
    <div class="absolute top-[444px] left-[182px] w-[494px] h-[168px]">
      <!-- Service icon -->
      <img class="absolute top-0 left-0 w-9 h-9" alt="Service icon" :src="currentContent.icon" />

      <!-- Service title -->
      <h2 class="absolute top-0 left-[49px] w-[221px] h-9 flex items-center font-semibold text-slate-50 text-3xl leading-normal tracking-[0]">
        {{ currentContent.title }}
      </h2>

      <!-- Service description -->
      <p class="absolute top-[92px] left-0 w-[490px] h-[76px] flex items-center font-normal text-slate-400 text-base leading-[25.6px] tracking-[0]">
        {{ currentContent.description }}
      </p>
    </div>

    <!-- Footer text -->
    <p class="absolute top-[646px] left-[182px] w-[490px] h-[50px] flex items-center font-normal text-slate-400 text-base leading-[25.6px] tracking-[0]">
      {{ currentContent.footer }}
    </p>

    <!-- Right illustraton -->
    <img
      class="absolute top-[355px] left-[838px] w-[422px] h-[423px] object-contain"
      alt="Service illustration"
      :src="currentContent.image"
    />
  </section>
</template>

<script setup lang="ts">
const serviceTabs = [
  { id: 'ai-automation', label: 'AI 自動化' },
  { id: 'enterprise-arch', label: '企業系統架構' },
  { id: 'web-app-dev', label: 'Web/App 開發' },
  { id: 'project-mgmt', label: '專案管理服務' },
  { id: 'messaging', label: '即時通訊服務' },
]

const activeTab = ref('ai-automation')

// Dynamic tab underline
const tabsNavRef = ref<HTMLElement | null>(null)
const tabEls = ref<Record<string, HTMLElement | null>>({})
const underlineLeft = ref(0)
const underlineWidth = ref(0)

function setTabRef(id: string, el: any) {
  tabEls.value[id] = el as HTMLElement
}

function updateUnderline() {
  const nav = tabsNavRef.value
  const tab = tabEls.value[activeTab.value]
  if (nav && tab) {
    const navRect = nav.getBoundingClientRect()
    const tabRect = tab.getBoundingClientRect()
    underlineLeft.value = tabRect.left - navRect.left
    underlineWidth.value = tabRect.width
  }
}

watch(activeTab, () => nextTick(updateUnderline))
onMounted(() => nextTick(updateUnderline))

const tabContent: Record<string, { title: string; description: string; footer: string; icon: string; image: string }> = {
  'ai-automation': {
    title: 'AI 應用與自動化',
    description: '我們協助企業將 AI 真正落地到日常營運之中，從智能客服、AI 助理、知識庫問答，到業務流程自動化與私有化 AI 解決方案，皆可依據企業需求量身打造。',
    footer: 'AI 不只是展示技術能力的工具，更是幫助企業提升效率、降低人力成本、優化客戶體驗的重要引擎。',
    icon: '/images/mn5gtr03DZ8elR/image-54.png',
    image: '/images/mn5gtr03DZ8elR/image-56.png',
  },
  'enterprise-arch': {
    title: '企業系統架構',
    description: '我們提供完整的企業系統架構規劃與設計，協助企業建立穩健、可擴展的技術基礎設施。',
    footer: '良好的系統架構是企業數位轉型成功的關鍵基礎。',
    icon: '/images/mn5gtr03DZ8elR/image-54.png',
    image: '/images/mn5gtr03DZ8elR/image-56.png',
  },
  'web-app-dev': {
    title: 'Web/App 開發',
    description: '我們提供高品質的網頁與行動應用程式開發服務，從設計到上線一站式完成。',
    footer: '優質的使用者體驗是產品成功的核心要素。',
    icon: '/images/mn5gtr03DZ8elR/image-54.png',
    image: '/images/mn5gtr03DZ8elR/image-56.png',
  },
  'project-mgmt': {
    title: '專案管理服務',
    description: '我們提供專業的專案管理服務，確保專案按時、按預算、高品質地完成交付。',
    footer: '有效的專案管理能大幅提升團隊效率與專案成功率。',
    icon: '/images/mn5gtr03DZ8elR/image-54.png',
    image: '/images/mn5gtr03DZ8elR/image-56.png',
  },
  messaging: {
    title: '即時通訊服務',
    description: '我們提供企業級即時通訊解決方案，整合多平台訊息管理，提升客戶溝通效率。',
    footer: '即時、有效的溝通是現代企業競爭力的重要來源。',
    icon: '/images/mn5gtr03DZ8elR/image-54.png',
    image: '/images/mn5gtr03DZ8elR/image-56.png',
  },
}

const currentContent = computed(() => tabContent[activeTab.value])
</script>
