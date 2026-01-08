"use client";

import Link from "next/link";
import React from "react";
import { ArrowRight } from "lucide-react";

type Props = {
  href?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "accent" | "light";
};

const sizeClasses: Record<NonNullable<Props["size"]>, string> = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export default function QuoteButton({ href, onClick, className = "", size = "md", variant = "accent" }: Props) {
  const wrapper = `group relative inline-flex items-center justify-center rounded-full overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 ${className}`.trim();
  const innerBase = `relative z-10 inline-flex items-center gap-3 rounded-full font-display tracking-widest uppercase ${sizeClasses[size]}`;
  const innerStyles = variant === "accent" ? "bg-black text-white" : "bg-white text-black hover:bg-white/90";
  const inner = `${innerBase} ${innerStyles}`;

  const content = <span>Cotiza con nosotros</span>;

  const shine = (
    <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
      <span className="absolute -left-1/2 top-0 h-full w-1/2 rotate-12 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.35),transparent)] translate-x-0 group-hover:translate-x-[220%] transition-transform duration-700" />
    </span>
  );

  if (href) {
    return (
      <Link href="https://wa.link/0ancyj" className={wrapper}>
        {variant === "accent" && (
          <span className="absolute inset-0 p-[2px] rounded-full bg-[conic-gradient(from_0deg,var(--accent-primary),white,var(--accent-primary),white,var(--accent-primary))] opacity-60" />
        )}
        <span className={inner}>
          <span className="relative flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)] shadow-[0_0_12px_var(--accent-primary)]" />
            Cotiza con nosotros
            <ArrowRight className="transition-transform group-hover:translate-x-1" size={18} />
          </span>
        </span>
        {shine}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={wrapper}>
      {variant === "accent" && (
        <span className="absolute inset-0 p-[2px] rounded-full bg-[conic-gradient(from_0deg,var(--accent-primary),white,var(--accent-primary),white,var(--accent-primary))] opacity-60" />
      )}
      <span className={inner}>
        <span className="relative flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)] shadow-[0_0_12px_var(--accent-primary)]" />
          Cotiza con nosotros
          <ArrowRight className="transition-transform group-hover:translate-x-1" size={18} />
        </span>
      </span>
      {shine}
    </button>
  );
}
