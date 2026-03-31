"use client";

import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/useCartStore";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function CartButton() {
  const [mounted, setMounted] = useState(false);
  const items = useCartStore((state) => state.items);

  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Button
      variant="ghost"
      size="icon"
      className="relative group hover:bg-muted/60 transition-all duration-300"
      asChild
    >
      <Link href="/cart" aria-label="Open cart">
        {/* Icon */}
        <ShoppingCart className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />

        {/* Badge */}
        {mounted && totalItems > 0 && (
          <span
            className="
              absolute -top-1.5 -right-1.5 
              min-w-[20px] h-[20px] px-1.5 
              flex items-center justify-center 
              text-[10px] font-semibold text-white 
              bg-gradient-to-r from-red-500 to-orange-500 
              rounded-full shadow-md
              animate-in fade-in zoom-in-50
            "
          >
            {totalItems}
          </span>
        )}

        {/* Optional pulse ring */}
        {mounted && totalItems > 0 && (
          <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-red-500/40 animate-ping" />
        )}
      </Link>
    </Button>
  );
}