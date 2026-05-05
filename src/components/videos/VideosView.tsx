import React from 'react';
import { Play, Heart, MessageCircle, Share2, MoreHorizontal, Plus, Search } from 'lucide-react';

export const VideosView: React.FC = () => {
  return (
    <div className="space-y-12 pb-20">
      <div>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-zinc-100 mb-2">Videos for You</h2>
            <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest leading-none">Curated system broadcasts</p>
          </div>
          <div className="flex items-center gap-4">
             <button className="p-2.5 text-zinc-400 hover:bg-zinc-800 rounded-xl transition-all">
                <Search size={20} />
             </button>
             <button className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white text-[10px] font-black uppercase tracking-widest rounded-2xl shadow-lg shadow-indigo-600/20 active:scale-95 transition-all">
                <Plus size={16} /> Update Video
             </button>
          </div>
        </div>

        <div className="bg-bg-card border border-border-card rounded-[2.5rem] overflow-hidden shadow-soft p-6 sm:p-10 mb-8 group bento-card-hover">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <img src="https://i.pravatar.cc/150?u=vid1" alt="avatar" className="w-10 h-10 rounded-xl border border-zinc-800" />
              <div>
                <h4 className="text-xs font-bold text-zinc-100 uppercase tracking-widest">Cristofer Press</h4>
                <p className="text-[9px] font-mono text-zinc-500 uppercase">System Uptime: 24 mins</p>
              </div>
            </div>
            <button className="px-5 py-2 text-[10px] font-black text-indigo-400 border border-indigo-500/20 rounded-xl hover:bg-indigo-600 hover:text-white transition-all uppercase tracking-widest">
              + Follow
            </button>
          </div>

          <div className="relative aspect-video rounded-3xl overflow-hidden bg-zinc-950 group/vid mb-8 border border-zinc-800/50">
            <img 
              src="https://images.unsplash.com/photo-1620121692029-d088224efc74?auto=format&fit=crop&q=80&w=1200" 
              alt="Video Preview" 
              className="w-full h-full object-cover opacity-60 group-hover/vid:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <button className="absolute inset-0 m-auto w-24 h-24 bg-white/5 backdrop-blur-xl rounded-full flex items-center justify-center text-white border border-white/10 hover:scale-110 transition-transform shadow-2xl">
              <Play size={40} fill="currentColor" className="ml-1 text-indigo-500" />
            </button>
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
               <div className="flex items-center gap-4">
                  <div className="h-1.5 w-48 bg-white/10 rounded-full overflow-hidden border border-white/5">
                    <div className="h-full w-1/3 bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.5)]"></div>
                  </div>
                  <span className="text-[10px] font-bold text-white/80 font-mono tracking-widest">0:47 / 13:32</span>
               </div>
               <div className="flex items-center gap-5 text-white/60">
                  <button className="hover:text-indigo-400 transition-colors"><Heart size={20} /></button>
                  <button className="hover:text-indigo-400 transition-colors"><Share2 size={20} /></button>
               </div>
            </div>
          </div>

          <div>
             <h3 className="text-2xl font-bold text-zinc-100 mb-4 group-hover:text-indigo-400 transition-colors uppercase tracking-tight">UI/UX Inspiration August 2026</h3>
             <p className="text-sm text-zinc-400 leading-relaxed font-medium mb-8 max-w-3xl">
                Zem UI is a style that's been brewing in the shadow for some time but is finally starting to emerge now. The idea is easy to understand — the less the user has to think about the interface, the better and more natural it feels.
             </p>
             <div className="flex flex-wrap gap-3 mb-10">
                {['#design', '#uiux', '#uidesign', '#web', '#mobileapp'].map(tag => (
                   <span key={tag} className="px-3 py-1 bg-zinc-950 border border-zinc-800 rounded-lg text-[10px] font-bold text-indigo-400 uppercase tracking-widest hover:border-indigo-500/30 transition-colors cursor-pointer">{tag}</span>
                ))}
             </div>
             
             <div className="flex items-center gap-10 text-[10px] font-mono font-bold text-zinc-600 uppercase tracking-widest pt-8 border-t border-zinc-800/50">
                <span className="flex items-center gap-2 hover:text-zinc-200 transition-colors cursor-pointer"><Heart size={16} className="text-red-500 fill-current" /> 30 Saved</span>
                <span className="flex items-center gap-2 hover:text-zinc-200 transition-colors cursor-pointer"><MessageCircle size={16} /> 12 Comments</span>
                <span className="flex items-center gap-2 hover:text-zinc-200 transition-colors cursor-pointer"><Share2 size={16} /> 5 Shares</span>
             </div>
          </div>
        </div>

        <div className="bg-bg-card border border-border-card rounded-[2.5rem] p-10 mt-12 group hover:border-zinc-700 transition-all">
           <div className="flex items-center justify-between mb-10">
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 underline underline-offset-8 decoration-indigo-500/50">Discovery Queue</h3>
              <button className="text-[10px] font-black uppercase tracking-widest text-indigo-400 hover:text-indigo-300">View Global Network</button>
           </div>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map(i => (
                <div key={i} className="group/item cursor-pointer">
                   <div className="relative aspect-video rounded-2xl overflow-hidden bg-zinc-950 mb-4 border border-zinc-900 group-hover/item:border-indigo-500/30 transition-all">
                      <img src={`https://picsum.photos/seed/vid${i}/800/450`} alt="Video" className="w-full h-full object-cover opacity-60 group-hover/item:scale-110 group-hover/item:opacity-80 transition-all duration-700" />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover/item:opacity-100 transition-opacity backdrop-blur-[2px]">
                         <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shadow-2xl">
                           <Play size={20} className="text-white fill-current ml-1" />
                         </div>
                      </div>
                   </div>
                   <h4 className="text-[11px] font-bold text-zinc-300 leading-normal uppercase tracking-widest group-hover/item:text-indigo-400 transition-colors line-clamp-2">Amazing New Workflow for Design Teams in 2026</h4>
                   <div className="flex items-center gap-2 mt-2 font-mono text-[9px] text-zinc-600 uppercase tracking-widest">
                      <span>1.2M views</span>
                      <span className="w-1 h-1 bg-zinc-800 rounded-full"></span>
                      <span>2 days ago</span>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};
