import React from 'react';
import { 
  Search, 
  MessageCircle, 
  Calendar, 
  Users, 
  Info,
  Dot,
  ChevronRight,
  Plus
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { View } from '@/types';

interface RightSidebarProps {
  view: View;
}

const messages = [
  { id: 1, name: 'Roger Korsgaard', status: 'online', avatar: 'https://i.pravatar.cc/150?u=r1' },
  { id: 2, name: 'Terry Torff', status: 'online', avatar: 'https://i.pravatar.cc/150?u=r2' },
  { id: 3, name: 'Angel Bergson', status: 'busy', avatar: 'https://i.pravatar.cc/150?u=r3' },
  { id: 4, name: 'Emerson Gouse', status: 'offline', avatar: 'https://i.pravatar.cc/150?u=r4' },
  { id: 5, name: 'Corey Baptista', status: 'online', avatar: 'https://i.pravatar.cc/150?u=r5' },
  { id: 6, name: 'Zain Culhane', status: 'online', avatar: 'https://i.pravatar.cc/150?u=r6' },
  { id: 7, name: 'Randy Lipshutz', status: 'busy', avatar: 'https://i.pravatar.cc/150?u=r7' },
];

const events = [
  { id: 1, title: 'Design System Collaboration', date: 'Thu - Herizon Mall, YK' },
  { id: 2, title: 'Web Dev 2.0 Meetup', date: 'Fri - Prada\'s Invitation Birthday' },
];

const suggestions = [
  { id: 1, name: 'Carter Vaccaro', handle: '@cvaccaro', avatar: 'https://i.pravatar.cc/150?u=s1' },
  { id: 2, name: 'Jaylon Siphon', handle: '@jaylon_s', avatar: 'https://i.pravatar.cc/150?u=s2' },
  { id: 3, name: 'Gustavo Schiefer', handle: '@gustavo_s', avatar: 'https://i.pravatar.cc/150?u=s3' },
];

export const RightSidebar: React.FC<RightSidebarProps> = ({ view }) => {
  if (view === 'marketplace') {
    return (
      <aside className="fixed right-0 top-0 h-screen w-80 bg-zinc-950 border-l border-zinc-900 p-6 overflow-y-auto scrollbar-hide z-10 pt-24">
        <div className="mb-8 bento-card p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-zinc-100 uppercase tracking-widest text-[10px]">Top Categories</h3>
            <button className="text-[10px] uppercase font-bold text-indigo-400">See All</button>
          </div>
          <div className="space-y-1">
             {['Products', 'Services', 'NFT / Digital art', 'Housing', 'Electronics', 'Finance & Stocks'].map(cat => (
               <button key={cat} className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-zinc-800 text-zinc-400 group transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-indigo-500 shadow-indigo-500/20 group-hover:shadow-md" />
                    <span className="text-xs font-bold uppercase tracking-wider group-hover:text-zinc-100">{cat}</span>
                  </div>
                  <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
               </button>
             ))}
          </div>
        </div>

        <div className="bento-card p-6">
           <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-zinc-100 uppercase tracking-widest text-[10px]">Filtering</h3>
            <button className="text-[10px] uppercase font-bold text-indigo-400">Reset</button>
           </div>
           <div className="space-y-6">
              <div>
                <span className="text-[10px] uppercase font-bold text-zinc-500 block mb-3">Suppliers</span>
                <div className="space-y-3">
                   {['Trade Assurance', 'Verified Suppliers'].map(item => (
                     <label key={item} className="flex items-center gap-3 cursor-pointer group">
                        <div className="w-5 h-5 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center group-hover:border-indigo-500 transition-colors">
                          {item === 'Verified Suppliers' && <div className="w-2.5 h-2.5 bg-indigo-500 rounded-sm"></div>}
                        </div>
                        <span className="text-xs font-bold text-zinc-400 group-hover:text-zinc-200 uppercase tracking-wide">{item}</span>
                     </label>
                   ))}
                </div>
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-zinc-500 block mb-3">Condition</span>
                <div className="space-y-3">
                   {['New Stuff', 'Second Hand'].map(item => (
                     <label key={item} className="flex items-center gap-3 cursor-pointer group">
                        <div className="w-5 h-5 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center group-hover:border-indigo-500 transition-colors">
                          {item === 'Second Hand' && <div className="w-2.5 h-2.5 bg-indigo-500 rounded-sm"></div>}
                        </div>
                        <span className="text-xs font-bold text-zinc-400 group-hover:text-zinc-200 uppercase tracking-wide">{item}</span>
                     </label>
                   ))}
                </div>
              </div>
           </div>
        </div>
      </aside>
    )
  }

  return (
    <aside className="fixed right-0 top-0 h-screen w-80 bg-zinc-950 border-l border-zinc-900 p-6 overflow-y-auto scrollbar-hide z-10 pt-24 text-zinc-100">
      {view === 'feed' && (
        <>
          <div className="mb-8 bento-card p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Communications</h3>
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-zinc-800 rounded-xl text-zinc-500 hover:text-zinc-200 transition-colors"><Search size={16} /></button>
                <button className="p-2 hover:bg-zinc-800 rounded-xl text-zinc-500 hover:text-zinc-200 transition-colors"><Plus size={16} /></button>
              </div>
            </div>
            
            <div className="flex gap-4 border-b border-zinc-800 mb-6 font-mono text-[10px] uppercase tracking-widest">
              <button className="text-indigo-400 border-b border-indigo-400 pb-3">Primary</button>
              <button className="text-zinc-600 pb-3 hover:text-zinc-400 transition-colors">General</button>
              <button className="text-zinc-600 pb-3 hover:text-zinc-400 transition-colors flex items-center gap-1.5">
                Requests <span className="px-1.5 py-0.5 bg-zinc-800 text-[8px] text-zinc-400 rounded-md">4</span>
              </button>
            </div>

            <div className="space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className="flex items-center gap-3 cursor-pointer group">
                  <div className="relative">
                    <img src={msg.avatar} alt={msg.name} className="w-10 h-10 rounded-xl" />
                    {msg.status === 'online' && <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-zinc-900 rounded-full"></span>}
                    {msg.status === 'busy' && <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-orange-500 border-2 border-zinc-900 rounded-full"></span>}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold text-zinc-200 group-hover:text-indigo-400 transition-colors truncate uppercase tracking-wider">{msg.name}</h4>
                    <p className="text-[9px] font-mono text-zinc-500 truncate">Core system update required...</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-3 bg-zinc-900/50 border border-zinc-800 hover:bg-zinc-800 text-[10px] font-bold text-zinc-500 uppercase tracking-widest rounded-2xl transition-all">View All Archives</button>
          </div>

          <div className="mb-8 bento-card p-6 bg-gradient-to-br from-zinc-900 to-indigo-950 border-indigo-500/20 relative overflow-hidden group">
             <div className="relative z-10">
               <div className="flex items-center justify-between mb-4">
                 <h3 className="text-[10px] font-bold uppercase tracking-widest text-indigo-400">Event Invites</h3>
                 <span className="px-2 py-0.5 bg-indigo-500 text-[9px] font-bold rounded-lg text-white">10 NEW</span>
               </div>
               <div className="space-y-4">
                 {events.map(event => (
                   <div key={event.id} className="flex items-start gap-3 p-3 bg-zinc-950/40 rounded-2xl border border-zinc-800/50 hover:border-indigo-500/30 transition-all cursor-pointer">
                     <div className="w-8 h-8 rounded-xl bg-indigo-500/10 flex items-center justify-center shrink-0">
                        <Calendar size={14} className="text-indigo-400" />
                     </div>
                     <div>
                        <h4 className="text-xs font-bold truncate text-zinc-200">{event.title}</h4>
                        <p className="text-[9px] font-mono text-zinc-500 mt-0.5">{event.date}</p>
                     </div>
                   </div>
                 ))}
               </div>
             </div>
             <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-indigo-500/10 blur-3xl rounded-full group-hover:bg-indigo-500/20 transition-all duration-700"></div>
          </div>
        </>
      )}

      {view === 'event' && (
        <>
          <div className="mb-8 bento-card p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Network Suggestions</h3>
              <Info size={14} className="text-zinc-700" />
            </div>
            <div className="space-y-5">
              {suggestions.map(person => (
                <div key={person.id} className="flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <img src={person.avatar} alt={person.name} className="w-10 h-10 rounded-xl" />
                    <div>
                      <h4 className="text-xs font-bold text-zinc-200 group-hover:text-indigo-400 transition-colors uppercase tracking-wider">{person.name}</h4>
                      <p className="text-[9px] font-mono text-zinc-500">Active Node</p>
                    </div>
                  </div>
                  <button className="p-2 hover:bg-zinc-800 rounded-xl text-zinc-700 hover:text-indigo-400 transition-all">
                    <Plus size={16} />
                  </button>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-3 text-[10px] font-bold text-zinc-500 uppercase tracking-widest hover:text-zinc-200 transition-colors">See Discovery Feed</button>
          </div>

          <div className="bento-card p-6">
             <h3 className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-6">System Activity</h3>
             <div className="space-y-6">
                <div className="flex gap-4">
                   <div className="w-9 h-9 rounded-xl bg-indigo-500/10 flex items-center justify-center shrink-0 border border-indigo-500/10">
                      <Users size={16} className="text-indigo-400" />
                   </div>
                   <div className="text-[11px] leading-relaxed">
                      <p className="text-zinc-400">
                        <span className="font-bold text-zinc-100">Jakob Geidt</span> and 
                        <span className="font-bold text-zinc-100"> 82 others</span> verified your uplink modules.
                      </p>
                      <p className="text-[9px] font-mono text-zinc-600 mt-1 uppercase tracking-widest">4M AGO</p>
                   </div>
                </div>
                <div className="flex gap-4">
                   <div className="w-9 h-9 rounded-xl bg-purple-500/10 flex items-center justify-center shrink-0 border border-purple-500/10">
                      <MessageCircle size={16} className="text-purple-400" />
                   </div>
                   <div className="text-[11px] leading-relaxed">
                      <p className="text-zinc-400">
                        <span className="font-bold text-zinc-100">Martin Botosh</span> applied a security patch: 
                        <span className="text-indigo-400"> @L2_ACCESS</span> protocol secured.
                      </p>
                      <p className="text-[9px] font-mono text-zinc-600 mt-1 uppercase tracking-widest">1H AGO</p>
                   </div>
                </div>
             </div>
          </div>
        </>
      )}

      {(view === 'videos') && (
        <div className="space-y-8">
           <div className="bento-card p-6">
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-6">Streaming Queues</h3>
              <div className="space-y-4">
                 {suggestions.map(person => (
                   <div key={person.id} className="flex items-center justify-between group cursor-pointer p-2 hover:bg-zinc-800 rounded-xl transition-all">
                      <div className="flex items-center gap-3">
                        <img src={person.avatar} alt={person.name} className="w-8 h-8 rounded-lg" />
                        <div>
                           <h4 className="text-[11px] font-bold text-zinc-200 group-hover:text-indigo-400 uppercase tracking-widest">{person.name}</h4>
                           <p className="text-[9px] font-mono text-zinc-500">8 Buffering</p>
                        </div>
                      </div>
                      <ChevronRight size={12} className="text-zinc-800 group-hover:text-zinc-400 transition-colors" />
                   </div>
                 ))}
              </div>
           </div>
           <div className="bento-card p-6">
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-6">Authorized Channels</h3>
              <div className="space-y-4">
                 {[
                   { name: 'UX Planet Design', avatar: 'https://i.pravatar.cc/150?u=sub1' },
                   { name: 'Marvel Entertainment', avatar: 'https://i.pravatar.cc/150?u=sub2' },
                   { name: 'The Ellen Show', avatar: 'https://i.pravatar.cc/150?u=sub3' }
                 ].map(sub => (
                   <div key={sub.name} className="flex items-center gap-3 cursor-pointer group p-2 hover:bg-zinc-800 rounded-xl transition-all">
                      <img src={sub.avatar} alt={sub.name} className="w-8 h-8 rounded-full border border-zinc-800" />
                      <span className="text-[11px] font-bold text-zinc-400 group-hover:text-indigo-400 uppercase tracking-widest transition-colors">{sub.name}</span>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      )}
    </aside>
  );
};
