import { onMounted, onUnmounted, ref } from 'vue'

export function useActiveSection() {
  const activeSection = ref('about')

  let observer

  onMounted(() => {
    const sections = document.querySelectorAll('section[id]')

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeSection.value = entry.target.id
          }
        })
      },
      {
        threshold: 0.5,
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
