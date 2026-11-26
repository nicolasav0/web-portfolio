import { ref, computed, watch } from 'vue'
import en from '@/locales/en.json'
import es from '@/locales/es.json'
import fr from '@/locales/fr.json'

const data = { en, es, fr }
const savedLocale = localStorage.getItem('locale')
const locale = ref(Object.hasOwn(data, savedLocale) ? savedLocale : 'es')
const content = computed(() => data[locale.value])

const seo = {
  es: {
    title: 'Nicolás Aguirre Velásquez | Desarrollador Backend',
    description:
      'Portafolio de Nicolás Aguirre Velásquez, desarrollador backend especializado en Java y Spring Boot.',
  },
  en: {
    title: 'Nicolás Aguirre Velásquez | Backend Developer',
    description:
      'Portfolio of Nicolás Aguirre Velásquez, a backend developer specialized in Java and Spring Boot.',
  },
  fr: {
    title: 'Nicolás Aguirre Velásquez | Développeur backend',
    description:
      'Portfolio de Nicolás Aguirre Velásquez, développeur backend spécialisé en Java et Spring Boot.',
  },
}

function syncDocumentMetadata() {
  const metadata = seo[locale.value]
  document.documentElement.lang = locale.value
  document.title = metadata.title

  let description = document.querySelector('meta[name="description"]')
  if (!description) {
    description = document.createElement('meta')
    description.name = 'description'
    document.head.appendChild(description)
  }
  description.content = metadata.description
}

syncDocumentMetadata()
watch(locale, syncDocumentMetadata)

export function useLocale() {
  function setLocale(l) {
    locale.value = l
    localStorage.setItem('locale', l)
  }
  return { locale, setLocale, content }
}
