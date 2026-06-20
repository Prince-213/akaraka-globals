"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import { type Locale, locales, translate } from "./translations";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  isChanging: boolean;
}

const LanguageContext = createContext<LanguageContextType>({
  locale: "en",
  setLocale: () => {},
  t: (key: string) => key,
  isChanging: false,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [mounted, setMounted] = useState(false);
  const [isChanging, setIsChanging] = useState(false);

  // Initialize from localStorage / document lang on client
  useEffect(() => {
    const stored = localStorage.getItem("agrl_locale") as Locale | null;
    const initial = stored && locales.some((l) => l.code === stored) ? stored : "en";
    setLocaleState(initial);
    document.documentElement.lang = initial;
    setMounted(true);
  }, []);

  // Listen for translation start/end events from DomTranslator
  useEffect(() => {
    const onTranslation = (e: Event) => {
      const detail = (e as CustomEvent).detail as { state: "start" | "end" } | undefined;
      setIsChanging(detail?.state === "start");
    };
    window.addEventListener("agrl-translation", onTranslation);
    return () => window.removeEventListener("agrl-translation", onTranslation);
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    if (!locales.some((l) => l.code === newLocale)) return;
    setLocaleState(newLocale);
    localStorage.setItem("agrl_locale", newLocale);
    document.documentElement.lang = newLocale;
  }, []);

  const t = useCallback(
    (key: string) => translate(key, locale),
    [locale]
  );

  // Avoid flash of wrong language before mount
  if (!mounted) {
    return (
      <LanguageContext.Provider
        value={{ locale: "en", setLocale: () => {}, t: (k) => k, isChanging: false }}
      >
        {children}
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, isChanging }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
