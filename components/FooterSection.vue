<template>
  <footer>
    <div class="footer-links">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/portfolio">Portfolio</NuxtLink>
      <NuxtLink to="/contact">Contact</NuxtLink>
      <a href="https://wa.me/6281295850096" target="_blank">WhatsApp</a>
    </div>
    <p>📍 Bekasi, Indonesia | 📧 cs@zesbe.my.id | 📱 +62 812-9585-0096</p>
    <p>&copy; {{ year }} ZESBE Technologies. Crafted with AI</p>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>
