// ================================================================
// HOT N TASTY ROLL — Main Script
// ================================================================

const API_BASE_URL = window.location.hostname === 'localhost' 
    ? 'http://localhost:3000/api'
    : '/api';

// ================================================================
// TOAST SYSTEM
// ================================================================
const TOAST_ICONS = {
  success: 'fa-circle-check',
  error:   'fa-circle-xmark',
  info:    'fa-circle-info',
  warning: 'fa-triangle-exclamation',
};
const TOAST_TITLES = {
  success: 'Success',
  error:   'Error',
  info:    'Info',
  warning: 'Heads Up',
};

function showToast(type = 'info', message = '', { title, duration = 4000 } = {}) {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const t = document.createElement('div');
  t.className = `toast toast-${type}`;
  const resolvedTitle = title || TOAST_TITLES[type];
  const durationSec = duration / 1000;
  t.innerHTML = `
    <div class="toast-icon-wrap"><i class="fas ${TOAST_ICONS[type]}"></i></div>
    <div class="toast-body">
      <div class="toast-title">${resolvedTitle}</div>
      <div class="toast-message">${message}</div>
    </div>
    <button class="toast-close" aria-label="Close"><i class="fas fa-times"></i></button>
    <div class="toast-progress" style="animation-duration: ${durationSec}s"></div>
  `;
  container.appendChild(t);
  t.querySelector('.toast-close').addEventListener('click', () => dismissToast(t));
  const timer = setTimeout(() => dismissToast(t), duration);
  t._timer = timer;
  t.addEventListener('mouseenter', () => {
    clearTimeout(t._timer);
    t.querySelector('.toast-progress').style.animationPlayState = 'paused';
  });
  t.addEventListener('mouseleave', () => {
    t.querySelector('.toast-progress').style.animationPlayState = 'running';
    t._timer = setTimeout(() => dismissToast(t), 1500);
  });
  return t;
}

function dismissToast(el) {
  if (!el || el._dismissed) return;
  el._dismissed = true;
  el.classList.add('toast-exit');
  el.addEventListener('animationend', () => el.remove(), { once: true });
  setTimeout(() => el.remove(), 500);
}

const toast = {
  success: (msg, opts) => showToast('success', msg, opts),
  error:   (msg, opts) => showToast('error',   msg, opts),
  info:    (msg, opts) => showToast('info',    msg, opts),
  warning: (msg, opts) => showToast('warning', msg, opts),
};

// ================================================================
// NAVIGATION
// ================================================================
const PAGES = {
  home:       document.getElementById('homePage'),
  about:      document.getElementById('aboutPage'),
  menu:       document.getElementById('menuPage'),
  deals:      document.getElementById('dealsPage'),
  favorites:  document.getElementById('favoritesPage'),
  collection: document.getElementById('collectionPage'),
};

let currentPage = 'home';

function nav(page) {
  if (!PAGES[page]) return;
  Object.values(PAGES).forEach(p => { if (p) p.style.display = 'none'; });
  PAGES[page].style.display = 'block';
  currentPage = page;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  document.querySelectorAll('.nav-link').forEach(l => {
    l.classList.toggle('act', l.dataset.nav === page);
  });
  document.querySelectorAll('.sidebar-link').forEach(l => {
    l.classList.toggle('active-sidebar-link', l.dataset.nav === page);
  });
  if (page === 'menu')        renderMenuPage();
  if (page === 'deals')       renderDealsPage();
  if (page === 'favorites')   renderFavorites();
  if (page === 'collection')  renderCollection();
  closeSidebar();
}

document.querySelectorAll('[data-nav]').forEach(el => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    nav(el.dataset.nav);
  });
});

// ================================================================
// BACKGROUND SLIDER
// ================================================================
const slides = document.querySelectorAll('.slide');
let slideIdx = 0;
if (slides.length) {
  setInterval(() => {
    slides[slideIdx].classList.remove('on');
    slideIdx = (slideIdx + 1) % slides.length;
    slides[slideIdx].classList.add('on');
  }, 5000);
}

// ================================================================
// NAVBAR SCROLL
// ================================================================
const mainNav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
  if (mainNav) mainNav.classList.toggle('scrolled', window.scrollY > 30);
});

// ================================================================
// TYPEWRITER
// ================================================================
const typeEl = document.getElementById('type');
const phrases = [
  'Experience Karachi\'s most delicious signature rolls, made fresh daily with premium ingredients.',
  'From sizzling BBQ platters to juicy burgers, every bite tells a story of authentic flavors.',
  'Explore our 80+ menu items including Pizza, Chinese, and much more.',
  'Order now for fast delivery across Karachi, your favorite meal is just a click away.',
];
let pi = 0, ci = 0, deleting = false;
function typewriter() {
  if (!typeEl) return;
  const cur = phrases[pi];
  typeEl.textContent = deleting ? cur.slice(0, ci--) : cur.slice(0, ci++);
  if (!deleting && ci > cur.length)  { deleting = true; setTimeout(typewriter, 2000); return; }
  if (deleting  && ci < 0)           { deleting = false; pi = (pi+1)%phrases.length; ci = 0; }
  setTimeout(typewriter, deleting ? 40 : 65);
}
typewriter();

// ================================================================
// SCROLL REVEAL
// ================================================================
const revealEls = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });
revealEls.forEach(el => obs.observe(el));

// ================================================================
// SIDEBAR
// ================================================================
const hamBtn = document.getElementById('hamBtn');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const closeSidebarBtn = document.getElementById('closeSidebarBtn');

function openSidebar() {
  if (sidebar) sidebar.classList.add('open');
  if (sidebarOverlay) sidebarOverlay.classList.add('open');
  if (hamBtn) hamBtn.classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeSidebar() {
  if (sidebar) sidebar.classList.remove('open');
  if (sidebarOverlay) sidebarOverlay.classList.remove('open');
  if (hamBtn) hamBtn.classList.remove('active');
  document.body.style.overflow = '';
}

if (hamBtn) {
  hamBtn.addEventListener('click', () => {
    sidebar && sidebar.classList.contains('open') ? closeSidebar() : openSidebar();
  });
}
if (closeSidebarBtn) closeSidebarBtn.addEventListener('click', closeSidebar);
if (sidebarOverlay) sidebarOverlay.addEventListener('click', closeSidebar);

document.querySelectorAll('.sidebar-link-dropdown').forEach(dropdown => {
  const link = dropdown.querySelector('.sidebar-link');
  if (link) {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      document.querySelectorAll('.sidebar-link-dropdown').forEach(other => {
        if (other !== dropdown && other.classList.contains('open')) {
          other.classList.remove('open');
          const otherMenu = other.querySelector('.sidebar-dropdown-menu');
          if (otherMenu) otherMenu.classList.remove('open');
        }
      });
      dropdown.classList.toggle('open');
      const menu = dropdown.querySelector('.sidebar-dropdown-menu');
      if (menu) menu.classList.toggle('open');
    });
  }
});

// ================================================================
// EXPLORE BUTTONS
// ================================================================
document.getElementById('exploreBtn')?.addEventListener('click', () => nav('menu'));
document.getElementById('exploreAboutBtn')?.addEventListener('click', () => nav('menu'));

// ================================================================
// DATA VARIABLES
// ================================================================
let menuData = [];
let dealsData = [];
let activeCategory = 'All';
let currentUser = null;
const DEFAULT_IMAGE_URL = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=400&fit=crop';

function getCurrentUserId() {
    return currentUser?.id || null;
}

// ================================================================
// FAVORITES API
// ================================================================
async function fetchFavoritesFromAPI() {
    const userId = getCurrentUserId();
    if (!userId) return [];
    try {
        const response = await fetch(`${API_BASE_URL}/favorites/${userId}`);
        const data = await response.json();
        return data.favorites || [];
    } catch (error) { return []; }
}

async function addToFavoritesAPI(item) {
    const userId = getCurrentUserId();
    if (!userId) { toast.warning('Please login to add favorites'); return false; }
    try {
        const response = await fetch(`${API_BASE_URL}/favorites`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId, itemId: item.id, itemName: item.name, itemCategory: item.category, itemPrice: item.price, itemImage: item.img })
        });
        const data = await response.json();
        if (data.success) { toast.success(`Added "${item.name}" to favorites`); return true; }
        return false;
    } catch (error) { toast.error('Failed to add to favorites'); return false; }
}

async function removeFromFavoritesAPI(itemId) {
    const userId = getCurrentUserId();
    if (!userId) return false;
    try {
        const response = await fetch(`${API_BASE_URL}/favorites/${userId}/${itemId}`, { method: 'DELETE' });
        const data = await response.json();
        if (data.success) { toast.info('Removed from favorites'); return true; }
        return false;
    } catch (error) { toast.error('Failed to remove from favorites'); return false; }
}

// ================================================================
// COLLECTIONS API
// ================================================================
async function fetchCollectionsFromAPI() {
    const userId = getCurrentUserId();
    if (!userId) return [];
    try {
        const response = await fetch(`${API_BASE_URL}/collections/${userId}`);
        const data = await response.json();
        return data.collections || [];
    } catch (error) { return []; }
}

async function addToCollectionAPI(item, note = '') {
    const userId = getCurrentUserId();
    if (!userId) { toast.warning('Please login to save to collection'); return false; }
    try {
        const response = await fetch(`${API_BASE_URL}/collections`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId, itemId: item.id, itemName: item.name, itemCategory: item.category, itemPrice: item.price, itemImage: item.img, note })
        });
        const data = await response.json();
        if (data.success) { toast.success(`Saved "${item.name}" to collection`); return true; }
        return false;
    } catch (error) { toast.error('Failed to save to collection'); return false; }
}

async function removeFromCollectionAPI(itemId) {
    const userId = getCurrentUserId();
    if (!userId) return false;
    try {
        const response = await fetch(`${API_BASE_URL}/collections/${userId}/${itemId}`, { method: 'DELETE' });
        const data = await response.json();
        if (data.success) { toast.info('Removed from collection'); return true; }
        return false;
    } catch (error) { toast.error('Failed to remove from collection'); return false; }
}

// ================================================================
// TOGGLE FUNCTIONS
// ================================================================
async function toggleFavorite(itemId) {
    const item = [...menuData, ...dealsData].find(i => i.id == itemId);
    if (!item) return;
    const favorites = await fetchFavoritesFromAPI();
    const isFav = favorites.some(f => f.item_id == itemId);
    if (isFav) { await removeFromFavoritesAPI(itemId); } else { await addToFavoritesAPI(item); }
    refreshHearts();
    if (currentPage === 'favorites') renderFavorites();
    if (currentPage === 'collection') renderCollection();
}

async function toggleCollection(itemId) {
    const item = [...menuData, ...dealsData].find(i => i.id == itemId);
    if (!item) return;
    const collections = await fetchCollectionsFromAPI();
    const isCol = collections.some(c => c.item_id == itemId);
    if (isCol) { await removeFromCollectionAPI(itemId); } else { await addToCollectionAPI(item); }
    if (currentPage === 'collection') renderCollection();
}

async function refreshHearts() {
    const favorites = await fetchFavoritesFromAPI();
    document.querySelectorAll('.heart-icon').forEach(btn => {
        const id = btn.dataset.id;
        const isFav = favorites.some(f => f.item_id == id);
        btn.classList.toggle('liked', isFav);
        const icon = btn.querySelector('i');
        if (icon) icon.className = isFav ? 'fas fa-heart' : 'far fa-heart';
    });
}

// ================================================================
// CARD BUILDER
// ================================================================
function buildCard(item, isDeals = false) {
  const fullStars = Math.floor(item.rating);
  const hasHalfStar = (item.rating - fullStars) >= 0.5;
  let starsHtml = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= fullStars) starsHtml += '<i class="fas fa-star"></i>';
    else if (i === fullStars + 1 && hasHalfStar) starsHtml += '<i class="fas fa-star-half-alt"></i>';
    else starsHtml += '<i class="far fa-star"></i>';
  }
  let priceHtml = '';
  let itemsHtml = '';
  if (isDeals) {
    priceHtml = `<div class="deal-discount">${item.discount || '20% OFF'}</div><div class="price-row"><span class="old-price">${item.oldPrice || 'Rs. 1500'}</span><span class="new-price">Rs. ${item.price}</span></div>`;
    if (item.items && Array.isArray(item.items) && item.items.length > 0) {
      itemsHtml = `<div class="deal-items-list"><div class="deal-items-title">What's Included</div><ul class="deal-items-ul">${item.items.map(i => `<li>${i}</li>`).join('')}</ul></div>`;
    }
  } else {
    priceHtml = `<div class="price-tag">Rs. ${item.price}</div>`;
  }
  const tagHtml = (!isDeals && item.tag) ? `<div class="dish-tag">${item.tag}</div>` : '';
  return `
    <div class="dish-card">
      <div class="heart-icon" data-id="${item.id}" onclick="toggleFavorite('${item.id}')"><i class="far fa-heart"></i></div>
      ${tagHtml}
      <div class="card-img-wrapper">
        <img class="food-img-round" src="${item.img || DEFAULT_IMAGE_URL}" alt="${item.name}" loading="lazy" onerror="this.src='${DEFAULT_IMAGE_URL}'">
      </div>
      <div class="dish-name">${item.name}</div>
      ${!isDeals ? `<div class="dish-desc">${item.desc || 'Freshly prepared with love'}</div>` : ''}
      <div class="rating-wrap">
        <span class="stars">${starsHtml}</span>
        <span class="rating-value">${item.rating.toFixed(1)}</span>
        <span class="reviews-count">(${item.reviews} reviews)</span>
      </div>
      ${priceHtml}
      ${itemsHtml}
      <button class="save-collection-btn" onclick="toggleCollection('${item.id}')"><i class="fas fa-bookmark"></i> Save to Collection</button>
    </div>
  `;
}

// ================================================================
// RENDER FUNCTIONS
// ================================================================
function renderPopularDishes() {
  const grid = document.getElementById('dishesGrid');
  if (!grid) return;
  const popular = menuData.slice(0, 6);
  if (popular.length === 0) {
    grid.innerHTML = '<div class="empty-state"><i class="fas fa-spinner fa-pulse"></i><h3>Loading delicious items...</h3></div>';
    return;
  }
  grid.innerHTML = popular.map(item => buildCard(item)).join('');
  refreshHearts();
}

function renderTestimonials() {
  const grid = document.getElementById('testimonialsGrid');
  if (!grid) return;
  if (typeof testimonials !== 'undefined' && testimonials && testimonials.length) {
    grid.innerHTML = testimonials.map(t => `
      <div class="testimonial-card">
        <div class="testimonial-author-photo">
          <img class="author-img" src="${t.avatar}" alt="${t.name}">
          <div class="author-name-box"><h4>${t.name}</h4><p>${t.role}</p></div>
        </div>
        <div class="testimonial-stars">${Array.from({length:t.stars}, () => '<i class="fas fa-star"></i>').join('')}</div>
        <div class="testimonial-divider"></div>
        <p class="testimonial-text">${t.text}</p>
      </div>
    `).join('');
  }
}

function renderActiveCategoryHeading() {
    const menuPage = document.getElementById('menuPage');
    if (!menuPage) return;
    let headingContainer = document.getElementById('activeCategoryHeading');
    if (!headingContainer) {
        headingContainer = document.createElement('div');
        headingContainer.id = 'activeCategoryHeading';
        headingContainer.className = 'active-category-heading';
        const pageHeader = menuPage.querySelector('.page-header');
        if (pageHeader) pageHeader.insertAdjacentElement('afterend', headingContainer);
    }
    const itemCount = activeCategory === 'All' ? menuData.length : menuData.filter(i => i.category === activeCategory).length;
    if (activeCategory === 'All') {
        headingContainer.innerHTML = `<h2>Our Signature Menu</h2><p>Explore curated categories & premium delights (${itemCount} items)</p>`;
    } else {
        headingContainer.innerHTML = `<h2>${activeCategory}</h2><p>Explore our delicious collection (${itemCount} items)</p>`;
    }
}

function renderCategorySlider() {
    const container = document.getElementById('categoryContainer');
    if (!container) return;
    const cats = ['All', ...new Set(menuData.map(i => i.category))];
    container.innerHTML = cats.map(c => `
        <div class="cat-card ${c === activeCategory ? 'active-cat' : ''}" onclick="filterByCategory('${c.replace(/'/g, "\\'")}')">${c}</div>
    `).join('');
}

function renderMenuItems() {
    const grid = document.getElementById('menuItemsGrid');
    if (!grid) return;
    const pageHeader = document.querySelector('#menuPage .page-header');
    if (pageHeader) {
        if (activeCategory === 'All') {
            pageHeader.innerHTML = '<h1>Our Signature Menu</h1><p>Explore curated categories & premium delights</p>';
        } else {
            pageHeader.innerHTML = `<h1>${activeCategory}</h1><p>Explore our delicious ${activeCategory.toLowerCase()} collection</p>`;
        }
    }
    renderActiveCategoryHeading();
    const filtered = activeCategory === 'All' ? menuData : menuData.filter(i => i.category === activeCategory);
    if (filtered.length === 0) {
        grid.innerHTML = `<div class="empty-state"><i class="fas fa-utensils"></i><h3>No items in "${activeCategory}"</h3><button onclick="filterByCategory('All')" style="margin-top:15px;padding:10px 25px;background:var(--red);border:none;border-radius:30px;color:white;cursor:pointer;">View All Items</button></div>`;
        return;
    }
    grid.innerHTML = filtered.map(item => buildCard(item, false)).join('');
    refreshHearts();
}

function filterByCategory(category) {
    nav('menu');
    activeCategory = category;
    renderCategorySlider();
    renderMenuItems();
    closeSidebar();
    toast.info(`Showing ${category} items`, { title: 'Menu Filtered', duration: 1500 });
}

function renderMenuPage() {
    if (menuData.length === 0) return;
    renderCategorySlider();
    renderMenuItems();
}

function renderDealsPage() {
    const grid = document.getElementById('dealsGrid');
    if (!grid) return;
    if (dealsData && dealsData.length > 0) {
        grid.innerHTML = dealsData.map(deal => buildCard(deal, true)).join('');
    } else {
        grid.innerHTML = `<div class="empty-state"><i class="fas fa-tags"></i><h3>No deals available</h3></div>`;
    }
    refreshHearts();
}

async function renderFavorites() {
    const grid = document.getElementById('favoritesGrid');
    if (!grid) return;
    const favs = await fetchFavoritesFromAPI();
    if (favs.length === 0) {
        grid.innerHTML = `<div class="empty-state"><i class="fas fa-heart"></i><h3>No favorites yet</h3><p>Login and click the heart icon to save your favorite dishes here.</p></div>`;
        return;
    }
    grid.innerHTML = favs.map(item => buildCard({ id: item.item_id, name: item.item_name, category: item.item_category, price: item.item_price, img: item.item_image, desc: 'Delicious item', rating: 4.5, reviews: 100 })).join('');
    refreshHearts();
}

async function renderCollection() {
    const grid = document.getElementById('collectionGrid');
    if (!grid) return;
    const collections = await fetchCollectionsFromAPI();
    if (collections.length === 0) {
        grid.innerHTML = `<div class="empty-state"><i class="fas fa-bookmark"></i><h3>Collection empty</h3><p>Login and save items to see them here.</p></div>`;
        return;
    }
    grid.innerHTML = collections.map(item => buildCard({ id: item.item_id, name: item.item_name, category: item.item_category, price: item.item_price, img: item.item_image, desc: item.note || 'Saved item', rating: 4.5, reviews: 100 })).join('');
    refreshHearts();
}

// ================================================================
// DATA INITIALIZATION
// ================================================================
window.addEventListener('DOMContentLoaded', () => {
    if (typeof menu !== 'undefined' && menu && Array.isArray(menu)) {
        menuData = [];
        menu.forEach(category => {
            if (category.items && Array.isArray(category.items)) {
                category.items.forEach(item => {
                    let itemImg = DEFAULT_IMAGE_URL;
                    if (typeof getItemImage === 'function') itemImg = getItemImage(item.name);
                    else if (typeof itemImages !== 'undefined' && itemImages[item.name]) itemImg = itemImages[item.name];
                    let itemDesc = 'Freshly prepared with premium ingredients';
                    let itemTag = 'Popular';
                    if (typeof getDescriptionForCategory === 'function') itemDesc = getDescriptionForCategory(category.category);
                    else if (typeof categoryInfo !== 'undefined' && categoryInfo[category.category]) {
                        itemDesc = categoryInfo[category.category].desc;
                        itemTag = categoryInfo[category.category].tag;
                    }
                    menuData.push({
                        id: `menu_${category.category.replace(/\s/g, '_')}_${item.name.replace(/\s/g, '_')}`,
                        name: item.name, category: category.category, price: item.price,
                        desc: itemDesc, rating: 4.5 + (Math.random() * 0.4),
                        reviews: Math.floor(50 + (Math.random() * 300)), tag: itemTag, img: itemImg
                    });
                });
            }
        });
    }
    if (typeof deals !== 'undefined' && deals && Array.isArray(deals)) {
        dealsData = deals.map(deal => {
            let dealImg = DEFAULT_IMAGE_URL;
            if (typeof getDealImage === 'function') dealImg = getDealImage(deal.id);
            else if (typeof dealImages !== 'undefined' && dealImages[deal.id]) dealImg = dealImages[deal.id];
            return {
                id: deal.id, name: deal.name, price: deal.price, items: deal.items || [],
                rating: 4.6 + (Math.random() * 0.3), reviews: Math.floor(80 + (Math.random() * 400)),
                discount: `${Math.floor(15 + (Math.random() * 25))}% OFF`,
                oldPrice: `Rs. ${Math.floor(deal.price * 1.3)}`, img: dealImg
            };
        });
    }
    renderPopularDishes();
    renderTestimonials();
    renderMenuPage();
    renderDealsPage();
    renderFavorites();
    renderCollection();
    nav('home');
    const savedUser = localStorage.getItem('hnt_user');
    if (savedUser) {
        try { currentUser = JSON.parse(savedUser); updateUIForLoggedInUser(); } catch(e) {}
    }
});

// ================================================================
// NEWSLETTER
// ================================================================
const subscribeForm = document.getElementById('subscribeForm');
if (subscribeForm) {
    subscribeForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = document.getElementById('subName')?.value.trim();
        const email = document.getElementById('subEmail')?.value.trim();
        const phone = document.getElementById('subPhone')?.value.trim();
        if (!name || !email) { toast.warning('Please fill in your name and email.'); return; }
        const submitBtn = subscribeForm.querySelector('.subscribe-btn');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-pulse"></i> Subscribing...';
        submitBtn.disabled = true;
        try {
            const response = await fetch(`${API_BASE_URL}/subscribe`, {
                method: 'POST', headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, phone })
            });
            const data = await response.json();
            if (data.success) {
                toast.success(`Welcome ${name}! Enjoy 20% off on your first order.`, { title: 'Subscribed!', duration: 5000 });
                subscribeForm.reset();
            } else { throw new Error('failed'); }
        } catch (error) {
            toast.error('Something went wrong. Please try again.', { title: 'Subscription Failed' });
        } finally { submitBtn.innerHTML = originalText; submitBtn.disabled = false; }
    });
}

// ================================================================
// AUTH MODAL
// ================================================================
const authModal = document.getElementById('authModal');
const openModalBtn = document.getElementById('openModalBtn');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

if (openModalBtn) openModalBtn.addEventListener('click', () => authModal?.classList.add('open'));
if (authModal) authModal.addEventListener('click', (e) => { if (e.target === authModal) authModal.classList.remove('open'); });

document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const tab = btn.dataset.tab;
        if (loginForm) loginForm.style.display = tab === 'login' ? 'block' : 'none';
        if (registerForm) registerForm.style.display = tab === 'register' ? 'block' : 'none';
    });
});

document.getElementById('switchToReg')?.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.toggle('active', b.dataset.tab === 'register'));
    if (loginForm) loginForm.style.display = 'none';
    if (registerForm) registerForm.style.display = 'block';
});
document.getElementById('switchToLogin')?.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.toggle('active', b.dataset.tab === 'login'));
    if (loginForm) loginForm.style.display = 'block';
    if (registerForm) registerForm.style.display = 'none';
});

const rememberCheck = document.getElementById('rememberCheck');
rememberCheck?.addEventListener('click', () => rememberCheck.classList.toggle('checked'));

function updateUIForLoggedInUser() {
    const openModalBtnEl = document.getElementById('openModalBtn');
    const profileWrapEl = document.getElementById('profileWrap');
    const profileInitialEl = document.getElementById('profileInitial');
    const dropdownNameEl = document.getElementById('dropdownName');
    const dropdownEmailEl = document.getElementById('dropdownEmail');
    if (openModalBtnEl) openModalBtnEl.style.display = 'none';
    if (profileWrapEl) profileWrapEl.style.display = 'flex';
    if (profileInitialEl && currentUser) profileInitialEl.textContent = currentUser.name[0].toUpperCase();
    if (dropdownNameEl && currentUser) dropdownNameEl.textContent = currentUser.name;
    if (dropdownEmailEl && currentUser) dropdownEmailEl.textContent = currentUser.email;
    if (authModal) authModal.classList.remove('open');
    renderFavorites();
    renderCollection();
    refreshHearts();
}

function updateUIForLoggedOutUser() {
    const openModalBtnEl = document.getElementById('openModalBtn');
    const profileWrapEl = document.getElementById('profileWrap');
    if (openModalBtnEl) openModalBtnEl.style.display = 'flex';
    if (profileWrapEl) profileWrapEl.style.display = 'none';
    renderFavorites();
    renderCollection();
    refreshHearts();
}

async function doLogin() {
    const email = document.getElementById('loginEmail')?.value.trim();
    const password = document.getElementById('loginPass')?.value.trim();
    if (!email || !password) { toast.warning('Please enter your email and password.'); return; }
    try {
        const response = await fetch(`${API_BASE_URL}/auth/login`, {
            method: 'POST', headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        const data = await response.json();
        if (data.success) {
            currentUser = data.user;
            localStorage.setItem('hnt_user', JSON.stringify(currentUser));
            updateUIForLoggedInUser();
            toast.success(`Welcome back, ${currentUser.name}.`, { title: 'Signed In' });
        } else { toast.error(data.error || 'Invalid email or password.', { title: 'Login Failed' }); }
    } catch (error) { toast.error('Connection error. Please try again.', { title: 'Login Failed' }); }
}

async function doRegister() {
    const name = document.getElementById('regName')?.value.trim();
    const email = document.getElementById('regEmail')?.value.trim();
    const password = document.getElementById('regPass')?.value.trim();
    if (!name || !email || !password) { toast.warning('Please fill all registration fields.'); return; }
    if (password.length < 6) { toast.warning('Password must be at least 6 characters.'); return; }
    try {
        const response = await fetch(`${API_BASE_URL}/auth/register`, {
            method: 'POST', headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password, phone: '' })
        });
        const data = await response.json();
        if (data.success) {
            currentUser = data.user;
            localStorage.setItem('hnt_user', JSON.stringify(currentUser));
            updateUIForLoggedInUser();
            toast.success(`Your account has been created.`, { title: `Welcome, ${name}.`, duration: 5000 });
        } else { toast.error(data.error || 'Registration failed.', { title: 'Registration Failed' }); }
    } catch (error) { toast.error('Connection error. Please try again.', { title: 'Registration Failed' }); }
}

function doLogout() {
    currentUser = null;
    localStorage.removeItem('hnt_user');
    updateUIForLoggedOutUser();
    closeProfileDropdown();
    toast.info('You have been signed out.', { title: 'Goodbye' });
}

document.getElementById('doLoginBtn')?.addEventListener('click', doLogin);
document.getElementById('doRegBtn')?.addEventListener('click', doRegister);
document.getElementById('forgotBtn')?.addEventListener('click', () => {
    const email = document.getElementById('loginEmail')?.value.trim();
    if (!email) { toast.warning('Please enter your email address first.'); return; }
    toast.info(`Password reset link sent to ${email}`, { title: 'Check Your Inbox' });
});

// ================================================================
// PROFILE DROPDOWN
// ================================================================
function toggleProfileDropdown() { document.getElementById('profileDropdown')?.classList.toggle('open'); }
function closeProfileDropdown() { document.getElementById('profileDropdown')?.classList.remove('open'); }
document.addEventListener('click', (e) => {
    const wrap = document.getElementById('profileWrap');
    if (wrap && !wrap.contains(e.target)) closeProfileDropdown();
});

// ================================================================
// CHANGE PASSWORD
// ================================================================
function openChangePw() { closeProfileDropdown(); document.getElementById('cpwModal')?.classList.add('open'); }
function closeCpwModal() {
    document.getElementById('cpwModal')?.classList.remove('open');
    const cpwNew = document.getElementById('cpwNew');
    const cpwConfirm = document.getElementById('cpwConfirm');
    if (cpwNew) cpwNew.value = '';
    if (cpwConfirm) cpwConfirm.value = '';
}
function submitChangePw() {
    const pw1 = document.getElementById('cpwNew')?.value.trim();
    const pw2 = document.getElementById('cpwConfirm')?.value.trim();
    if (!pw1 || !pw2) { toast.warning('Please fill both password fields.'); return; }
    if (pw1.length < 6) { toast.warning('Password must be at least 6 characters.'); return; }
    if (pw1 !== pw2) { toast.error('Passwords do not match.'); return; }
    if (currentUser) {
        currentUser.password = pw1;
        localStorage.setItem('hnt_user', JSON.stringify(currentUser));
        toast.success('Your password has been updated.', { title: 'Password Changed' });
    }
    closeCpwModal();
}

// ================================================================
// CHANGE NAME
// ================================================================
function openChangeName() {
    closeProfileDropdown();
    document.getElementById('changeNameModal')?.classList.add('open');
    const newNameInput = document.getElementById('newName');
    if (newNameInput) newNameInput.value = currentUser?.name || '';
}
function closeChangeNameModal() { document.getElementById('changeNameModal')?.classList.remove('open'); }
function submitChangeName() {
    const name = document.getElementById('newName')?.value.trim();
    if (!name) { toast.warning('Please enter a display name.'); return; }
    if (currentUser) {
        currentUser.name = name;
        localStorage.setItem('hnt_user', JSON.stringify(currentUser));
        const profileInitial = document.getElementById('profileInitial');
        const dropdownName = document.getElementById('dropdownName');
        if (profileInitial) profileInitial.textContent = name[0].toUpperCase();
        if (dropdownName) dropdownName.textContent = name;
        toast.success(`Your display name is now "${name}"`, { title: 'Name Updated' });
    }
    closeChangeNameModal();
}

// ================================================================
// CHATBOT — CONNECTED TO GROQ via chatbot.js
// ================================================================
const chatbotBtn = document.getElementById('chatbotBtn');
const chatbotModal = document.getElementById('chatbotModal');
const closeChatBtn = document.getElementById('closeChatBtn');
let chatInputEl = document.getElementById('chatInput');
let sendChatBtnEl = document.getElementById('sendChatBtn');
const chatMessagesEl = document.getElementById('chatMessages');
let isChatSending = false;

function appendChatMessage(text, type) {
    if (!chatMessagesEl) return;
    const div = document.createElement('div');
    div.className = `chat-message ${type}`;
    div.textContent = text;
    chatMessagesEl.appendChild(div);
    chatMessagesEl.scrollTop = chatMessagesEl.scrollHeight;
}

function showChatTyping() {
    const indicator = document.createElement('div');
    indicator.className = 'chat-message bot typing-indicator';
    indicator.id = 'typingChatIndicator';
    indicator.innerHTML = '<span>.</span><span>.</span><span>.</span>';
    if (chatMessagesEl) {
        chatMessagesEl.appendChild(indicator);
        chatMessagesEl.scrollTop = chatMessagesEl.scrollHeight;
    }
}

function hideChatTyping() {
    const indicator = document.getElementById('typingChatIndicator');
    if (indicator) indicator.remove();
}

// ================================================================
// KEY CHANGE: Now calls sendChatbotMessage() from chatbot.js
// NOT the old getSmartChatReply() function
// ================================================================
async function sendChatMessageHandler() {
    if (!chatInputEl) return;
    const message = chatInputEl.value.trim();
    if (!message || isChatSending) return;

    chatInputEl.value = '';
    appendChatMessage(message, 'user');
    showChatTyping();
    isChatSending = true;

    try {
        // Uses GROQ-powered sendChatbotMessage from chatbot.js
        const reply = await sendChatbotMessage(message);
        hideChatTyping();
        appendChatMessage(reply || "Sorry, I could not process that. Please try again.", 'bot');
    } catch (error) {
        hideChatTyping();
        appendChatMessage("Sorry, having trouble connecting. Call us at 0318-2370631.", 'bot');
    } finally {
        isChatSending = false;
    }
}

function setupChatbot() {
    if (chatbotBtn) {
        chatbotBtn.addEventListener('click', () => {
            chatbotModal?.classList.toggle('open');
            if (chatbotModal?.classList.contains('open') && chatMessagesEl && chatMessagesEl.children.length === 0) {
                setTimeout(() => {
                    const greeting = typeof getChatbotGreeting === 'function'
                        ? getChatbotGreeting()
                        : "Welcome to Hot N Tasty Roll! 🍽️ How can I help you today?";
                    appendChatMessage(greeting, 'bot');
                }, 300);
            }
        });
    }
    if (closeChatBtn) {
        closeChatBtn.addEventListener('click', () => chatbotModal?.classList.remove('open'));
    }

    chatInputEl = document.getElementById('chatInput');
    sendChatBtnEl = document.getElementById('sendChatBtn');

    if (sendChatBtnEl) {
        const newBtn = sendChatBtnEl.cloneNode(true);
        sendChatBtnEl.parentNode.replaceChild(newBtn, sendChatBtnEl);
        sendChatBtnEl = newBtn;
        sendChatBtnEl.addEventListener('click', (e) => {
            e.preventDefault();
            sendChatMessageHandler();
        });
    }

    if (chatInputEl) {
        const newInput = chatInputEl.cloneNode(true);
        chatInputEl.parentNode.replaceChild(newInput, chatInputEl);
        chatInputEl = newInput;
        chatInputEl.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendChatMessageHandler();
            }
        });
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupChatbot);
} else {
    setupChatbot();
}

// ================================================================
// ROTATING IMAGE
// ================================================================
const circleEl = document.querySelector('.circle-rotating');
if (circleEl) {
    circleEl.addEventListener('mouseenter', () => circleEl.style.animationPlayState = 'paused');
    circleEl.addEventListener('mouseleave', () => circleEl.style.animationPlayState = 'running');
}

// ================================================================
// EXPOSE GLOBALS
// ================================================================
window.nav = nav;
window.toggleFavorite = toggleFavorite;
window.toggleCollection = toggleCollection;
window.filterByCategory = filterByCategory;
window.toggleProfileDropdown = toggleProfileDropdown;
window.closeProfileDropdown = closeProfileDropdown;
window.openChangePw = openChangePw;
window.closeCpwModal = closeCpwModal;
window.submitChangePw = submitChangePw;
window.openChangeName = openChangeName;
window.closeChangeNameModal = closeChangeNameModal;
window.submitChangeName = submitChangeName;
window.doLogout = doLogout;
