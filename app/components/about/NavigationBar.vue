<script setup lang="ts">
const navLinks = [
  { label: '首頁' },
  { label: '關於我們' },
  { label: '服務項目' },
  { label: '作品案例' },
  { label: '技術能力' },
]

const activeLink = ref('關於我們')
</script>

<template>
  <header class="flex w-full h-20 items-center justify-center bg-transparent backdrop-blur-[6px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(6px)_brightness(100%)]">
    <div class="flex w-full max-w-screen-xl items-center justify-between px-6 py-0">
      <!-- Logo -->
      <div class="items-center gap-3 inline-flex flex-[0_0_auto]">
        <img
          class="w-8 h-8"
          alt="Background"
          src="https://c.animaapp.com/mn69fej5o9rxxH/img/background.svg"
        >
        <span class="flex items-center w-20 h-8 font-normal text-slate-50 text-xl tracking-[0] leading-8 whitespace-nowrap">
          智慧時尚
        </span>
      </div>

      <!-- Navigation links + CTA button -->
      <nav class="inline-flex items-center gap-8 flex-[0_0_auto]">
        <button
          v-for="link in navLinks"
          :key="link.label"
          class="inline-flex flex-col items-start flex-[0_0_auto] bg-transparent border-none cursor-pointer p-0"
          @click="activeLink = link.label"
        >
          <span
            class="flex items-center h-6 font-normal text-[15px] tracking-[0] leading-6 whitespace-nowrap"
            :class="activeLink === link.label ? 'text-white' : 'text-slate-400'"
          >
            {{ link.label }}
          </span>
        </button>

        <!-- CTA Button -->
        <button class="h-auto items-center justify-center pt-[7px] pb-[8.39px] px-6 rounded-md bg-[linear-gradient(160deg,rgba(124,58,237,1)_0%,rgba(59,130,246,1)_100%)] border-none cursor-pointer hover:opacity-90 inline-flex">
          <span class="flex items-center justify-center w-14 h-[23px] font-normal text-white text-sm text-center tracking-[0] leading-[22.4px] whitespace-nowrap">
            聯絡我們
          </span>
        </button>
      </nav>
    </div>
  </header>
</template>
