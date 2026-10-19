/**
 * Nir Nini - Practical Architect (הנדסאי אדריכלות)
 * Editorial Masonry Gallery & Enhanced Lightbox System
 * Supports 2-card homepage preview and full multi-project editorial masonry on gallery.html
 */

let currentProjectIndex = 0;
let currentFilter = 'all';

// Lightbox state
let lightboxImages = [];
let lightboxCurrentIndex = 0;
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('DOMContentLoaded', () => {
  renderPortfolioGrid();
  setupFilterButtons();
  setupModalEvents();
  setupLightboxEvents();

  if (window.location.hash) {
    setTimeout(() => {
      try {
        const hash = window.location.hash;
        if (/^#[a-zA-Z0-9_\-]+$/.test(hash)) {
          const target = document.querySelector(hash);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      } catch (e) {}
    }, 200);
  }
});

/**
 * Render Project Showcases / Cards into the Grid Container
 */
function renderPortfolioGrid() {
  const gridContainer = document.getElementById('projects-grid');
  if (!gridContainer || !window.portfolioData) return;

  gridContainer.classList.add('is-revealed');

  const currentLang = document.documentElement.lang || 'he';
  const projects = window.portfolioData.projects;

  const limitAttr = gridContainer.getAttribute('data-limit');
  const limit = limitAttr ? parseInt(limitAttr, 10) : null;
  const isLimited = limit && Number.isInteger(limit);

  // Filter projects based on active category
  let filtered = projects.filter(p => {
    if (currentFilter === 'all') return true;
    if (p.category === currentFilter) return true;
    if (Array.isArray(p.categories) && p.categories.includes(currentFilter)) return true;
    return false;
  });

  if (isLimited) {
    filtered = filtered.slice(0, limit);
  }

  gridContainer.innerHTML = '';

  // -------------------------------------------------------------
  // Case A: Homepage Limited Preview (e.g. 2 featured cards)
  // -------------------------------------------------------------
  if (isLimited) {
    gridContainer.classList.add('homepage-projects-preview');
    gridContainer.classList.remove('editorial-showcase-container');

    filtered.forEach((project) => {
      const originalIndex = projects.findIndex(p => p.id === project.id);
      const title = project.title[currentLang] || project.title.he;
      const catName = project.categoryName[currentLang] || project.categoryName.he;
      const tagline = project.tagline[currentLang] || project.tagline.he;
      const count = project.gallery.length;

      const altText = currentLang === 'en'
        ? `Architectural visualization of ${title} - Planned by Nir Nini, Architectural Engineer`
        : `הדמיית תלת-ממד אדריכלית של ${title} - תכנון ניר ניני הנדסאי אדריכלות`;

      const card = document.createElement('article');
      card.className = 'editorial-card project-card featured-preview-card';
      card.setAttribute('data-id', project.id);

      card.innerHTML = `
        <div class="project-media">
          <img src="${project.heroImage}" alt="${altText}" loading="lazy" />
          <span class="preview-count-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <circle cx="8.5" cy="8.5" r="1.5"></circle>
              <polyline points="21 15 16 10 5 21"></polyline>
            </svg>
            ${count} ${currentLang === 'en' ? (count === 1 ? 'Architectural View' : 'Views') : (count === 1 ? 'מבט אדריכלי' : 'מבטים אדריכליים')}
          </span>
        </div>
        <div class="project-caption">
          <span class="caption-cat">${catName}</span>
          <h3 class="caption-title">${title}</h3>
          <p class="caption-tagline">${tagline}</p>
          <div class="caption-actions-group">
            <div class="caption-action">
              <span>${currentLang === 'en' ? 'Explore Project Gallery' : 'צפייה בגלריית הפרויקט המלאה'}</span>
              <span class="caption-arrow">${currentLang === 'en' ? '→' : '←'}</span>
            </div>
            <a href="index.html?project=${encodeURIComponent(title)}#contact" class="btn-card-inquire" title="${currentLang === 'en' ? 'Interested in this project? Let\'s talk' : 'מתעניינים בפרויקט? בואו נדבר'}">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
              <span>${currentLang === 'en' ? 'Interested? Let\'s talk' : 'מתעניינים בפרויקט? בואו נדבר'}</span>
            </a>
          </div>
        </div>
      `;

      card.addEventListener('click', () => {
        openProjectModal(originalIndex);
      });

      const cardInquireBtn = card.querySelector('.btn-card-inquire');
      if (cardInquireBtn) {
        cardInquireBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          if (typeof window.prefillProjectInquiry === 'function') {
            e.preventDefault();
            window.prefillProjectInquiry(title);
          }
        });
      }

      gridContainer.appendChild(card);
    });

    if (typeof window.initScrollReveal === 'function') {
      window.initScrollReveal();
    }
    return;
  }

  // -------------------------------------------------------------
  // Case B: Full Editorial Masonry Gallery (gallery.html)
  // -------------------------------------------------------------
  gridContainer.classList.remove('homepage-projects-preview');
  gridContainer.classList.add('editorial-showcase-container');

  if (filtered.length === 0) {
    gridContainer.innerHTML = `
      <div style="text-align: center; padding: 4rem 1rem; color: #64748b; grid-column: 1 / -1;">
        <h3>לא נמצאו פרויקטים בקטגוריה זו</h3>
      </div>
    `;
    return;
  }

  filtered.forEach((project, fIndex) => {
    const originalIndex = projects.findIndex(p => p.id === project.id);
    const title = project.title[currentLang] || project.title.he;
    const catName = project.categoryName[currentLang] || project.categoryName.he;
    const tagline = project.tagline[currentLang] || project.tagline.he;
    const allImages = project.gallery;
    const totalCount = allImages.length;

    // Build the Project Showcase Block
    const showcaseSection = document.createElement('section');
    showcaseSection.className = 'project-showcase is-revealed';
    showcaseSection.setAttribute('id', project.id);

    // 1. Showcase Header
    const headerHtml = `
      <div class="project-showcase-header">
        <div class="project-header-meta">
          <div class="project-meta-top">
            <span class="project-index-pill">PROJECT ${project.number || String(fIndex + 1).padStart(2, '0')}</span>
            <span class="project-category-tag">${catName}</span>
            <span class="project-count-pill">${totalCount} ${currentLang === 'en' ? (totalCount === 1 ? 'Architectural View' : 'Architectural Views') : (totalCount === 1 ? 'מבט אדריכלי' : 'מבטים אדריכליים')}</span>
          </div>
          <h2 class="project-showcase-title">${title}</h2>
          <p class="project-showcase-tagline">${tagline}</p>
        </div>
        <div class="project-header-cta">
          <a href="index.html?project=${encodeURIComponent(title)}#contact" class="btn-project-inquire" title="${currentLang === 'en' ? 'Interested in this project? Let\'s talk' : 'מתעניינים בפרויקט? בואו נדבר'}">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            <span>${currentLang === 'en' ? 'Interested? Let\'s talk' : 'מתעניינים בפרויקט? בואו נדבר'}</span>
          </a>
          <button class="btn-project-explore" data-project-index="${originalIndex}">
            <span>${currentLang === 'en' ? 'Full Project Showcase' : 'לצפייה בגלריית הפרויקט המלאה'}</span>
            <span class="btn-arrow">${currentLang === 'en' ? '→' : '←'}</span>
          </button>
        </div>
      </div>
    `;

    // 2. Editorial Masonry Grid for this Project
    // Display up to 8 featured shots in the collage, plus an expand tile if more exist
    const maxPreview = totalCount > 8 ? 7 : totalCount;
    const previewImages = allImages.slice(0, maxPreview);
    const remainingCount = totalCount - maxPreview;

    let gridHtml = `<div class="editorial-masonry-grid">`;

    previewImages.forEach((imgObj, imgIndex) => {
      const imgTitle = imgObj.title[currentLang] || imgObj.title.he;
      const imgCaption = imgObj.caption[currentLang] || imgObj.caption.he;
      
      // Determine layout sizing class
      let sizeClass = 'item-standard';
      if (imgIndex === 0) {
        sizeClass = 'item-hero-large'; // Prominent main hero
      } else if (imgIndex === 1 || imgIndex === 2) {
        sizeClass = 'item-featured-medium';
      }

      gridHtml += `
        <div class="masonry-tile ${sizeClass}" 
             data-project-index="${originalIndex}" 
             data-image-index="${imgIndex}">
          <div class="tile-image-wrap">
            <img src="${imgObj.url}" alt="${imgTitle} - ${title}" loading="lazy" />
          </div>
          <div class="tile-caption-overlay">
            <div class="tile-caption-content">
              <span class="tile-number">${String(imgIndex + 1).padStart(2, '0')}</span>
              <h4 class="tile-title">${imgTitle}</h4>
              <p class="tile-desc">${imgCaption}</p>
              <a href="index.html?project=${encodeURIComponent(title + ' - ' + imgTitle)}#contact" class="tile-inquire-pill" title="${currentLang === 'en' ? 'Inquire about this view' : 'מתעניינים בפרויקט? בואו נדבר'}">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                <span>${currentLang === 'en' ? 'Interested? Let\'s talk' : 'מתעניינים בפרויקט? בואו נדבר'}</span>
              </a>
            </div>
            <div class="tile-zoom-icon" title="${currentLang === 'en' ? 'Zoom view' : 'הגדל מבט'}">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                <line x1="11" y1="8" x2="11" y2="14"></line>
                <line x1="8" y1="11" x2="14" y2="11"></line>
              </svg>
            </div>
          </div>
        </div>
      `;
    });

    // If there are more photos, render the "+X More" interactive tile
    if (remainingCount > 0) {
      gridHtml += `
        <div class="masonry-tile item-more-tile" data-project-index="${originalIndex}">
          <div class="more-tile-inner">
            <span class="more-plus">+${remainingCount}</span>
            <span class="more-label">${currentLang === 'en' ? 'More Views in this Project' : 'מבטים נוספים בפרויקט'}</span>
            <span class="more-action-link">
              ${currentLang === 'en' ? 'Open Complete Gallery' : 'פתיחת הגלריה המלאה'}
              <span class="more-arrow">${currentLang === 'en' ? '→' : '←'}</span>
            </span>
          </div>
        </div>
      `;
    }

    gridHtml += `</div>`; // Close editorial-masonry-grid

    showcaseSection.innerHTML = headerHtml + gridHtml;

    // Attach click events to tiles
    const tiles = showcaseSection.querySelectorAll('.masonry-tile:not(.item-more-tile)');
    tiles.forEach(tile => {
      tile.addEventListener('click', () => {
        const pIdx = parseInt(tile.getAttribute('data-project-index'), 10);
        const iIdx = parseInt(tile.getAttribute('data-image-index'), 10);
        openProjectLightbox(pIdx, iIdx);
      });
    });

    // Inquire pills stop propagation
    const inquirePills = showcaseSection.querySelectorAll('.tile-inquire-pill');
    inquirePills.forEach(pill => {
      pill.addEventListener('click', (e) => {
        e.stopPropagation();
      });
    });

    // Tile "more" button
    const moreTile = showcaseSection.querySelector('.item-more-tile');
    if (moreTile) {
      moreTile.addEventListener('click', () => {
        const pIdx = parseInt(moreTile.getAttribute('data-project-index'), 10);
        openProjectModal(pIdx);
      });
    }

    // Header explore button
    const exploreBtn = showcaseSection.querySelector('.btn-project-explore');
    if (exploreBtn) {
      exploreBtn.addEventListener('click', () => {
        const pIdx = parseInt(exploreBtn.getAttribute('data-project-index'), 10);
        openProjectModal(pIdx);
      });
    }

    gridContainer.appendChild(showcaseSection);
  });

  if (typeof window.initScrollReveal === 'function') {
    window.initScrollReveal();
  }
}

// Make accessible globally
window.renderPortfolioGrid = renderPortfolioGrid;

/**
 * Filter Buttons Setup (Active on gallery.html)
 */
function setupFilterButtons() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  if (!filterBtns || filterBtns.length === 0) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.getAttribute('data-filter') || 'all';
      renderPortfolioGrid();
    });
  });
}

/**
 * Open Project Detail Modal (Full Project Exhibition)
 */
function openProjectModal(index) {
  const modal = document.getElementById('project-modal');
  if (!modal || !window.portfolioData) return;

  const projects = window.portfolioData.projects;
  if (!projects[index]) return;

  currentProjectIndex = index;
  const project = projects[index];
  const currentLang = document.documentElement.lang || 'he';

  // Title and category
  const titleEl = document.getElementById('modal-title');
  const catEl = document.getElementById('modal-cat');
  if (titleEl) titleEl.textContent = project.title[currentLang] || project.title.he;
  if (catEl) {
    const viewsLabel = currentLang === 'en'
      ? `${project.gallery.length} ${project.gallery.length === 1 ? 'View' : 'Views'}`
      : `${project.gallery.length} ${project.gallery.length === 1 ? 'מבט אדריכלי' : 'מבטים'}`;
    catEl.textContent = `${project.categoryName[currentLang] || project.categoryName.he} • ${viewsLabel}`;
  }

  // Update link to project in full gallery
  const galleryLink = document.getElementById('modal-gallery-link');
  if (galleryLink) {
    galleryLink.href = `gallery.html#${project.id}`;
  }

  // Update modal contact inquiry link
  const modalContactLink = document.getElementById('modal-contact-link');
  if (modalContactLink) {
    const projTitle = project.title[currentLang] || project.title.he;
    modalContactLink.href = `index.html?project=${encodeURIComponent(projTitle)}#contact`;
    modalContactLink.onclick = (e) => {
      const isIndex = window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || !window.location.pathname.includes('.html');
      if (isIndex && typeof window.prefillProjectInquiry === 'function') {
        e.preventDefault();
        closeProjectModal();
        window.prefillProjectInquiry(projTitle);
      }
    };
  }

  // Hero Image
  const heroImg = document.getElementById('modal-hero-img');
  if (heroImg) {
    heroImg.src = project.heroImage;
    const heroTitle = project.title[currentLang] || project.title.he;
    heroImg.alt = currentLang === 'en'
      ? `Detailed 3D architectural render of ${heroTitle} - Nir Nini Architectural Engineer`
      : `הדמיית תלת-ממד אדריכלית מפורטת של ${heroTitle} - ניר ניני הנדסאי אדריכלות`;
    heroImg.onclick = () => openProjectLightbox(index, 0);
    heroImg.style.cursor = 'zoom-in';
  }

  // Description
  const descEl = document.getElementById('modal-desc');
  if (descEl) descEl.textContent = project.description[currentLang] || project.description.he;

  // Populate Specs
  const specCat = document.getElementById('modal-spec-category');
  if (specCat) specCat.textContent = project.categoryName[currentLang] || project.categoryName.he;

  // Populate Gallery Tab with ALL images of this project
  const galleryGrid = document.getElementById('modal-gallery-grid');
  if (galleryGrid && project.gallery) {
    galleryGrid.innerHTML = '';
    project.gallery.forEach((imgObj, gIndex) => {
      const item = document.createElement('div');
      item.className = 'modal-gallery-item';
      const itemTitle = imgObj.title[currentLang] || imgObj.title.he;
      const thumbAlt = `${itemTitle} - ${project.title[currentLang] || project.title.he}`;
      
      item.innerHTML = `
        <div class="modal-thumb-wrap">
          <img src="${imgObj.url}" alt="${thumbAlt}" loading="lazy" />
          <span class="modal-thumb-num">${String(gIndex + 1).padStart(2, '0')}</span>
        </div>
        <div class="modal-thumb-caption">
          <span class="modal-thumb-title">${itemTitle}</span>
        </div>
      `;
      
      item.addEventListener('click', () => {
        openProjectLightbox(index, gIndex);
      });
      galleryGrid.appendChild(item);
    });
  }

  // Populate Materials Tab
  const materialsGrid = document.getElementById('modal-materials-grid');
  if (materialsGrid && project.materials) {
    materialsGrid.innerHTML = '';
    project.materials.forEach((mat, mIndex) => {
      const card = document.createElement('div');
      card.className = 'material-card';
      const label = currentLang === 'en' ? (mat.en || mat.he) : mat.he;
      card.innerHTML = `
        <span class="material-card-icon">${currentLang === 'en' ? 'SPEC' : 'מפרט חומרים'} 0${mIndex + 1}</span>
        <h4 class="material-card-title">${label}</h4>
      `;
      materialsGrid.appendChild(card);
    });
  }

  // Reset tab to overview
  activateTab('overview');

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

/**
 * Close Project Detail Modal
 */
function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  if (!modal) return;
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

/**
 * Modal Event Listeners
 */
function setupModalEvents() {
  const closeBtn = document.getElementById('modal-close-btn');
  const modal = document.getElementById('project-modal');
  const prevBtn = document.getElementById('modal-prev-btn');
  const nextBtn = document.getElementById('modal-next-btn');

  if (closeBtn) closeBtn.addEventListener('click', closeProjectModal);

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeProjectModal();
    });
  }

  // Navigation Prev / Next project
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      const projects = window.portfolioData.projects;
      const prevIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
      openProjectModal(prevIndex);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      const projects = window.portfolioData.projects;
      const nextIndex = (currentProjectIndex + 1) % projects.length;
      openProjectModal(nextIndex);
    });
  }

  // Tab switching
  const tabBtns = document.querySelectorAll('.modal-tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabName = btn.getAttribute('data-tab');
      activateTab(tabName);
    });
  });

  // ESC key to close modal or lightbox
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const lightbox = document.getElementById('lightbox-modal');
      if (lightbox && lightbox.classList.contains('active')) {
        closeLightbox();
      } else {
        closeProjectModal();
      }
    } else if (e.key === 'ArrowRight') {
      navigateLightbox(1);
    } else if (e.key === 'ArrowLeft') {
      navigateLightbox(-1);
    }
  });
}

/**
 * Activate a Modal Tab
 */
function activateTab(tabName) {
  const tabBtns = document.querySelectorAll('.modal-tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  tabBtns.forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-tab') === tabName);
  });

  tabPanes.forEach(pane => {
    pane.classList.toggle('active', pane.id === `tab-${tabName}`);
  });
}

/**
 * Lightbox Events & Navigation
 */
function setupLightboxEvents() {
  const lightbox = document.getElementById('lightbox-modal');
  const closeBtn = document.getElementById('lightbox-close');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      navigateLightbox(-1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      navigateLightbox(1);
    });
  }

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox || e.target.classList.contains('lightbox-content-box')) {
        closeLightbox();
      }
    });

    // Touch swipe support for mobile
    lightbox.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    lightbox.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleTouchSwipe();
    }, { passive: true });
  }
}

function handleTouchSwipe() {
  const threshold = 40;
  const isRTL = document.documentElement.dir === 'rtl';
  const diff = touchEndX - touchStartX;

  if (Math.abs(diff) > threshold) {
    if (diff > 0) {
      // Swiped right
      navigateLightbox(isRTL ? 1 : -1);
    } else {
      // Swiped left
      navigateLightbox(isRTL ? -1 : 1);
    }
  }
}

/**
 * Open Lightbox for a specific project and image index
 */
function openProjectLightbox(projectIndex, imageIndex) {
  const projects = window.portfolioData.projects;
  if (!projects[projectIndex]) return;

  const project = projects[projectIndex];
  lightboxImages = project.gallery.map(img => ({
    ...img,
    projectName: project.title
  }));
  lightboxCurrentIndex = imageIndex;

  updateLightboxView();

  const lightbox = document.getElementById('lightbox-modal');
  if (lightbox) {
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

/**
 * Direct legacy openLightbox(imgUrl) support
 */
function openLightbox(imgUrl) {
  // Find which project/image this belongs to, or create single-item list
  let found = false;
  const projects = window.portfolioData.projects;
  for (let pIdx = 0; pIdx < projects.length; pIdx++) {
    const gIdx = projects[pIdx].gallery.findIndex(g => g.url === imgUrl);
    if (gIdx !== -1) {
      openProjectLightbox(pIdx, gIdx);
      found = true;
      break;
    }
  }

  if (!found) {
    lightboxImages = [{
      url: imgUrl,
      title: { he: "מבט מוגדל", en: "Zoom View" },
      caption: { he: "", en: "" },
      projectName: { he: "", en: "" }
    }];
    lightboxCurrentIndex = 0;
    updateLightboxView();
    const lightbox = document.getElementById('lightbox-modal');
    if (lightbox) lightbox.classList.add('active');
  }
}

/**
 * Navigate Lightbox images (direction: +1 or -1)
 */
function navigateLightbox(direction) {
  const lightbox = document.getElementById('lightbox-modal');
  if (!lightbox || !lightbox.classList.contains('active')) return;
  if (!lightboxImages || lightboxImages.length === 0) return;

  lightboxCurrentIndex = (lightboxCurrentIndex + direction + lightboxImages.length) % lightboxImages.length;
  updateLightboxView();
}

/**
 * Update Lightbox Image, Caption, and Counter
 */
function updateLightboxView() {
  const lightboxImg = document.getElementById('lightbox-img');
  const captionEl = document.getElementById('lightbox-caption');
  const counterEl = document.getElementById('lightbox-counter');
  const currentLang = document.documentElement.lang || 'he';

  if (!lightboxImages || lightboxImages.length === 0) return;
  const currentItem = lightboxImages[lightboxCurrentIndex];

  if (lightboxImg) {
    lightboxImg.src = currentItem.url;
    const titleText = currentItem.title[currentLang] || currentItem.title.he;
    lightboxImg.alt = titleText;
  }

  if (captionEl) {
    const titleText = currentItem.title[currentLang] || currentItem.title.he;
    const projectText = currentItem.projectName ? (currentItem.projectName[currentLang] || currentItem.projectName.he) : '';
    captionEl.innerHTML = `<strong>${titleText}</strong>${projectText ? ` <span class="caption-divider">•</span> <span>${projectText}</span>` : ''}`;
  }

  if (counterEl) {
    counterEl.textContent = `${String(lightboxCurrentIndex + 1).padStart(2, '0')} / ${String(lightboxImages.length).padStart(2, '0')}`;
  }

  // Update Lightbox Contact CTA
  const contactBtn = document.getElementById('lightbox-contact-btn');
  if (contactBtn) {
    const pName = currentItem.projectName ? (currentItem.projectName[currentLang] || currentItem.projectName.he) : '';
    const imgTitle = currentItem.title ? (currentItem.title[currentLang] || currentItem.title.he) : '';
    const paramVal = pName ? (imgTitle ? `${pName} - ${imgTitle}` : pName) : imgTitle;
    contactBtn.href = `index.html?project=${encodeURIComponent(paramVal)}#contact`;
    contactBtn.onclick = (e) => {
      const isIndex = window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || !window.location.pathname.includes('.html');
      if (isIndex && typeof window.prefillProjectInquiry === 'function') {
        e.preventDefault();
        closeLightbox();
        closeProjectModal();
        window.prefillProjectInquiry(paramVal);
      }
    };
    const contactText = document.getElementById('lightbox-contact-text');
    if (contactText) {
      contactText.textContent = currentLang === 'en' ? "Interested? Let's talk" : "מתעניינים בפרויקט? בואו נדבר";
    }
  }
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox-modal');
  if (!lightbox) return;
  lightbox.classList.remove('active');

  // If project modal is not open, restore scroll
  const modal = document.getElementById('project-modal');
  if (!modal || !modal.classList.contains('active')) {
    document.body.style.overflow = '';
  }
}
