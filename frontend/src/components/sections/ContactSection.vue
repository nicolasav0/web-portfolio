<script setup>
import { computed, onBeforeUnmount, ref } from 'vue'
import { Check, Copy, Download, Github, Linkedin, Mail, Send } from 'lucide-vue-next'
import SectionShell from '@/components/ui/SectionShell.vue'
import { useLocale } from '@/composables/useLocale'

const { content } = useLocale()

const copyState = ref('idle')
let copyTimeout

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  telegram: Send,
}

const secondarySocials = computed(() =>
  content.value.socials.filter((social) => social.icon !== 'mail'),
)

const copyLabel = computed(() => {
  if (copyState.value === 'copied') return content.value.contact.copied
  if (copyState.value === 'error') return content.value.contact.copyError
  return content.value.contact.copyEmail
})

async function copyToClipboard(text) {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text)
      return
    } catch {
      // Fall back to the legacy API below.
    }
  }

  const previouslyFocusedElement = document.activeElement
  const textarea = document.createElement('textarea')
  textarea.value = text
  textarea.setAttribute('readonly', '')
  textarea.style.position = 'fixed'
  textarea.style.opacity = '0'
  document.body.appendChild(textarea)
  textarea.select()

  let copied

  try {
    copied = document.execCommand('copy')
  } finally {
    document.body.removeChild(textarea)
    previouslyFocusedElement?.focus?.()
  }

  if (!copied) throw new Error('Clipboard copy failed')
}

async function copyEmail() {
  clearTimeout(copyTimeout)

  try {
    await copyToClipboard(content.value.contact.email)
    copyState.value = 'copied'
  } catch {
    copyState.value = 'error'
  }

  copyTimeout = setTimeout(() => {
    copyState.value = 'idle'
  }, 2000)
}

onBeforeUnmount(() => clearTimeout(copyTimeout))
</script>

<template>
  <SectionShell id="contact" :title="content.sections.contact">
    <div class="rounded-lg border border-primary bg-surface p-6 shadow-sm md:p-8">
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div class="flex min-w-0 items-center">
            <div class="flex min-w-0 flex-col gap-1">
              <span class="text-xs font-medium tracking-[0.2em] text-secondary uppercase">
                {{ content.contact.emailHeading }}
              </span>

              <a
                :href="`mailto:${content.contact.email}`"
                :aria-label="content.contact.emailLabel"
                :title="content.contact.email"
                class="truncate rounded-sm font-medium text-primary underline-offset-4 transition-colors duration-200 hover:text-[var(--color-brand-text)] hover:underline focus-visible:ring-2 focus-visible:ring-[var(--color-brand)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--color-surface)] focus-visible:outline-none"
              >
                {{ content.contact.email }}
              </a>
            </div>
          </div>

          <div class="flex shrink-0 items-center gap-2">
            <span
              class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-brand-text"
            >
              <Mail :size="20" :stroke-width="1.75" aria-hidden="true" />
            </span>

            <button
              type="button"
              :aria-label="copyLabel"
              class="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-md border border-primary bg-primary px-4 py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-brand)] hover:text-[var(--color-brand-text)] focus-visible:ring-2 focus-visible:ring-[var(--color-brand)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface)] focus-visible:outline-none sm:w-auto sm:min-w-[9rem]"
              :class="copyState === 'copied' ? 'text-brand-text' : 'text-secondary'"
              @click="copyEmail"
            >
              <component
                :is="copyState === 'copied' ? Check : Copy"
                :size="16"
                :stroke-width="1.75"
                aria-hidden="true"
              />
              {{ copyLabel }}
            </button>
          </div>

          <span class="sr-only" role="status" aria-live="polite" aria-atomic="true">
            {{ copyState === 'idle' ? '' : copyLabel }}
          </span>
        </div>

        <div class="flex flex-col gap-3 border-t border-primary pt-6">
          <span class="text-xs font-medium tracking-[0.2em] text-secondary uppercase">
            {{ content.contact.secondaryHeading }}
          </span>

          <ul class="flex flex-wrap gap-x-5 gap-y-3">
            <li v-for="social in secondarySocials" :key="social.id">
              <a
                :href="social.url"
                :aria-label="`${social.name} — ${content.contact.externalLinkLabel}`"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 rounded-sm text-sm text-secondary transition-colors duration-200 hover:text-[var(--color-brand-text)] focus-visible:ring-2 focus-visible:ring-[var(--color-brand)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--color-surface)] focus-visible:outline-none"
              >
                <component
                  :is="socialIcons[social.icon]"
                  :size="16"
                  :stroke-width="1.75"
                  aria-hidden="true"
                />
                {{ social.name }}
              </a>
            </li>
          </ul>
        </div>

        <div
          class="flex flex-col gap-3 border-t border-primary pt-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <div class="flex flex-col gap-1">
            <span class="text-xs font-medium tracking-[0.2em] text-secondary uppercase">
              {{ content.contact.cvHeading }}
            </span>

            <span class="text-sm text-secondary">
              {{ content.contact.cv.graduation }}
            </span>
          </div>

          <a
            :href="content.contact.cv.path"
            :aria-label="content.contact.cv.ariaLabel"
            download
            class="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[var(--color-brand-text)] px-5 py-2.5 text-sm font-semibold text-[var(--color-bg)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md focus-visible:ring-2 focus-visible:ring-[var(--color-brand)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--color-surface)] focus-visible:outline-none sm:w-auto"
          >
            <Download :size="18" :stroke-width="1.75" aria-hidden="true" />
            {{ content.contact.cv.label }}
          </a>
        </div>
      </div>
    </div>
  </SectionShell>
</template>
