<script setup>
import { navigation } from '@/data/navigation'

function scrollToSection(sectionId) {
  document
    .getElementById(sectionId)
    ?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
}
</script>

<template>
  <nav>
    <ul class="flex flex-col gap-4">
      <li
        v-for="item in navigation"
        :key="item.target"
      >
        <button
          class="cursor-pointer transition hover:translate-x-1"
          :style="{
            color: 'var(--color-text-secondary)',
          }"
          @click="scrollToSection(item.target)"
        >
          {{ item.label }}
        </button>
      </li>
    </ul>
  </nav>
</template>
