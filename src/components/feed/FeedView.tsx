import React from 'react';
import { Stories } from './Stories';
import { CreatePost } from './CreatePost';
import { PostCard } from './PostCard';
import { User, Post } from '@/types';
import { ListFilter } from 'lucide-react';

interface FeedViewProps {
  user: User;
}

const mockPosts: Post[] = [
  {
    id: 'p1',
    author: { name: 'Cameron Williamson', avatar: 'https://i.pravatar.cc/150?u=author1' },
    content: 'Zem UI is a style that\'s been brewing in the shadow for some time but is finally starting to emerge now.',
    image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800',
    likes: 30,
    comments: 12,
    shares: 5,
    timestamp: '22 Aug at 4:21 PM'
  },
  {
    id: 'p2',
    author: { name: 'Terry Lipshutz', avatar: 'https://i.pravatar.cc/150?u=author2' },
    content: 'Loving the new office setup! What do you guys think?',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
    likes: 84,
    comments: 24,
    shares: 10,
    timestamp: '22 Aug at 7:15 PM'
  }
];

export const FeedView: React.FC<FeedViewProps> = ({ user }) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8 overflow-hidden">
        <Stories />
      </div>
      
      <CreatePost user={user} />

      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-xl font-bold text-zinc-100 uppercase tracking-tight">Social Feed</h3>
          <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mt-0.5">Real-time status updates</p>
        </div>
        <button className="flex items-center gap-3 px-4 py-2 bg-zinc-900 border border-zinc-800 text-[10px] font-bold text-zinc-500 hover:text-zinc-200 transition-all uppercase tracking-widest rounded-xl">
           Filter: <span className="text-indigo-400">Following</span>
           <ListFilter size={14} className="text-zinc-600" />
        </button>
      </div>

      <div className="space-y-6">
        {mockPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};
