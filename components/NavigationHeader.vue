<template>
  <div>
    <header
      class="flex w-full h-20 items-center justify-center px-20 max-lg:px-4 border-b border-[#00000014] fixed top-0 left-0 z-50 transition-all duration-500"
      :class="headerClasses"
    >
      <div class="flex w-full items-center justify-between max-lg:px-0 py-0">
        <!-- Logo -->
        <NuxtLink to="/" class="inline-flex items-center gap-3 flex-shrink-0">
          <img
            class="w-8 h-8 transition-transform duration-300 hover:rotate-12"
            alt="Background"
            src="/images/mn6tdh0s8MHj5j/background.svg"
          />
          <span
            class="flex items-center h-8 font-normal text-slate-50 text-xl tracking-[0] leading-8 whitespace-nowrap"
          >
            智慧時尚
          </span>
        </NuxtLink>

        <!-- Desktop Navigation links + CTA button -->
        <nav class="hidden lg:inline-flex items-center gap-8 flex-shrink-0">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.label"
            :to="link.to"
            class="inline-flex flex-col items-start flex-shrink-0 bg-transparent border-none cursor-pointer p-0 no-underline nav-link-hover"
          >
            <span
              class="flex items-center h-6 font-normal text-[15px] tracking-[0] leading-6 whitespace-nowrap transition-colors duration-300"
              :class="isActive(link.to) ? 'text-white' : 'text-slate-400 hover:text-slate-200'"
            >
              {{ link.label }}
            </span>
          </NuxtLink>

          <!-- Contact button -->
          <NuxtLink
            to="/contact"
            class="h-auto inline-flex items-center justify-center pt-[7px] pb-[8.39px] px-6 rounded-md border-none hover-glow cursor-pointer no-underline"
            style="background: linear-gradient(160deg, rgba(124,58,237,1) 0%, rgba(59,130,246,1) 100%)"
          >
            <span
              class="flex items-center justify-center w-14 h-[23px] font-normal text-white text-sm text-center tracking-[0] leading-[22.4px] whitespace-nowrap"
            >
              聯絡我們
            </span>
          </NuxtLink>
        </nav>

        <!-- Mobile hamburger button -->
        <button
          class="lg:hidden flex flex-col items-center justify-center w-10 h-10 bg-transparent border-none cursor-pointer p-0 gap-1.5"
          @click="mobileMenuOpen = !mobileMenuOpen"
          aria-label="Toggle menu"
        >
          <span
            class="block w-6 h-0.5 bg-white transition-all duration-300"
            :class="mobileMenuOpen ? 'rotate-45 translate-y-2' : ''"
          />
          <span
            class="block w-6 h-0.5 bg-white transition-all duration-300"
            :class="mobileMenuOpen ? 'opacity-0' : ''"
          />
          <span
            class="block w-6 h-0.5 bg-white transition-all duration-300"
            :class="mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''"
          />
        </button>
      </div>
    </header>

    <!-- Mobile menu overlay -->
    <Transition name="mobile-menu">
      <div
        v-if="mobileMenuOpen"
        class="lg:hidden fixed top-20 right-0 bg-[#0b1121] z-50 flex flex-col items-center rounded-bl-lg border-l border-b border-slate-700/50 px-6 py-5 gap-4"
      >
        <NuxtLink
          v-for="(link, index) in navLinks"
          :key="link.label"
          :to="link.to"
          class="no-underline"
          :style="{ transitionDelay: `${index * 50}ms` }"
          @click="mobileMenuOpen = false"
        >
          <span
            class="text-base font-normal tracking-[0] leading-7 transition-colors duration-300"
            :class="isActive(link.to) ? 'text-white font-medium' : 'text-slate-200 hover:text-white'"
          >
            {{ link.label }}
          </span>
        </NuxtLink>

        <NuxtLink
          to="/contact"
          class="mt-2 h-auto inline-flex items-center justify-center py-2 px-6 rounded-md border-none hover-glow cursor-pointer no-underline"
          style="background: linear-gradient(160deg, rgba(124,58,237,1) 0%, rgba(59,130,246,1) 100%)"
          @click="mobileMenuOpen = false"
        >
          <span class="font-normal text-white text-base text-center tracking-[0] leading-[22.4px] whitespace-nowrap">
            聯絡我們
          </span>
        </NuxtLink>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const mobileMenuOpen = ref(false)
const isScrolled = ref(false)

const navLinks = [
  { label: '首頁', to: '/' },
  { label: '關於我們', to: '/about' },
  { label: '作品案例', to: '/cases' },
  { label: '技術能力', to: '/technology' },
]

function isActive(to: string) {
  if (to === '/') return route.path === '/'
  return route.path.startsWith(to)
}

// Header background change on scroll
onMounted(() => {
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 50
  }
  window.addEventListener('scroll', handleScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', handleScroll))
})

const headerClasses = computed(() => {
  if (mobileMenuOpen.value) {
    return 'bg-[#0b1121]'
  }
  if (isScrolled.value) {
    return 'bg-[#0b1121]/90 backdrop-blur-[12px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12px)_brightness(100%)] shadow-lg shadow-black/10'
  }
  return 'bg-transparent backdrop-blur-[6px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(6px)_brightness(100%)]'
})

// Close menu on route change
watch(() => route.path, () => {
  mobileMenuOpen.value = false
})
</script>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
