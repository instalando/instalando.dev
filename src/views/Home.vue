<template>
  <div class="grid grid-cols-1 md:grid-cols-12">
    <div class="md:hidden">
      <div
        style="background-position: 10px 10px;"
        class="bg-grid-slate-100 dark:bg-grid-slate-700/25 absolute inset-0 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"
      />
      <div class="relative overflow-auto rounded-xl p-8">
        <div class="dark:highlight-white/5 relative mx-auto flex max-w-sm items-center gap-6 overflow-visible rounded-xl bg-white shadow-lg ring-1 ring-black/5 dark:bg-slate-800">
          <img
            class="absolute -left-6 h-24 w-24 rounded-full shadow-lg"
            src="https://user-images.githubusercontent.com/50197635/163778591-c4e40693-a932-420b-9967-1b285cc8c42e.jpeg"
          >
          <div class="flex flex-col py-5 pl-24">
            <strong class="text-sm font-medium text-slate-900 dark:text-slate-200">Vitor Soares</strong>
            <span class="text-sm font-medium text-slate-500 dark:text-slate-400">Full-Stack Developer</span>
          </div>
        </div>
      </div>
      <div class="pointer-events-none absolute inset-0 rounded-xl border border-black/5 dark:border-white/5" />
    </div>
    
    <div class="hidden md:block md:col-span-6 lg:col-span-4">
      <div class="mx-4 my-2 max-w-md overflow-hidden rounded-xl bg-white shadow-md">
        <div
          class="md:shrink-0"
        >
          <img
            class="object-cover w-full aspect-[5/4]"
            src="https://user-images.githubusercontent.com/50197635/163778591-c4e40693-a932-420b-9967-1b285cc8c42e.jpeg"
          >
          <div class="p-8">
            <div
              class="text-2xl font-bold text-gray-900 tracking-wide"
            >
              Vitor Soares <span class="text-base text-slate-500">(Instalando)</span>
            </div>

            <div class="mt-2 text-lg tracking-wide text-slate-500">
              Full-Stack Developer
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="md:col-span-6 lg:col-span-8">
      <!-- WIP -->
    </div>
  </div>
</template>