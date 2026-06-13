"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const Preloader = () => {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const hasVisited = localStorage.getItem("agrl_visited");
    if (hasVisited) {
      setShowPreloader(false);
      return;
    }
    localStorage.setItem("agrl_visited", "true");
    const timer = setTimeout(() => setShowPreloader(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!showPreloader) return null;

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      background: "#0a0a0a",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 99999,
      transition: "opacity 0.5s ease",
    }}>
      <div style={{
        animation: "preloaderPulse 1.5s ease-in-out infinite",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
      }}>
        <Image 
          src="/assets/img/akaraka-logo.png" 
          alt="AGRL Logo" 
          width={180} 
          height={120}
          priority
          style={{ objectFit: "contain" }}
        />
        <span style={{
          color: "#c8102e",
          fontSize: "18px",
          fontWeight: 600,
          fontFamily: "var(--font-manrope), sans-serif",
          letterSpacing: "4px",
          textTransform: "uppercase",
        }}>
          AD Asperia Per Astra
        </span>
        <div style={{
          width: "200px",
          height: "2px",
          background: "rgba(200,16,46,0.2)",
          overflow: "hidden",
          borderRadius: "1px",
        }}>
          <div style={{
            width: "60px",
            height: "100%",
            background: "#c8102e",
            animation: "preloaderBar 1.2s ease-in-out infinite",
            borderRadius: "1px",
          }} />
        </div>
      </div>
      <style jsx>{`
        @keyframes preloaderPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.8; }
        }
        @keyframes preloaderBar {
          0% { transform: translateX(-60px); }
          100% { transform: translateX(200px); }
        }
      `}</style>
    </div>
  );
};

export default Preloader;
