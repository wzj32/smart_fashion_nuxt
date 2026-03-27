<template>
  <section class="flex flex-col h-[800px] max-lg:h-auto items-start max-lg:items-center gap-2.5 relative self-stretch w-full overflow-hidden max-lg:py-16 max-md:py-10 max-lg:px-4">
    <!-- Section header decoration -->
    <div class="absolute top-[69px] left-1/2 -translate-x-1/2 max-lg:relative max-lg:top-auto max-lg:left-auto max-lg:translate-x-0 max-lg:flex max-lg:justify-center max-lg:w-full max-lg:mb-8">
      <SectionHeader first-letter="C" rest-text="ORE SERVICES" title="核心服務" fill-first />
    </div>

    <!-- Service tabs with dynamic underline -->
    <nav
      ref="tabsNavRef"
      class="flex w-full max-w-screen-xl mx-auto items-center justify-center gap-[120px] max-lg:gap-4 max-md:gap-2 absolute top-[286px] left-0 right-0 pb-[14px] max-lg:relative max-lg:top-auto max-lg:left-auto max-lg:right-auto max-lg:flex-wrap max-lg:mb-8"
    >
      <button
        v-for="tab in serviceTabs"
        :key="tab.id"
        :ref="(el) => setTabRef(tab.id, el)"
        @click="activeTab = tab.id"
        class="relative flex items-center tracking-[0] leading-normal transition-colors cursor-pointer bg-transparent border-none p-0 hover:text-slate-200"
        :class="activeTab === tab.id
          ? 'font-semibold text-slate-50 text-2xl max-lg:text-lg max-md:text-base'
          : 'font-normal text-slate-400 text-xl max-lg:text-base max-md:text-sm'"
      >
        {{ tab.label }}
      </button>

      <!-- Divider line -->
      <div class="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 max-lg:hidden" />

      <!-- Active tab accent underline (desktop only) -->
      <div
        class="absolute bottom-[-1px] h-[3px] rounded-[10px] transition-all duration-300 ease-in-out max-lg:hidden"
        :style="{ left: underlineLeft + 'px', width: underlineWidth + 'px' }"
        style="background: linear-gradient(90deg, rgba(82,85,238,1) 0%, rgba(255,255,255,1) 55%, rgba(60,180,217,1) 100%);"
      />
    </nav>
    <!-- Content wrapper (centered) -->
    <div class="absolute top-[355px] left-0 right-0 mx-auto w-full max-w-screen-xl flex justify-between items-start px-10 max-lg:relative max-lg:top-auto max-lg:flex-col max-lg:items-center max-lg:px-4 max-lg:gap-6">
      <!-- Left: text content -->
      <div class="flex flex-col gap-3 w-[494px] mt-[89px] max-lg:w-full max-lg:mt-0">
        <!-- Service icon + title -->
        <div class="flex items-center gap-3">
          <img class="w-9 h-9 flex-shrink-0" alt="Service icon" :src="currentContent.icon" />
          <h2 class="font-semibold text-slate-50 text-3xl max-md:text-2xl leading-normal tracking-[0]">
            {{ currentContent.title }}
          </h2>
        </div>

        <!-- Service description -->
        <p class="font-normal text-slate-400 text-base leading-[25.6px] tracking-[0]">
          {{ currentContent.description }}
        </p>

        <!-- Footer text -->
        <p class="font-normal text-slate-400 text-base leading-[25.6px] tracking-[0] mt-[20px] max-lg:mt-0">
          {{ currentContent.footer }}
        </p>
      </div>

      <!-- Right illustration -->
      <img
        class="w-[422px] h-[423px] object-contain max-lg:w-full max-lg:max-w-[320px] max-lg:h-auto"
        alt="Service illustration"
        :src="currentContent.image"
      />
    </div>
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
    icon: '/images/01.png',
    image: '/images/AIzidonghua.png',
  },
  'enterprise-arch': {
    title: '企業系統架構',
    description: '混合雲佈署、系統健檢與優化、高效能架構設計、穩定維運，打造可擴展、安全、穩定的系統，支撑企業長遠成長',
    footer: '良好的系統架構是企業數位轉型成功的關鍵基礎。',
    icon: '/images/02.png',
    image: '/images/xitongjiagou.png',
  },
  'web-app-dev': {
    title: 'Web/App 開發',
    description: '專業的網站與應用程式開發團隊，從需求分析到設計開發，提供一站式服務',
    footer: '優質的使用者體驗是產品成功的核心要素。',
    icon: '/images/03.png',
    image: '/images/web-APPkaifa.png',
  },
  'project-mgmt': {
    title: '專案管理服務',
    description: '資深專案經理带領開發團隊，確保專案如期如質完成，讓您無後顧之憂',
    footer: '有效的專案管理能大幅提升團隊效率與專案成功率。',
    icon: '/images/04.png',
    image: '/images/zhuanangunali.png',
  },
  messaging: {
    title: '即時通訊服務',
    description: '企業級即時通訊雲端服務，提供完整 SDK 與預建 U 組件，讓您的應用快速整合聊天、群組、檔案共享等功能，支援雲端與自建部署',
    footer: '有效的專案管理能大幅提升團隊效率與專案成功率。',
    icon: '/images/05.png',
    image: '/images/tongxunfuwu.png',
  },
}

const currentContent = computed(() => tabContent[activeTab.value])
</script>
