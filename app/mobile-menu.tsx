"use client";

import { useEffect, useId, useState } from "react";

const mobileNavItems = [
  { label: "Tratamentos", href: "#treatments" },
  { label: "Metodo", href: "#method" },
  { label: "Resultados", href: "#results" },
];

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={menuId}
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        onClick={() => setIsOpen((current) => !current)}
        className="flex size-10 cursor-pointer items-center justify-center rounded-full border border-[#2b211d]/20 bg-white/70 text-[#2b211d] transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#b58d72] focus:ring-offset-2 focus:ring-offset-[#f8f2eb]"
      >
        <span className="relative block h-4 w-5">
          <span
            className={`absolute left-0 block h-[2px] w-5 bg-current transition ${
              isOpen ? "top-[7px] rotate-45" : "top-0"
            }`}
          />
          <span
            className={`absolute left-0 top-[7px] block h-[2px] w-5 bg-current transition ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute left-0 block h-[2px] w-5 bg-current transition ${
              isOpen ? "top-[7px] -rotate-45" : "top-[14px]"
            }`}
          />
        </span>
      </button>

      {isOpen ? (
        <div
          id={menuId}
          className="absolute right-5 top-full z-40 mt-2 grid min-w-[220px] gap-2 rounded-2xl border border-[#2b211d]/10 bg-[#fffaf4] p-3 text-sm text-[#2b211d] shadow-[0_18px_40px_rgba(43,33,29,0.14)]"
        >
          {mobileNavItems.map((item) => (
            <a
              href={item.href}
              key={item.href}
              onClick={closeMenu}
              className="rounded-xl px-3 py-2 hover:bg-[#f3e8de] focus:outline-none focus:ring-2 focus:ring-[#b58d72]"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#booking"
            onClick={closeMenu}
            className="mt-1 rounded-full bg-[#2b211d] px-4 py-2 text-center font-medium text-white focus:outline-none focus:ring-2 focus:ring-[#b58d72]"
          >
            Agendar avaliacao
          </a>
        </div>
      ) : null}
    </div>
  );
}
