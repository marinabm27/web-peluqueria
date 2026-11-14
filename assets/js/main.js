document.addEventListener('DOMContentLoaded', function () {
  initScrollReveal()
  initMobileNav()
  initGaleriaTabs()
  initBeforeAfter()
  initLightbox()
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

/* ---------- Galería: pestañas fijas ---------- */
function initGaleriaTabs () {
  var tabs = document.querySelector('.galeria-tabs')
  if (!tabs) return

  var header = document.querySelector('.site-header')
  var list = tabs.querySelector('.galeria-tabs__list')
  var links = tabs.querySelectorAll('a[href^="#"]')
  var root = document.documentElement

  function setOffsets () {
    if (header && !header.classList.contains('nav-open')) {
      root.style.setProperty('--header-h', header.offsetHeight + 'px')
    }
    root.style.setProperty('--tabs-h', tabs.offsetHeight + 'px')
  }
  setOffsets()
  window.addEventListener('resize', setOffsets)

  function setActive (id) {
    for (var i = 0; i < links.length; i++) {
      var isActive = links[i].getAttribute('href') === '#' + id
      links[i].classList.toggle('is-active', isActive)
      if (isActive) {
        links[i].setAttribute('aria-current', 'true')
        // Mantener visible la pestaña activa en móvil sin mover la página
        var link = links[i]
        var left = link.offsetLeft - list.offsetLeft
        if (left < list.scrollLeft || left + link.offsetWidth > list.scrollLeft + list.clientWidth) {
          list.scrollLeft = left - 16
        }
      } else {
        links[i].removeAttribute('aria-current')
      }
    }
  }

  if (!('IntersectionObserver' in window)) return

  var observer = new IntersectionObserver(function (entries) {
    for (var i = 0; i < entries.length; i++) {
      if (entries[i].isIntersecting) setActive(entries[i].target.id)
    }
  }, { rootMargin: '-35% 0px -60% 0px' })

  for (var i = 0; i < links.length; i++) {
    var section = document.getElementById(links[i].getAttribute('href').slice(1))
    if (section) observer.observe(section)
  }
}

/* ---------- Galería: comparador antes / después ---------- */
function initBeforeAfter () {
  var items = document.querySelectorAll('.ba')
  if (!items.length) return

  var hintObserver = 'IntersectionObserver' in window
    ? new IntersectionObserver(function (entries) {
      for (var i = 0; i < entries.length; i++) {
        if (entries[i].isIntersecting) {
          entries[i].target.classList.add('ba--hint')
          hintObserver.unobserve(entries[i].target)
        }
      }
    }, { threshold: 0.6 })
    : null

  for (var i = 0; i < items.length; i++) {
    setupBeforeAfter(items[i], hintObserver)
  }
}

function setupBeforeAfter (ba, hintObserver) {
  var frame = ba.querySelector('.ba__frame')
  if (!frame) return

  var handle = document.createElement('span')
  handle.className = 'ba__handle'
  handle.setAttribute('aria-hidden', 'true')

  var range = document.createElement('input')
  range.type = 'range'
  range.className = 'ba__range'
  range.min = '0'
  range.max = '100'
  range.value = '50'
  range.setAttribute('aria-label', 'Comparar antes y después: mueve a la izquierda para ver el después y a la derecha para ver el antes')

  frame.appendChild(handle)
  frame.appendChild(range)
  ba.classList.add('ba--slider')

  function setPos (value) {
    var v = Math.max(0, Math.min(100, value))
    frame.style.setProperty('--pos', v + '%')
    range.value = String(Math.round(v))
  }

  function stopHint () {
    ba.classList.remove('ba--hint')
    if (hintObserver) hintObserver.unobserve(ba)
  }

  function fromEvent (e) {
    var rect = frame.getBoundingClientRect()
    setPos(((e.clientX - rect.left) / rect.width) * 100)
  }

  var dragging = false

  frame.addEventListener('pointerdown', function (e) {
    if (e.button !== undefined && e.button !== 0) return
    e.preventDefault() // evita el arrastre nativo de la imagen y la selección
    dragging = true
    stopHint()
    if (frame.setPointerCapture) frame.setPointerCapture(e.pointerId)
    fromEvent(e)
  })

  frame.addEventListener('dragstart', function (e) { e.preventDefault() })

  frame.addEventListener('pointermove', function (e) {
    if (dragging) fromEvent(e)
  })

  function endDrag () { dragging = false }
  frame.addEventListener('pointerup', endDrag)
  frame.addEventListener('pointercancel', endDrag)

  range.addEventListener('input', function () {
    stopHint()
    setPos(Number(range.value))
  })

  frame.addEventListener('animationend', function () {
    ba.classList.remove('ba--hint')
  })

  if (hintObserver) hintObserver.observe(ba)
}

/* ---------- Galería: visor de fotos ---------- */
function initLightbox () {
  var dialog = document.querySelector('.lightbox')
  var galleries = document.querySelectorAll('[data-gallery]')
  // Sin <dialog> los enlaces abren la foto directamente
  if (!dialog || typeof dialog.showModal !== 'function' || !galleries.length) return

  var img = dialog.querySelector('.lightbox__img')
  var count = dialog.querySelector('.lightbox__count')
  var prevBtn = dialog.querySelector('.lightbox__prev')
  var nextBtn = dialog.querySelector('.lightbox__next')
  var items = []
  var index = 0
  var trigger = null

  function show (i) {
    index = (i + items.length) % items.length
    var link = items[index]
    var thumb = link.querySelector('img')
    img.src = link.getAttribute('href')
    img.alt = thumb ? thumb.alt : ''
    count.textContent = (index + 1) + ' / ' + items.length
    var single = items.length < 2
    prevBtn.hidden = single
    nextBtn.hidden = single
  }

  function open (links, i, link) {
    items = links
    trigger = link
    show(i)
    document.documentElement.style.overflow = 'hidden'
    dialog.showModal()
  }

  for (var g = 0; g < galleries.length; g++) {
    (function (links) {
      for (var i = 0; i < links.length; i++) {
        (function (i) {
          links[i].addEventListener('click', function (e) {
            e.preventDefault()
            open(links, i, links[i])
          })
        })(i)
      }
    })(galleries[g].querySelectorAll('a'))
  }

  prevBtn.addEventListener('click', function () { show(index - 1) })
  nextBtn.addEventListener('click', function () { show(index + 1) })
  dialog.querySelector('.lightbox__close').addEventListener('click', function () { dialog.close() })

  dialog.addEventListener('click', function (e) {
    if (e.target === dialog) dialog.close()
  })

  dialog.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') show(index - 1)
    if (e.key === 'ArrowRight') show(index + 1)
  })

  dialog.addEventListener('close', function () {
    document.documentElement.style.overflow = ''
    img.removeAttribute('src')
    if (trigger) trigger.focus()
  })

  var startX = null
  dialog.addEventListener('touchstart', function (e) {
    startX = e.touches.length === 1 ? e.touches[0].clientX : null
  }, { passive: true })

  dialog.addEventListener('touchend', function (e) {
    if (startX === null) return
    var dx = e.changedTouches[0].clientX - startX
    if (Math.abs(dx) > 50) show(index + (dx < 0 ? 1 : -1))
    startX = null
  })
}
