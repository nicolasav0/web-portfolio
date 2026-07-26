<script setup>
import AboutSection from '@/components/sections/AboutSection.vue'
import SkillsSection from '@/components/sections/SkillsSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
</script>

<template>
  <main class="bg-primary text-primary flex min-h-full flex-col gap-32 px-20 py-24">
    <AboutSection />

    <SkillsSection />

    <ProjectsSection />

    <ContactSection />
  </main>
</template>
