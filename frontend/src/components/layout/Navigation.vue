<script setup>
import { navigation } from '@/data/navigation'
import { useActiveSection } from '@/composables/useActiveSection'
import { useScrollToSection } from '@/composables/useScrollToSection'

const { activeSection } = useActiveSection()
const { scrollToSection } = useScrollToSection()
</script>

<template>
  <nav>
    <ul class="flex flex-col gap-3">
      <li
        v-for="item in navigation"
        :key="item.id"
      >
        <button
          class="group flex cursor-pointer items-center gap-2"
          @click="scrollToSection(item.target)"
        >
          <span
            class="h-px transition-all duration-300"
            :style="{
              width: activeSection === item.target ? '5rem' : '2rem',
              backgroundColor:
                activeSection === item.target
                  ? 'var(--color-text-primary)'
                  : 'var(--color-text-secondary)',
            }"
          />

          <span
            class="font-heading text-sm uppercase tracking-[0.25em] transition-all duration-300"
            :style="{
              color:
                activeSection === item.target
                  ? 'var(--color-text-primary)'
                  : 'var(--color-text-secondary)',
            }"
          >
            {{ item.label }}
          </span>
        </button>
      </li>
    </ul>
  </nav>
</template>
