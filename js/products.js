// ============================================================
// SPARE PARTS PRODUCT DATA
// ============================================================

const WHATSAPP_NUMBER = "923001234567"; // <-- CHANGE THIS TO YOUR WHATSAPP NUMBER

const SHOP_NAME = "Al-Madina Auto Parts"; // <-- CHANGE THIS TO YOUR SHOP NAME

const SHOP_TAGLINE = "Check availability before visiting the shop";

const SHOP_PHONE = "+92 300 1234567"; // <-- CHANGE THIS

const SHOP_ADDRESS = "Shop #12, Auto Market, Hall Road, Lahore";

// Google Maps embed URL â€” replace with your own shop location embed link
const SHOP_MAP_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.123456789!2d74.3587!3d31.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDMxJzEzLjQiTiA3NMKwMjEnMzEuMyJF!5e0!3m2!1sen!2s!4v1234567890";

// ============================================================
// CATEGORIES
// ============================================================
const CATEGORIES = [
  { id: "all", name: "All Parts", icon: "bi-grid-fill" },
  { id: "car", name: "Car Parts", icon: "bi-car-front-fill" },
  { id: "bike", name: "Bike Parts", icon: "bi-bicycle" },
  { id: "engine", name: "Engine Parts", icon: "bi-gear-fill" },
  { id: "body", name: "Body Parts", icon: "bi-box-fill" },
  { id: "electrical", name: "Electrical Parts", icon: "bi-lightning-charge-fill" },
];

// ============================================================
// PRODUCTS ARRAY â€” ADD YOUR SPARE PARTS HERE
// ============================================================
const PRODUCTS = [
  // ---- CAR PARTS ----
  {
    id: 1,
    name: "Brake Pad Set (Front)",
    category: "car",
    compatibleModels: ["Toyota Corolla 2012-2018", "Toyota Corolla 2019-2024"],
    price: 2500,
    image: "https://placehold.co/400x300/1e3a5f/f59e0b?text=Brake+Pad",
    inStock: true,
  },
  {
    id: 2,
    name: "Air Filter",
    category: "car",
    compatibleModels: ["Honda Civic 2016-2021", "Honda City 2015-2020"],
    price: 800,
    image: "https://placehold.co/400x300/1e3a5f/f59e0b?text=Air+Filter",
    inStock: true,
  },
  {
    id: 3,
    name: "Radiator Assembly",
    category: "car",
    compatibleModels: ["Suzuki Cultus 2017-2024", "Suzuki Alto 2019-2024"],
    price: 8500,
    image: "https://placehold.co/400x300/1e3a5f/f59e0b?text=Radiator",
    inStock: true,
  },
  {
    id: 4,
    name: "Side Mirror (Right)",
    category: "car",
    compatibleModels: ["Toyota Yaris 2020-2024"],
    price: 3200,
    image: "https://placehold.co/400x300/1e3a5f/f59e0b?text=Side+Mirror",
    inStock: true,
  },
  {
    id: 5,
    name: "Headlight Assembly (Left)",
    category: "car",
    compatibleModels: ["Honda Civic 2016-2021"],
    price: 12000,
    image: "https://placehold.co/400x300/1e3a5f/f59e0b?text=Headlight",
    inStock: true,
  },
  {
    id: 6,
    name: "Oil Filter",
    category: "car",
    compatibleModels: [
      "Toyota Corolla 2012-2024",
      "Honda Civic 2012-2021",
      "Suzuki Cultus 2017-2024",
    ],
    price: 450,
    image: "https://placehold.co/400x300/1e3a5f/f59e0b?text=Oil+Filter",
    inStock: true,
  },
  {
    id: 7,
    name: "Clutch Plate",
    category: "car",
    compatibleModels: ["Suzuki Mehran 2012-2019", "Suzuki Alto 2019-2024"],
    price: 3500,
    image: "https://placehold.co/400x300/1e3a5f/f59e0b?text=Clutch+Plate",
    inStock: true,
  },
  {
    id: 8,
    name: "Shock Absorber (Front)",
    category: "car",
    compatibleModels: ["Toyota Corolla 2015-2022"],
    price: 4800,
    image: "https://placehold.co/400x300/1e3a5f/f59e0b?text=Shock+Absorber",
    inStock: true,
  },

  // ---- BIKE PARTS ----
  {
    id: 9,
    name: "Chain Sprocket Set",
    category: "bike",
    compatibleModels: ["Honda CD70 2018-2024", "Honda CG125 2016-2024"],
    price: 1200,
    image: "https://placehold.co/400x300/1e3a5f/f59e0b?text=Chain+Sprocket",
    inStock: true,
  },
  {
    id: 10,
    name: "Brake Shoe Set",
    category: "bike",
    compatibleModels: ["Honda CD70 All Models", "United 70cc"],
    price: 350,
    image: "https://placehold.co/400x300/1e3a5f/f59e0b?text=Brake+Shoe",
    inStock: true,
  },
  {
    id: 11,
    name: "Headlight Bulb (12V)",
    category: "bike",
    compatibleModels: ["Honda CG125", "Yamaha YBR125", "Suzuki GS150"],
    price: 250,
    image: "https://placehold.co/400x300/1e3a5f/f59e0b?text=Headlight+Bulb",
    inStock: true,
  },
  {
    id: 12,
    name: "CDI Unit",
    category: "bike",
    compatibleModels: ["Honda CD70 2015-2024"],
    price: 900,
    image: "https://placehold.co/400x300/1e3a5f/f59e0b?text=CDI+Unit",
    inStock: true,
  },
  {
    id: 13,
    name: "Fuel Tank",
    category: "bike",
    compatibleModels: ["Honda CG125 2020-2024"],
    price: 5500,
    image: "https://placehold.co/400x300/1e3a5f/f59e0b?text=Fuel+Tank",
    inStock: true,
  },
  {
    id: 14,
    name: "Kick Lever",
    category: "bike",
    compatibleModels: ["Honda CD70 All Models", "Honda CG125"],
    price: 400,
    image: "https://placehold.co/400x300/1e3a5f/f59e0b?text=Kick+Lever",
    inStock: true,
  },

  // ---- ENGINE PARTS ----
  {
    id: 15,
    name: "Piston Ring Set",
    category: "engine",
    compatibleModels: ["Toyota 2NZ-FE Engine", "Honda L15A Engine"],
    price: 1800,
    image: "https://placehold.co/400x300/1e3a5f/f59e0b?text=Piston+Rings",
    inStock: true,
  },
  {
    id: 16,
    name: "Timing Belt",
    category: "engine",
    compatibleModels: ["Honda Civic 2006-2015", "Honda City 2009-2020"],
    price: 2200,
    image: "https://placehold.co/400x300/1e3a5f/f59e0b?text=Timing+Belt",
    inStock: true,
  },
  {
    id: 17,
    name: "Water Pump",
    category: "engine",
    compatibleModels: ["Toyota Corolla 2009-2018", "Toyota Vitz 2010-2019"],
    price: 3500,
    image: "https://placehold.co/400x300/1e3a5f/f59e0b?text=Water+Pump",
    inStock: true,
  },
  {
    id: 18,
    name: "Engine Gasket Set",
    category: "engine",
    compatibleModels: ["Suzuki Cultus 2017-2024"],
    price: 4500,
    image: "https://placehold.co/400x300/1e3a5f/f59e0b?text=Gasket+Set",
    inStock: true,
  },
  {
    id: 19,
    name: "Spark Plug (Iridium)",
    category: "engine",
    compatibleModels: [
      "Universal - Toyota",
      "Universal - Honda",
      "Universal - Suzuki",
    ],
    price: 650,
    image: "https://placehold.co/400x300/1e3a5f/f59e0b?text=Spark+Plug",
    inStock: true,
  },
  {
    id: 20,
    name: "Valve Cover Gasket",
    category: "engine",
    compatibleModels: ["Honda Civic 2012-2021"],
    price: 1200,
    image: "https://placehold.co/400x300/1e3a5f/f59e0b?text=Valve+Gasket",
    inStock: true,
  },

  // ---- BODY PARTS ----
  {
    id: 21,
    name: "Front Bumper",
    category: "body",
    compatibleModels: ["Toyota Corolla 2018-2022"],
    price: 15000,
    image: "https://placehold.co/400x300/1e3a5f/f59e0b?text=Front+Bumper",
    inStock: true,
  },
  {
    id: 22,
    name: "Rear Bumper",
    category: "body",
    compatibleModels: ["Honda Civic 2016-2021"],
    price: 14000,
    image: "https://placehold.co/400x300/1e3a5f/f59e0b?text=Rear+Bumper",
    inStock: true,
  },
  {
    id: 23,
    name: "Fender (Right)",
    category: "body",
    compatibleModels: ["Suzuki Cultus 2017-2024"],
    price: 5500,
    image: "https://placehold.co/400x300/1e3a5f/f59e0b?text=Fender",
    inStock: true,
  },
  {
    id: 24,
    name: "Bonnet / Hood",
    category: "body",
    compatibleModels: ["Toyota Yaris 2020-2024"],
    price: 22000,
    image: "https://placehold.co/400x300/1e3a5f/f59e0b?text=Bonnet",
    inStock: true,
  },
  {
    id: 25,
    name: "Door Handle (Outer)",
    category: "body",
    compatibleModels: ["Toyota Corolla 2015-2022", "Honda City 2015-2020"],
    price: 1800,
    image: "https://placehold.co/400x300/1e3a5f/f59e0b?text=Door+Handle",
    inStock: true,
  },

  // ---- ELECTRICAL PARTS ----
  {
    id: 26,
    name: "Alternator",
    category: "electrical",
    compatibleModels: ["Toyota Corolla 2012-2018"],
    price: 12000,
    image: "https://placehold.co/400x300/1e3a5f/f59e0b?text=Alternator",
    inStock: true,
  },
  {
    id: 27,
    name: "Starter Motor",
    category: "electrical",
    compatibleModels: ["Honda Civic 2012-2021", "Honda City 2015-2020"],
    price: 9500,
    image: "https://placehold.co/400x300/1e3a5f/f59e0b?text=Starter+Motor",
    inStock: true,
  },
  {
    id: 28,
    name: "Power Window Motor",
    category: "electrical",
    compatibleModels: ["Toyota Corolla 2015-2022"],
    price: 4500,
    image: "https://placehold.co/400x300/1e3a5f/f59e0b?text=Window+Motor",
    inStock: true,
  },
  {
    id: 29,
    name: "Wiring Harness",
    category: "electrical",
    compatibleModels: ["Suzuki Cultus 2017-2024"],
    price: 0, // 0 means "Call for Price"
    image: "https://placehold.co/400x300/1e3a5f/f59e0b?text=Wiring+Harness",
    inStock: true,
  },
  {
    id: 30,
    name: "Battery Terminal Clamp",
    category: "electrical",
    compatibleModels: ["Universal - All Vehicles"],
    price: 200,
    image: "https://placehold.co/400x300/1e3a5f/f59e0b?text=Battery+Clamp",
    inStock: true,
  },
  {
    id: 31,
    name: "Fog Light Set",
    category: "electrical",
    compatibleModels: ["Toyota Corolla 2018-2022", "Honda Civic 2016-2021"],
    price: 3800,
    image: "https://placehold.co/400x300/1e3a5f/f59e0b?text=Fog+Lights",
    inStock: true,
  },
  {
    id: 32,
    name: "Horn Assembly",
    category: "electrical",
    compatibleModels: ["Universal - All Vehicles"],
    price: 750,
    image: "https://placehold.co/400x300/1e3a5f/f59e0b?text=Horn",
    inStock: true,
  },
];
