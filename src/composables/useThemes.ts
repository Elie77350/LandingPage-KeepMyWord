// import { ref, computed, onMounted } from 'vue'

// const theme = ref<'light' | 'dark'>('light')

// export function useThemes() {
//   // Charger le thème depuis le localStorage au montage
//   onMounted(() => {
//     const saved = localStorage.getItem('theme')
//     if (saved === 'light' || saved === 'dark') {
//       theme.value = saved
//       document.documentElement.classList.toggle('dark', theme.value === 'dark')
//     }
//   })

//   // Basculer entre light et dark
//   function toggleTheme() {
//     theme.value = theme.value === 'light' ? 'dark' : 'light'
//     localStorage.setItem('theme', theme.value)
//     document.documentElement.classList.toggle('dark', theme.value === 'dark')
//   }

//   // Valeur booléenne pratique
//   const isDark = computed(() => theme.value === 'dark')

//   return {
//     theme,
//     isDark,
//     toggleTheme
//   }
// }

import { ref, computed, onMounted, watch } from 'vue'

const theme = ref<'light' | 'dark'>('light')

export function useThemes() {
  // Charger le thème depuis le localStorage
  onMounted(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'light' || saved === 'dark') {
      theme.value = saved
    }

    // Appliquer la classe dark au HTML
    document.documentElement.classList.toggle('dark', theme.value === 'dark')
  })

  // Basculer entre light et dark
  function toggleTheme() {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
    localStorage.setItem('theme', theme.value)
  }

  // Synchroniser automatiquement la classe "dark"
  watch(theme, (value) => {
    document.documentElement.classList.toggle('dark', value === 'dark')
  })

  // Valeur booléenne pratique
  const isDark = computed(() => theme.value === 'dark')

  return {
    theme,
    isDark,
    toggleTheme
  }
}


