<script setup>
import { navigation } from '@/data/navigation'

function scrollToSection(sectionId) {
  document.getElementById(sectionId)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}
</script>

<template>
  <nav>
    <ul class="flex flex-col gap-6">

      <li
        v-for="item in navigation"
        :key="item.id"
      >
        <button
          class="group flex cursor-pointer items-center gap-4 transition-all duration-300"
          @click="scrollToSection(item.target)"
        >

          <span
            class="bg-secondary group-hover:bg-primary h-px w-8 transition-all duration-300 group-hover:w-16"
          />

          <span
            class="text-secondary group-hover:text-primary font-heading text-sm uppercase tracking-[0.25em] transition-colors duration-300"
          >
            {{ item.label }}
          </span>

        </button>
      </li>

    </ul>
  </nav>
</template>
