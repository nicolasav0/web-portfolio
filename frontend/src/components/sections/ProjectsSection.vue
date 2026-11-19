<script setup>
import ProjectCard from '@/components/ui/ProjectCard.vue'
import SectionShell from '@/components/ui/SectionShell.vue'
import { useLocale } from '@/composables/useLocale'

const { content } = useLocale()
</script>

<template>
  <SectionShell id="projects" :title="content.sections.projects">
    <div class="flex flex-col gap-6">
      <ProjectCard
        v-for="project in content.projects"
        :key="project.id"
        :project="project"
        :source-label="content.sections.source"
      />
    </div>
  </SectionShell>
</template>
