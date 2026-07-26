<script setup>
import { onMounted, onUnmounted } from 'vue'
import { X } from 'lucide-vue-next'
import { useLocale } from '@/composables/useLocale'
import { useActiveSection } from '@/composables/useActiveSection'
import { useScrollToSection } from '@/composables/useScrollToSection'

const { content } = useLocale()

defineProps({
  open: Boolean,
})

const emit = defineEmits(['close'])

const { activeSection } = useActiveSection()
const { scrollToSection } = useScrollToSection()

function onNavClick(target) {
  scrollToSection(target)
  emit('close')
}

function closeOnEscape(e) {
  if (e.key === 'Escape') emit('close')
}

onMounted(() => {
  window.addEventListener('keydown', closeOnEscape)
})

onUnmounted(() => {
  window.removeEventListener('keydown', closeOnEscape)
})
</script>

<template>
  <Transition name="menu">
    <div v-if="open" class="menu-wrapper" @click.self="emit('close')">
      <div class="drawer">
        <div class="flex items-center justify-between">
          <span
            class="text-xs font-medium uppercase tracking-[0.25em]"
            :style="{ color: 'var(--color-text-primary)' }"
          >
            {{ content.sections.menu }}
          </span>

          <button
            class="flex cursor-pointer items-center"
            :style="{ color: 'var(--color-text-secondary)' }"
            @click="emit('close')"
          >
            <X :size="18" :stroke-width="1.75" />
          </button>
        </div>

        <nav class="mt-12 flex flex-1 flex-col gap-4">
          <button
            v-for="item in content.navigation"
            :key="item.id"
            class="group flex cursor-pointer items-center gap-3"
            @click="onNavClick(item.target)"
          >
            <span
              class="h-px transition-all duration-300"
              :style="{
                width: activeSection === item.target ? '3rem' : '1.5rem',
                backgroundColor:
                  activeSection === item.target
                    ? 'var(--color-text-primary)'
                    : 'var(--color-text-secondary)',
              }"
            />
            <span
              class="font-heading text-sm uppercase tracking-[0.25em] transition-all duration-300"
              :style="{
                color:
                  activeSection === item.target
                    ? 'var(--color-text-primary)'
                    : 'var(--color-text-secondary)',
              }"
            >
              {{ item.label }}
            </span>
          </button>
        </nav>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.menu-wrapper {
  position: fixed;
  inset: 0;
  z-index: 40;
  background: rgba(0, 0, 0, 0.5);
}

.drawer {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 280px;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  background-color: var(--color-bg);
  border-right: 1px solid var(--color-border);
}

.menu-enter-active {
  transition: opacity 0.25s ease;
}
.menu-leave-active {
  transition: opacity 0.2s ease;
}
.menu-enter-from,
.menu-leave-to {
  opacity: 0;
}

.menu-enter-active .drawer,
.menu-leave-active .drawer {
  transition: transform 0.25s ease;
}
.menu-enter-from .drawer,
.menu-leave-to .drawer {
  transform: translateX(-100%);
}
</style>
