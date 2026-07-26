<script setup>
import AboutSection from '@/components/sections/AboutSection.vue'
import SkillsSection from '@/components/sections/SkillsSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
import Footer from '@/components/layout/Footer.vue'
</script>

<template>
    <main class="bg-primary text-primary flex min-h-full flex-col gap-24 p-10">
    <AboutSection />

    <SkillsSection />

    <ProjectsSection />

    <ContactSection />

    <Footer />
  </main>
</template>
