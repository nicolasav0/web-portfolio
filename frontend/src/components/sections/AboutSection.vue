<script setup>
import SectionShell from '@/components/ui/SectionShell.vue'
import { useLocale } from '@/composables/useLocale'

const { content } = useLocale()
</script>

<template>
  <SectionShell id="about" :title="content.sections.about">
    <div class="flex flex-col gap-6">
      <p
        v-for="(paragraph, i) in content.about.paragraphs"
        :key="i"
        class="text-base leading-relaxed text-secondary"
      >
        {{ paragraph }}
      </p>
    </div>
  </SectionShell>
</template>
