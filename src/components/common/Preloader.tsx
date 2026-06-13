"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

const CRITICAL_IMAGES = [
  "/assets/img/home1/home1-banner-bg.webp",
  "/assets/img/home1/home1-service-bg.webp",
  "/assets/img/akaraka-logo.webp",
];

const Preloader = () => {
  const [showPreloader, setShowPreloader] = useState(true);
  const [progress, setProgress] = useState(0);
  const hasVisited = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    
    const visited = localStorage.getItem("agrl_visited");
    if (visited) {
      hasVisited.current = true;
      setShowPreloader(false);
      return;
    }

    let loaded = 0;
    const total = CRITICAL_IMAGES.length + 1;
    const updateProgress = () => {
      loaded++;
      setProgress(Math.round((loaded / total) * 100));
      if (loaded >= total) {
        localStorage.setItem("agrl_visited", "true");
        setTimeout(() => setShowPreloader(false), 400);
      }
    };

    // Track critical images
    CRITICAL_IMAGES.forEach((src) => {
      const img = new window.Image();
      img.onload = updateProgress;
      img.onerror = updateProgress;
      img.src = src;
    });

    // Timeout fallback
    const fallback = setTimeout(updateProgress, 3000);
    return () => clearTimeout(fallback);
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
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
      }}>
        <div style={{
          animation: "preloaderPulse 1.5s ease-in-out infinite",
        }}>
          <Image 
            src="/assets/img/akaraka-logo.webp" 
            alt="AGRL Logo" 
            width={180} 
            height={120}
            priority
            style={{ objectFit: "contain" }}
          />
        </div>
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
            width: `${progress}%`,
            height: "100%",
            background: "#c8102e",
            transition: "width 0.4s ease",
            borderRadius: "1px",
          }} />
        </div>
        <span style={{
          color: "rgba(255,255,255,0.4)",
          fontSize: "11px",
          fontFamily: "var(--font-manrope), sans-serif",
          letterSpacing: "2px",
        }}>
          {progress}%
        </span>
      </div>
      <style jsx>{`
        @keyframes preloaderPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.8; }
        }
      `}</style>
    </div>
  );
};

export default Preloader;
