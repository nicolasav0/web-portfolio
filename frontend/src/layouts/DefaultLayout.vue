<script setup>
import { ref } from 'vue'
import Sidebar from '@/components/layout/Sidebar.vue'
import SpotlightEffect from '@/components/layout/SpotlightEffect.vue'
import MobileTopBar from '@/components/layout/MobileTopBar.vue'
import MobileMenu from '@/components/layout/MobileMenu.vue'
import { RouterView } from 'vue-router'

const menuOpen = ref(false)

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function closeMenu() {
  menuOpen.value = false
}
</script>

<template>
  <SpotlightEffect />
  <MobileTopBar @toggle-menu="toggleMenu" />
  <MobileMenu :open="menuOpen" @close="closeMenu" />

  <div class="layout">
    <Sidebar />

    <main class="content">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.layout {
  margin: 0 auto;
  width: 100%;
  max-width: 1280px;
  display: flex;
  min-height: 100vh;
}

.content {
  flex: 1;
}
</style>
