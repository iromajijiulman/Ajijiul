import React, { useState } from 'react';
import { Image as ImageIcon, Link as LinkIcon, Video, Tag, Smile } from 'lucide-react';
import { User } from '@/types';
import { CreatePostModal } from './CreatePostModal';

interface CreatePostProps {
  user: User;
}

export const CreatePost: React.FC<CreatePostProps> = ({ user }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="bg-bg-card border border-border-card rounded-3xl p-6 shadow-soft mb-8 group">
        <div className="flex gap-4 mb-6">
          <img 
            src={user.avatar} 
            alt={user.name} 
            className="w-10 h-10 rounded-xl shrink-0 cursor-pointer border border-zinc-800"
            referrerPolicy="no-referrer"
            onClick={() => setIsModalOpen(true)}
          />
          <div className="flex-1 relative">
             <input 
                type="text" 
                placeholder="What's on your mind?" 
                readOnly
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-bg-surface border border-zinc-800 rounded-xl py-3 px-4 text-sm text-zinc-100 outline-none placeholder:text-zinc-600 cursor-pointer focus:border-indigo-500/30 transition-all font-medium"
             />
             <button 
                onClick={() => setIsModalOpen(true)}
                className="absolute right-2 top-1.5 px-4 py-1.5 bg-indigo-600 text-white text-[10px] uppercase tracking-widest font-bold rounded-lg shadow-lg shadow-indigo-600/20 hover:bg-indigo-500 transition-all">
                Share Post
             </button>
          </div>
        </div>
        
        <div className="flex items-center justify-between border-t border-border-card pt-4">
          <div className="flex items-center gap-1 sm:gap-4 overflow-x-auto scrollbar-hide">
            <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-zinc-800 transition-colors group">
              <ImageIcon size={16} className="text-indigo-400" />
              <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest group-hover:text-zinc-300">Image/Video</span>
            </button>
            <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-zinc-800 transition-colors group">
              <LinkIcon size={16} className="text-emerald-400" />
              <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest group-hover:text-zinc-300">Link</span>
            </button>
            <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-zinc-800 transition-colors group">
              <Video size={16} className="text-red-400" />
              <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest group-hover:text-zinc-300">Live</span>
            </button>
          </div>

          <button className="flex items-center gap-2 px-3 py-2 text-zinc-500 hover:bg-zinc-800 rounded-lg shrink-0 transition-colors">
            <span className="text-[9px] font-bold uppercase tracking-widest">Visibility: Public</span>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
               <path d="M2.5 3.75L5 6.25L7.5 3.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      <CreatePostModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        user={user} 
      />
    </>
  );
};
