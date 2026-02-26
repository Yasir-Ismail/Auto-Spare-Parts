# Auto Spare Parts — Catalog & WhatsApp Order System

A fast, mobile-first spare parts catalog website built for local auto part shops. Customers can browse parts, search by name or vehicle model, and instantly place orders via WhatsApp — no backend, no database required.

---

## Folder Structure

```
Auto-Spare-Parts/
├── index.html            ← Main website page
├── css/
│   └── style.css         ← Custom styles (clean, functional)
├── js/
│   ├── products.js       ← Product data + shop config (EDIT THIS)
│   └── app.js            ← Application logic (search, filter, render)
└── README.md             ← This file
```

---

## Quick Start

1. Open `index.html` in any browser — that's it, no server needed.
2. For live reload during editing, use VS Code Live Server extension or any static file server.

---

## How to Customize

### Change Shop Name, Phone & WhatsApp Number

Open **`js/products.js`** and edit the top section:

```js
const WHATSAPP_NUMBER = "923001234567";   // Country code + number, no spaces
const SHOP_NAME = "Al-Madina Auto Parts";
const SHOP_PHONE = "+92 300 1234567";
const SHOP_ADDRESS = "Shop #12, Auto Market, Hall Road, Lahore";
const SHOP_MAP_EMBED = "https://www.google.com/maps/embed?pb=..."; // Your Google Maps embed URL
```

### Add a New Spare Part

Open **`js/products.js`**, scroll to the `PRODUCTS` array, and add a new entry:

```js
{
  id: 33,                                    // Unique number
  name: "Brake Disc (Front)",                // Part name
  category: "car",                           // car | bike | engine | body | electrical
  compatibleModels: ["Toyota Corolla 2015-2022"],
  price: 3500,                               // Set 0 for "Call for Price"
  image: "https://placehold.co/400x300/1a1a2e/e0e0e0?text=Brake+Disc",
  inStock: true,                             // false = hidden from site
},
```

### Use Your Own Product Images

Replace the `image` URL with a path to your image:
```js
image: "images/brake-disc.jpg",
```
Place image files in an `images/` folder alongside `index.html`.

### Edit Categories

Categories are defined in the `CATEGORIES` array in `js/products.js`. Icons use Bootstrap Icons class names (e.g., `bi-car-front-fill`). Browse icons at: https://icons.getbootstrap.com/

---

## Features

- **Instant search** — by part name, vehicle model, or category
- **Category filter** — one-tap filtering with counts
- **Model dropdown** — auto-populated from product data
- **WhatsApp ordering** — auto-generated message with part name, model & price
- **Floating WhatsApp button** — always visible for quick contact
- **Mobile-first design** — optimized for low-end phones & small screens
- **Zero dependencies** — only Bootstrap CDN, no build tools
- **No database** — products stored in a plain JS array (easy to edit)

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Markup | HTML5 |
| Styling | Bootstrap 5 + Custom CSS |
| Logic | Vanilla JavaScript |
| Icons | Bootstrap Icons |
| Images | Placeholder (replaceable) |

---

## Browser Support

Works on all modern browsers and mobile devices. Tested on Chrome, Firefox, Safari, and Edge.

---

## License

Free to use for commercial and personal projects.