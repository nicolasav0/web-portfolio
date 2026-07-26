<script setup>
import { profile } from '@/data/profile'

import profileImage from '@/assets/images/profile-placeholder.png'
</script>

<template>
  <section class="flex flex-col gap-0">

    <img
      :src="profileImage"
      :alt="profile.fullName"
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
        {{ profile.fullName }}
      </h1>

      <h2
        :style="{
          fontSize: 'var(--text-body-lg)',
          fontWeight: 'var(--font-weight-medium)',
          color: 'var(--color-brand)',
        }"
      >
        {{ profile.role }}
      </h2>

      <p
        :style="{
          color: 'var(--color-text-secondary)',
          lineHeight: 'var(--line-height-relaxed)',
        }"
      >
        {{ profile.description }}
      </p>

    </div>

  </section>
</template>
