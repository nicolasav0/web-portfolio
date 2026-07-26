<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const spotlight = ref({ x: 0, y: 0 })
const isVisible = ref(false)
let timeout

function onMouseMove(e) {
  spotlight.value = { x: e.clientX, y: e.clientY }
  isVisible.value = true
  clearTimeout(timeout)
}

function onMouseLeave() {
  timeout = setTimeout(() => { isVisible.value = false }, 300)
}

onMounted(() => {
  window.addEventListener('mousemove', onMouseMove)
  document.addEventListener('mouseleave', onMouseLeave)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', onMouseMove)
  document.removeEventListener('mouseleave', onMouseLeave)
  clearTimeout(timeout)
})
</script>

<template>
  <div
    class="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
    :class="isVisible ? 'opacity-100' : 'opacity-0'"
    :style="{
      background: `radial-gradient(
        350px circle at ${spotlight.x}px ${spotlight.y}px,
        rgba(124, 108, 245, 0.12),
        transparent 80%
      )`,
    }"
  />
</template>
