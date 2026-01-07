"use client";

export default function SiteFooter() {
  return (
    <footer className="bg-black text-white border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          
          <div className="col-span-1 md:col-span-1">
             <h3 className="font-display text-2xl font-bold tracking-widest mb-6">ROAR<span className="text-[var(--accent-primary)]">.AI</span></h3>
             <p className="font-mono text-xs text-white/40 leading-relaxed uppercase">
               Automated business excellence.<br />
               San Francisco, CA<br />
               EST. 2026
             </p>
          </div>

          <div className="col-span-1">
            <h4 className="font-mono text-xs text-[var(--accent-primary)] uppercase tracking-widest mb-6">Platform</h4>
            <ul className="space-y-4">
              {['Neural Engine', 'Data Lake', 'Predictive Core', 'API Access'].map(item => (
                <li key={item}>
                  <a href="#" className="font-light text-sm text-white/60 hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="col-span-1">
            <h4 className="font-mono text-xs text-[var(--accent-primary)] uppercase tracking-widest mb-6">Company</h4>
            <ul className="space-y-4">
              {['Manifesto', 'Careers', 'Legal', 'Status'].map(item => (
                <li key={item}>
                  <a href="#" className="font-light text-sm text-white/60 hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
             <h4 className="font-mono text-xs text-[var(--accent-primary)] uppercase tracking-widest mb-6">Connect</h4>
             <div className="flex gap-4">
                {/* Social placeholders */}
                <div className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer">X</div>
                <div className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer">L</div>
                <div className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer">I</div>
             </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
           <p className="font-mono text-xs text-white/20 uppercase tracking-widest">
             © 2026 Roar AI Inc. All systems operational.
           </p>
           <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="font-mono text-xs text-white/40 uppercase">System Normal</span>
           </div>
        </div>
      </div>
    </footer>
  );
}
