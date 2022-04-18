<template>
  <div
    class="grid grid-cols-1 gaps-1 md:grid-cols-12"
    style="max-width: 1344px"
  >
    <div
      class="md:hidden lg:hidden"
    >
      <div class="relative overflow-auto rounded-xl p-8">
        <div
          class="dark:highlight-white/5 relative mx-auto flex max-w-sm items-center gap-6 overflow-visible rounded-xl bg-white shadow-lg ring-1 ring-black/5 dark:bg-slate-800"
        >
          <img
            class="absolute -left-6 h-24 w-24 rounded-full shadow-lg"
            src="https://user-images.githubusercontent.com/50197635/163778591-c4e40693-a932-420b-9967-1b285cc8c42e.jpeg"
          >
          <div class="flex flex-col py-5 pl-24">
            <strong class="text-sm font-medium text-slate-900 dark:text-slate-200">Vitor Soares</strong>
            <span class="text-sm font-medium text-slate-500 dark:text-slate-400">Full-Stack Developer</span>
            <span class="mt-2">
              <div>
                <a
                  href="https://github.com/instalando"
                  target="_blank"
                >
                  <i class="fa-brands fa-github text-2xl mr-3 text-slate-500 hover:text-white" />
                </a>

                <a
                  href="https://t.me/Instalando"
                  target="_blank"
                >
                  <i class="fa-brands fa-telegram text-2xl text-slate-500 hover:text-white mr-3" />
                </a>

                <a
                  href="https://www.linkedin.com/in/instalando/"
                  target="_blank"
                >
                  <i class="fa-brands fa-linkedin text-2xl text-slate-500  hover:text-white" />
                </a>
              </div>
            </span>
          </div>
        </div>
      </div>
      <div class="pointer-events-none absolute inset-0 rounded-xl border border-black/5 dark:border-white/5" />
    </div>

    <div
      class="hidden md:block md:col-span-6 lg:col-span-4"
    >
      <div class="mx-4 my-2 max-w-md overflow-hidden rounded-xl bg-white shadow-md">
        <div class="md:shrink-0">
          <img
            class="object-cover w-full aspect-[5/4]"
            src="https://user-images.githubusercontent.com/50197635/163778591-c4e40693-a932-420b-9967-1b285cc8c42e.jpeg"
          >
          <div class="p-8">
            <div class="text-2xl font-bold text-gray-900 tracking-wide">
              Vitor Soares <span class="text-base text-slate-500">(Instalando)</span>
            </div>

            <div class="mt-2 text-lg tracking-wide text-slate-500">
              Full-Stack Developer
            </div>

            <div class="mt-2">
              <div class="inline-block bg-gray-800 p-2 w-full rounded-lg">
                <div class="ml-2">
                  <a
                    href="https://github.com/instalando"
                    target="_blank"
                  >
                    <i class="fa-brands fa-github text-2xl text-gray-400 hover:text-white mr-3" />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/instalando/"
                    target="_blank"
                  >
                    <i class="fa-brands fa-linkedin text-2xl text-gray-400 hover:text-white mr-3" />
                  </a>

                  <a
                    href="https://t.me/Instalando"
                    target="_blank"
                  >
                    <i class="fa-brands fa-telegram text-2xl text-gray-400 hover:text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="md:col-span-6 lg:col-span-8 m-4">
      <div class="w-full p-8 rounded-xl bg-white shadow-md text-gray-600">
        <div class="text-lg font-semibold uppercase border-b-2">
          About me:
        </div>

        <div class="mt-2 text-slate-500">
          <p class="text-center mb-4 bg-gray-800 text-gray-400 rounded-md p-2">
            talented and lazy, I think that's how I would describe myself
          </p>
          
          <p>
            I wrote my first line of code when I was 9 years old, since then I was almost always self-taught, not knowing if being a programmer was what I really wanted for my life. in 2016 I finally decided that I would be a programmer at all costs. My first projects weren't pretty, they were a disaster. Using Laravel 5 (even the front was using Blade HTML), I managed to launch my first project in 2017 and it lasted well until 2019 (at the time I didn't even know there was Git and Github) which is still online today on Heroku servers https://japongo.herokuapp.com/
          </p>
        </div>
      </div>
    </div>
  </div>
</template>