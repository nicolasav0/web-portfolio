<script setup>
import Profile from './Profile.vue'
import Navigation from './Navigation.vue'
import SocialLinks from './SocialLinks.vue'
import Footer from './Footer.vue'
</script>

<template>
  <aside
    class="flex h-screen flex-col p-10"
    :style="{
      width: 'var(--sidebar-width)',
      backgroundColor: 'var(--color-bg)',
      borderColor: 'var(--color-border)',
    }"
  >
    <div class="flex flex-1 flex-col justify-between">
      <Profile />

      <Navigation />

      <SocialLinks />

      <Footer />
    </div>
  </aside>
</template>
