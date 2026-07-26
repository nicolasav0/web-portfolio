<script setup>
import Profile from './Profile.vue'
import Navigation from './Navigation.vue'
import SocialLinks from './SocialLinks.vue'
</script>

<template>
  <aside
    class="flex min-h-screen flex-col p-10 sticky top-0 self-start"
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
    </div>
  </aside>
</template>
