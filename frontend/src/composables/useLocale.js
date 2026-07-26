import { ref, computed } from 'vue'
import en from '@/locales/en.json'
import es from '@/locales/es.json'

const locale = ref(localStorage.getItem('locale') || 'en')
const data = { en, es }
const content = computed(() => data[locale.value])

export function useLocale() {
  function setLocale(l) {
    locale.value = l
    localStorage.setItem('locale', l)
  }
  return { locale, setLocale, content }
}
