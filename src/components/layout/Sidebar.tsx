import React from 'react';
import { 
  Users, 
  Calendar, 
  Video, 
  Image as ImageIcon, 
  ShoppingBag, 
  FileText,
  LayoutGrid,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { View, User } from '@/types';

interface SidebarProps {
  activeView: View;
  onViewChange: (view: View) => void;
  user: User;
}

const navItems = [
  { id: 'feed', label: 'Feed', icon: LayoutGrid },
  { id: 'friends', label: 'Friends', icon: Users },
  { id: 'event', label: 'Event', icon: Calendar },
  { id: 'videos', label: 'Watch Videos', icon: Video },
  { id: 'photos', label: 'Photos', icon: ImageIcon },
  { id: 'marketplace', label: 'Marketplace', icon: ShoppingBag },
  { id: 'files', label: 'Files', icon: FileText },
];

const likedPages = [
  { name: 'UI/UX Community', color: 'bg-blue-500' },
  { name: 'Web Designer', color: 'bg-green-500' },
  { name: 'Dribbble Community', color: 'bg-pink-500' },
  { name: 'Behance', color: 'bg-blue-600' },
];

export const Sidebar: React.FC<SidebarProps> = ({ activeView, onViewChange, user }) => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-zinc-950 border-r border-zinc-800 flex flex-col p-6 overflow-y-auto scrollbar-hide z-30">
      <div className="flex items-center gap-3 mb-10 cursor-pointer" onClick={() => onViewChange('feed')}>
        <div className="w-10 h-10 bg-indigo-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M13 10V3L4 14h7v7l9-11h-7z" fill="currentColor" fillOpacity="0.2" />
          </svg>
        </div>
        <span className="text-xl font-bold tracking-tight text-white">WeShare</span>
      </div>

      <div className="mb-8 p-6 bg-zinc-900 border border-zinc-800 rounded-3xl flex flex-col items-center">
        <div className="relative mb-3">
          <img 
            src={user.avatar} 
            alt={user.name} 
            className="w-16 h-16 rounded-full border-2 border-zinc-800 shadow-sm"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-zinc-900"></div>
        </div>
        <h3 className="font-bold text-zinc-100">{user.name}</h3>
        <p className="text-[10px] uppercase font-mono tracking-wider text-zinc-500 mb-4">{user.handle}</p>
        <div className="flex justify-between w-full px-2">
          <div className="text-center">
            <span className="block font-mono font-bold text-sm text-zinc-200">{user.followers >= 1000 ? (user.followers / 1000).toFixed(1) + 'k' : user.followers}</span>
            <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-tighter">Follower</span>
          </div>
          <div className="text-center border-x border-zinc-800 px-3">
            <span className="block font-mono font-bold text-sm text-zinc-200">{user.following}</span>
            <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-tighter">Following</span>
          </div>
          <div className="text-center">
            <span className="block font-mono font-bold text-sm text-zinc-200">{user.posts}</span>
            <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-tighter">Post</span>
          </div>
        </div>
      </div>

      <nav className="space-y-2 mb-8">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              if (['feed', 'event', 'videos', 'marketplace'].includes(item.id)) {
                onViewChange(item.id as View);
              }
            }}
            className={cn(
              "w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 group",
              activeView === item.id 
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/10 border border-indigo-500/50" 
                : "text-zinc-500 hover:bg-zinc-900 hover:text-zinc-100 border border-transparent"
            )}
          >
            <item.icon size={18} className={cn(activeView === item.id ? "text-white" : "text-zinc-500 group-hover:text-zinc-100")} />
            <span className="font-bold text-xs uppercase tracking-widest">{item.label}</span>
          </button>
        ))}
      </nav>

      <div>
        <h4 className="px-4 text-[10px] font-bold text-zinc-600 uppercase tracking-widest mb-4">Pages</h4>
        <div className="space-y-1">
          {likedPages.map((page) => (
            <button key={page.name} className="w-full flex items-center justify-between px-4 py-2 group hover:bg-zinc-900/50 rounded-xl transition-all">
              <div className="flex items-center gap-3">
                <div className={cn("w-1.5 h-1.5 rounded-full shadow-lg shadow-current", page.color.replace('bg-', 'text-'))} />
                <span className="text-[10px] font-bold text-zinc-400 group-hover:text-zinc-200 transition-colors uppercase tracking-wider">{page.name}</span>
              </div>
              <ChevronRight size={12} className="text-zinc-700 group-hover:text-zinc-500 transition-colors" />
            </button>
          ))}
        </div>
      </div>
      
      <div className="mt-auto pt-8">
        <p className="text-[9px] font-mono text-zinc-700 px-4">NOVOS-BASE-V1.0.4</p>
      </div>
    </aside>
  );
};
