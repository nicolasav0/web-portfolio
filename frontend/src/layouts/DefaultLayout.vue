<script setup>
import { ref } from 'vue'
import Sidebar from '@/components/layout/Sidebar.vue'
import SpotlightEffect from '@/components/layout/SpotlightEffect.vue'
import MobileTopBar from '@/components/layout/MobileTopBar.vue'
import MobileMenu from '@/components/layout/MobileMenu.vue'
import { useLocale } from '@/composables/useLocale'
import { RouterView } from 'vue-router'

const { content } = useLocale()

const menuOpen = ref(false)

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function closeMenu() {
  menuOpen.value = false
}
</script>

<template>
  <a href="#main-content" class="skip-link">
    {{ content.sections.skipToContent }}
  </a>

  <SpotlightEffect />
  <MobileTopBar :open="menuOpen" @toggle-menu="toggleMenu" />
  <MobileMenu :open="menuOpen" @close="closeMenu" />

  <div class="layout">
    <Sidebar />

    <main id="main-content" tabindex="-1" class="content">
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
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
}

.content:focus {
  outline: none;
}

.skip-link {
  position: fixed;
  top: 0.75rem;
  left: 0.75rem;
  z-index: 60;
  padding: 0.5rem 1rem;
  border-radius: var(--radius-md);
  background-color: var(--color-brand-text);
  color: var(--color-bg);
  font-size: var(--text-body-sm);
  font-weight: var(--font-weight-semibold);
  transform: translateY(-200%);
  transition: transform var(--transition-fast) ease;
}

.skip-link:focus,
.skip-link:focus-visible {
  transform: translateY(0);
}

@media (min-width: 1024px) {
  .layout {
    flex-direction: row;
  }
}
</style>
