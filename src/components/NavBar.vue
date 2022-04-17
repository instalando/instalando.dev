<script setup lang="ts">
import { TerminalIcon, IdentificationIcon, CodeIcon } from '@heroicons/vue/solid'
import { ref } from 'vue'

type NavigationItem = {
  name: string
  route: {
    name: string
  }
  icon: unknown
};

const navigationItems: NavigationItem[] = [
  {
    name: 'About Me',
    route: {
      name: 'about-me'
    },
    icon: IdentificationIcon
  },
  {
    name: 'Projects',
    route: {
      name: 'projects'
    },
    icon: CodeIcon
  }
]

const displayMenu = ref(false)
const toggleMenu = () => displayMenu.value = !displayMenu.value
</script>

<template>
  <nav class="bg-gray-800">
    <div class="mx-auto max-w-7x1 px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <input
            id="menu"
            type="checkbox"
            name="menu"
            class="peer"
            hidden
            @click.stop="toggleMenu"
          >
          <label
            for="menu"
            class="peer-checked:menu block relative z-20 p-4 cursor-pointer lg:hidden hover:bg-gray-700 rounded-md"
          >
            <div
              aria-hidden="true"
              class="m-auto h-0.5 w-6 rounded transition duration-300 bg-gray-400"
            />
            <div
              aria-hidden="true"
              class="m-auto mt-2 h-0.5 w-6 rounded transition duration-300 bg-gray-400"
            />
          </label>

          <div class="ml-3 rounded-lg bg-gray-700 text-gray-400 px-3 py-2 text-sm font-medium">
            <component
              :is="TerminalIcon"
              class="nav-icon-svg"
            />
            Instalando Developer
          </div>
        </div>


        <div class="relative flex sm:h-16 lg:h-16 items-center justify-between">
          <!-- Desktop Menu -->
          <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div class="hidden sm:ml-6 sm:block">
              <div class="flex space-x-4">
                <div class="hidden sm:block ml-3 rounded-lg bg-gray-700 text-gray-400 px-3 py-2 text-sm font-medium">
                  <component
                    :is="TerminalIcon"
                    class="nav-icon-svg"
                  />
                  Instalando Developer
                </div>
                <router-link
                  v-for="item in navigationItems"
                  :key="item.name"
                  v-slot="{ isActive, href, navigate }"
                  :to="item.route"
                  custom
                >
                  <a
                    :class="isActive ? 'nav-active-desktop' : 'nav-inactive-desktop'"
                    :href="href"
                    @click="navigate"
                  >
                    <component
                      :is="item.icon"
                      class="nav-icon-svg"
                    />
                    {{ item.name }}
                  </a>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div
        v-show="displayMenu"
        id="mobile-menu"
        class="sm:hidden"
      >
        <div class="space-y-1 px-2 pt-2 pb-3">
          <router-link
            v-for="item in navigationItems"
            :key="item.name"
            v-slot="{ isActive, href, navigate }"
            :to="item.route"
            custom
          >
            <a
              :class="isActive ? 'nav-active-mobile' : 'nav-inactive-mobile'"
              :href="href"
              @click="navigate"
            >
              <component
                :is="item.icon"
                class="nav-icon-svg"
              />
              {{ item.name }}
            </a>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>
