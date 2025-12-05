<template>
  <div>
    <NavBar />
    
    <header class="page-header">
      <h1>Our Portfolio</h1>
      <p>Explore our innovative projects and groundbreaking solutions</p>
    </header>

    <div class="filter-tabs">
      <button 
        v-for="filter in filters" 
        :key="filter.value"
        class="filter-btn" 
        :class="{ active: activeFilter === filter.value }"
        @click="activeFilter = filter.value"
      >
        {{ filter.label }}
      </button>
    </div>

    <main class="portfolio-grid">
      <div 
        v-for="project in filteredProjects" 
        :key="project.title"
        class="portfolio-card"
        :class="{ 'coming-soon': project.comingSoon }"
        @click="project.url && openProject(project.url)"
      >
        <div class="portfolio-image">{{ project.icon }}</div>
        <div class="portfolio-content">
          <div class="portfolio-tags">
            <span class="portfolio-tag" v-for="tag in project.tags" :key="tag">{{ tag }}</span>
          </div>
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <a v-if="project.url" :href="project.url" target="_blank" class="portfolio-link" @click.stop>
            Visit Site →
          </a>
          <span v-else class="portfolio-link" style="opacity: 0.5;">Coming Soon...</span>
        </div>
      </div>
    </main>

    <FooterSection />
  </div>
</template>

<script setup>
useHead({
  title: 'Portfolio | ZESBE'
})

const activeFilter = ref('all')

const filters = [
  { label: 'All Projects', value: 'all' },
  { label: 'Website', value: 'web' },
  { label: 'Platform', value: 'platform' },
  { label: 'AI Tools', value: 'ai' },
]

const projects = [
  {
    icon: '👋',
    title: 'Hallowa.id',
    description: 'Platform digital untuk berbagai layanan dan solusi teknologi Indonesia.',
    tags: ['Website', 'Platform'],
    category: 'web',
    url: 'https://hallowa.id'
  },
  {
    icon: '🤝',
    title: 'Bersama Teman',
    description: 'Platform komunitas untuk koneksi dan kolaborasi bersama teman-teman.',
    tags: ['Platform', 'Community'],
    category: 'platform',
    url: 'https://bersamateman.vip'
  },
  {
    icon: '🤖',
    title: 'MiniMax AI',
    description: 'AI-powered tools dan layanan untuk produktivitas dan kreativitas.',
    tags: ['AI', 'Tools'],
    category: 'ai',
    url: 'https://minimax.hallowa.id'
  },
  {
    icon: '🚀',
    title: 'ZESBE Portfolio',
    description: 'Website portfolio futuristik dengan animasi 3D dan desain modern.',
    tags: ['Portfolio', '3D Web'],
    category: 'web',
    url: 'https://nexus.zesbe.my.id'
  },
  {
    icon: '🔮',
    title: 'More Projects',
    description: 'Project baru sedang dalam pengembangan. Stay tuned!',
    tags: ['Coming Soon'],
    category: 'web',
    comingSoon: true
  },
]

const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') return projects
  return projects.filter(p => p.category === activeFilter.value)
})

function openProject(url) {
  window.open(url, '_blank')
}
</script>

<style scoped>
.filter-tabs {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px 50px;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 10px 24px;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: var(--text-secondary);
  border-radius: 50px;
  cursor: pointer;
  font-family: 'Rajdhani', sans-serif;
  font-size: 14px;
  letter-spacing: 1px;
  transition: all 0.3s ease;
}

.filter-btn:hover, .filter-btn.active {
  border-color: var(--accent-cyan);
  color: var(--accent-cyan);
  background: rgba(0, 255, 255, 0.1);
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  padding: 50px;
  max-width: 1400px;
  margin: 0 auto;
  perspective: 1000px;
}

.portfolio-card {
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02));
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  cursor: pointer;
  position: relative;
}

.portfolio-card:hover {
  transform: translateY(-15px) rotateX(5deg);
  border-color: var(--accent-cyan);
  box-shadow: 0 40px 80px rgba(0, 255, 255, 0.2), 0 0 60px rgba(0, 255, 255, 0.1);
}

.portfolio-card:first-child {
  grid-column: span 2;
}

.portfolio-image {
  height: 220px;
  background: linear-gradient(135deg, rgba(0, 255, 255, 0.15), rgba(123, 0, 255, 0.2), rgba(255, 215, 0, 0.1));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 80px;
  transition: font-size 0.3s ease;
}

.portfolio-card:first-child .portfolio-image {
  height: 280px;
  font-size: 100px;
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.2), rgba(0, 255, 255, 0.15), rgba(123, 0, 255, 0.2));
}

.portfolio-card:hover .portfolio-image {
  font-size: 90px;
}

.portfolio-content { padding: 30px; }

.portfolio-tags {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
  flex-wrap: wrap;
}

.portfolio-tag {
  padding: 6px 14px;
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.15), rgba(255, 140, 0, 0.1));
  border: 1px solid rgba(255, 215, 0, 0.2);
  border-radius: 20px;
  font-size: 11px;
  color: var(--accent-gold);
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
}

.portfolio-card:hover .portfolio-tag {
  background: linear-gradient(135deg, rgba(0, 255, 255, 0.15), rgba(123, 0, 255, 0.1));
  border-color: rgba(0, 255, 255, 0.3);
  color: var(--accent-cyan);
}

.portfolio-content h3 {
  font-family: 'Orbitron', sans-serif;
  font-size: 24px;
  margin-bottom: 12px;
  transition: all 0.3s ease;
}

.portfolio-card:hover .portfolio-content h3 {
  color: var(--accent-cyan);
  text-shadow: 0 0 20px rgba(0, 255, 255, 0.5);
}

.portfolio-content p {
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 20px;
}

.portfolio-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--accent-cyan);
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  padding: 10px 20px;
  border: 1px solid rgba(0, 255, 255, 0.3);
  border-radius: 8px;
  transition: all 0.3s ease;
  background: rgba(0, 255, 255, 0.05);
}

.portfolio-link:hover {
  gap: 15px;
  background: rgba(0, 255, 255, 0.15);
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.3);
}

.portfolio-card.coming-soon {
  opacity: 0.5;
  border-style: dashed;
  border-color: rgba(255, 215, 0, 0.3);
}

.portfolio-card.coming-soon:hover {
  opacity: 0.7;
  transform: scale(1.02);
}

@media (max-width: 768px) {
  .portfolio-grid { padding: 30px 20px; }
  .portfolio-card:first-child { grid-column: span 1; }
  .portfolio-card:first-child .portfolio-image { height: 220px; font-size: 80px; }
}
</style>
