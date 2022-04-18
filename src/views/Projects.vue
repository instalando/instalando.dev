<script setup lang="ts">
type ProjectItem = {
  name: string
  image: string
  technologies: string[]
  description: string
  link: string
}

const projects: ProjectItem[] = [
  {
    name: 'Manabou Video Player',
    image: 'https://user-images.githubusercontent.com/50197635/162561203-837cdef2-a503-4470-947c-7ae075da041d.png',
    technologies: ['Vue 2', 'Vuetify', 'Electron'],
    description: 'An application still under development with the aim, in particular, of speeding up foreign language studies for Brazilians (especially Japanese).',
    link: 'https://github.com/instalando/manabou-video-player'
  },
  {
    name: 'Go Translator',
    image: 'https://user-images.githubusercontent.com/50197635/163773458-48a96b84-040d-4b22-956b-f47a9e95db64.png',
    technologies: ['Go', 'ChromeDP'],
    description: 'A simple Go project made to get translations from Google Translate.',
    link: 'https://github.com/instalando/go-translator'
  }
]
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 cursor-pointer">
    <div
      v-for="item in projects"
      :key="item.name"
      class="mx-4 my-2 max-w-md overflow-hidden rounded-xl bg-white shadow-md"
    >
      <a
        :href="item.link"
        target="_blank"
      >
        <div
          class="md:shrink-0"
        >
          <img
            class="w-full h-52 object-cover"
            :src="item.image"
            :alt="item.description"
          >
          <div class="p-8">
            <!-- Header -->
            <div
              class="text-sm font-semibold uppercase tracking-wide text-indigo-500"
              v-html="item.name"
            />

            <!-- technologies -->
            <div
              href="#"
              class="my-4 block text-lg font-medium leading-tight text-black hover:underline"
            >
              <div
                v-for="tecnology in item.technologies"
                :key="tecnology"
                class="inline-flex text-md justify-center p-3 mr-2 bg-indigo-400 hover:bg-indigo-500 rounded-md shadow-lg text-gray-50 hover:text-gray-100"
                v-text="tecnology"
              />
            </div>

            <!-- Description -->
            <p
              class="mt-2 text-slate-500"
              v-html="item.description"
            />
          </div>
        </div>
      </a>
    </div>
  </div>
</template>