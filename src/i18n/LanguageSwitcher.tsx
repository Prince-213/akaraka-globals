"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { locales, type Locale } from "@/i18n/translations";

export default function LanguageSwitcher() {
  const { locale, setLocale, isChanging } = useLanguage();
  const [open, setOpen] = useState(false);
  const [ripple, setRipple] = useState<Locale | null>(null);
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

  const handleSelect = (code: Locale) => {
    if (code === locale || isChanging) return;
    setRipple(code);
    setLocale(code);
    setOpen(false);
    setTimeout(() => setRipple(null), 600);
  };

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        marginLeft: "12px",
        marginRight: "12px",
        zIndex: 10,
      }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        disabled={isChanging}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          background: isChanging ? "#f5f5f5" : "none",
          border: "1px solid rgba(128,128,128,0.25)",
          borderRadius: "6px",
          padding: "5px 10px",
          cursor: isChanging ? "wait" : "pointer",
          fontSize: "13px",
          fontFamily: "var(--font-dmsans), sans-serif",
          color: "#333",
          opacity: isChanging ? 0.8 : 1,
          transition: "opacity 0.2s, background 0.2s",
        }}
        title={current.label}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span style={{ fontSize: "16px" }}>{current.flag}</span>
        <span style={{ display: "inline", minWidth: "26px" }}>
          {isChanging ? (
            <span
              style={{
                display: "inline-block",
                width: "14px",
                height: "14px",
                border: "2px solid rgba(200,16,46,0.2)",
                borderTopColor: "#c8102e",
                borderRadius: "50%",
                animation: "langSpin 0.7s linear infinite",
                verticalAlign: "middle",
              }}
            />
          ) : (
            current.code.toUpperCase()
          )}
        </span>
        <svg
          width={8}
          height={5}
          viewBox="0 0 8 5"
          fill="none"
          style={{
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s",
          }}
        >
          <path
            d="M1 1l3 3 3-3"
            stroke="#666"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <div
          role="listbox"
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
            minWidth: "170px",
            overflow: "hidden",
          }}
        >
          {locales.map((l) => (
            <button
              key={l.code}
              role="option"
              aria-selected={l.code === locale}
              onClick={() => handleSelect(l.code)}
              disabled={isChanging}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                width: "100%",
                padding: "10px 14px",
                border: "none",
                background: l.code === locale ? "#f5f5f5" : "transparent",
                cursor: isChanging ? "wait" : "pointer",
                fontSize: "14px",
                fontFamily: "var(--font-dmsans), sans-serif",
                color: "#333",
                textAlign: "left",
                transition: "background 0.15s",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = l.code === locale ? "#f0f0f0" : "#fafafa")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = l.code === locale ? "#f5f5f5" : "transparent")
              }
            >
              {ripple === l.code && (
                <span
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(200,16,46,0.08)",
                    animation: "langRipple 0.5s ease-out forwards",
                    pointerEvents: "none",
                  }}
                />
              )}
              <span style={{ fontSize: "18px" }}>{l.flag}</span>
              <span style={{ flex: 1 }}>{l.label}</span>
              {l.code === locale && (
                <svg
                  width={14}
                  height={14}
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M2 7l3 4 7-8"
                    stroke="#c8102e"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}

      <style jsx>{`
        @keyframes langSpin {
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes langRipple {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
