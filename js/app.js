// ============================================================
// AUTO SPARE PARTS — MAIN APPLICATION LOGIC
// ============================================================

(function () {
  "use strict";

  // ---- STATE ----
  let activeCategory = "all";
  let searchQuery = "";
  let modelFilter = "";

  // ---- DOM REFERENCES ----
  const els = {};

  // ---- INIT ----
  document.addEventListener("DOMContentLoaded", init);

  function init() {
    cacheDOM();
    setShopInfo();
    renderCategories();
    buildModelDropdown();
    renderProducts();
    bindEvents();
  }

  // Cache frequently-used DOM nodes
  function cacheDOM() {
    els.shopName = document.getElementById("shopName");
    els.shopNameHero = document.getElementById("shopNameHero");
    els.shopNameFooter = document.getElementById("shopNameFooter");
    els.shopTagline = document.getElementById("shopTagline");
    els.searchInput = document.getElementById("searchInput");
    els.heroSearchInput = document.getElementById("heroSearchInput");
    els.categoryContainer = document.getElementById("categoryContainer");
    els.productsGrid = document.getElementById("productsGrid");
    els.productCount = document.getElementById("productCount");
    els.modelFilter = document.getElementById("modelFilter");
    els.noResults = document.getElementById("noResults");
    els.phoneLink = document.getElementById("phoneLink");
    els.whatsappLink = document.getElementById("whatsappLink");
    els.mapFrame = document.getElementById("mapFrame");
    els.shopAddress = document.getElementById("shopAddress");
    els.floatingWA = document.getElementById("floatingWhatsApp");
    els.heroWA = document.getElementById("heroWhatsApp");
    els.clearSearch = document.getElementById("clearSearch");
    els.clearHeroSearch = document.getElementById("clearHeroSearch");
  }

  // Fill in shop details from config
  function setShopInfo() {
    if (els.shopName) els.shopName.textContent = SHOP_NAME;
    if (els.shopNameHero) els.shopNameHero.textContent = SHOP_NAME;
    if (els.shopNameFooter) els.shopNameFooter.textContent = SHOP_NAME;
    if (els.shopTagline) els.shopTagline.textContent = SHOP_TAGLINE;

    const waLink = `https://wa.me/${WHATSAPP_NUMBER}`;
    if (els.floatingWA) els.floatingWA.href = waLink;
    if (els.heroWA) els.heroWA.href = waLink;

    if (els.phoneLink) {
      els.phoneLink.href = `tel:${SHOP_PHONE.replace(/\s/g, "")}`;
      els.phoneLink.textContent = SHOP_PHONE;
    }

    if (els.whatsappLink) {
      els.whatsappLink.href = waLink;
      els.whatsappLink.textContent = SHOP_PHONE;
    }

    if (els.mapFrame) els.mapFrame.src = SHOP_MAP_EMBED;
    if (els.shopAddress) els.shopAddress.textContent = SHOP_ADDRESS;

    // Page title
    document.title = `${SHOP_NAME} — Auto Spare Parts`;
  }

  // ---- CATEGORIES ----
  function renderCategories() {
    if (!els.categoryContainer) return;
    els.categoryContainer.innerHTML = CATEGORIES.map((cat) => {
      const activeClass = cat.id === activeCategory ? "active" : "";
      const count =
        cat.id === "all"
          ? PRODUCTS.filter((p) => p.inStock).length
          : PRODUCTS.filter((p) => p.category === cat.id && p.inStock).length;
      return `
        <div class="col-4 col-sm-3 col-md-2 mb-2">
          <button class="cat-btn btn w-100 ${activeClass}" data-category="${cat.id}">
            <i class="bi ${cat.icon} cat-icon"></i>
            <span class="cat-label">${cat.name}</span>
            <span class="cat-count">${count}</span>
          </button>
        </div>`;
    }).join("");
  }

  // ---- MODEL DROPDOWN ----
  function buildModelDropdown() {
    if (!els.modelFilter) return;
    const models = new Set();
    PRODUCTS.forEach((p) => {
      p.compatibleModels.forEach((m) => models.add(m));
    });
    const sorted = [...models].sort();
    els.modelFilter.innerHTML =
      '<option value="">All Models</option>' +
      sorted.map((m) => `<option value="${m}">${m}</option>`).join("");
  }

  // ---- RENDER PRODUCTS ----
  function renderProducts() {
    const filtered = getFilteredProducts();

    if (els.productCount) {
      els.productCount.textContent = `${filtered.length} part${filtered.length !== 1 ? "s" : ""} found`;
    }

    if (filtered.length === 0) {
      els.productsGrid.innerHTML = "";
      if (els.noResults) els.noResults.classList.remove("d-none");
      return;
    }

    if (els.noResults) els.noResults.classList.add("d-none");

    els.productsGrid.innerHTML = filtered.map((p) => productCard(p)).join("");
  }

  function getFilteredProducts() {
    return PRODUCTS.filter((p) => {
      // Must be in stock
      if (!p.inStock) return false;

      // Category filter
      if (activeCategory !== "all" && p.category !== activeCategory) return false;

      // Model filter
      if (modelFilter) {
        const hasModel = p.compatibleModels.some(
          (m) => m.toLowerCase() === modelFilter.toLowerCase()
        );
        if (!hasModel) return false;
      }

      // Search query
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const inName = p.name.toLowerCase().includes(q);
        const inModels = p.compatibleModels.some((m) =>
          m.toLowerCase().includes(q)
        );
        const inCategory = p.category.toLowerCase().includes(q);
        if (!inName && !inModels && !inCategory) return false;
      }

      return true;
    });
  }

  // ---- PRODUCT CARD ----
  function productCard(p) {
    const priceDisplay =
      p.price > 0
        ? `<span class="product-price">Rs. ${p.price.toLocaleString()}</span>`
        : `<span class="product-price call-price">Call for Price</span>`;

    const modelsHtml = p.compatibleModels
      .map((m) => `<span class="model-badge">${m}</span>`)
      .join(" ");

    const waMsg = generateWhatsAppMessage(p);
    const waURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMsg)}`;

    const catLabel = CATEGORIES.find((c) => c.id === p.category);
    const catName = catLabel ? catLabel.name : p.category;

    return `
    <div class="col-6 col-md-4 col-lg-3 mb-3">
      <div class="product-card">
        <div class="product-img-wrap">
          <img src="${p.image}" alt="${p.name}" class="product-img" loading="lazy"
               onerror="this.src='https://placehold.co/400x300/1e3a5f/f59e0b?text=No+Image'">
          <span class="product-cat-tag">${catName}</span>
        </div>
        <div class="product-body">
          <h3 class="product-name">${p.name}</h3>
          <div class="product-models">${modelsHtml}</div>
          ${priceDisplay}
          <a href="${waURL}" target="_blank" rel="noopener" class="btn btn-wa w-100 mt-2">
            <i class="bi bi-whatsapp"></i> Order on WhatsApp
          </a>
        </div>
      </div>
    </div>`;
  }

  // ---- WHATSAPP MESSAGE ----
  function generateWhatsAppMessage(product) {
    const model =
      product.compatibleModels.length > 0
        ? product.compatibleModels[0]
        : "my vehicle";
    const price =
      product.price > 0 ? `Listed price: Rs. ${product.price.toLocaleString()}` : "Price: Please confirm";
    return `Assalam-o-Alaikum,\nI need *${product.name}* for *${model}*.\n${price}\nPlease confirm availability.\nThank you.`;
  }

  // ---- EVENTS ----
  function bindEvents() {
    // Category clicks
    els.categoryContainer.addEventListener("click", (e) => {
      const btn = e.target.closest(".cat-btn");
      if (!btn) return;
      activeCategory = btn.dataset.category;
      renderCategories();
      renderProducts();
      scrollToProducts();
    });

    // Search input (navbar)
    els.searchInput.addEventListener("input", debounce(function () {
      searchQuery = this.value.trim();
      // Sync hero search
      if (els.heroSearchInput) els.heroSearchInput.value = searchQuery;
      toggleClearBtn(els.clearSearch, searchQuery);
      renderProducts();
    }, 200));

    // Hero search input
    if (els.heroSearchInput) {
      els.heroSearchInput.addEventListener("input", debounce(function () {
        searchQuery = this.value.trim();
        // Sync navbar search
        if (els.searchInput) els.searchInput.value = searchQuery;
        toggleClearBtn(els.clearHeroSearch, searchQuery);
        renderProducts();
        if (searchQuery.length >= 2) scrollToProducts();
      }, 200));
    }

    // Clear buttons
    if (els.clearSearch) {
      els.clearSearch.addEventListener("click", () => {
        els.searchInput.value = "";
        if (els.heroSearchInput) els.heroSearchInput.value = "";
        searchQuery = "";
        toggleClearBtn(els.clearSearch, "");
        toggleClearBtn(els.clearHeroSearch, "");
        renderProducts();
        els.searchInput.focus();
      });
    }
    if (els.clearHeroSearch) {
      els.clearHeroSearch.addEventListener("click", () => {
        if (els.heroSearchInput) els.heroSearchInput.value = "";
        if (els.searchInput) els.searchInput.value = "";
        searchQuery = "";
        toggleClearBtn(els.clearHeroSearch, "");
        toggleClearBtn(els.clearSearch, "");
        renderProducts();
        if (els.heroSearchInput) els.heroSearchInput.focus();
      });
    }

    // Model filter
    els.modelFilter.addEventListener("change", function () {
      modelFilter = this.value;
      renderProducts();
    });

    // Enter key scrolls to products
    els.searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        scrollToProducts();
      }
    });
    if (els.heroSearchInput) {
      els.heroSearchInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          scrollToProducts();
        }
      });
    }
  }

  // ---- HELPERS ----
  function scrollToProducts() {
    const section = document.getElementById("products");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function toggleClearBtn(btn, val) {
    if (!btn) return;
    btn.style.display = val.length > 0 ? "block" : "none";
  }

  function debounce(fn, delay) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), delay);
    };
  }
})();
