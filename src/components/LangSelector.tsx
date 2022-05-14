import React from "react";
import { useRouter } from "next/router";

export const LangSelector: React.FC = () => {
  const router = useRouter();
  const setLanguage = (lang: string) => {
    router.replace(router.pathname, undefined, { locale: lang });
  };

  return (
    <select
      className="lang-selector"
      onChange={(e) => setLanguage(e.target.value)}
      value={router.locale}
    >
      <option value="en">🇬🇧 English</option>
      <option value="fa">🇨🇿 Česky</option>
      <option value="ps">🇫🇷 Français</option>
      <option value="prs">🇩🇪 Deutsch</option>
    </select>
  );
};
