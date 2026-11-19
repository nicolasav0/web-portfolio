<script setup>
import AboutSection from '@/components/sections/AboutSection.vue'
import SkillsSection from '@/components/sections/SkillsSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
import Footer from '@/components/layout/Footer.vue'
</script>

<template>
  <div class="bg-primary text-primary flex min-h-full flex-col gap-24 p-5 md:p-10">
    <div class="flex flex-col items-center gap-24">
      <AboutSection />

      <SkillsSection />

      <ProjectsSection />

      <ContactSection />
    </div>

    <Footer />
  </div>
</template>
