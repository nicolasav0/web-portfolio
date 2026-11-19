<script setup>
import { useLocale } from '@/composables/useLocale'
import profileImage from '@/assets/images/profile-placeholder.png'

const { content } = useLocale()
</script>

<template>
  <section class="flex flex-col gap-5">
    <img
      :src="profileImage"
      :alt="content.profile.fullName"
      width="128"
      height="128"
      loading="eager"
      decoding="async"
      class="h-32 w-32 rounded-full object-cover"
    />

    <div class="flex flex-col gap-2">
      <h1 class="font-heading text-[length:var(--text-heading-xl)] font-bold text-primary">
        {{ content.profile.fullName }}
      </h1>

      <p class="text-[length:var(--text-body-lg)] font-medium text-brand-text">
        {{ content.profile.role }}
      </p>

      <p class="leading-relaxed text-secondary">
        {{ content.profile.description }}
      </p>
    </div>
  </section>
</template>
