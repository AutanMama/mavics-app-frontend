import { useState, useEffect } from "react";
import { fetchAdverts } from "../services/api";

const AdvertBanner = ({ placement }) => {
  const [ad, setAd] = useState(null);

  useEffect(() => {
    fetchAdverts().then(({ data }) => {
      const filtered = data.filter((a) => a.placement === placement);
      if (filtered.length > 0) setAd(filtered[0]);
    });
  }, [placement]);

  if (!ad) return null;

  return (
    <div className="my-8 w-full">
      <a href={ad.link} target="_blank" rel="noopener noreferrer">
        <div className="relative rounded-xl overflow-hidden group">
          <img
            src={ad.image}
            className="w-full h-40 object-cover brightness-75 group-hover:brightness-90 transition"
            alt={ad.title}
          />
          <div className="absolute inset-0 flex items-center px-8">
            <h3 className="text-white text-2xl font-bold drop-shadow-md">
              {ad.title}
            </h3>
          </div>
        </div>
      </a>
    </div>
  );
};
export default AdvertBanner;
