document.addEventListener('DOMContentLoaded', function () {
  initScrollReveal()
  initMobileNav()
})

function initScrollReveal () {
  var revealEls = document.querySelectorAll('.reveal')
  if (!revealEls.length) return

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  var hasObserver = 'IntersectionObserver' in window

  if (!hasObserver || prefersReducedMotion) {
    for (var i = 0; i < revealEls.length; i++) {
      revealEls[i].classList.add('is-visible')
    }
    return
  }

  var observer = new IntersectionObserver(function (entries) {
    for (var i = 0; i < entries.length; i++) {
      if (entries[i].isIntersecting) {
        entries[i].target.classList.add('is-visible')
        observer.unobserve(entries[i].target)
      }
    }
  }, { threshold: 0.1 })

  for (var i = 0; i < revealEls.length; i++) {
    observer.observe(revealEls[i])
  }
}

function initMobileNav () {
  var toggle = document.querySelector('.nav-toggle')
  var nav = document.querySelector('#site-nav')
  var header = document.querySelector('.site-header')
  if (!toggle || !nav || !header) return

  toggle.addEventListener('click', function () {
    var isOpen = header.classList.toggle('nav-open')
    toggle.setAttribute('aria-expanded', isOpen)
    toggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú')
  })

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && header.classList.contains('nav-open')) {
      header.classList.remove('nav-open')
      toggle.setAttribute('aria-expanded', 'false')
      toggle.setAttribute('aria-label', 'Abrir menú')
      toggle.focus()
    }
  })

  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      header.classList.remove('nav-open')
      toggle.setAttribute('aria-expanded', 'false')
      toggle.setAttribute('aria-label', 'Abrir menú')
    }
  })
}
