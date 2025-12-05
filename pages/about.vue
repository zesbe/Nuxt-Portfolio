<template>
  <div>
    <NavBar />
    
    <header class="page-header">
      <h1>About ZESBE</h1>
      <p>Pioneering the future of technology with AI-driven innovation and human-centered design.</p>
    </header>

    <main class="about-content">
      <section class="about-section" v-for="(section, i) in sections" :key="i">
        <div class="about-text">
          <h2>{{ section.title }}</h2>
          <p v-for="(p, j) in section.paragraphs" :key="j">{{ p }}</p>
        </div>
        <div class="about-image">{{ section.icon }}</div>
      </section>
    </main>

    <section class="team-section">
      <h2>Meet The Founder</h2>
      <div class="team-grid">
        <div class="team-card founder-card">
          <div class="team-avatar photo">
            <img src="/Screenshot_2025_1128_221016.jpg" alt="Founder ZESBE">
          </div>
          <h3>ZESBE</h3>
          <p class="role">Founder & CEO</p>
          <p>Passionate about technology and innovation. Building the future from Bekasi, Indonesia.</p>
        </div>
      </div>
    </section>

    <FooterSection />
  </div>
</template>

<script setup>
useHead({
  title: 'About | ZESBE'
})

const sections = [
  {
    title: 'Our Mission',
    icon: '🚀',
    paragraphs: [
      'At ZESBE, we believe technology should empower humanity, not complicate it. Our mission is to create seamless, intelligent solutions that bridge the gap between human potential and digital possibilities.',
      'Founded on the principles of innovation, integrity, and impact, we\'re dedicated to pushing the boundaries of what\'s possible while keeping people at the heart of everything we build.'
    ]
  },
  {
    title: 'Our Vision',
    icon: '🌍',
    paragraphs: [
      'We envision a world where technology enhances every aspect of human life - from how we work and communicate to how we create and dream.',
      'By 2030, we aim to be the global leader in AI-powered solutions, serving over 1 billion users worldwide with technology that\'s as intuitive as it is powerful.'
    ]
  },
  {
    title: 'Our Values',
    icon: '💎',
    paragraphs: [
      'Innovation First: We never settle for "good enough." Every product we create pushes the boundaries of possibility.',
      'Human-Centered: Technology serves people, not the other way around. User experience is our north star.',
      'Transparency: We believe in open communication, ethical AI, and building trust through honesty.'
    ]
  }
]
</script>

<style scoped>
.about-content { padding: 50px; max-width: 1200px; margin: 0 auto; }

.about-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  margin-bottom: 80px;
  align-items: center;
}

.about-section:nth-child(even) { direction: rtl; }
.about-section:nth-child(even) > * { direction: ltr; }

.about-text h2 {
  font-family: 'Orbitron', sans-serif;
  font-size: 32px;
  margin-bottom: 20px;
  color: var(--accent-gold);
}

.about-text p {
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 20px;
}

.about-image {
  aspect-ratio: 1;
  background: linear-gradient(135deg, rgba(0, 255, 255, 0.1), rgba(123, 0, 255, 0.1));
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 100px;
  position: relative;
  overflow: hidden;
}

.about-image::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: conic-gradient(from 0deg, transparent, rgba(0, 255, 255, 0.1), transparent 30%);
  animation: rotate 8s linear infinite;
}

@keyframes rotate { 100% { transform: rotate(360deg); } }

.team-section { padding: 80px 50px; background: rgba(255, 255, 255, 0.02); }
.team-section h2 {
  font-family: 'Orbitron', sans-serif;
  font-size: 36px;
  text-align: center;
  margin-bottom: 60px;
}

.team-grid {
  display: flex;
  justify-content: center;
}

.team-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 40px;
  text-align: center;
}

.founder-card {
  max-width: 400px;
  padding: 50px;
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.05), rgba(0, 255, 255, 0.05));
  border: 1px solid rgba(255, 215, 0, 0.2);
}

.team-avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 0 auto 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.team-avatar.photo {
  padding: 4px;
  background: linear-gradient(135deg, var(--accent-gold), var(--accent-cyan), var(--accent-purple));
  box-shadow: 0 0 30px rgba(255, 215, 0, 0.3);
  animation: avatarGlow 3s ease-in-out infinite;
}

.team-avatar.photo img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--bg-primary);
}

@keyframes avatarGlow {
  0%, 100% { box-shadow: 0 0 30px rgba(255, 215, 0, 0.3); }
  50% { box-shadow: 0 0 50px rgba(255, 215, 0, 0.5); }
}

.team-card h3 { font-family: 'Orbitron', sans-serif; font-size: 24px; margin-bottom: 5px; }
.team-card .role { color: var(--accent-gold); font-size: 16px; margin-bottom: 15px; }
.team-card p { color: var(--text-secondary); font-size: 14px; }

@media (max-width: 768px) {
  .about-content { padding: 30px 20px; }
  .about-section { grid-template-columns: 1fr; }
  .about-section:nth-child(even) { direction: ltr; }
  .team-section { padding: 60px 20px; }
}
</style>
