<script setup>
import Sidebar from '@/components/layout/Sidebar.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="app-layout">
    <Sidebar />
    <RouterView />
  </div>
</template>
