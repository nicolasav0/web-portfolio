export function useScrollToSection() {
  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId)
    if (!section) return

    const isMobile = window.matchMedia('(max-width: 1023px)').matches
    const offset = isMobile ? 72 : 24
    const targetTop = section.getBoundingClientRect().top + window.scrollY - offset

    window.scrollTo({
      top: Math.max(0, targetTop),
      behavior: 'smooth',
    })
  }

  return { scrollToSection }
}
