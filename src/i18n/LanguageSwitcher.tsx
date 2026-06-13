"use client";
import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { locales, type Locale } from "@/i18n/translations";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const current = locales.find((l) => l.code === locale) || locales[0];

  return (
    <div ref={ref} style={{ position: "relative", display: "inline-flex", alignItems: "center", marginLeft: "12px", marginRight: "12px", zIndex: 10 }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          background: "none",
          border: "1px solid rgba(128,128,128,0.25)",
          borderRadius: "6px",
          padding: "5px 10px",
          cursor: "pointer",
          fontSize: "13px",
          fontFamily: "var(--font-dmsans), sans-serif",
          color: "#333",
        }}
        title={current.label}
      >
        <span style={{ fontSize: "16px" }}>{current.flag}</span>
        <span style={{ display: "inline" }}>{current.code.toUpperCase()}</span>
        <svg width={8} height={5} viewBox="0 0 8 5" fill="none">
          <path d="M1 1l3 3 3-3" stroke="#666" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            right: 0,
            marginTop: "4px",
            background: "#fff",
            border: "1px solid #eee",
            borderRadius: "8px",
            boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
            zIndex: 9999,
            minWidth: "160px",
            overflow: "hidden",
          }}
        >
          {locales.map((l) => (
            <button
              key={l.code}
              onClick={() => {
                setLocale(l.code);
                setOpen(false);
              }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                width: "100%",
                padding: "10px 14px",
                border: "none",
                background: l.code === locale ? "#f5f5f5" : "transparent",
                cursor: "pointer",
                fontSize: "14px",
                fontFamily: "var(--font-dmsans), sans-serif",
                color: "#333",
                textAlign: "left",
                transition: "background 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#f0f0f0")}
              onMouseLeave={(e) => (e.currentTarget.style.background = l.code === locale ? "#f5f5f5" : "transparent")}
            >
              <span style={{ fontSize: "18px" }}>{l.flag}</span>
              <span>{l.label}</span>
              {l.code === locale && (
                <svg width={14} height={14} viewBox="0 0 14 14" fill="none" style={{ marginLeft: "auto" }}>
                  <path d="M2 7l3 4 7-8" stroke="#c8102e" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
