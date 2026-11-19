<script setup>
import { useLocale } from '@/composables/useLocale'
import { useActiveSection } from '@/composables/useActiveSection'
import { useScrollToSection } from '@/composables/useScrollToSection'

const { content } = useLocale()

const { activeSection } = useActiveSection()
const { scrollToSection } = useScrollToSection()
</script>

<template>
  <nav :aria-label="content.sections.navigation">
    <ul class="flex flex-col gap-3">
      <li v-for="item in content.navigation" :key="item.id">
        <a
          :href="`#${item.target}`"
          :aria-current="activeSection === item.target ? 'location' : undefined"
          class="group flex w-fit items-center gap-2 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--color-bg)]"
          @click.prevent="scrollToSection(item.target)"
        >
          <span
            class="h-px transition-all duration-300"
            :class="
              activeSection === item.target
                ? 'w-20 bg-[var(--color-text-primary)]'
                : 'w-8 bg-[var(--color-text-secondary)] group-hover:w-12 group-hover:bg-[var(--color-text-primary)]'
            "
          />

          <span
            class="font-heading text-xs uppercase tracking-[0.25em] transition-colors duration-300"
            :class="
              activeSection === item.target
                ? 'text-primary'
                : 'text-secondary group-hover:text-[var(--color-text-primary)]'
            "
          >
            {{ item.label }}
          </span>
        </a>
      </li>
    </ul>
  </nav>
</template>
