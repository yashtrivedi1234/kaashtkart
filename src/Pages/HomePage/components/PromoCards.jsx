import React from "react";

import orangeImg from "../../../assets/PromoCards/imgi_20_Orange.png";
import mangoImg from "../../../assets/PromoCards/imgi_21_mango-banner.jpg";

const PromoCards = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6 p-4">
      
      {/* LEFT IMAGE */}
      <div className="bg-[#f5f7f2] rounded-2xl p-4 flex items-center justify-center">
        <img
          src={orangeImg}
          alt="orange"
          className="w-full max-h-[250px] object-contain"
        />
      </div>

      {/* RIGHT IMAGE */}
      <div className="bg-[#f5f7f2] rounded-2xl p-4 flex items-center justify-center">
        <img
          src={mangoImg}
          alt="mango"
          className="w-full max-h-[250px] object-contain"
        />
      </div>

    </div>
  );
};

export default PromoCards;