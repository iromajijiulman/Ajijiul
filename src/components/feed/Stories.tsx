import React, { useRef } from 'react';
import { Plus } from 'lucide-react';
import { User } from '@/types';

interface Story {
  id: string;
  user: Partial<User>;
  isAdd?: boolean;
}

const mockStories: Story[] = [
  { id: '1', user: { name: 'Your Story', avatar: 'https://i.pravatar.cc/150?u=jakob' }, isAdd: true },
  { id: '2', user: { name: 'Justin', avatar: 'https://i.pravatar.cc/150?u=j1' } },
  { id: '3', user: { name: 'Davis', avatar: 'https://i.pravatar.cc/150?u=j2' } },
  { id: '4', user: { name: 'Randy', avatar: 'https://i.pravatar.cc/150?u=j3' } },
  { id: '5', user: { name: 'Charlo', avatar: 'https://i.pravatar.cc/150?u=j4' } },
  { id: '6', user: { name: 'Zane', avatar: 'https://i.pravatar.cc/150?u=j5' } },
  { id: '7', user: { name: 'Talan', avatar: 'https://i.pravatar.cc/150?u=j6' } },
  { id: '8', user: { name: 'Corey', avatar: 'https://i.pravatar.cc/150?u=j7' } },
];

export const Stories: React.FC = () => {
  return (
    <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
      {mockStories.map((story) => (
        <div key={story.id} className="flex flex-col items-center shrink-0 group cursor-pointer">
          <div className="relative p-1 rounded-2xl border border-zinc-800 bg-zinc-900 group-hover:border-indigo-500 transition-all shadow-sm">
            <img 
              src={story.user.avatar} 
              alt={story.user.name} 
              className="w-14 h-14 rounded-xl object-cover border-2 border-zinc-900"
              referrerPolicy="no-referrer"
            />
            {story.isAdd && (
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-indigo-500 rounded-lg border-2 border-zinc-900 flex items-center justify-center shadow-lg">
                <Plus size={10} className="text-white" />
              </div>
            )}
          </div>
          <span className="text-[10px] font-bold text-zinc-500 mt-2 truncate w-14 text-center uppercase tracking-widest group-hover:text-zinc-300 transition-colors">
            {story.user.name}
          </span>
        </div>
      ))}
    </div>
  );
};
