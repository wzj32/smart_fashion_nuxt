<template>
  <section class="gap-[60px] max-md:gap-8 px-20 max-lg:px-8 max-md:px-4 py-[60px] max-md:py-8 bg-[#0b1121] flex flex-col items-center self-stretch w-full overflow-hidden">
    <!-- Row 1 - scrolling left -->
    <div class="relative w-full max-w-screen-xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div class="flex items-center gap-10 max-md:gap-4 py-0 opacity-60 animate-logo-scroll" style="--scroll-duration: 25s; width: max-content;">
        <div
          v-for="(item, index) in [...row1Items, ...row1Items]"
          :key="`row1-${index}`"
          class="flex h-[62px] max-md:h-[48px] items-center justify-center gap-2 relative rounded-[50px] flex-shrink-0 transition-opacity duration-300 hover:opacity-100"
          :class="[item.width, item.borderClass]"
        >
          <img v-if="item.icon" class="relative flex-[0_0_auto]" alt="Iconify icon" :src="item.icon" />
          <div class="relative flex items-center h-6" :class="item.textClass">{{ item.label }}</div>
        </div>
      </div>
    </div>

    <!-- Row 2 - scrolling right -->
    <div class="relative w-full max-w-screen-xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div class="flex items-center gap-10 max-md:gap-4 py-0 opacity-60 animate-logo-scroll" style="--scroll-duration: 30s; width: max-content; animation-direction: reverse;">
        <div
          v-for="(item, index) in [...row2Items, ...row2Items]"
          :key="`row2-${index}`"
          class="flex h-[62px] max-md:h-[48px] items-center justify-center gap-2 relative rounded-[50px] flex-shrink-0 transition-opacity duration-300 hover:opacity-100"
          :class="[item.width, item.borderClass]"
        >
          <img v-if="item.icon" class="relative flex-[0_0_auto]" alt="Iconify icon" :src="item.icon" />
          <div class="relative flex items-center h-6" :class="item.textClass">{{ item.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface BadgeItem {
  label: string
  icon: string | null
  width: string
  textClass: string
  borderClass: string
}

const solidBorder = 'border border-solid border-slate-200'
const gradientBorderLeft = 'border-[none] relative before:content-[\'\'] before:absolute before:inset-0 before:p-px before:rounded-[50px] before:[background:linear-gradient(90deg,rgba(16,22,37,1)_0%,rgba(226,232,240,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none'
const gradientBorderRight = 'border-[none] relative before:content-[\'\'] before:absolute before:inset-0 before:p-px before:rounded-[50px] before:[background:linear-gradient(90deg,rgba(226,232,240,1)_0%,rgba(16,22,37,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none'

const gradientTextLeft = 'bg-[linear-gradient(90deg,rgba(16,22,37,1)_0%,rgba(255,255,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] font-normal text-transparent text-xl max-md:text-base tracking-[0] leading-normal whitespace-nowrap'
const gradientTextRight = 'bg-[linear-gradient(90deg,rgba(255,255,255,1)_0%,rgba(16,22,37,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] font-normal text-transparent text-xl max-md:text-base tracking-[0] leading-normal whitespace-nowrap'
const plainText = 'font-normal text-white text-xl max-md:text-base tracking-[0] leading-normal whitespace-nowrap'

const row1Items: BadgeItem[] = [
  { label: 'POYA 寶雅', icon: null, width: 'w-[162px] max-md:w-[120px]', textClass: gradientTextLeft, borderClass: gradientBorderLeft },
  { label: '日藥本舖', icon: null, width: 'w-[162px] max-md:w-[120px]', textClass: gradientTextLeft, borderClass: gradientBorderLeft },
  { label: '欣漾生醫', icon: '/images/mn5gtr03DZ8elR/iconify-icon-1.svg', width: 'w-[162px] max-md:w-[120px]', textClass: plainText, borderClass: solidBorder },
  { label: '台新銀行', icon: '/images/mn5gtr03DZ8elR/iconify-icon.svg', width: 'w-[162px] max-md:w-[120px]', textClass: plainText, borderClass: solidBorder },
  { label: '遠傳電信', icon: '/images/mn5gtr03DZ8elR/iconify-icon-6.svg', width: 'w-[162px] max-md:w-[120px]', textClass: gradientTextRight, borderClass: gradientBorderRight },
  { label: '台新銀行', icon: '/images/mn5gtr03DZ8elR/iconify-icon.svg', width: 'w-[162px] max-md:w-[120px]', textClass: gradientTextRight, borderClass: gradientBorderRight },
]

const row2Items: BadgeItem[] = [
  { label: 'POYA 寶雅寶貝', icon: null, width: 'w-[211px] max-md:w-[150px]', textClass: gradientTextLeft, borderClass: gradientBorderLeft },
  { label: '日藥本舖藥業', icon: null, width: 'w-48 max-md:w-[130px]', textClass: gradientTextLeft, borderClass: gradientBorderLeft },
  { label: '欣漾生醫', icon: '/images/mn5gtr03DZ8elR/iconify-icon-1.svg', width: 'w-[162px] max-md:w-[120px]', textClass: plainText, borderClass: solidBorder },
  { label: '台新銀行', icon: '/images/mn5gtr03DZ8elR/iconify-icon.svg', width: 'w-[162px] max-md:w-[120px]', textClass: plainText, borderClass: solidBorder },
  { label: '遠傳電信', icon: '/images/mn5gtr03DZ8elR/iconify-icon-6.svg', width: 'w-[162px] max-md:w-[120px]', textClass: gradientTextRight, borderClass: gradientBorderRight },
  { label: '台新銀行', icon: '/images/mn5gtr03DZ8elR/iconify-icon.svg', width: 'w-[162px] max-md:w-[120px]', textClass: gradientTextRight, borderClass: gradientBorderRight },
]
</script>
