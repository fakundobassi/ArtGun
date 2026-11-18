/**
 * ARTGUN — JavaScript principal
 * ==============================
 */

document.addEventListener('DOMContentLoaded', () => {

  /* =============================
     NAVEGACIÓN — SCROLL & MOBILE
     ============================= */
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  // Scroll: añadir sombra
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Menú hamburguesa
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('open');
    document.body.style.overflow = navMenu.classList.contains('open') ? 'hidden' : '';
  });

  // Cerrar menú al hacer click en un link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  /* =============================
     CATÁLOGO — RENDERIZADO
     ============================= */
  const grid = document.getElementById('productosGrid');
  let categoriaActiva = 'todos';
  let textoBusqueda = '';

  const CATEGORIAS_LABELS = {
    'abstracto':   'Abstracto',
    'minimalista': 'Minimalista',
    'vintage':     'Vintage',
    'naturaleza':  'Naturaleza',
    'cine-musica': 'Cine y Música',
    'fotografia':  'Fotografía',
    'tipografico': 'Tipográfico',
    'otros':       'Otros'
  };

  function crearTarjetaProducto(producto) {
    const medidasHTML = producto.medidas
      .map(m => `<span class="medida-tag">${m}</span>`)
      .join('');

    const precioFormateado = new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      maximumFractionDigits: 0
    }).format(producto.precio);

    const mensajeWA = encodeURIComponent(
      `Hola ARTGUN! Quisiera consultar por el cuadro "${producto.nombre}". ¿Podrían pasarme más información y disponibilidad?`
    );
    const urlWA = `https://wa.me/5492345683912?text=${mensajeWA}`;

    const badgeHTML = producto.disponible
      ? `<span class="producto-badge">Disponible</span>`
      : `<span class="producto-badge producto-badge-agotado">Sin stock</span>`;

    return `
      <article class="producto-card fade-in" data-id="${producto.id}">
        <div class="producto-imagen-wrap">
          <img
            src="${producto.imagen}"
            alt="${producto.nombre}"
            loading="lazy"
            onerror="this.src='img/placeholder.png'"
          >
          ${badgeHTML}
          <div class="producto-imagen-overlay">
            <div class="overlay-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111" stroke-width="2.5">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </div>
          </div>
        </div>
        <div class="producto-info">
          <p class="producto-categoria">${CATEGORIAS_LABELS[producto.categoria] || producto.categoria}</p>
          <h3 class="producto-nombre">${producto.nombre}</h3>
          <p class="producto-descripcion">${producto.descripcion}</p>
          <div class="producto-medidas">${medidasHTML}</div>
        </div>
        <div class="producto-footer">
          <div class="producto-precio">
            <span class="desde">Desde</span>
            ${precioFormateado}
          </div>
          <a
            href="${urlWA}"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-whatsapp"
            aria-label="Consultar por WhatsApp — ${producto.nombre}"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Pedir
          </a>
        </div>
      </article>
    `;
  }

  function renderizarProductos() {
    const productosFiltrados = PRODUCTOS.filter(p => {
      const matchCategoria = categoriaActiva === 'todos' || p.categoria === categoriaActiva;
      const matchBusqueda = p.nombre.toLowerCase().includes(textoBusqueda.toLowerCase()) ||
                            p.descripcion.toLowerCase().includes(textoBusqueda.toLowerCase());
      return matchCategoria && matchBusqueda;
    });

    if (productosFiltrados.length === 0) {
      grid.innerHTML = `
        <div class="sin-resultados">
          <div class="icono">🎨</div>
          <h3>Sin Resultados</h3>
          <p>No encontramos cuadros que coincidan con tu búsqueda.<br>Intentá con otro término o categoría.</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = productosFiltrados.map(crearTarjetaProducto).join('');

    // Activar fade-in con pequeño delay escalonado
    requestAnimationFrame(() => {
      grid.querySelectorAll('.fade-in').forEach((el, i) => {
        setTimeout(() => {
          el.classList.add('visible');
        }, i * 60);
      });
    });
  }

  /* =============================
     FILTROS
     ============================= */
  document.querySelectorAll('.filtro-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filtro-btn').forEach(b => b.classList.remove('activo'));
      btn.classList.add('activo');
      categoriaActiva = btn.dataset.categoria;
      renderizarProductos();
    });
  });

  /* =============================
     BUSCADOR
     ============================= */
  const buscador = document.getElementById('buscador');
  let debounceTimer;

  buscador.addEventListener('input', (e) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      textoBusqueda = e.target.value.trim();
      renderizarProductos();
    }, 280);
  });

  /* =============================
     OBSERVER — FADE IN
     ============================= */
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  // Función global para re-observar nuevos elementos (productos)
  window.observarNuevos = () => {
    document.querySelectorAll('.fade-in:not(.visible)').forEach(el => observer.observe(el));
  };

  /* =============================
     RENDERIZADO INICIAL
     ============================= */
  renderizarProductos();

  /* =============================
     NAVEGACIÓN SUAVE
     ============================= */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 80;
        const targetY = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: targetY, behavior: 'smooth' });
      }
    });
  });

  /* =============================
     PARALLAX HERO LEVE
     ============================= */
  const heroImg = document.querySelector('.hero-image-col img');
  if (heroImg && window.matchMedia('(min-width: 1024px)').matches) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      heroImg.style.transform = `translateY(${scrolled * 0.2}px)`;
    }, { passive: true });
  }

  /* =============================
     CONTADOR ESTADÍSTICAS ANIMADO
     ============================= */
  function animateCounter(el, target, suffix = '') {
    let current = 0;
    const increment = target / 60;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = Math.floor(current) + suffix;
    }, 20);
  }

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const numbers = entry.target.querySelectorAll('.stat-number[data-target]');
        numbers.forEach(el => {
          const target = parseInt(el.dataset.target);
          const suffix = el.dataset.suffix || '';
          animateCounter(el, target, suffix);
        });
        statsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  const statsBar = document.querySelector('.stats-bar');
  if (statsBar) statsObserver.observe(statsBar);

});
