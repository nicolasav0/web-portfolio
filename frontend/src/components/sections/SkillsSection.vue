<script setup>
import SectionShell from '@/components/ui/SectionShell.vue'
import Tag from '@/components/ui/Tag.vue'
import { useLocale } from '@/composables/useLocale'

const { content } = useLocale()
</script>

<template>
  <SectionShell id="skills" :title="content.sections.skills">
    <div class="grid gap-8 md:grid-cols-2">
      <div v-for="group in content.skills" :key="group.category">
        <h3
          class="font-heading mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-text"
        >
          {{ group.category }}
        </h3>

        <Tag :items="group.items" />
      </div>
    </div>
  </SectionShell>
</template>
