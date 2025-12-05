<template>
  <div>
    <ThreeBackground />
    <NavBar />
    
    <section class="hero">
      <div class="hero-content">
        <div class="hero-badge animate-pulse">Welcome to the Future</div>
        <h1>Redefining <span>Tomorrow's</span> Technology</h1>
        <p>Experience the next generation of innovation. Where artificial intelligence meets elegant design, creating seamless solutions for a connected world.</p>
        <div class="cta-buttons">
          <NuxtLink to="/portfolio" class="btn btn-primary">Explore Now</NuxtLink>
          <NuxtLink to="/about" class="btn btn-secondary">Learn More</NuxtLink>
        </div>
      </div>
    </section>

    <section class="features">
      <div class="section-header">
        <h2>Core Features</h2>
        <p>Discover what makes us different</p>
      </div>
      <div class="features-grid">
        <FeatureCard v-for="feature in features" :key="feature.title" v-bind="feature" />
      </div>
    </section>

    <section class="stats">
      <div class="stats-grid">
        <div class="stat-item" v-for="stat in stats" :key="stat.label">
          <h3>{{ stat.value }}</h3>
          <p>{{ stat.label }}</p>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <h2>Ready to Experience the Future?</h2>
      <p>Join millions of users who are already living tomorrow, today.</p>
      <NuxtLink to="/contact" class="btn btn-primary">Get Started</NuxtLink>
    </section>

    <FooterSection />
  </div>
</template>

<script setup>
useHead({
  title: 'ZESBE | Future Technology'
})

const features = [
  { icon: '⚡', title: 'Quantum Speed', description: 'Lightning-fast processing powered by next-generation quantum computing architecture.' },
  { icon: '🛡️', title: 'Neural Security', description: 'Advanced AI-driven security protocols that learn and adapt to protect your digital assets.' },
  { icon: '🌐', title: 'Global Sync', description: 'Seamlessly connect across dimensions with revolutionary cross-platform synchronization.' },
  { icon: '✨', title: 'Smart AI', description: 'Intelligent automation that understands your needs and delivers personalized experiences.' },
  { icon: '📊', title: 'Deep Analytics', description: 'Comprehensive insights powered by machine learning for informed decision-making.' },
  { icon: '🚀', title: 'Infinite Scale', description: 'Effortlessly scale from startup to enterprise with adaptive cloud infrastructure.' },
]

const stats = [
  { value: '99.9%', label: 'Uptime' },
  { value: '50M+', label: 'Users' },
  { value: '150+', label: 'Countries' },
  { value: '24/7', label: 'Support' },
]
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 50px;
}

.hero-content { text-align: center; max-width: 900px; }

.hero-badge {
  display: inline-block;
  padding: 8px 24px;
  border: 1px solid rgba(0, 255, 255, 0.3);
  border-radius: 50px;
  font-size: 12px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--accent-cyan);
  margin-bottom: 30px;
  background: rgba(0, 255, 255, 0.05);
}

.hero h1 {
  font-family: 'Orbitron', sans-serif;
  font-size: clamp(40px, 8vw, 80px);
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 30px;
  background: linear-gradient(135deg, var(--text-primary), var(--text-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero h1 span {
  background: linear-gradient(135deg, var(--accent-gold), #ff8c00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero p {
  font-size: 18px;
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 50px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.cta-buttons { display: flex; gap: 20px; justify-content: center; flex-wrap: wrap; }

.features { padding: 100px 50px; }
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.stats {
  padding: 80px 50px;
  background: rgba(255, 215, 0, 0.03);
  border-top: 1px solid rgba(255, 215, 0, 0.1);
  border-bottom: 1px solid rgba(255, 215, 0, 0.1);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
}

.stat-item h3 {
  font-family: 'Orbitron', sans-serif;
  font-size: 48px;
  background: linear-gradient(135deg, var(--accent-gold), #ff8c00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.stat-item p {
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 13px;
}

.cta-section {
  padding: 100px 50px;
  text-align: center;
}

.cta-section h2 {
  font-family: 'Orbitron', sans-serif;
  font-size: 36px;
  margin-bottom: 20px;
}

.cta-section p { color: var(--text-secondary); margin-bottom: 40px; }

@media (max-width: 768px) {
  .hero { padding: 100px 20px; }
  .features, .stats, .cta-section { padding: 60px 20px; }
}
</style>
