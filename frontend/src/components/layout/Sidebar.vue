<script setup>
import Profile from './Profile.vue'
import Navigation from './Navigation.vue'
import SocialLinks from './SocialLinks.vue'
import Footer from './Footer.vue'
</script>

<template>
  <aside
    class="flex h-screen flex-col justify-between border-r p-10"
    :style="{
      width: 'var(--sidebar-width)',
      backgroundColor: 'var(--color-bg)',
      borderColor: 'var(--color-border)',
    }"
  >
    <Profile />

    <Navigation />

    <SocialLinks />

    <Footer />
  </aside>
</template>
