<template>
  <section class="px-60 max-lg:px-8 max-md:px-4 py-10 border-b border-[#00000014] backdrop-blur-[5px] flex flex-col items-center self-stretch w-full">
    <div
      v-reveal="{ stagger: 150, staggerEl: ':scope > div', duration: 700 }"
      class="flex max-md:flex-wrap items-stretch justify-center gap-8 max-md:gap-4 w-full"
    >
      <div
        v-for="(stat, index) in statisticsData"
        :key="index"
        class="group relative flex flex-col items-center justify-center gap-2 flex-1 max-md:basis-[calc(50%-0.5rem)] max-md:flex-grow-0 rounded-[10px] py-6 px-4 hover-lift transition-all duration-300"
        :style="{ background: hoveredIndex === index ? 'linear-gradient(136deg, rgba(82,85,238,0.64) 0%, rgba(148,163,184,0.16) 100%)' : stat.cardBg }"
        @mouseenter="hoveredIndex = index"
        @mouseleave="hoveredIndex = -1"
      >
        <!-- Gradient border overlay -->
        <div
          class="absolute inset-0 rounded-[10px] pointer-events-none z-[1]"
          style="padding: 1px; background: linear-gradient(180deg, rgba(226,232,240,0.6) 0%, rgba(148,163,184,0.12) 100%); -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude;"
        />

        <!-- Icon image -->
        <div class="flex flex-col items-center w-full">
          <img class="w-[100px] h-[100px] max-md:w-16 max-md:h-16 object-contain transition-transform duration-300 group-hover:scale-110" :alt="stat.imgAlt" :src="stat.imgSrc" />

          <!-- Stat number with count-up -->
          <div
            :ref="(el) => { if (el) statRefs[index] = el as HTMLElement }"
            class="flex items-center justify-center h-[59px] font-normal text-5xl max-md:text-3xl text-center tracking-[0] leading-normal text-transparent"
            style="background-image: linear-gradient(180deg, rgba(248,250,252,1) 0%, rgba(148,163,184,1) 100%); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;"
          >
            {{ statDisplayValues[index] }}
          </div>
        </div>

        <!-- Label -->
        <div class="flex flex-col items-center pb-0.5 w-full">
          <div class="flex items-center justify-center h-5 font-normal text-cyan-500 text-base max-md:text-sm text-center tracking-[0] leading-normal">
            {{ stat.label }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const statisticsData = [
  {
    value: 12,
    suffix: '+',
    label: '年開發經驗',
    imgSrc: '/images/mn5gtr03DZ8elR/mask-group.png',
    imgAlt: 'Mask group',
    cardBg: 'linear-gradient(136deg, rgba(148,163,184,0.16) 0%, rgba(148,163,184,0.04) 100%)',
  },
  {
    value: 100,
    suffix: '+',
    label: '完成專案',
    imgSrc: '/images/mn5gtr03DZ8elR/mask-group-1.png',
    imgAlt: 'Mask group',
    cardBg: 'linear-gradient(136deg, rgba(148,163,184,0.16) 0%, rgba(148,163,184,0.04) 100%)',
  },
  {
    value: 200,
    suffix: '+',
    label: '服務客戶',
    imgSrc: '/images/mn5gtr03DZ8elR/mask-group-2.png',
    imgAlt: 'Mask group',
    cardBg: 'linear-gradient(136deg, rgba(148,163,184,0.16) 0%, rgba(148,163,184,0.04) 100%)',
  },
  {
    value: 50,
    suffix: '+',
    label: '團隊成員',
    imgSrc: '/images/mn5gtr03DZ8elR/mask-group-3.png',
    imgAlt: 'Mask group',
    cardBg: 'linear-gradient(136deg, rgba(148,163,184,0.16) 0%, rgba(148,163,184,0.04) 100%)',
  },
]

const hoveredIndex = ref(-1)
const statRefs = ref<HTMLElement[]>([])
const statDisplayValues = ref(statisticsData.map(s => '0' + s.suffix))
const hasAnimated = ref(false)

onMounted(() => {
  const firstRef = statRefs.value[0]
  if (!firstRef) return

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated.value) {
          hasAnimated.value = true
          animateAllCounts()
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.3 }
  )

  observer.observe(firstRef)
})

function animateAllCounts() {
  const duration = 2000
  const startTime = performance.now()

  function update(currentTime: number) {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)

    statisticsData.forEach((stat, index) => {
      const current = Math.round(eased * stat.value)
      statDisplayValues.value[index] = current + stat.suffix
    })

    if (progress < 1) {
      requestAnimationFrame(update)
    }
  }

  requestAnimationFrame(update)
}
</script>
