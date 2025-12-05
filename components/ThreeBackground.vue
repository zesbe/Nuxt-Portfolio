<template>
  <div id="canvas-container">
    <canvas ref="canvasRef"></canvas>
  </div>
</template>

<script setup>
const canvasRef = ref(null)

onMounted(() => {
  if (typeof THREE === 'undefined') return
  
  const canvas = canvasRef.value
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
  
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

  // Particles
  const particlesGeometry = new THREE.BufferGeometry()
  const particlesCount = 1500
  const posArray = new Float32Array(particlesCount * 3)
  const colorsArray = new Float32Array(particlesCount * 3)

  for (let i = 0; i < particlesCount * 3; i += 3) {
    posArray[i] = (Math.random() - 0.5) * 10
    posArray[i + 1] = (Math.random() - 0.5) * 10
    posArray[i + 2] = (Math.random() - 0.5) * 10
    
    if (Math.random() > 0.5) {
      colorsArray[i] = 1; colorsArray[i + 1] = 0.84; colorsArray[i + 2] = 0
    } else {
      colorsArray[i] = 0; colorsArray[i + 1] = 1; colorsArray[i + 2] = 1
    }
  }

  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))
  particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorsArray, 3))

  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.02,
    vertexColors: true,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending
  })

  const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
  scene.add(particlesMesh)

  // Torus rings
  const torus = new THREE.Mesh(
    new THREE.TorusGeometry(2, 0.02, 16, 100),
    new THREE.MeshBasicMaterial({ color: 0x00ffff, transparent: true, opacity: 0.3 })
  )
  torus.position.z = -3
  scene.add(torus)

  const torus2 = new THREE.Mesh(
    new THREE.TorusGeometry(2.5, 0.02, 16, 100),
    new THREE.MeshBasicMaterial({ color: 0xffd700, transparent: true, opacity: 0.2 })
  )
  torus2.position.z = -3
  torus2.rotation.x = Math.PI / 2
  scene.add(torus2)

  camera.position.z = 5

  let mouseX = 0, mouseY = 0
  document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth) * 2 - 1
    mouseY = -(e.clientY / window.innerHeight) * 2 + 1
  })

  function animate() {
    requestAnimationFrame(animate)
    particlesMesh.rotation.y += 0.001
    particlesMesh.rotation.x += 0.0005
    torus.rotation.x += 0.005
    torus.rotation.y += 0.002
    torus2.rotation.y += 0.003
    torus2.rotation.z += 0.005
    camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05
    camera.position.y += (mouseY * 0.5 - camera.position.y) * 0.05
    camera.lookAt(scene.position)
    renderer.render(scene, camera)
  }
  animate()

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  })
})
</script>

<style scoped>
#canvas-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

canvas {
  width: 100%;
  height: 100%;
}
</style>
