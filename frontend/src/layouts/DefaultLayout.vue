<script setup>
import Sidebar from '@/components/layout/Sidebar.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="flex h-screen">
    <Sidebar />

    <main class="flex-1 overflow-y-auto">
      <RouterView />
    </main>
  </div>
</template>
