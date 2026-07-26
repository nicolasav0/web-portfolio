<script setup>
import Sidebar from '@/components/layout/Sidebar.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="flex">
    <Sidebar />

    <main class="flex-1">
      <RouterView />
    </main>
  </div>
</template>
