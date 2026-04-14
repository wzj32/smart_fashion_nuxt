<script setup lang="ts">
const contactInfoItems = [
  {
    icon: '/images/mn6wtbljcCQQNA/overlay-border-1.svg',
    title: '電話諮詢',
    detail: '02-2331-2909',
    subDetail: '週一至週五 09:30 - 18:30',
    hasSubDetail: true,
  },
  {
    icon: '/images/mn6wtbljcCQQNA/overlay-border.svg',
    title: '公司地址',
    detail: '臺北市大安區信義路4段296號15樓',
    hasSubDetail: false,
  },
  {
    icon: '/images/mn6wtbljcCQQNA/overlay-border-2.svg',
    title: '電子郵件',
    detail: 'service@hising.com.tw',
    hasSubDetail: false,
  },
]

const socialButtons = [
  {
    icon: '/images/mn6wtbljcCQQNA/iconify-icon-2.svg',
    label: 'LINE 官方帳號',
  },
  {
    icon: '/images/mn6wtbljcCQQNA/iconify-icon.svg',
    label: 'LinkedIn',
  },
]

const form = reactive({
  name: '',
  email: '',
  company: '',
  budget: '',
  description: '',
})

function handleSubmit() {
  // TODO: handle form submission
  console.log('Form submitted:', form)
}
</script>

<template>
  <section class="flex flex-col w-full items-start px-60 max-lg:px-8 max-md:px-4 py-0">
    <!-- Header section -->
    <div
      class="flex flex-col items-center gap-[14.9px] pt-[79px] max-md:pt-10 pb-[60px] max-md:pb-8 px-0 relative self-stretch w-full"
    >
      <!-- Decorative background image -->
      <img
        class="absolute top-0 right-0 w-[400px] h-[400px] max-md:w-[200px] max-md:h-[200px] object-cover pointer-events-none opacity-60"
        alt="Decorative wave"
        src="/images/mn6wtbljcCQQNA/image-22.png"
      />

      <!-- Title -->
      <div
        v-reveal="{ direction: 'up', delay: 200, duration: 1000 }"
        class="items-center pt-0 pb-[0.8px] px-0 relative self-stretch flex-[0_0_auto] flex flex-col w-full z-10"
      >
        <h1
          class="flex items-center justify-center h-[77px] max-md:h-auto bg-[linear-gradient(90deg,rgba(82,85,238,1)_0%,rgba(255,255,255,1)_55%,rgba(60,180,217,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] font-semibold text-5xl max-lg:text-4xl max-md:text-3xl text-center tracking-[-0.96px] leading-[76.8px] max-md:leading-normal whitespace-nowrap max-md:whitespace-normal"
        >
          開始您的 AI 轉型之旅
        </h1>
      </div>

      <!-- Subtitle -->
      <div
        v-reveal="{ direction: 'up', delay: 400, duration: 800 }"
        class="flex flex-col max-w-[600px] items-center pt-0 pb-[0.69px] px-0 relative flex-[0_0_auto] z-10"
      >
        <p class="text-lg max-md:text-base text-center leading-[28.8px] font-normal text-slate-400 tracking-[0]">
          無論是專案開發、系統升級或技術諮詢，我們隨時準備為您服務。請填寫下方表單，我們將在 24 小時內與您聯繫。
        </p>
      </div>
    </div>

    <!-- Main content: left info + right form -->
    <div class="flex max-lg:flex-col items-start justify-center gap-20 max-lg:gap-10 relative self-stretch w-full flex-[0_0_auto]">
      <!-- Left column: contact info -->
      <div
        v-reveal="{ stagger: 150, staggerEl: ':scope > div:not(.divider)', duration: 700, direction: 'left', distance: '30px' }"
        class="flex flex-col w-[428px] max-lg:w-full items-start gap-8 relative self-stretch"
      >
        <!-- Contact info items -->
        <div
          v-for="(item, index) in contactInfoItems"
          :key="index"
          class="relative self-stretch w-full flex items-start gap-4 min-h-[54px]"
        >
          <img class="w-12 h-12 flex-shrink-0" alt="Overlay border" :src="item.icon" />
          <div class="flex flex-col items-start gap-1 flex-1">
            <span class="font-medium text-slate-50 text-base tracking-[0] leading-[25.6px] whitespace-nowrap">
              {{ item.title }}
            </span>
            <span class="font-normal text-slate-400 text-[15px] tracking-[0] leading-6 whitespace-nowrap max-md:whitespace-normal">
              {{ item.detail }}
            </span>
            <span
              v-if="item.hasSubDetail && item.subDetail"
              class="opacity-70 font-normal text-slate-400 text-[13px] tracking-[0] leading-[20.8px] whitespace-nowrap"
            >
              {{ item.subDetail }}
            </span>
          </div>
        </div>

        <!-- Divider -->
        <div class="divider flex flex-col items-start px-0 py-2 relative self-stretch w-full">
          <hr class="w-full border-t border-[#ffffff20]" />
        </div>

        <!-- Follow us section -->
        <div class="flex flex-col items-start gap-4 pt-[15px] px-0 relative self-stretch w-full flex-[0_0_auto]">
          <span class="font-medium text-slate-50 text-base tracking-[0] leading-[25.6px]">
            追蹤我們
          </span>

          <div class="flex items-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
            <button
              v-for="(btn, index) in socialButtons"
              :key="index"
              class="h-auto flex items-center gap-2 px-4 py-2 bg-cyan-500 rounded-md border border-solid border-[#00000014] flex-1 cursor-pointer transition-all duration-300 hover:bg-cyan-400 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <img class="w-5 h-5 flex-shrink-0" alt="Social icon" :src="btn.icon" />
              <span class="font-medium text-slate-50 text-sm tracking-[0] leading-[22.4px] whitespace-nowrap">
                {{ btn.label }}
              </span>
            </button>
          </div>
        </div>
      </div>

      <!-- Right column: contact form -->
      <div
        v-reveal="{ direction: 'right', delay: 200, duration: 800, distance: '40px' }"
        class="flex-1 max-lg:w-full bg-[#ffffff0d] rounded-lg border border-solid border-[#00000014] self-stretch"
      >
        <form
          class="flex flex-col items-start gap-[23px] pt-[39px] pb-14 max-md:pb-8 px-10 max-md:px-4"
          @submit.prevent="handleSubmit"
        >
          <!-- Name + Email row -->
          <div class="flex max-md:flex-col items-start justify-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
            <!-- Name field -->
            <div class="flex flex-col items-start gap-2 relative flex-1 max-md:w-full self-stretch grow">
              <div class="flex items-center gap-1">
                <label class="font-normal text-slate-50 text-sm tracking-[0] leading-[22.4px] whitespace-nowrap">
                  您的姓名
                </label>
                <span class="font-medium text-red-500 text-sm leading-[22.4px]">*</span>
              </div>
              <input
                v-model="form.name"
                required
                class="h-[50px] bg-[#0f1724] border border-solid border-[#00000014] rounded-md text-slate-50 w-full px-3 outline-none transition-all duration-300 focus:ring-1 focus:ring-purple-500 focus:border-purple-500/50"
              />
            </div>

            <!-- Email field -->
            <div class="flex flex-col items-start gap-2 relative flex-1 max-md:w-full self-stretch grow">
              <div class="flex items-center gap-1">
                <label class="font-medium text-slate-50 text-sm tracking-[0] leading-[22.4px] whitespace-nowrap">
                  聯絡 Email
                </label>
                <span class="font-medium text-red-500 text-sm leading-[22.4px]">*</span>
              </div>
              <input
                v-model="form.email"
                type="email"
                required
                class="h-[50px] bg-[#0f1724] border border-solid border-[#00000014] rounded-md text-slate-50 w-full px-3 outline-none transition-all duration-300 focus:ring-1 focus:ring-purple-500 focus:border-purple-500/50"
              />
            </div>
          </div>

          <!-- Company name field -->
          <div class="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
            <div class="flex items-center gap-1">
              <label class="font-normal text-slate-50 text-sm tracking-[0] leading-[22.4px] whitespace-nowrap">
                公司名稱
              </label>
              <span class="font-medium text-slate-400 text-sm tracking-[0] leading-[22.4px] whitespace-nowrap">
                (選填)
              </span>
            </div>
            <input
              v-model="form.company"
              class="h-[50px] bg-[#0f1724] border border-solid border-[#00000014] rounded-md text-slate-50 w-full px-3 outline-none transition-all duration-300 focus:ring-1 focus:ring-purple-500 focus:border-purple-500/50"
            />
          </div>

          <!-- Budget range field -->
          <div class="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
            <div class="flex items-center gap-1">
              <label class="font-normal text-slate-50 text-sm tracking-[0] leading-[22.4px] whitespace-nowrap">
                預算區間
              </label>
              <span class="font-medium text-slate-400 text-sm tracking-[0] leading-[22.4px] whitespace-nowrap">
                (選填)
              </span>
            </div>
            <select
              v-model="form.budget"
              class="h-[50px] bg-[#0f1724] border border-solid border-[#00000014] rounded-md text-slate-400 w-full px-3 text-[15px] outline-none transition-all duration-300 focus:ring-1 focus:ring-purple-500 focus:border-purple-500/50 appearance-none cursor-pointer"
            >
              <option value="" disabled>請選擇專案預算範圍</option>
              <option value="under-100k">100,000 以下</option>
              <option value="100k-500k">100,000 - 500,000</option>
              <option value="500k-1m">500,000 - 1,000,000</option>
              <option value="over-1m">1,000,000 以上</option>
            </select>
          </div>

          <!-- Description field -->
          <div class="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
            <div class="flex items-center gap-1">
              <label class="font-normal text-slate-50 text-sm tracking-[0] leading-[22.4px] whitespace-nowrap">
                需求簡述
              </label>
              <span class="font-medium text-red-500 text-sm leading-[22.4px]">*</span>
            </div>
            <textarea
              v-model="form.description"
              required
              class="h-[120px] bg-[#0f1724] border border-solid border-[#00000014] rounded-md text-slate-50 w-full px-3 py-2 resize-none outline-none transition-all duration-300 focus:ring-1 focus:ring-purple-500 focus:border-purple-500/50"
            />
          </div>

          <!-- Submit button -->
          <button
            type="submit"
            class="h-auto flex items-center justify-center gap-2 pt-[18px] pb-[17.5px] px-4 relative self-stretch w-full flex-[0_0_auto] rounded-md bg-[linear-gradient(175deg,rgba(124,58,237,1)_0%,rgba(59,130,246,1)_100%)] hover-glow border-0 cursor-pointer"
          >
            <span class="font-medium text-white text-base text-center tracking-[0] leading-[normal] whitespace-nowrap">
              送出詢問
            </span>
            <img
              class="w-[18px] h-[18px]"
              alt="Send"
              src="/images/mn6wtbljcCQQNA/svg.svg"
            />
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
