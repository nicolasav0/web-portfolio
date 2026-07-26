<script setup>
import Profile from './Profile.vue'
import Navigation from './Navigation.vue'
import SocialLinks from './SocialLinks.vue'
import ThemeLangToggles from './ThemeLangToggles.vue'
</script>

<template>
  <aside
    class="sidebar"
    :style="{
      width: 'var(--sidebar-width)',
      backgroundColor: 'var(--color-bg)',
      borderColor: 'var(--color-border)',
    }"
  >
    <div class="flex flex-1 flex-col justify-between p-10">
      <Profile />

      <Navigation />

      <div class="flex flex-col gap-4">
        <SocialLinks />
        <ThemeLangToggles />
      </div>
    </div>
  </aside>
</template>

<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: sticky;
  top: 0;
  align-self: flex-start;
}

@media (max-width: 1023px) {
  .sidebar {
    display: none;
  }
}
</style>
