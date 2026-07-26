<script setup>
import AboutSection from '@/components/sections/AboutSection.vue'
import SkillsSection from '@/components/sections/SkillsSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
import Footer from '@/components/layout/Footer.vue'
import Profile from '@/components/layout/Profile.vue'
import SocialLinks from '@/components/layout/SocialLinks.vue'
</script>

<template>
  <main class="bg-primary text-primary flex min-h-full flex-col gap-24 p-5 md:p-10">
    <div class="flex flex-col gap-4 lg:hidden">
      <Profile />
      <SocialLinks />
    </div>

    <AboutSection />

    <SkillsSection />

    <ProjectsSection />

    <ContactSection />

    <Footer />
  </main>
</template>
