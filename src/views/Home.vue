<template>
  <div
    class="grid grid-cols-1 gaps-1 md:grid-cols-12 mx-auto"
    style="max-width: 1344px"
  >
    <div class="md:hidden lg:hidden">
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

    <div class="hidden md:block md:col-span-6 lg:col-span-4">
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
          Sobre mim:
        </div>

        <div class="mt-2 text-slate-500">
          <p class="text-center mb-4 bg-gray-800 text-gray-400 rounded-md p-2">
            talentoso e preguiçoso, assim me descreveria.
          </p>

          <p class="mt-3">
            Escrevi minha primeira linha de código com 9 anos de idade,
            desde então segui autodidata quase sempre sem saber se ser programador era o que realmente eu queria para a
            minha vida e em 2016 finalmente decidi que iria ser programador a todo custo.
          </p>

          <p class="mt-3">
            Meus primeiros projetos não foram nada bonitos, foram um desastre para falar a verdade, comecei
            criando páginas que imitavam o jogo Habbo em 2011/2012, incrivelmente eu me divertia bastante
            desenvolvendo essas páginas utilizando apenas HTML e CSS.
          </p>

          <p class="mt-3">
            No tempo que eu brincava com o jogo Habbo e suas versões piratas eu pouco a pouco comecei a me envolver com
            PHP devidamente as comuns "CMS" desse jogo que existiam gratuitamente na internet e isto me fez criar um
            grande carinho pelo PHP.
          </p>

          <p class="mt-3">
            Nos anos seguintes eu comecei a brincar em criar páginas semelhantes ao estilo do Tibia e Poketibia, só que
            desta vez utilizava PHP para fazer a lógica de Login, criação de personagens e sistema de "Premium Account".
          </p>
        </div>
      </div>
    </div>
  </div>
</template>