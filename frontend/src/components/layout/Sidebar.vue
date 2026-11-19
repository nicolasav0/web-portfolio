<script setup>
import Profile from './Profile.vue'
import Navigation from './Navigation.vue'
import SocialLinks from './SocialLinks.vue'
import ThemeLangToggles from './ThemeLangToggles.vue'
</script>

<template>
  <aside class="sidebar">
    <div class="flex flex-1 flex-col gap-8 p-5 md:p-10 lg:justify-between">
      <Profile />

      <div class="hidden lg:block">
        <Navigation />
      </div>

      <div class="flex flex-col gap-4">
        <SocialLinks />

        <div class="hidden lg:block">
          <ThemeLangToggles />
        </div>
      </div>
    </div>
  </aside>
</template>

<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: var(--color-bg);
  border-bottom: 1px solid var(--color-border);
}

@media (min-width: 1024px) {
  .sidebar {
    width: var(--sidebar-width);
    min-height: 100vh;
    position: sticky;
    top: 0;
    align-self: flex-start;
    border-right: 1px solid var(--color-border);
    border-bottom: 0;
  }
}
</style>
