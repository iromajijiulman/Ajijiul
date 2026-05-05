import React from 'react';
import { Search, Bell, MessageSquare, Menu, Settings } from 'lucide-react';
import { User } from '@/types';

interface HeaderProps {
  user: User;
}

export const Header: React.FC<HeaderProps> = ({ user }) => {
  return (
    <header className="fixed top-0 right-0 left-64 h-20 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900 z-20 flex items-center justify-between px-8">
      <div className="relative w-96 max-w-full">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
          <Search size={18} className="text-zinc-500" />
        </div>
        <input 
          type="text" 
          placeholder="Search dashboard, assets, or users..." 
          className="w-full pl-12 pr-4 py-2.5 bg-zinc-900 border border-zinc-800 rounded-xl text-sm text-zinc-100 focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/5 transition-all outline-none placeholder:text-zinc-600"
        />
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4 border-r border-zinc-800 pr-6">
          <button className="p-2.5 text-zinc-400 hover:bg-zinc-800 rounded-xl transition-colors relative group">
            <MessageSquare size={20} />
            <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-indigo-500 rounded-full group-hover:scale-125 transition-transform"></span>
          </button>
          <button className="p-2.5 text-zinc-400 hover:bg-zinc-800 rounded-xl transition-colors relative group">
            <Bell size={20} />
            <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-brand-primary rounded-full group-hover:scale-125 transition-transform"></span>
          </button>
          <button className="p-2.5 text-zinc-400 hover:bg-zinc-800 rounded-xl transition-colors">
            <Settings size={20} />
          </button>
        </div>
        
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="relative">
            <img 
              src={user.avatar} 
              alt={user.name} 
              className="w-10 h-10 rounded-xl object-cover ring-2 ring-transparent group-hover:ring-indigo-500 transition-all shadow-sm"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-zinc-950"></div>
          </div>
          <div className="hidden lg:block">
            <p className="text-sm font-bold text-zinc-100 leading-none mb-1">{user.name}</p>
            <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Admin Account</p>
          </div>
        </div>
      </div>
    </header>
  );
};
