<template>
  <section class="px-20 max-lg:px-8 max-md:px-4 py-[60px] max-md:py-8 bg-[#0b1121] flex flex-col items-center self-stretch w-full overflow-hidden">
    <div class="flex flex-col gap-[60px] max-md:gap-8 w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <!-- Row 1 - scrolling left -->
      <div class="relative w-full overflow-hidden">
        <div
          class="flex items-center gap-10 max-md:gap-4 py-0 animate-logo-scroll"
          :style="{ '--scroll-duration': '25s', width: 'max-content', animationPlayState: row1Active !== null ? 'paused' : 'running' }"
        >
          <div
            v-for="(item, index) in [...row1Items, ...row1Items]"
            :key="`row1-${index}`"
            class="flex h-[62px] max-md:h-[48px] items-center justify-center gap-2 relative rounded-[50px] flex-shrink-0 transition-all duration-300 cursor-default"
            :class="[
              item.width,
              row1Active !== null && row1Active === index % row1Items.length
                ? 'logo-active ' + item.borderClass
                : row1Active !== null
                  ? 'opacity-25 ' + item.borderClass
                  : 'opacity-60 ' + item.borderClass
            ]"
            @mouseenter="row1Active = index % row1Items.length"
            @mouseleave="row1Active = null"
          >
            <img v-if="item.icon" class="relative flex-[0_0_auto]" alt="Iconify icon" :src="item.icon" />
            <div class="relative flex items-center h-6" :class="item.textClass">{{ item.label }}</div>
          </div>
        </div>
      </div>

      <!-- Row 2 - scrolling right -->
      <div class="relative w-full overflow-hidden">
        <div
          class="flex items-center gap-10 max-md:gap-4 py-0 animate-logo-scroll"
          :style="{ '--scroll-duration': '30s', width: 'max-content', animationDirection: 'reverse', animationPlayState: row2Active !== null ? 'paused' : 'running' }"
        >
          <div
            v-for="(item, index) in [...row2Items, ...row2Items]"
            :key="`row2-${index}`"
            class="flex h-[62px] max-md:h-[48px] items-center justify-center gap-2 relative rounded-[50px] flex-shrink-0 transition-all duration-300 cursor-default"
            :class="[
              item.width,
              row2Active !== null && row2Active === index % row2Items.length
                ? 'logo-active ' + item.borderClass
                : row2Active !== null
                  ? 'opacity-25 ' + item.borderClass
                  : 'opacity-60 ' + item.borderClass
            ]"
            @mouseenter="row2Active = index % row2Items.length"
            @mouseleave="row2Active = null"
          >
            <img v-if="item.icon" class="relative flex-[0_0_auto]" alt="Iconify icon" :src="item.icon" />
            <div class="relative flex items-center h-6" :class="item.textClass">{{ item.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface BadgeItem {
  label: string
  icon: string | null
  width: string
  textClass: string
  borderClass: string
}

const borderClass = 'border border-solid border-slate-200'
const textClass = 'font-normal text-white text-xl max-md:text-base tracking-[0] leading-normal whitespace-nowrap'

const row1Items: BadgeItem[] = [
  { label: 'POYA 寶雅', icon: null, width: 'w-[162px] max-md:w-[120px]', textClass, borderClass },
  { label: '日藥本舖', icon: null, width: 'w-[162px] max-md:w-[120px]', textClass, borderClass },
  { label: '欣漾生醫', icon: '/images/mn5gtr03DZ8elR/iconify-icon-1.svg', width: 'w-[162px] max-md:w-[120px]', textClass, borderClass },
  { label: '台新銀行', icon: '/images/mn5gtr03DZ8elR/iconify-icon.svg', width: 'w-[162px] max-md:w-[120px]', textClass, borderClass },
  { label: '遠傳電信', icon: '/images/mn5gtr03DZ8elR/iconify-icon-6.svg', width: 'w-[162px] max-md:w-[120px]', textClass, borderClass },
  { label: '台新銀行', icon: '/images/mn5gtr03DZ8elR/iconify-icon.svg', width: 'w-[162px] max-md:w-[120px]', textClass, borderClass },
]

const row2Items: BadgeItem[] = [
  { label: 'POYA 寶雅寶貝', icon: null, width: 'w-[211px] max-md:w-[150px]', textClass, borderClass },
  { label: '日藥本舖藥業', icon: null, width: 'w-48 max-md:w-[130px]', textClass, borderClass },
  { label: '欣漾生醫', icon: '/images/mn5gtr03DZ8elR/iconify-icon-1.svg', width: 'w-[162px] max-md:w-[120px]', textClass, borderClass },
  { label: '台新銀行', icon: '/images/mn5gtr03DZ8elR/iconify-icon.svg', width: 'w-[162px] max-md:w-[120px]', textClass, borderClass },
  { label: '遠傳電信', icon: '/images/mn5gtr03DZ8elR/iconify-icon-6.svg', width: 'w-[162px] max-md:w-[120px]', textClass, borderClass },
  { label: '台新銀行', icon: '/images/mn5gtr03DZ8elR/iconify-icon.svg', width: 'w-[162px] max-md:w-[120px]', textClass, borderClass },
]

const row1Active = ref<number | null>(null)
const row2Active = ref<number | null>(null)
</script>

<style scoped>
.logo-active {
  opacity: 1;
  border-color: rgba(255, 255, 255, 1) !important;
  color: #fff;
}
</style>
