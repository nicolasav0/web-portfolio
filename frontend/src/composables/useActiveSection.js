import { onMounted, onUnmounted, ref } from 'vue'

export function useActiveSection() {
  const activeSection = ref('about')

  let observer

  onMounted(() => {
    const sections = document.querySelectorAll('section[id]')

    observer = new IntersectionObserver(
      (entries) => {
        let bestEntry = null

        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0) {
            if (!bestEntry || entry.intersectionRatio > bestEntry.intersectionRatio) {
              bestEntry = entry
            }
          }
        })

        if (bestEntry) {
          activeSection.value = bestEntry.target.id
        }
      },
      {
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
        rootMargin: '-80px 0px -55% 0px',
      },
    )

    sections.forEach((section) => observer.observe(section))
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  return {
    activeSection,
  }
}
