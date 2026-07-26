<script setup>
import { useLocale } from '@/composables/useLocale'
import profileImage from '@/assets/images/profile-placeholder.png'

const { content } = useLocale()
</script>

<template>
  <section class="flex flex-col gap-0">

    <img
      :src="profileImage"
      :alt="content.profile.fullName"
      class="h-32 w-32 rounded-full object-cover"
    >

    <div class="flex flex-col gap-2">

      <h1
        class="font-heading"
        :style="{
          fontSize: 'var(--text-heading-xl)',
          fontWeight: 'var(--font-weight-bold)',
          color: 'var(--color-text-primary)',
        }"
      >
        {{ content.profile.fullName }}
      </h1>

      <h2
        :style="{
          fontSize: 'var(--text-body-lg)',
          fontWeight: 'var(--font-weight-medium)',
          color: 'var(--color-brand)',
        }"
      >
        {{ content.profile.role }}
      </h2>

      <p
        :style="{
          color: 'var(--color-text-secondary)',
          lineHeight: 'var(--line-height-relaxed)',
        }"
      >
        {{ content.profile.description }}
      </p>

    </div>

  </section>
</template>
