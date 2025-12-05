<template>
  <nav>
    <NuxtLink to="/" class="logo">ZESBE</NuxtLink>
    <ul class="nav-center" :class="{ active: menuOpen }">
      <li><NuxtLink to="/" @click="menuOpen = false">Home</NuxtLink></li>
      <li><NuxtLink to="/about" @click="menuOpen = false">About</NuxtLink></li>
      <li><NuxtLink to="/portfolio" @click="menuOpen = false">Portfolio</NuxtLink></li>
      <li><NuxtLink to="/contact" @click="menuOpen = false">Contact</NuxtLink></li>
    </ul>
    <div class="nav-right">
      <div class="theme-toggle" @click="toggleTheme"></div>
      <div class="music-toggle" @click="toggleMusic">{{ musicIcon }}</div>
      <div class="menu-toggle" @click="menuOpen = !menuOpen">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <audio ref="audioRef" loop preload="auto">
      <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg">
    </audio>
  </nav>
</template>

<script setup>
const theme = useState('theme')
const menuOpen = ref(false)
const isPlaying = ref(false)
const audioRef = ref(null)

const musicIcon = computed(() => isPlaying.value ? '🔊' : '🔇')

function toggleTheme() {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
  localStorage.setItem('theme', theme.value)
}

function toggleMusic() {
  if (!audioRef.value) return
  
  if (isPlaying.value) {
    audioRef.value.pause()
    isPlaying.value = false
  } else {
    audioRef.value.volume = 0.5
    audioRef.value.play().then(() => {
      isPlaying.value = true
    }).catch(() => {
      alert('Klik sekali lagi untuk memutar musik')
    })
  }
}
</script>
