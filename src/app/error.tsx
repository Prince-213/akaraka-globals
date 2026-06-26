"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { t } = useLanguage();
  return (
    <div className="error-page-wrap pt-120 mb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <h1 style={{ fontSize: "120px", fontWeight: 800, color: "var(--primary-color1, #d32f2f)", lineHeight: 1, marginBottom: "20px" }}>500</h1>
            <h2 style={{ fontSize: "36px", marginBottom: "16px" }}>{t("somethingWentWrong")}</h2>
            <p style={{ color: "#666", marginBottom: "30px", fontSize: "16px", lineHeight: 1.7 }}>
              We encountered an unexpected error. Please try again or return to the homepage.
            </p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <button
                onClick={reset}
                style={{
                  padding: "12px 30px", background: "var(--primary-color1, #d32f2f)", color: "#fff",
                  border: "none", borderRadius: "6px", cursor: "pointer", fontWeight: 600, fontSize: "15px"
                }}
              >
                {t("tryAgain")}
              </button>
              <Link
                href="/"
                style={{
                  padding: "12px 30px", background: "#000", color: "#fff",
                  borderRadius: "6px", fontWeight: 600, fontSize: "15px", textDecoration: "none", display: "inline-block"
                }}
              >
                {t("backToHome")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
