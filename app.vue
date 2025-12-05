<template>
  <div :data-theme="theme">
    <NuxtPage />
  </div>
</template>

<script setup>
const theme = useState('theme', () => 'dark')

onMounted(() => {
  const saved = localStorage.getItem('theme')
  if (saved) theme.value = saved
})
</script>
