<template>
  <div>
    <NavBar />
    
    <header class="page-header">
      <h1>Get In Touch</h1>
      <p>Have a project in mind? We'd love to hear from you.</p>
    </header>

    <main class="contact-container">
      <div class="contact-info">
        <h2>Let's Talk</h2>
        <p>Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.</p>
        
        <div class="info-item" v-for="info in contactInfo" :key="info.title">
          <div class="info-icon">{{ info.icon }}</div>
          <div class="info-text">
            <h4>{{ info.title }}</h4>
            <p><a v-if="info.href" :href="info.href" target="_blank">{{ info.value }}</a><span v-else>{{ info.value }}</span></p>
          </div>
        </div>

        <div class="social-links">
          <a href="https://wa.me/6281295850096" class="social-link" title="WhatsApp">💬</a>
          <a href="https://instagram.com/zesbe.id" class="social-link" title="Instagram">📸</a>
          <a href="https://tiktok.com/@zesbe.id" class="social-link" title="TikTok">🎵</a>
          <a href="mailto:cs@zesbe.my.id" class="social-link" title="Email">📧</a>
        </div>
      </div>

      <div class="contact-form">
        <h2>Send a Message</h2>
        <form v-if="!submitted" @submit.prevent="submitForm">
          <div class="form-row">
            <div class="form-group">
              <label>First Name</label>
              <input v-model="form.firstName" type="text" required placeholder="John">
            </div>
            <div class="form-group">
              <label>Last Name</label>
              <input v-model="form.lastName" type="text" required placeholder="Doe">
            </div>
          </div>
          <div class="form-group">
            <label>Email</label>
            <input v-model="form.email" type="email" required placeholder="john@example.com">
          </div>
          <div class="form-group">
            <label>Subject</label>
            <select v-model="form.subject" required>
              <option value="">Select a topic</option>
              <option value="general">General Inquiry</option>
              <option value="project">Project Discussion</option>
              <option value="support">Technical Support</option>
              <option value="partnership">Partnership</option>
            </select>
          </div>
          <div class="form-group">
            <label>Message</label>
            <textarea v-model="form.message" required placeholder="Tell us about your project..."></textarea>
          </div>
          <button type="submit" class="submit-btn">{{ isSubmitting ? 'Opening WhatsApp...' : 'Send Message' }}</button>
        </form>
        
        <div v-else class="success-message">
          <div class="success-icon">✅</div>
          <h3>Message Sent!</h3>
          <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
        </div>
      </div>
    </main>

    <FooterSection />
  </div>
</template>

<script setup>
useHead({
  title: 'Contact | ZESBE'
})

const contactInfo = [
  { icon: '📧', title: 'Email', value: 'cs@zesbe.my.id', href: 'mailto:cs@zesbe.my.id' },
  { icon: '📱', title: 'Phone', value: '+62 812-9585-0096', href: 'tel:+6281295850096' },
  { icon: '💬', title: 'WhatsApp', value: 'Chat via WhatsApp', href: 'https://wa.me/6281295850096' },
  { icon: '📍', title: 'Location', value: 'Bekasi, Jawa Barat, Indonesia 🇮🇩' },
  { icon: '🕐', title: 'Business Hours', value: 'Senin - Jumat: 09:00 - 18:00 WIB' },
]

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const submitted = ref(false)

function submitForm() {
  isSubmitting.value = true
  
  const waMessage = `Halo ZESBE! 👋

*Nama:* ${form.firstName} ${form.lastName}
*Email:* ${form.email}
*Subject:* ${form.subject}

*Pesan:*
${form.message}

---
_Dikirim dari website nexus.zesbe.my.id_`

  const waUrl = `https://wa.me/6281295850096?text=${encodeURIComponent(waMessage)}`
  
  setTimeout(() => {
    window.open(waUrl, '_blank')
    submitted.value = true
    isSubmitting.value = false
  }, 500)
}
</script>

<style scoped>
.contact-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  padding: 50px;
  max-width: 1200px;
  margin: 0 auto;
}

.contact-info h2 {
  font-family: 'Orbitron', sans-serif;
  font-size: 28px;
  margin-bottom: 30px;
  color: var(--accent-gold);
}

.contact-info > p {
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 40px;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 25px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.info-item:hover {
  border-color: var(--accent-cyan);
  transform: translateX(10px);
}

.info-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, rgba(0, 255, 255, 0.2), rgba(123, 0, 255, 0.2));
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
}

.info-text h4 { margin-bottom: 5px; }
.info-text p { margin: 0; font-size: 14px; color: var(--text-secondary); }
.info-text a { color: var(--accent-cyan); text-decoration: none; }

.social-links {
  display: flex;
  gap: 15px;
  margin-top: 40px;
}

.social-link {
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: rgba(0, 255, 255, 0.1);
  border-color: var(--accent-cyan);
  transform: translateY(-5px);
}

.contact-form {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 40px;
}

.contact-form h2 {
  font-family: 'Orbitron', sans-serif;
  font-size: 24px;
  margin-bottom: 30px;
}

.form-group { margin-bottom: 25px; }

.form-group label {
  display: block;
  margin-bottom: 8px;
  color: var(--text-secondary);
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.form-group input,
.form-group textarea,
.form-group select {
  width: 100%;
  padding: 15px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: var(--text-primary);
  font-family: 'Rajdhani', sans-serif;
  font-size: 16px;
  transition: all 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
  outline: none;
  border-color: var(--accent-cyan);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.2);
}

.form-group textarea { min-height: 150px; resize: vertical; }
.form-group select option { background: var(--bg-primary); }

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.submit-btn {
  width: 100%;
  padding: 18px;
  background: linear-gradient(135deg, var(--accent-gold), #ff8c00);
  border: none;
  border-radius: 8px;
  color: var(--bg-primary);
  font-family: 'Rajdhani', sans-serif;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(255, 215, 0, 0.4);
}

.success-message {
  text-align: center;
  padding: 40px;
}

.success-icon { font-size: 60px; margin-bottom: 20px; }
.success-message h3 {
  font-family: 'Orbitron', sans-serif;
  font-size: 28px;
  color: var(--accent-cyan);
  margin-bottom: 15px;
}
.success-message p { color: var(--text-secondary); }

@media (max-width: 768px) {
  .contact-container { grid-template-columns: 1fr; padding: 30px 20px; }
  .form-row { grid-template-columns: 1fr; }
}
</style>
