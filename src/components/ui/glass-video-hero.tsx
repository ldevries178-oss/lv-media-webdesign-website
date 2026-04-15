import { useState } from "react";

const HeroBackground = () => {
  console.log("HeroBackground rendering");
  const VIDEO_URL =
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260210_031346_d87182fb-b0af-4273-84d1-c6fd17d6bf0f.mp4";

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Geanimeerde video achtergrond */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ filter: "hue-rotate(140deg) brightness(0.6) contrast(1.1)" }}
      >
        <source src={VIDEO_URL} type="video/mp4" />
      </video>

      {/* Diepgroene gloed en overlay om te matchen met screenshot */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none opacity-60"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(47, 248, 1, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(47, 248, 1, 0.1) 0%, transparent 50%),
            rgba(10, 31, 15, 0.75)
          `
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0e0e0e] z-10 pointer-events-none" />
    </section>
  );
};

export { HeroBackground };
