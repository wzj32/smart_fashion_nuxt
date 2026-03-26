<template>
  <section class="gap-[60px] px-36 py-[60px] bg-[#0b1121] flex flex-col items-start self-stretch w-full">
    <!-- Row 1 -->
    <div class="flex items-center gap-10 py-0 self-stretch w-full opacity-60 overflow-hidden">
      <div
        v-for="(item, index) in row1Items"
        :key="`row1-${index}`"
        class="flex h-[62px] items-center justify-center gap-2 relative rounded-[50px] flex-shrink-0"
        :class="[item.width, item.borderClass]"
      >
        <img v-if="item.icon" class="relative flex-[0_0_auto]" alt="Iconify icon" :src="item.icon" />
        <div class="relative flex items-center h-6" :class="item.textClass">{{ item.label }}</div>
      </div>
    </div>

    <!-- Row 2 -->
    <div class="flex items-center gap-10 py-0 self-stretch w-full opacity-60 overflow-hidden">
      <div
        v-for="(item, index) in row2Items"
        :key="`row2-${index}`"
        class="flex h-[62px] items-center justify-center gap-2 relative rounded-[50px] flex-shrink-0"
        :class="[item.width, item.borderClass]"
      >
        <img v-if="item.icon" class="relative flex-[0_0_auto]" alt="Iconify icon" :src="item.icon" />
        <div class="relative flex items-center h-6" :class="item.textClass">{{ item.label }}</div>
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

const gradientTextLeft = 'bg-[linear-gradient(90deg,rgba(16,22,37,1)_0%,rgba(255,255,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] font-normal text-transparent text-xl tracking-[0] leading-normal whitespace-nowrap'
const gradientTextRight = 'bg-[linear-gradient(90deg,rgba(255,255,255,1)_0%,rgba(16,22,37,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] font-normal text-transparent text-xl tracking-[0] leading-normal whitespace-nowrap'
const plainText = 'font-normal text-white text-xl tracking-[0] leading-normal whitespace-nowrap'

const row1Items: BadgeItem[] = [
  { label: 'POYA 寶雅', icon: null, width: 'w-[162px]', textClass: gradientTextLeft, borderClass: gradientBorderLeft },
  { label: '日藥本舖', icon: null, width: 'w-[162px]', textClass: gradientTextLeft, borderClass: gradientBorderLeft },
  { label: '欣漾生醫', icon: 'https://c.animaapp.com/mn5gtr03DZ8elR/img/iconify-icon-1.svg', width: 'w-[162px]', textClass: plainText, borderClass: solidBorder },
  { label: '台新銀行', icon: 'https://c.animaapp.com/mn5gtr03DZ8elR/img/iconify-icon.svg', width: 'w-[162px]', textClass: plainText, borderClass: solidBorder },
  { label: '遠傳電信', icon: 'https://c.animaapp.com/mn5gtr03DZ8elR/img/iconify-icon-6.svg', width: 'w-[162px]', textClass: gradientTextRight, borderClass: gradientBorderRight },
  { label: '台新銀行', icon: 'https://c.animaapp.com/mn5gtr03DZ8elR/img/iconify-icon.svg', width: 'w-[162px]', textClass: gradientTextRight, borderClass: gradientBorderRight },
]

const row2Items: BadgeItem[] = [
  { label: 'POYA 寶雅寶貝', icon: null, width: 'w-[211px]', textClass: gradientTextLeft, borderClass: gradientBorderLeft },
  { label: '日藥本舖藥業', icon: null, width: 'w-48', textClass: gradientTextLeft, borderClass: gradientBorderLeft },
  { label: '欣漾生醫', icon: 'https://c.animaapp.com/mn5gtr03DZ8elR/img/iconify-icon-1.svg', width: 'w-[162px]', textClass: plainText, borderClass: solidBorder },
  { label: '台新銀行', icon: 'https://c.animaapp.com/mn5gtr03DZ8elR/img/iconify-icon.svg', width: 'w-[162px]', textClass: plainText, borderClass: solidBorder },
  { label: '遠傳電信', icon: 'https://c.animaapp.com/mn5gtr03DZ8elR/img/iconify-icon-6.svg', width: 'w-[162px]', textClass: gradientTextRight, borderClass: gradientBorderRight },
  { label: '台新銀行', icon: 'https://c.animaapp.com/mn5gtr03DZ8elR/img/iconify-icon.svg', width: 'w-[162px]', textClass: gradientTextRight, borderClass: gradientBorderRight },
]
</script>
