<script setup>
import Sidebar from '@/components/layout/Sidebar.vue'
import SpotlightEffect from '@/components/layout/SpotlightEffect.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <SpotlightEffect />
  <div class="flex">
    <Sidebar />

    <main class="flex-1">
      <RouterView />
    </main>
  </div>
</template>
