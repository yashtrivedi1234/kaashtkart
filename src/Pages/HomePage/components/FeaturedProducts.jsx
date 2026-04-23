import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FeaturedProductCookiesImg from "../../../assets/Featured Products/iqvwpbv8nlop7bos1qr9.webp";
import FeaturedProductLaddoosImg from "../../../assets/Featured Products/epbrshvhk88zn5hscjxs.webp";
import FeaturedProductHoneyImg from "../../../assets/Featured Products/k17eyygtmkub8k5lv0hc.webp";
import FeaturedProductRagiMixImg from "../../../assets/Featured Products/lzrtczg8rp6deecykdh9.webp";
import FeaturedProductMilletMixImg from "../../../assets/Featured Products/u9sju1clo1pycidxcfyh.webp";
import FeaturedProductAmlaCandyImg from "../../../assets/Featured Products/uw409abearm60ileynpz.webp";
import FeaturedProductPickleImg from "../../../assets/Featured Products/vgc78czmsehi89hakbwy.webp";
import FeaturedProductHerbalTeaImg from "../../../assets/Featured Products/yxq9icogzt0ebkbzz9e4.webp";
import ProductCard from "./ProductCard";

const featuredProducts = [
  {
    name: "DOCTOR MORINGA Sweet Cookies - Jaggery Biscuit | Multi Millet...",
    price: "₹75",
    weight: "100 g",
    brand: "DOCTOR MORINGA Sweet Cookies",
    color: "#fff8f0",
    image: FeaturedProductCookiesImg,
  },
  {
    name: "Protein & Fiber-Rich Energy Balls | Traditional Indian Sweet with...",
    price: "₹250",
    weight: "300 g",
    brand: "Doctor Moringa's Laddoos",
    color: "#f0fff4",
    image: FeaturedProductLaddoosImg,
  },
  {
    name: "Amrit Sunflower Honey A Product By:KVIC - 1 KG | 100%...",
    price: "₹850",
    weight: "1 kg",
    brand: "Amrit Sunflower Honey A Product By:KVIC",
    color: "#fffde7",
    image: FeaturedProductHoneyImg,
  },
  {
    name: "Shree Goraksh Bhog Ragi Dosa Mix 500 G pack maks 12...",
    price: "₹229",
    oldPrice: "₹249",
    weight: "0.5 kg",
    brand: "Aahar hi Aushadhi Hai!",
    badge: "8% OFF",
    color: "#e8f5e9",
    image: FeaturedProductRagiMixImg,
  },
  {
    name: "Multi Millet Health Mix | No Refined Sugar | Farm Fresh Blend...",
    price: "₹199",
    weight: "500 g",
    brand: "KaashtKart Naturals",
    color: "#f7f3ea",
    image: FeaturedProductMilletMixImg,
  },
  {
    name: "Amla Candy | Sweet & Tangy | Vitamin C Rich Snack...",
    price: "₹145",
    weight: "250 g",
    brand: "Village Wellness Foods",
    color: "#eef7e8",
    image: FeaturedProductAmlaCandyImg,
  },
  {
    name: "Traditional Homemade Pickle | Handcrafted in Small Batches...",
    price: "₹280",
    oldPrice: "₹320",
    weight: "330 g",
    brand: "Baya India",
    color: "#fff3ea",
    image: FeaturedProductPickleImg,
  },
  {
    name: "Herbal Detox Tea | Pure Leaves & Spices | Daily Wellness...",
    price: "₹175",
    weight: "100 g",
    brand: "Farm Direct Teas",
    color: "#edf4ff",
    image: FeaturedProductHerbalTeaImg,
  },
];

export default function FeaturedProducts() {
  const [viewportWidth, setViewportWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1400
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleCards = useMemo(() => {
    if (viewportWidth < 640) return 1;
    if (viewportWidth < 768) return 2;
    if (viewportWidth < 1024) return 3;
    return 4;
  }, [viewportWidth]);

  const maxIndex = Math.max(0, featuredProducts.length - visibleCards);
  const safeIndex = Math.min(currentIndex, maxIndex);

  const handlePrev = () => setCurrentIndex((prev) => Math.max(0, prev - 1));
  const handleNext = () =>
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));

  const slideWidthPercent = 100 / visibleCards;
  const translatePercent = safeIndex * slideWidthPercent;

  return (
    <section className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-900">
        Featured Products
      </h2>

      <div className="relative px-4 sm:px-5">
        {/* Prev Button */}
        <button
          type="button"
          onClick={handlePrev}
          disabled={safeIndex === 0}
          aria-label="Previous products"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 rounded-full w-8 h-8 flex items-center justify-center shadow-md disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
        >
          <ChevronLeft className="w-4 h-4 text-gray-600" />
        </button>

        {/* Carousel Track */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-out"
            style={{
              transform: `translateX(-${translatePercent}%)`,
              gap: "14px",
            }}
          >
            {featuredProducts.map((product) => (
              <div
                key={product.name}
                style={{
                  flex: `0 0 calc(${slideWidthPercent}% - 12px)`,
                  minWidth: 0,
                }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>

        {/* Next Button */}
        <button
          type="button"
          onClick={handleNext}
          disabled={safeIndex === maxIndex}
          aria-label="Next products"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 rounded-full w-8 h-8 flex items-center justify-center shadow-md disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
        >
          <ChevronRight className="w-4 h-4 text-gray-600" />
        </button>
      </div>

      {/* Dot Indicators (mobile only) */}
      {visibleCards === 1 && (
        <div className="flex justify-center gap-1.5 mt-4">
          {featuredProducts.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === safeIndex ? "bg-green-600" : "bg-gray-300"
              }`}
              aria-label={`Go to product ${i + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}