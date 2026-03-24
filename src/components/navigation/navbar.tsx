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
          ? "block rounded-[1.4rem] border border-transparent px-4 py-3 text-base font-medium text-[var(--text-secondary)] transition hover:border-[var(--border)] hover:bg-white/[0.03] hover:text-[var(--text-primary)]"
          : "font-[family:var(--font-label)] text-[0.72rem] uppercase tracking-[0.22em] text-[var(--text-secondary)] transition hover:text-[var(--text-primary)]"
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
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[#140f0e]/88 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10 lg:px-12">
        <a
          href="#home"
          onClick={handleNavigate}
          className="font-[family:var(--font-label)] text-[0.78rem] font-semibold uppercase tracking-[0.28em] text-[var(--text-primary)]"
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
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-white/[0.03] text-[var(--text-primary)] shadow-[0_12px_26px_rgba(0,0,0,0.22)] transition hover:border-[rgba(203,92,50,0.5)] hover:bg-white/[0.06] md:hidden"
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
          className="border-t border-[var(--border)] bg-[#191210]/96 px-6 py-4 backdrop-blur-md sm:px-10 md:hidden"
        >
          <div className="mx-auto max-w-6xl space-y-2">
            {items.map((item) => (
              <NavLink key={item.href} item={item} mobile onNavigate={handleNavigate} />
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
