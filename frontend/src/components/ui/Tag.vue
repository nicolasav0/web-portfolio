<script setup>
defineProps({
  items: {
    type: Array,
    default: () => [],
  },
  compact: {
    type: Boolean,
    default: false,
  },
  variant: {
    type: String,
    default: 'surface',
    validator: (value) => ['surface', 'base'].includes(value),
  },
})
</script>

<template>
  <ul class="flex flex-wrap gap-2">
    <li
      v-for="item in items"
      :key="item"
      class="rounded-md border border-primary text-secondary"
      :class="[
        compact ? 'px-3 py-1 text-xs' : 'px-3 py-1.5 text-sm',
        variant === 'base' ? 'bg-primary' : 'bg-surface',
      ]"
    >
      {{ item }}
    </li>
  </ul>
</template>
