<script setup lang="ts">

const skills = {
  frontend: [
    'https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white',
    'https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white',
    'https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E',
    'https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white',
    'https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D',
    'https://img.shields.io/badge/Vuetify-1867C0?style=for-the-badge&logo=vuetify&logoColor=AEDDFF',
    'https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white',
    'https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white',
    'https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white'
  ],
  backend: [
    'https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white',
    'https://img.shields.io/badge/elixir-%234B275F.svg?style=for-the-badge&logo=elixir&logoColor=white',
    'https://img.shields.io/badge/go-%2300ADD8.svg?style=for-the-badge&logo=go&logoColor=white',
    'https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54',
    'https://img.shields.io/badge/laravel-%23FF2D20.svg?style=for-the-badge&logo=laravel&logoColor=white',
    'https://img.shields.io/badge/fastify-%23000000.svg?style=for-the-badge&logo=fastify&logoColor=white',
    'https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white',
    'https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=mariadb&logoColor=white',
    'https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white',
    'https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white',
    'https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white'
  ],
  devops: [
    'https://img.shields.io/badge/terraform-%235835CC.svg?style=for-the-badge&logo=terraform&logoColor=white',
    'https://img.shields.io/badge/Packer-1DAEFF?style=for-the-badge&logo=packer&logoColor=white',
    'https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white',
    'https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=Cloudflare&logoColor=white',
    'https://img.shields.io/badge/DigitalOcean-%230167ff.svg?style=for-the-badge&logo=digitalOcean&logoColor=white'
  ],
  tools: [
    'https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white',
    'https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white'
  ]
}

</script>

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
          <p class="mt-3">
            Olá! Me chamo Vitor, mas aqui na internet as pessoas me conhecem por Instalando.
          </p>

          <p class="mt-3">
            Atualmente moro no Rio Grande do Sul, Brasil. E meu trabalho atual é consertar bugs.
            No meu tempo livre, costumo desenvolver projetos de código aberto, ao qual você pode acessar facilmente na aba de navegação acima =D
          </p>
        </div>

        <div class="text-lg mt-4 font-semibold uppercase border-b-2">
          Linguagens e ferramentas
        </div>

        <p class="text-center mt-2 bg-gray-800 text-gray-400 rounded-md p-2">
          Front End
        </p>

        <img
          v-for="skill in skills.frontend"
          :key="skill"
          class="inline-block px-1 py-2"
          :src="skill"
        >

        <p class="text-center mt-2 bg-gray-800 text-gray-400 rounded-md p-2">
          Back End
        </p>

        <img
          v-for="skill in skills.backend"
          :key="skill"
          class="inline-block px-1 py-2"
          :src="skill"
        >

        <p class="text-center mt-2 bg-gray-800 text-gray-400 rounded-md p-2">
          Dev Ops
        </p>

        <img
          v-for="skill in skills.devops"
          :key="skill"
          class="inline-block px-1 py-2"
          :src="skill"
        >

        <p class="text-center mt-2 bg-gray-800 text-gray-400 rounded-md p-2">
          Ferramentas
        </p>

        <img
          v-for="skill in skills.tools"
          :key="skill"
          class="inline-block px-1 py-2"
          :src="skill"
        >
      </div>
    </div>
  </div>
</template>