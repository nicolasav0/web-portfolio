<script setup>
import Sidebar from '@/components/layout/Sidebar.vue'
import SpotlightEffect from '@/components/layout/SpotlightEffect.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <SpotlightEffect />
  <div
    style="margin: 0 auto; width: 100%; max-width: 1280px; display: flex; min-height: 100vh;"
  >
    <Sidebar />

    <main class="flex-1">
      <RouterView />
    </main>
  </div>
</template>
