"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Heart, Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { storeConfig } from "@/config/store";
import { useCartStore } from "@/store/cart";
import { useWishlistStore } from "@/store/wishlist";
import { useUIStore } from "@/store/ui";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const totalItems = useCartStore((s) => s.items.reduce((n, i) => n + i.quantity, 0));
  const openCart = useCartStore((s) => s.openCart);
  const wishlistCount = useWishlistStore((s) => s.ids.length);
  const mobileNavOpen = useUIStore((s) => s.mobileNavOpen);
  const openMobileNav = useUIStore((s) => s.openMobileNav);
  const closeMobileNav = useUIStore((s) => s.closeMobileNav);
  const openSearch = useUIStore((s) => s.openSearch);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileNavOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileNavOpen]);

  return (
    <>
      <div className="bg-primary px-4 py-2 text-center text-[10px] uppercase tracking-wide2 text-background sm:text-[11px]">
        {storeConfig.announcement}
      </div>

      <header
        className={cn(
          "sticky top-0 z-40 border-b transition-all duration-300",
          scrolled
            ? "border-border/80 bg-background/85 backdrop-blur-md"
            : "border-transparent bg-background/70 backdrop-blur-sm"
        )}
      >
        <div className="container-site grid h-14 grid-cols-3 items-center md:h-16">
          <div className="flex items-center gap-1 sm:gap-2">
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center lg:hidden"
              onClick={openMobileNav}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center"
              onClick={openSearch}
              aria-label="Search"
            >
              <Search className="h-4.5 w-4.5 h-[18px] w-[18px]" />
            </button>
          </div>

          <Link
            href="/"
            className="justify-self-center text-center font-display text-sm font-medium tracking-brand sm:text-base"
          >
            {storeConfig.brand.logoText}
          </Link>

          <div className="flex items-center justify-end gap-0.5 sm:gap-1">
            <Link
              href="/wishlist"
              className="relative flex h-10 w-10 items-center justify-center"
              aria-label="Wishlist"
            >
              <Heart className="h-[18px] w-[18px]" />
              {wishlistCount > 0 && (
                <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-accent px-1 text-[9px] text-background">
                  {wishlistCount}
                </span>
              )}
            </Link>
            <Link
              href="/account"
              className="hidden h-10 w-10 items-center justify-center sm:flex"
              aria-label="Account"
            >
              <User className="h-[18px] w-[18px]" />
            </Link>
            <button
              type="button"
              className="relative flex h-10 w-10 items-center justify-center"
              onClick={openCart}
              aria-label="Shopping bag"
            >
              <ShoppingBag className="h-[18px] w-[18px]" />
              {totalItems > 0 && (
                <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[9px] text-background">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>

        <nav className="container-site hidden border-t border-border/60 lg:block">
          <ul className="flex items-center justify-center gap-8 py-3">
            {storeConfig.navigation.map((item) => (
              <li key={item.href + item.label}>
                <Link
                  href={item.href}
                  className="text-[11px] uppercase tracking-wide2 text-secondary transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <AnimatePresence>
        {mobileNavOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-50 bg-primary/40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobileNav}
            />
            <motion.aside
              className="fixed inset-y-0 left-0 z-50 flex w-[min(100%,340px)] flex-col bg-background lg:hidden"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-between border-b border-border px-5 py-4">
                <span className="text-xs tracking-brand">{storeConfig.brand.shortName}</span>
                <button type="button" onClick={closeMobileNav} aria-label="Close menu">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="flex-1 overflow-y-auto px-5 py-6">
                <ul className="space-y-1">
                  {storeConfig.navigation.map((item, i) => (
                    <motion.li
                      key={item.href + item.label}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.04 * i }}
                    >
                      <Link
                        href={item.href}
                        onClick={closeMobileNav}
                        className="block py-3 text-lg tracking-tight"
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
                <div className="mt-8 space-y-3 border-t border-border pt-6 text-sm text-secondary">
                  <Link href="/about" onClick={closeMobileNav} className="block">
                    Our Story
                  </Link>
                  <Link href="/contact" onClick={closeMobileNav} className="block">
                    Contact
                  </Link>
                  <Link href="/account" onClick={closeMobileNav} className="block">
                    Account
                  </Link>
                </div>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
