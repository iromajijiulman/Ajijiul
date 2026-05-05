import React from 'react';
import { Star, MapPin, ListFilter, Search } from 'lucide-react';
import { Product } from '@/types';

const products: Product[] = [
  { id: '1', name: 'Mac Apple M1 chip', price: '$2,304', image: 'https://images.unsplash.com/photo-1517336712462-83679c148830?auto=format&fit=crop&q=80&w=800', ratingValue: 4.8, ratingCount: 32, condition: 'New' },
  { id: '2', name: 'Apple Watch Series 7', price: '$189.00', image: 'https://images.unsplash.com/photo-1544117518-30df578096a4?auto=format&fit=crop&q=80&w=800', ratingValue: 5.0, ratingCount: 12, condition: 'New' },
  { id: '3', name: 'Adventurers Drone', price: '$780.56', image: 'https://images.unsplash.com/photo-1473968512647-3e44a224fe8f?auto=format&fit=crop&q=80&w=800', ratingValue: 4.5, ratingCount: 45, condition: 'New' },
  { id: '4', name: 'Sleeping mask vanilla', price: '$15.00', image: 'https://images.unsplash.com/photo-1596755094514-f87034a3a221?auto=format&fit=crop&q=80&w=800', ratingValue: 4.8, ratingCount: 121, condition: 'New' },
  { id: '5', name: 'Apple AirPods Gen 3', price: '$99.00', image: 'https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?auto=format&fit=crop&q=80&w=800', ratingValue: 5.0, ratingCount: 4, condition: 'New' },
  { id: '6', name: 'Velvet Occasional Chair', price: '£65.00', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800', ratingValue: 4.8, ratingCount: 32, condition: 'Second Hand' },
  { id: '7', name: 'Wireless Charger Stand', price: '$26.00', image: 'https://images.unsplash.com/photo-1615526675159-e248c3021d3f?auto=format&fit=crop&q=80&w=800', ratingValue: 5.0, ratingCount: 21, condition: 'New' },
  { id: '8', name: 'Nike Dunk Low', price: '$43.31', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800', ratingValue: 4.8, ratingCount: 12, condition: 'New' },
];

export const MarketplaceView: React.FC = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-zinc-100 mb-2 underline underline-offset-8 decoration-indigo-500/50">Marketplace</h2>
          <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-[0.2em] mt-3">Assets Exchange Protocol</p>
        </div>
        <div className="flex items-center gap-4">
           <button className="flex items-center gap-4 px-6 py-3 bg-zinc-900 border border-zinc-800 text-[10px] uppercase font-black text-zinc-400 rounded-2xl shadow-soft group hover:border-indigo-500 transition-all">
              <MapPin size={14} className="text-indigo-500" />
              <span>Near by: <span className="text-zinc-100">10km Radius</span></span>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="text-zinc-700">
                <path d="M2.5 3.75L5 6.25L7.5 3.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
           </button>
           <button className="p-3 bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-indigo-400 hover:bg-zinc-800 rounded-xl transition-all">
              <ListFilter size={18} />
           </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            <div className="relative aspect-square rounded-[2rem] overflow-hidden bg-zinc-950 border border-zinc-900 mb-4 group-hover:border-indigo-500/50 transition-all duration-500">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 p-4 opacity-80 group-hover:opacity-100"
                referrerPolicy="no-referrer"
              />
              <button className="absolute top-5 right-5 w-10 h-10 bg-zinc-900/80 backdrop-blur-md rounded-xl border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-red-500 transition-colors shadow-lg">
                 <Heart size={18} />
              </button>
              <div className="absolute bottom-5 left-5 px-3 py-1 bg-indigo-600 rounded-lg text-[9px] font-black text-white uppercase tracking-widest shadow-lg shadow-indigo-600/20 translate-y-12 group-hover:translate-y-0 transition-transform">
                Available
              </div>
            </div>
            
            <div className="space-y-2 px-2">
              <h4 className="text-xl font-mono font-black text-zinc-100 leading-none">{product.price}</h4>
              <h3 className="text-xs font-bold text-zinc-500 truncate group-hover:text-indigo-400 uppercase tracking-widest transition-colors">{product.name}</h3>
              <div className="flex items-center gap-6 pt-1">
                 <div className="flex items-center gap-1.5 p-1 px-2.5 bg-zinc-900 border border-zinc-800 rounded-lg">
                    <Star size={10} className="fill-indigo-500 text-indigo-500" />
                    <span className="text-[10px] font-bold text-zinc-300 font-mono">{product.ratingValue}</span>
                 </div>
                 <span className="text-[9px] font-mono font-bold text-zinc-600 uppercase tracking-widest leading-none border-l border-zinc-800 pl-4">{product.ratingCount} UPLINKS</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 bento-card p-10 pb-12 border-zinc-800/80">
         <h3 className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-500 mb-10 border-b border-zinc-800 pb-6">Popular items</h3>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="bg-zinc-950 p-4 rounded-[2rem] border border-zinc-900 flex items-center gap-4 cursor-pointer hover:border-indigo-500/30 hover:bg-zinc-900 transition-all group">
                 <div className="w-16 h-16 bg-zinc-900 rounded-2xl overflow-hidden shrink-0 border border-zinc-800">
                    <img src={`https://picsum.photos/seed/pop${i}/100/100`} alt="popular" className="w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-100 transition-all" />
                 </div>
                 <div className="min-w-0">
                    <h4 className="text-xs font-bold text-zinc-300 truncate uppercase tracking-widest">Node Asset {i}</h4>
                    <p className="text-[10px] font-mono font-black text-indigo-500 mt-1 uppercase">$12.00 Credits</p>
                 </div>
              </div>
            ))}
         </div>
      </div>
    </div>
  );
};
