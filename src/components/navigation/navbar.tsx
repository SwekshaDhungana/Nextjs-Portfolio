"use client";

import { useState } from "react";
import type { NavigationItem } from "@/data";

type NavbarProps = {
  brand: string;
  items: readonly NavigationItem[];
};

type NavLinkProps = {
  item: NavigationItem;
  mobile?: boolean;
  onNavigate?: () => void;
};

function NavLink({ item, mobile = false, onNavigate }: NavLinkProps) {
  return (
    <a
      href={item.href}
      onClick={onNavigate}
      className={
        mobile
          ? "block rounded-2xl px-4 py-3 text-base font-medium text-zinc-700 transition hover:bg-zinc-100 hover:text-zinc-950"
          : "text-sm font-medium text-zinc-600 transition hover:text-zinc-950"
      }
    >
      {item.label}
    </a>
  );
}

export function Navbar({ brand, items }: NavbarProps) {
  const [open, setOpen] = useState(false);

  function handleToggle() {
    setOpen((currentOpen) => !currentOpen);
  }

  function handleNavigate() {
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10 lg:px-12">
        <a
          href="#home"
          onClick={handleNavigate}
          className="text-sm font-semibold uppercase tracking-[0.28em] text-zinc-950"
        >
          {brand}
        </a>

        <nav aria-label="Primary navigation" className="hidden md:flex md:items-center md:gap-8">
          {items.map((item) => (
            <NavLink key={item.href} item={item} />
          ))}
        </nav>

        <button
          type="button"
          aria-controls="mobile-navigation"
          aria-expanded={open}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          onClick={handleToggle}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-950 shadow-sm shadow-zinc-950/5 transition hover:border-zinc-300 md:hidden"
        >
          <span className="relative h-4 w-4">
            <span
              className={`absolute left-0 top-1/2 h-0.5 w-4 rounded-full bg-current transition ${
                open ? "translate-y-0 rotate-45" : "-translate-y-[5px]"
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-0.5 w-4 -translate-y-1/2 rounded-full bg-current transition ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-0.5 w-4 rounded-full bg-current transition ${
                open ? "translate-y-0 rotate-[-45deg]" : "translate-y-[4px]"
              }`}
            />
          </span>
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-zinc-200 bg-white px-6 py-4 sm:px-10 md:hidden"
        >
          <div className="mx-auto max-w-6xl space-y-2">
            {items.map((item) => (
              <NavLink
                key={item.href}
                item={item}
                mobile
                onNavigate={handleNavigate}
              />
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
