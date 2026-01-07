"use client";

import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-24 bg-black border-y border-white/10">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-3xl font-light uppercase tracking-wide mb-16 text-center text-white">
            Intelligence Reports
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white/5 p-8 border border-white/5 relative">
                    <div className="flex gap-1 mb-6 text-[var(--accent-primary)]">
                        {[1, 2, 3, 4, 5].map(s => <Star key={s} size={12} fill="currentColor" />)}
                    </div>
                    <p className="text-lg font-light italic text-white/80 mb-6">
                        &quot;The neural engine optimized our ad spend by 40% in the first week. The ROI visualization is unlike anything we&apos;ve seen.&quot;
                    </p>
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-white/10 rounded-full" />
                        <div>
                            <p className="font-mono text-xs uppercase tracking-widest text-white">Elena S.</p>
                            <p className="font-mono text-[10px] text-white/40 uppercase">CEO, Stratos</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
