import { onMounted, onUnmounted, ref } from 'vue'

export function useActiveSection() {
  const activeSection = ref('about')

  function onScroll() {
    const sections = document.querySelectorAll('section[id]')
    let current = sections[0]?.id || 'about'

    for (const section of sections) {
      if (section.getBoundingClientRect().top <= 100) {
        current = section.id
      }
    }

    activeSection.value = current
  }

  onMounted(() => {
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
  })

  return { activeSection }
}
