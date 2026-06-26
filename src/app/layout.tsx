import type { Metadata, Viewport } from "next";
import "../../public/assets/css/bootstrap.min.css";
import "../../public/assets/css/bootstrap-icons.css";
import "../../public/assets/css/animate.min.css";
import "../../public/assets/css/swiper-bundle.min.css";
import "react-modal-video/css/modal-video.css";
import "../../public/assets/css/nice-select.css";
import "../../public/assets/css/style.css";
import { dmsans, manrope } from "../fonts/font";
import ClientRoot from "@/components/ClientRoot"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#d32f2f",
};
import SchemaOrg from "@/components/common/SchemaOrg";
import { LanguageProvider } from "@/i18n/LanguageContext";
import DomTranslator from "@/i18n/DomTranslator";

export const metadata: Metadata = {
  title: {
    default: "Akaraka Global Resources | Industrial Chemicals & Paints",
    template: "%s | AGRL",
  },
  description: "Leading supplier of industrial chemicals, paints, inks, raw materials, coatings, and plastics in Nigeria. Imports, exports & contracting since 2000.",
  keywords: ["industrial chemicals", "paints", "inks", "raw materials", "calcium carbonate", "CaCO3", "titanium dioxide", "HPMC", "coatings", "plastics", "Nigeria", "Abuja", "AGRL", "Akaraka"],
  authors: [{ name: "Akaraka Global Resources Limited" }],
  creator: "Akaraka Global Resources Limited",
  publisher: "Akaraka Global Resources Limited",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL(
    process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://akarakaglobalresources.com"
  ),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    siteName: "Akaraka Global Resources",
    title: "Akaraka Global Resources | Industrial Chemicals",
    description: "Trusted supplier of industrial chemicals, paints, inks, raw materials, coatings and plastics in Nigeria since 2000.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akaraka Global Resources Limited (AGRL)",
    description: "Industrial chemicals, paints, raw materials, coatings & plastics supplier in Nigeria.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/assets/img/fav-icon.svg",
    apple: "/assets/img/akaraka-logo.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`tt-magic-cursor ${dmsans.variable} ${manrope.variable}`} lang="en">
      <body  >
        <SchemaOrg />
        <LanguageProvider>
          <DomTranslator />
          <ClientRoot>
            
            {children}
          </ClientRoot>
        </LanguageProvider>
      </body>
    </html>
  );
}
