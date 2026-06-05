const loader = document.querySelector('.loader')
const navbar = document.querySelector('.navbar')
const menuButton = document.querySelector('.menu-button')
const navLinks = document.querySelector('.nav-links')
const glow = document.querySelector('.cursor-glow')
const revealElements = document.querySelectorAll('.reveal')
const counters = document.querySelectorAll('[data-count]')
const parallaxElements = document.querySelectorAll('[data-parallax]')

window.addEventListener('load', () => {
  window.setTimeout(() => loader?.classList.add('done'), 550)
})

window.addEventListener('scroll', () => {
  navbar?.classList.toggle('scrolled', window.scrollY > 30)
  parallaxElements.forEach((element) => {
    const speed = Number(element.dataset.parallax || 0)
    element.style.transform = `translate3d(0, ${window.scrollY * speed}px, 0)`
  })
}, { passive: true })

menuButton?.addEventListener('click', () => navLinks?.classList.toggle('open'))
navLinks?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => navLinks.classList.remove('open')))

document.addEventListener('mousemove', (event) => {
  if (!glow) return
  glow.style.left = `${event.clientX}px`
  glow.style.top = `${event.clientY}px`
})

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return
    entry.target.classList.add('visible')
    observer.unobserve(entry.target)
  })
}, { threshold: 0.12 })

revealElements.forEach((element) => revealObserver.observe(element))

const animateCount = (element) => {
  const target = Number(element.dataset.count)
  const suffix = element.dataset.suffix || ''
  const start = performance.now()
  const duration = 1400
  const tick = (now) => {
    const progress = Math.min((now - start) / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    element.textContent = `${Math.round(target * eased).toLocaleString()}${suffix}`
    if (progress < 1) requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick)
}

const counterObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return
    animateCount(entry.target)
    observer.unobserve(entry.target)
  })
}, { threshold: 0.5 })

counters.forEach((counter) => counterObserver.observe(counter))

document.querySelectorAll('.magnetic').forEach((button) => {
  button.addEventListener('mousemove', (event) => {
    const rect = button.getBoundingClientRect()
    const x = (event.clientX - rect.left - rect.width / 2) * 0.12
    const y = (event.clientY - rect.top - rect.height / 2) * 0.18
    button.style.transform = `translate(${x}px, ${y}px)`
  })
  button.addEventListener('mouseleave', () => {
    button.style.transform = ''
  })
})

const streak = document.querySelector('.streak-grid')
if (streak) {
  streak.setAttribute('aria-label', '28 day coding streak')
}
