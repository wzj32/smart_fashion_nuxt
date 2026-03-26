<template>
  <header
    class="flex w-full h-20 items-center justify-center px-20 bg-transparent border-b border-[#00000014] backdrop-blur-[6px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(6px)_brightness(100%)] sticky top-0 z-50"
  >
    <div class="flex w-full items-center justify-between px-6 py-0">
      <!-- Logo -->
      <NuxtLink to="/" class="inline-flex items-center gap-3 flex-shrink-0">
        <img
          class="w-8 h-8"
          alt="Background"
          src="/images/mn6tdh0s8MHj5j/background.svg"
        />
        <span
          class="flex items-center h-8 font-normal text-slate-50 text-xl tracking-[0] leading-8 whitespace-nowrap"
        >
          智慧時尚
        </span>
      </NuxtLink>

      <!-- Navigation links + CTA button -->
      <nav class="inline-flex items-center gap-8 flex-shrink-0">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.label"
          :to="link.to"
          class="inline-flex flex-col items-start flex-shrink-0 bg-transparent border-none cursor-pointer p-0 no-underline"
        >
          <span
            class="flex items-center h-6 font-normal text-[15px] tracking-[0] leading-6 whitespace-nowrap"
            :class="isActive(link.to) ? 'text-white' : 'text-slate-400'"
          >
            {{ link.label }}
          </span>
        </NuxtLink>

        <!-- Contact button -->
        <NuxtLink
          to="/contact"
          class="h-auto inline-flex items-center justify-center pt-[7px] pb-[8.39px] px-6 rounded-md border-none hover:opacity-90 transition-opacity cursor-pointer no-underline"
          style="background: linear-gradient(160deg, rgba(124,58,237,1) 0%, rgba(59,130,246,1) 100%)"
        >
          <span
            class="flex items-center justify-center w-14 h-[23px] font-normal text-white text-sm text-center tracking-[0] leading-[22.4px] whitespace-nowrap"
          >
            聯絡我們
          </span>
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
const route = useRoute()

const navLinks = [
  { label: '首頁', to: '/' },
  { label: '關於我們', to: '/about' },
  { label: '服務項目', to: '/services' },
  { label: '作品案例', to: '/cases' },
  { label: '技術能力', to: '/technology' },
]

function isActive(to: string) {
  if (to === '/') return route.path === '/'
  return route.path.startsWith(to)
}
</script>
