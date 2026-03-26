<template>
  <div class="bg-[#0b1121] w-full min-w-[1440px] relative flex flex-col min-h-screen">
    <NavigationHeader />
    <main class="flex-1">
      <slot />
    </main>
    <FooterSection />
  </div>
</template>
