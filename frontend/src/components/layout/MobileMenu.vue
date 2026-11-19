<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { X } from 'lucide-vue-next'
import IconButton from '@/components/ui/IconButton.vue'
import { useLocale } from '@/composables/useLocale'
import { useActiveSection } from '@/composables/useActiveSection'
import { useScrollToSection } from '@/composables/useScrollToSection'

const props = defineProps({
  open: Boolean,
})

const emit = defineEmits(['close'])

const { content } = useLocale()
const { activeSection } = useActiveSection()
const { scrollToSection } = useScrollToSection()

const drawerRef = ref(null)
let previouslyFocusedElement = null
let previousBodyOverflow = ''

const focusableSelector = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',')

function getFocusableElements() {
  if (!drawerRef.value) return []

  return Array.from(drawerRef.value.querySelectorAll(focusableSelector)).filter(
    (element) => element.getClientRects().length > 0,
  )
}

function onKeydown(event) {
  if (event.key === 'Escape') {
    event.preventDefault()
    emit('close')
    return
  }

  if (event.key !== 'Tab') return

  const focusableElements = getFocusableElements()
  if (!focusableElements.length) {
    event.preventDefault()
    drawerRef.value?.focus()
    return
  }

  const firstElement = focusableElements[0]
  const lastElement = focusableElements[focusableElements.length - 1]

  if (!drawerRef.value?.contains(document.activeElement)) {
    event.preventDefault()
    firstElement.focus()
    return
  }

  if (event.shiftKey && document.activeElement === firstElement) {
    event.preventDefault()
    lastElement.focus()
  } else if (!event.shiftKey && document.activeElement === lastElement) {
    event.preventDefault()
    firstElement.focus()
  }
}

function lockBodyScroll() {
  previousBodyOverflow = document.body.style.overflow
  document.body.style.overflow = 'hidden'
}

function unlockBodyScroll() {
  document.body.style.overflow = previousBodyOverflow
}

function activateMenu() {
  previouslyFocusedElement = document.activeElement
  lockBodyScroll()
  document.addEventListener('keydown', onKeydown)

  nextTick(() => {
    const focusableElements = getFocusableElements()
    ;(focusableElements[0] ?? drawerRef.value)?.focus()
  })
}

function deactivateMenu() {
  document.removeEventListener('keydown', onKeydown)
  unlockBodyScroll()
  previouslyFocusedElement?.focus?.()
  previouslyFocusedElement = null
}

function onNavClick(target) {
  emit('close')
  nextTick(() => scrollToSection(target))
}

watch(
  () => props.open,
  (isOpen) => {
    if (isOpen) {
      activateMenu()
    } else {
      deactivateMenu()
    }
  },
)

onMounted(() => {
  if (props.open) {
    activateMenu()
  }
})

onBeforeUnmount(() => {
  if (props.open) {
    deactivateMenu()
  }
})
</script>

<template>
  <Transition name="menu">
    <div v-show="open" class="menu-wrapper" @click.self="emit('close')">
      <div
        id="mobile-menu"
        ref="drawerRef"
        class="drawer"
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-title"
        tabindex="-1"
      >
        <div class="flex items-center justify-between">
          <span
            id="mobile-menu-title"
            class="text-xs font-medium uppercase tracking-[0.25em] text-primary"
          >
            {{ content.sections.menu }}
          </span>

          <IconButton :label="content.sections.closeMenu" @click="emit('close')">
            <X :size="18" :stroke-width="1.75" aria-hidden="true" />
          </IconButton>
        </div>

        <nav class="mt-12 flex flex-1 flex-col gap-4" :aria-label="content.sections.navigation">
          <a
            v-for="item in content.navigation"
            :key="item.id"
            :href="`#${item.target}`"
            :aria-current="activeSection === item.target ? 'location' : undefined"
            class="group flex min-h-11 w-fit items-center gap-3 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--color-bg)]"
            @click.prevent="onNavClick(item.target)"
          >
            <span
              class="h-px transition-all duration-300"
              :class="
                activeSection === item.target
                  ? 'w-12 bg-[var(--color-text-primary)]'
                  : 'w-6 bg-[var(--color-text-secondary)] group-hover:w-9 group-hover:bg-[var(--color-text-primary)]'
              "
            />
            <span
              class="font-heading text-sm uppercase tracking-[0.25em] transition-colors duration-300"
              :class="
                activeSection === item.target
                  ? 'text-primary'
                  : 'text-secondary group-hover:text-[var(--color-text-primary)]'
              "
            >
              {{ item.label }}
            </span>
          </a>
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
  width: min(280px, 85vw);
  display: flex;
  flex-direction: column;
  padding: max(1.5rem, env(safe-area-inset-top)) max(1.5rem, env(safe-area-inset-right))
    max(1.5rem, env(safe-area-inset-bottom)) max(1.5rem, env(safe-area-inset-left));
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
