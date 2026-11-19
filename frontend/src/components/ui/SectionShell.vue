<script setup>
import SectionHeading from './SectionHeading.vue'

defineProps({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <section :id="id" :aria-labelledby="`${id}-title`" class="w-full scroll-mt-20">
    <div class="mx-auto w-full max-w-[40rem]">
      <SectionHeading :id="`${id}-title`">{{ title }}</SectionHeading>

      <slot />
    </div>
  </section>
</template>
