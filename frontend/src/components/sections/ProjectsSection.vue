<script setup>
import ProjectCard from '@/components/ui/ProjectCard.vue'
import SectionShell from '@/components/ui/SectionShell.vue'
import { useLocale } from '@/composables/useLocale'

const { content } = useLocale()
</script>

<template>
  <SectionShell id="projects" :title="content.sections.projects">
    <div class="grid gap-6 md:grid-cols-2">
      <ProjectCard
        v-for="project in content.projects"
        :key="project.id"
        :project="project"
        :source-label="content.sections.source"
        :source-aria-label="content.sections.sourceAriaLabel"
        :source-aria-suffix="content.sections.sourceAriaSuffix"
        :demo-label="content.sections.demo"
        :demo-aria-label="content.sections.demoAriaLabel"
        :featured-label="content.sections.featured"
      />
    </div>
  </SectionShell>
</template>
