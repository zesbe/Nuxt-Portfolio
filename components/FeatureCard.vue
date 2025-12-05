<template>
  <div class="feature-card">
    <div class="feature-icon">{{ icon }}</div>
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  icon: String,
  title: String,
  description: String
})
</script>

<style scoped>
.feature-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 40px;
  transition: all 0.4s ease;
}

.feature-card:hover {
  transform: translateY(-10px);
  border-color: var(--accent-cyan);
  box-shadow: 0 20px 40px rgba(0, 255, 255, 0.1);
}

.feature-icon {
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.2), rgba(255, 140, 0, 0.1));
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  font-size: 30px;
}

.feature-card h3 {
  font-family: 'Orbitron', sans-serif;
  font-size: 20px;
  margin-bottom: 16px;
}

.feature-card p { color: var(--text-secondary); line-height: 1.7; }
</style>
