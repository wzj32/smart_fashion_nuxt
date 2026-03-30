<template>
  <div class="bg-[#0b1121] w-full relative flex flex-col min-h-screen overflow-x-clip">
    <NavigationHeader />
    <main class="flex-1 pt-20">
      <slot />
    </main>
    <FooterSection />
  </div>
</template>
