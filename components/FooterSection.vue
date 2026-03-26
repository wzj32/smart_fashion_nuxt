<template>
  <footer class="flex flex-col w-full items-start pt-[79px] pb-8 px-20 bg-[#0b1121] border-t border-[#00000014]">
    <div class="flex flex-col items-start gap-2 px-6 py-0 w-full">
      <!-- Main footer columns -->
      <div class="flex items-end justify-center gap-12 self-stretch w-full">
        <!-- Brand / Description column -->
        <div class="flex flex-col w-[435px] items-start gap-[23px]">
          <!-- Logo -->
          <NuxtLink to="/" class="flex items-center gap-3 self-stretch w-full no-underline">
            <img
              class="w-8 h-8"
              alt="Background"
              src="/images/mn6tdh0s8MHj5j/background-1.svg"
            />
            <span class="flex items-center w-20 h-8 font-medium text-slate-50 text-xl tracking-[0] leading-8 whitespace-nowrap">
              智慧時尚
            </span>
          </NuxtLink>

          <!-- Description -->
          <div class="flex flex-col max-w-xs w-80 items-start">
            <p class="w-80 font-normal text-slate-400 text-base tracking-[0] leading-[28.8px]">
              AI 驅動開發，智慧交付每一行程式碼。<br />
              致力於運用最先進的人工智慧技術，為企業打<br />
              造高效、穩定的數位產品。
            </p>
          </div>
        </div>

        <!-- Quick Links column -->
        <div class="flex flex-col w-[218px] items-start gap-6 self-stretch">
          <div class="self-stretch flex flex-col items-start pb-[0.59px]">
            <span class="font-normal text-slate-50 text-base tracking-[0] leading-[25.6px]">
              快速連結
            </span>
          </div>

          <nav class="flex flex-col items-start gap-4 self-stretch w-full">
            <div
              v-for="link in quickLinks"
              :key="link.label"
              class="flex flex-col items-start pt-px pb-[1.59px] px-0 self-stretch w-full"
            >
              <NuxtLink
                :to="link.to"
                class="font-normal text-sm tracking-[0] leading-[22.4px] no-underline"
                :class="isActive(link.to) ? 'text-white' : 'text-slate-400'"
              >
                {{ link.label }}
              </NuxtLink>
            </div>
          </nav>
        </div>

        <!-- Contact Info column -->
        <div class="flex flex-col w-[218px] items-start gap-6 self-stretch">
          <div class="self-stretch flex flex-col items-start pb-[0.59px]">
            <span class="font-normal text-slate-50 text-base tracking-[0] leading-[25.6px] whitespace-nowrap">
              聯絡資訊
            </span>
          </div>

          <!-- Phone -->
          <div class="flex w-full items-center gap-3">
            <img
              class="flex-shrink-0"
              alt="Phone icon"
              src="/images/mn6tdh0s8MHj5j/iconify-icon-margin.svg"
            />
            <span class="font-normal text-slate-400 text-sm tracking-[0] leading-[22.4px] whitespace-nowrap">
              (02) 2331-2907
            </span>
          </div>

          <!-- Address -->
          <div class="flex w-full gap-[12px] items-start">
            <img
              class="w-[18px] h-5 flex-shrink-0 mt-[1px]"
              alt="Address icon"
              src="/images/mn6tdh0s8MHj5j/iconify-icon-margin-1.svg"
            />
            <address class="not-italic font-normal text-slate-400 text-sm tracking-[0] leading-[22.4px]">
              台北市信義區基隆路二段51號<br />
              5樓之3
            </address>
          </div>
        </div>

        <!-- Follow Us column -->
        <div class="flex flex-col w-[218px] items-start gap-6 self-stretch">
          <div class="self-stretch flex flex-col items-start pb-[0.59px]">
            <span class="font-normal text-slate-50 text-base tracking-[0] leading-[25.6px]">
              追蹤我們
            </span>
          </div>

          <img
            class="self-stretch w-full"
            alt="Social media links"
            src="/images/mn6tdh0s8MHj5j/container.svg"
          />
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="flex items-center justify-between pt-8 pb-0 px-0 self-stretch w-full border-t border-[#00000014]">
        <p class="font-normal text-slate-400 text-[13px] tracking-[0] leading-[20.8px] whitespace-nowrap">
          &copy; 2026 智慧時尚 Smart Fashion. All rights reserved.
        </p>

        <div class="flex items-center gap-6">
          <span
            v-for="link in bottomLinks"
            :key="link.label"
            class="font-normal text-slate-400 text-[13px] tracking-[0] leading-[20.8px] whitespace-nowrap cursor-pointer"
          >
            {{ link.label }}
          </span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const route = useRoute()

const quickLinks = [
  { label: '首頁', to: '/' },
  { label: '關於我們', to: '/about' },
  { label: '服務項目', to: '/services' },
  { label: '作品案例', to: '/cases' },
  { label: '技術能力', to: '/technology' },
  { label: '聯絡我們', to: '/contact' },
]

const bottomLinks = [
  { label: '隱私權政策' },
  { label: '服務條款' },
]

function isActive(to: string) {
  if (to === '/') return route.path === '/'
  return route.path.startsWith(to)
}
</script>
