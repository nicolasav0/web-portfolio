import { ref } from 'vue'

const theme = ref('dark')

try {
  const saved = localStorage.getItem('theme')
  if (saved === 'light' || saved === 'dark') {
    theme.value = saved
  }
} catch {
  // localStorage not available
}

document.documentElement.dataset.theme = theme.value

export function useTheme() {
  function setTheme(t) {
    theme.value = t
    document.documentElement.dataset.theme = t
    try {
      localStorage.setItem('theme', t)
    } catch {
      // localStorage not available
    }
  }

  function toggleTheme() {
    setTheme(theme.value === 'dark' ? 'light' : 'dark')
  }

  return { theme, setTheme, toggleTheme }
}
