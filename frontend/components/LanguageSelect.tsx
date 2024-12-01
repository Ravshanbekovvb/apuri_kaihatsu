import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/navigation";

const LanguageSelect = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("app");

  const handleLanguageChange = (lang: string): void => {
    router.push(pathname, { locale: lang });
  };

  return (
    <Select defaultValue={locale} onValueChange={handleLanguageChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={t("language")} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">
          <div className="flex items-center gap-2 ">
            <img
              src="/assets/usa.png"
              alt="English"
              className="h-5 w-6 object-cover rounded border-[1px]"
            />
            English
          </div>
        </SelectItem>
        <SelectItem value="ja"><div className="flex items-center gap-2 ">
            <img
              src="/assets/ja.png"
              alt="English"
              className="h-5 w-6 object-cover rounded border-[1px]"
            />
            日本語
          </div></SelectItem>
        <SelectItem value="uz">
        <div className="flex items-center gap-2 ">
            <img
              src="/assets/uz.png"
              alt="English"
              className="h-5 w-6 object-cover rounded border-[1px]"
            />
            O‘zbekcha
          </div></SelectItem>
        <SelectItem value="ru"><div className="flex items-center gap-2 border-black ">
            <img
              src="/assets/ru.png"
              alt="English"
              className="h-5 w-6 object-cover rounded border-[1px]"
            />
            Русский
          </div></SelectItem>
      </SelectContent>
    </Select>
  );
};

export default LanguageSelect;
