import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// ✅ Category Images Import
import HandicraftImg from "../../../assets/Categories Images/imgi_3_handicraft_gparm3.png";
import RiceImg from "../../../assets/Categories Images/imgi_4_Rice_mtz6vk.png";
import MushroomImg from "../../../assets/Categories Images/imgi_5_Mushroom_f0epc8.png";
import AyurvedImg from "../../../assets/Categories Images/imgi_6_Ayurved_pvaxs4.png";
import MilletsImg from "../../../assets/Categories Images/imgi_7_ftjsn0sg5lixkjtqxg83.webp";
import TeaImg from "../../../assets/Categories Images/imgi_8_Tea_kp4atw.png";
import PickleImg from "../../../assets/Categories Images/imgi_9_pickle_tzxusf.png";
import CocoaImg from "../../../assets/Categories Images/imgi_10_Cocoa_y4lsrq.png";
import SpicesImg from "../../../assets/Categories Images/imgi_11_spices_thnjut.png";
import MustardImg from "../../../assets/Categories Images/imgi_12_mustard_lwml4n.png";
import VinegarImg from "../../../assets/Categories Images/imgi_13_vinegar_soxgvb.png";
import JaggeryImg from "../../../assets/Categories Images/imgi_14_jaggery_ikg2ls.png";
import HoneyImg from "../../../assets/Categories Images/imgi_15_honey_sid7ip.png";
import DryFruitsImg from "../../../assets/Categories Images/imgi_16_Dry_Fruits_k1yl2n.png";
import ExtraImg from "../../../assets/Categories Images/imgi_17_ubdygoulttlb12xcrgk4.webp";

const GREEN = "#1a7a3f";

const categories = [
  { name: "Handicrafts", count: "1 items",  color: "#fff0f0", img: HandicraftImg },
  { name: "Rice",        count: "0 items",  color: "#f0f4ff", img: RiceImg },
  { name: "Mushrooms",   count: "0 items",  color: "#f5f0ff", img: MushroomImg },
  { name: "Ayurveda",    count: "10 items", color: "#fff8f0", img: AyurvedImg },
  { name: "Millets",     count: "6 items",  color: "#f0fff4", img: MilletsImg },
  { name: "Teas",        count: "2 items",  color: "#fff0f8", img: TeaImg },
  { name: "Pickle",      count: "0 items",  color: "#fffbe6", img: PickleImg },
  { name: "Cocoa",       count: "0 items",  color: "#fdf0e8", img: CocoaImg },
  { name: "Spices",      count: "0 items",  color: "#fff4f0", img: SpicesImg },
  { name: "Mustard",     count: "0 items",  color: "#fffff0", img: MustardImg },
  { name: "Vinegar",     count: "0 items",  color: "#f0f8ff", img: VinegarImg },
  { name: "Jaggery",     count: "0 items",  color: "#fff8ee", img: JaggeryImg },
  { name: "Honey",       count: "0 items",  color: "#fffbf0", img: HoneyImg },
  { name: "Dry Fruits",  count: "0 items",  color: "#fdf5ec", img: DryFruitsImg },
  { name: "Extra",       count: "0 items",  color: "#f5f5f5", img: ExtraImg },
];

export default function CategorySection() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 300, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-8">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-center mb-1 text-gray-900">
          Fresh · Pure · Authentic ·
        </h2>
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-900">
          Direct From Farmers
        </h2>

        {/* Slider */}
        <div className="relative flex items-center">
          {/* Left Arrow */}
          <button
            onClick={() => scroll(-1)}
            className="absolute -left-4 z-10 bg-white border border-gray-200 rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:bg-gray-50"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Scrollable Row */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scroll-smooth w-full px-2"
            style={{ scrollbarWidth: "none" }} // hide scrollbar Firefox
          >
            {categories.map((cat) => (
              <div
                key={cat.name}
                className="text-center cursor-pointer group flex-shrink-0 w-[110px]"
              >
                <div
                  className="rounded-xl p-3 flex items-center justify-center h-24 mb-2 transition-transform group-hover:scale-105"
                  style={{ backgroundColor: cat.color }}
                >
                  <img
                    src={cat.img}
                    alt={cat.name}
                    className="h-16 w-16 object-contain"
                  />
                </div>
                <div className="font-semibold text-sm text-gray-800">
                  {cat.name}
                </div>
                <div style={{ color: GREEN }} className="text-xs font-medium">
                  {cat.count}
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll(1)}
            className="absolute -right-4 z-10 bg-white border border-gray-200 rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:bg-gray-50"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}