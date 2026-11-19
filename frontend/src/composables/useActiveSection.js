import { onMounted, onUnmounted, ref } from 'vue'

export function useActiveSection() {
  const activeSection = ref('about')

  function onScroll() {
    const sections = document.querySelectorAll('section[id]')
    if (!sections.length) return

    const isMobile = window.matchMedia('(max-width: 1023px)').matches
    const offset = isMobile ? 96 : 120
    const documentBottom = window.scrollY + window.innerHeight
    const isAtPageBottom = documentBottom >= document.documentElement.scrollHeight - 2
    let current = sections[0].id

    for (const section of sections) {
      if (section.getBoundingClientRect().top <= offset) {
        current = section.id
      }
    }

    if (isAtPageBottom) {
      current = sections[sections.length - 1].id
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
