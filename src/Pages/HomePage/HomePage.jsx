import { useState } from "react";
import {
  Apple,
  Briefcase,
  Camera,
  Citrus,
  FlaskConical,
  Flag,
  HeartPulse,
  Leaf as LucideLeaf,
  MessageCircle,
  Play,
  PlayCircle,
  Recycle,
  Send,
  ShieldCheck as LucideShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Sprout,
  Wheat,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import HeroPhone from "@/assets/HeroPhone.png";
import Herosection from "./components/Herosection";
import KaashtKartAbout from "./components/Kaashtkartabout";
import CategorySection from "./components/CategorySection";
import PromoCards from "./components/PromoCards";

// ── Icons (inline SVGs to avoid external deps) ──────────────────────────────
const SearchIcon = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
);
const CartIcon = () => (
  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
);
const HeartIcon = () => (
  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
);
const UserIcon = () => (
  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
);
const ChevronDown = () => (
  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg>
);
const ChevronLeft = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="m15 18-6-6 6-6"/></svg>
);
const ChevronRight = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6"/></svg>
);
const ChevronRightSmall = () => (
  <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6"/></svg>
);
const PlusIcon = () => (
  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>
);
const MapPin = () => (
  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3" fill="white"/></svg>
);
const Phone = () => (
  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
);
const Mail = () => (
  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
);
const DownloadIcon = () => (
  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7,10 12,15 17,10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
);
const ShieldCheck = () => (
  <svg width="22" height="22" fill="none" stroke="#1a7a3f" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9,12 11,14 15,10"/></svg>
);
const TruckIcon = () => (
  <svg width="22" height="22" fill="none" stroke="#1a7a3f" strokeWidth="2" viewBox="0 0 24 24"><rect x="1" y="3" width="15" height="13"/><polygon points="16,8 20,8 23,11 23,16 16,16 16,8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
);
const LockIcon = () => (
  <svg width="22" height="22" fill="none" stroke="#1a7a3f" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
);
const HeadphonesIcon = () => (
  <svg width="22" height="22" fill="none" stroke="#1a7a3f" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>
);
const LeafIcon = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
);
const StarIcon = ({ filled }) => (
  <svg width="12" height="12" fill={filled ? "#f59e0b" : "none"} stroke="#f59e0b" strokeWidth="2" viewBox="0 0 24 24"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>
);

// ── Color palette ─────────────────────────────────────────────────────────────
const GREEN = "#1a7a3f";
const GREEN_DARK = "#155e30";
const GREEN_LIGHT = "#e8f5e9";
const YELLOW = "#f5a623";

// ── Data ──────────────────────────────────────────────────────────────────────



const featuredProducts = [
  { name: "DOCTOR MORINGA Sweet Cookies - Jaggery Biscuit | Multi Millet...", price: "₹75", weight: "100 g", brand: "DOCTOR MORINGA Sweet Cookies", color: "#fff8f0" },
  { name: "Protein & Fiber-Rich Energy Balls | Traditional Indian Sweet with...", price: "₹250", weight: "300 g", brand: "Doctor Moringa's Laddoos", color: "#f0fff4" },
  { name: "Amrit Sunflower Honey A Product By:KVIC - 1 KG | 100%...", price: "₹850", weight: "1 kg", brand: "Amrit Sunflower Honey A Product By:KVIC", color: "#fffde7" },
  { name: "Shree Goraksh Bhog Ragi Dosa Mix 500 G pack maks 12...", price: "₹229", oldPrice: "₹249", weight: "0.5 kg", brand: "Aahar hi Aushadhi Hai!", badge: "8% OFF", color: "#e8f5e9" },
];

const popularCategories = ["All", "Raw Honey", "Pickles", "Teas", "Millets", "Ayurveda", "Handicrafts"];

const popularProducts = [
  { name: "Baya India Homemade Mango Pickle | Authentic Ghar ka Bana Aam ka Achar |...", price: "₹280", oldPrice: "₹350", weight: "330 g", brand: "Baya India Homemade Mango Pickle", color: "#fff8e7" },
  { name: "Baya India Garlic Pickle 330g | Homemade Lehsun ka Achar | Tradition...", price: "₹291", oldPrice: "₹435", weight: "330 g", brand: "Baya India Garlic Pickle", color: "#f0fff4" },
  { name: "Baya India Elephant Foot Yam Pickle | Suran ka Achar | Homemade Grated...", price: "₹283", oldPrice: "₹449", weight: "330 g", brand: "Baya India Elephant Foot Yam Pickle", color: "#fff0f0" },
  { name: "Handmade Organic Natural Water Hyacinth Tea Coaster | Hanc...", price: "₹372", weight: "4 Piece", brand: "Water Hyacinth Tea Coaster", color: "#f5f0e8" },
];

const pickles = [
  { name: "Baya India Homemade Mango Pickle | Authentic Ghar ka Bana Aam ka Achar...", price: "₹280", oldPrice: "₹350", weight: "330 g", brand: "Baya India Homemade Mango Pickle" },
  { name: "Baya India Garlic Pickle 330g | Homemade Lehsun ka Achar | Tradition...", price: "₹291", oldPrice: "₹435", weight: "330 g", brand: "Baya India Garlic Pickle" },
  { name: "Baya India Elephant Foot Yam Pickle | Suran ka Achar | Homemade Grate...", price: "₹283", oldPrice: "₹449", weight: "330 g", brand: "Baya India Elephant Foot Yam Pickle" },
];

const millets = [
  { name: "Millets Thekua 250G (No Palm oil, No Refined Sugar, No Maida)", price: "₹278", oldPrice: "₹299", weight: "0.25 kg", brand: "Aahar hi Aushadhi Hai!" },
  { name: "Shree Goraksh Bhog Multigrain Sattu 400G | prepared from barley (jau),...", price: "₹185", oldPrice: "₹199", weight: "0.40 kg", brand: "Aahar hi Aushadhi Hai!" },
  { name: "Shree Goraksh Bhog Ragi Dosa Mix 500 G pack maks 12 dosa | Gluten...", price: "₹229", oldPrice: "₹349", weight: "0.5 kg", brand: "Aahar hi Aushadhi Hai!" },
];

const rawHoney = [
  { name: "Amrit Sunflower Honey A Product By:KVIC - 1 KG | 100% Natural Honey|...", price: "₹850", weight: "1 kg", brand: "Amrit Sunflower Honey A Product By:KVIC" },
];

const ayurveda = [
  { name: "Protein & Fiber-Rich Energy Balls | Traditional Indian Sweet with Dates...", price: "₹250", weight: "300 g", brand: "Doctor Moringa's Laddoos" },
  { name: "DOCTOR MORINGA Sweet Cookies - |Jaggery Biscuit | Multi Millet Snack...", price: "₹75", weight: "100 g", brand: "DOCTOR MORINGA Sweet Cookies" },
];

const handicrafts = [
  { name: "Handmade Organic Natural Water Hyacinth Tea Coaster| Handmade S...", price: "₹372", weight: "4 Piece", brand: "Water Hyacinth Tea Coaster" },
];

const events = [
  { date: "27 Feb 2026", title: "Mango Workshop UPCAR", img: "https://placehold.co/220x140/2d5a27/ffffff?text=Mango+Workshop" },
  { date: "24 Dec 2025", title: "Rista FPC", img: "https://placehold.co/220x140/2d5a27/ffffff?text=Rista+FPC" },
  { date: "20 Jan 2026", title: "KVK Hardoi-2", img: "https://placehold.co/220x140/2d5a27/ffffff?text=KVK+Hardoi-2" },
  { date: "19 Nov 2025", title: "KVK-Sitapur-2", img: "https://placehold.co/220x140/2d5a27/ffffff?text=KVK-Sitapur" },
];

const articles = [
  { date: "April 13, 2026", title: "Why Honey is a Must-Have in Every Home", color: "#f5a623", img: "https://placehold.co/260x160/f5a623/ffffff?text=Honey" },
  { date: "February 26, 2026", title: "How Much Protein in Moringa Powder? A Complete Guide for Health-Conscious Indians", color: "#3a7d44", img: "https://placehold.co/260x160/3a7d44/ffffff?text=Moringa" },
  { date: "February 26, 2026", title: "Does Moringa Lower Cholesterol? A Natural Solution for Heart Health", color: "#1a5276", img: "https://placehold.co/260x160/1a5276/ffffff?text=Health" },
  { date: "February 26, 2026", title: "Moringa Farming Training: Everything You'll Learn From...", color: "#6c3483", img: "https://placehold.co/260x160/6c3483/ffffff?text=Farming" },
];

const faqs = [
  "Are KaashtKart products 100% natural?",
  "Do you offer organic certification?",
  "Are your seeds hybrid or desi?",
  "How long does delivery take?",
  "Do you deliver to remote villages?",
  "Is shipping free on all orders?",
  "How can I track my order?",
  "Do you offer Cash on Delivery (COD)?",
  "What payment methods do you accept?",
  "Is my payment information secure?",
  "Can I change my delivery address?",
  "What is your return policy?",
  "How do I request a refund?",
  "How to contact customer support?",
];

const footerShopCategories1 = ["Handicrafts", "Rice", "Mushrooms", "Ayurveda", "Millets", "Teas", "Pickles"];
const footerShopCategories2 = ["Cocoa", "Spices", "Edible Oils", "Vinegar/ Cider", "Jaggery", "Raw Honey", "Dry Fruits", "Fresh Fruits"];
const usefulLinks1 = ["About Us", "Contact Us", "Blogs", "Events", "Careers", "Support Center"];
const usefulLinks2 = ["Privacy Policy", "Terms & Conditions", "Cancellation & Returns", "Refund Policy", "Track Order", "Shipping"];
const categoryIconMap = {
  Handicrafts: ShoppingBag,
  Rice: Flag,
  Mushrooms: FlaskConical,
  Ayurveda: LucideLeaf,
  Millets: Wheat,
  Teas: Sprout,
};

const articleIconMap = [Citrus, LucideLeaf, HeartPulse, Wheat];

const socialIcons = [
  { label: "Facebook", icon: Flag },
  { label: "Instagram", icon: Camera },
  { label: "YouTube", icon: PlayCircle },
  { label: "Community", icon: MessageCircle },
  { label: "LinkedIn", icon: Briefcase },
  { label: "X", icon: Send },
];

// ── Sub-components ────────────────────────────────────────────────────────────

function TrustBadges() {
  const badges = [
    { icon: <ShieldCheck />, title: "100% Original Products", sub: "Trusted brands only" },
    { icon: <TruckIcon />, title: "Free Delivery", sub: "On eligible orders" },
    { icon: <LockIcon />, title: "Secure Payments", sub: "Encrypted checkout" },
    { icon: <HeadphonesIcon />, title: "Expert Support", sub: "We're here to help" },
  ];
  return (
    <div className="bg-white py-5 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-4 gap-4">
        {badges.map(b => (
          <div key={b.title} className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: GREEN_LIGHT }}>
              {b.icon}
            </div>
            <div>
              <div className="font-semibold text-sm text-gray-800">{b.title}</div>
              <div className="text-xs text-gray-500">{b.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}





function ProductCard({ product, showOldPrice = true }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow group">
      <div className="relative bg-gray-50 h-40 flex items-center justify-center text-5xl p-4"
        style={{ backgroundColor: product.color || "#f9f9f9" }}>
        {product.badge && (
          <span className="absolute top-2 right-2 bg-green-600 text-white text-[10px] px-1.5 py-0.5 rounded font-bold">{product.badge}</span>
        )}
        <ShoppingBag size={56} className="text-green-700" strokeWidth={1.8} />
      </div>
      <div className="p-3">
        <p className="text-xs font-semibold text-green-700 leading-tight mb-1 line-clamp-2 min-h-8">{product.name}</p>
        <p className="text-[11px] text-gray-400 mb-1 truncate">{product.brand}</p>
        <div className="flex items-center gap-1 mb-2">
          {[1,2,3,4,5].map(s => <StarIcon key={s} filled={false} />)}
          <span className="text-[10px] text-gray-400 ml-1">0 Reviews</span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="font-bold text-gray-900 text-sm">{product.price}</span>
            {showOldPrice && product.oldPrice && (
              <span className="text-gray-400 text-xs line-through ml-1">{product.oldPrice}</span>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <select className="flex-1 text-xs border border-gray-200 rounded px-2 py-1 focus:outline-none focus:border-green-500">
            <option>{product.weight}</option>
          </select>
          <button style={{ backgroundColor: GREEN }}
            className="w-8 h-7 rounded flex items-center justify-center text-white hover:bg-green-800 transition-colors shrink-0">
            <CartIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

function FeaturedProducts() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-8">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-900">Featured Products</h2>
      <div className="relative">
        <button className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 rounded-full w-8 h-8 flex items-center justify-center shadow-md">
          <ChevronLeft />
        </button>
        <div className="grid grid-cols-4 gap-4">
          {featuredProducts.map((p, i) => <ProductCard key={i} product={p} />)}
        </div>
        <button className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 rounded-full w-8 h-8 flex items-center justify-center shadow-md">
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}

function PopularProducts() {
  const [active, setActive] = useState("All");
  return (
    <div className="max-w-7xl mx-auto px-8 py-8">
      <h2 className="text-2xl font-bold text-center mb-5 text-gray-900">Popular Products</h2>
      <div className="flex gap-2 mb-6 flex-wrap">
        {popularCategories.map(cat => (
          <button key={cat}
            onClick={() => setActive(cat)}
            className="px-4 py-1.5 rounded text-sm font-medium transition-colors"
            style={active === cat ? { backgroundColor: GREEN, color: "white" } : { backgroundColor: "white", color: "#555", border: "1px solid #ddd" }}>
            {cat}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-4">
        {popularProducts.map((p, i) => <ProductCard key={i} product={p} />)}
      </div>
    </div>
  );
}

function TrustStrip() {
  const items = [
    { icon: FlaskConical, text: "Scientific Formulation" },
    { icon: Flag, text: "Made in India" },
    { icon: Recycle, text: "Eco-Friendly" },
    { icon: Sprout, text: "Ethical Practices" },
    { icon: LucideLeaf, text: "100% Plant-Based" },
  ];
  return (
    <div className="bg-gray-50 border-y border-gray-100 py-4">
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-around">
        {items.map(item => {
          const Icon = item.icon;
          return (
            <div key={item.text} className="flex items-center gap-2 text-sm text-gray-700 font-medium">
              <Icon size={20} className="text-green-700" />
              {item.text}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function SectionProductGrid({ title, products }) {
  return (
    <div className="max-w-7xl mx-auto px-8 py-6">
      <div className="border border-gray-100 rounded-xl overflow-hidden">
        <div className="px-6 py-4 bg-white border-b border-gray-100">
          <h3 className="font-bold text-lg text-gray-900 border-b-2 border-green-700 inline-block pb-0.5">{title}</h3>
        </div>
        <div className="p-4 bg-white">
          <div className={`grid gap-4 ${products.length === 1 ? "grid-cols-1 max-w-xs" : products.length === 2 ? "grid-cols-2 max-w-xl" : "grid-cols-3"}`}>
            {products.map((p, i) => <ProductCard key={i} product={{ ...p, color: ["#fff8e7", "#f0fff4", "#fff0f0", "#f5f0e8"][i % 4] }} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

function RecentEvents() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-8">
      <h2 className="text-2xl font-bold text-center mb-1 text-gray-900">Recent Events</h2>
      <p className="text-center text-gray-500 text-sm mb-6">Join our agricultural workshops, expos and farmer meetups</p>
      <div className="grid grid-cols-4 gap-4">
        {events.map(ev => (
          <div key={ev.title} className="rounded-xl overflow-hidden relative cursor-pointer group">
            <div className="h-36 flex items-center justify-center text-4xl"
              style={{ background: "linear-gradient(135deg, #2d5a27, #1a7a3f)" }}>
              <Wheat size={44} className="text-green-100" strokeWidth={1.8} />
              <span className="absolute top-2 left-2 bg-black/40 text-white text-[10px] px-2 py-0.5 rounded">{ev.date}</span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-3">
              <p className="text-white font-semibold text-xs">{ev.title}</p>
              <p style={{ color: "#86efac" }} className="text-[11px] mt-0.5">View Details →</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CallToAction() {
  return (
    <div style={{ backgroundColor: GREEN }} className="py-12 text-center text-white">
      <h2 className="text-2xl font-bold mb-2">Experience the Purity of Nature with KaashtKart</h2>
      <p className="text-green-200 mb-5 text-sm">Premium natural products crafted with care. Simple, secure, and delivered to your doorstep.</p>
      <button className="bg-white font-semibold text-green-800 px-8 py-2.5 rounded-full hover:bg-green-50 transition-colors">
        Shop Now
      </button>
    </div>
  );
}

function LatestArticles() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-10">
      <div className="flex items-end justify-between mb-1">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-green-600 inline-block pb-0.5">Latest Articles</h2>
        </div>
        <button style={{ backgroundColor: GREEN }} className="text-white text-sm px-4 py-2 rounded-full font-medium">View All Articles</button>
      </div>
      <p className="text-gray-500 text-xs mb-6">Stay updated with our latest insights on health, nutrition, and sustainable living</p>
      <div className="relative">
        <button className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 rounded-full w-8 h-8 flex items-center justify-center shadow-md">
          <ChevronLeft />
        </button>
        <div className="grid grid-cols-4 gap-4">
          {articles.map((a, i) => (
            <div key={i} className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
              <div className="h-36 flex items-center justify-center text-4xl"
                style={{ backgroundColor: a.color + "22" }}>
                {(() => {
                  const Icon = articleIconMap[i] || LucideLeaf;
                  return <Icon size={44} className="text-white/90" strokeWidth={1.8} />;
                })()}
              </div>
              <div className="p-3">
                <p style={{ color: GREEN }} className="text-[10px] font-semibold mb-1">{a.date}</p>
                <p className="text-xs font-semibold text-gray-800 leading-tight mb-2 line-clamp-3">{a.title}</p>
                <p style={{ color: GREEN }} className="text-xs font-medium">Read More →</p>
              </div>
            </div>
          ))}
        </div>
        <button className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 rounded-full w-8 h-8 flex items-center justify-center shadow-md">
          <ChevronRight />
        </button>
      </div>
      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {[0,1,2].map(d => (
          <div key={d} className={`w-2 h-2 rounded-full ${d === 0 ? "bg-green-700" : "bg-gray-300"}`}></div>
        ))}
      </div>
    </div>
  );
}

function FAQ() {
  const [open, setOpen] = useState(null);
  const left = faqs.slice(0, 7);
  const right = faqs.slice(7);
  const FaqItem = ({ q, idx }) => (
    <div className="border border-gray-200 rounded mb-2">
      <button onClick={() => setOpen(open === idx ? null : idx)}
        className="w-full flex items-center justify-between px-4 py-3 text-left text-sm text-gray-700 hover:bg-gray-50 font-medium">
        {q}
        <PlusIcon />
      </button>
    </div>
  );
  return (
    <div className="bg-green-50 py-10">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-2xl font-bold text-center mb-1 text-gray-900">Frequently Asked Questions</h2>
        <p className="text-center text-gray-500 text-sm mb-6">Everything you need to know about KaashtKart products and orders.</p>
        <div className="grid grid-cols-2 gap-4">
          <div>{left.map((q, i) => <FaqItem key={i} q={q} idx={i} />)}</div>
          <div>{right.map((q, i) => <FaqItem key={i + 100} q={q} idx={i + 100} />)}</div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-10 pb-4">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-5 gap-8 mb-8">
          {/* About */}
          <div>
            <h4 className="text-white font-bold mb-3 text-sm">About KaashtKart</h4>
            <p className="text-xs leading-relaxed">KaashtKart is a farmer-to-customer e-commerce platform that connects farmers directly with consumers. It ensures fresh produce, fair pricing, and complete transparency without engagement of middlemen.</p>
          </div>
          {/* Useful Links */}
          <div>
            <h4 className="text-white font-bold mb-3 text-sm">Useful Links</h4>
            <div className="grid grid-cols-2 gap-x-2">
              <div>
                {usefulLinks1.map(l => (
                  <div key={l} className="flex items-center gap-1 mb-1.5 text-xs hover:text-white cursor-pointer">
                    <ChevronRightSmall /> {l}
                  </div>
                ))}
              </div>
              <div>
                {usefulLinks2.map(l => (
                  <div key={l} className="flex items-center gap-1 mb-1.5 text-xs hover:text-white cursor-pointer">
                    <ChevronRightSmall /> {l}
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Shop Categories */}
          <div className="col-span-2">
            <h4 className="text-white font-bold mb-3 text-sm">Shop Categories</h4>
            <div className="grid grid-cols-2 gap-x-6">
              <div>
                {footerShopCategories1.map(l => (
                  <div key={l} className="flex items-center gap-1 mb-1.5 text-xs hover:text-white cursor-pointer">
                    <ChevronRightSmall /> {l}
                  </div>
                ))}
              </div>
              <div>
                {footerShopCategories2.map(l => (
                  <div key={l} className="flex items-center gap-1 mb-1.5 text-xs hover:text-white cursor-pointer">
                    <ChevronRightSmall /> {l}
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Get in touch */}
          <div>
            <h4 className="text-white font-bold mb-3 text-sm">Get in Touch</h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2"><MapPin /><span>45A Dayal Enclave, Sec-9, Indira Nagar, Lucknow 226026</span></div>
              <div className="flex items-center gap-2"><Phone /><span>+91 83188 99526 +91 78601 14786</span></div>
              <div className="flex items-center gap-2"><Mail /><span>KaashtKart@gmail.com</span></div>
              <div className="flex items-center gap-2"><Mail /><span>info@KaashtKart.com</span></div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-4 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-2 text-xs">
            <span>Follow Us:</span>
            {socialIcons.map((item) => {
              const SocialIcon = item.icon;
              return (
                <button key={item.label} className="w-7 h-7 rounded border border-gray-600 flex items-center justify-center text-xs hover:bg-gray-700" aria-label={item.label}>
                  <SocialIcon size={13} />
                </button>
              );
            })}
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span>Download App:</span>
            <button className="bg-black text-white px-3 py-1 rounded text-[11px] border border-gray-600 inline-flex items-center gap-1"><Apple size={12} /> App Store</button>
            <button className="bg-black text-white px-3 py-1 rounded text-[11px] border border-gray-600 inline-flex items-center gap-1"><Play size={12} /> Google Play</button>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span>Payment Accepts:</span>
            <span className="bg-white text-gray-800 px-2 py-0.5 rounded text-[10px] font-bold">UPI</span>
            <span className="bg-blue-500 text-white px-2 py-0.5 rounded text-[10px] font-bold">PayU</span>
            <span className="bg-blue-700 text-white px-2 py-0.5 rounded text-[10px] font-bold">VISA</span>
          </div>
        </div>

        <div className="text-center text-xs text-gray-500 mt-4">
          © 2026 <span className="text-white font-bold">KaashtKart</span>. All rights reserved. Crafted with Code by CodeRafter
        </div>
      </div>
    </footer>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function KaashtKartPage() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">

      <div className="mb-8 md:mb-10">
        <Herosection />
      </div>
      <KaashtKartAbout />

      <CategorySection />
      <PromoCards />
      <FeaturedProducts />
      <PopularProducts />
      <TrustStrip />
      <SectionProductGrid title="Pickles" products={pickles} />
      <SectionProductGrid title="Handicrafts" products={handicrafts} />
      <SectionProductGrid title="Millets" products={millets} />
      <SectionProductGrid title="Raw Honey" products={rawHoney} />
      <SectionProductGrid title="Ayurveda" products={ayurveda} />
      <RecentEvents />
      <CallToAction />
      <LatestArticles />
      <FAQ />
      <Footer />
    </div>
  );
}