import React from 'react';
import { 
  Heart, 
  MessageCircle, 
  Share2, 
  MoreHorizontal,
  Bookmark
} from 'lucide-react';
import { Post } from '@/types';
import { cn } from '@/lib/utils';

interface PostCardProps {
  post: Post;
}

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className="bg-bg-card border border-border-card rounded-3xl p-6 shadow-soft mb-6 group bento-card-hover">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <img 
            src={post.author.avatar} 
            alt={post.author.name} 
            className="w-10 h-10 rounded-xl border border-zinc-800"
            referrerPolicy="no-referrer"
          />
          <div>
            <h4 className="text-sm font-bold text-zinc-100 group-hover:text-indigo-400 transition-colors uppercase tracking-widest">{post.author.name}</h4>
            <div className="flex items-center gap-2">
              <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest leading-none">{post.timestamp}</span>
              <span className="w-1 h-1 bg-zinc-800 rounded-full"></span>
              <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest leading-none">Public</span>
            </div>
          </div>
        </div>
        <button className="p-2 text-zinc-600 hover:text-zinc-300 hover:bg-zinc-800 rounded-lg transition-all">
          <MoreHorizontal size={18} />
        </button>
      </div>

      <div className="mb-6">
        <p className="text-sm text-zinc-300 leading-relaxed font-medium">{post.content}</p>
      </div>

      {post.image && (
        <div className="mb-6 rounded-2xl overflow-hidden border border-zinc-800/50">
          <img 
            src={post.image} 
            alt="Post content" 
            className="w-full h-auto object-cover max-h-[500px] group-hover:scale-[1.01] transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
        </div>
      )}

      <div className="flex items-center justify-between pt-4 border-t border-border-card">
        <div className="flex items-center gap-6">
          <button className="flex items-center gap-2 text-zinc-500 hover:text-indigo-400 transition-all group">
            <div className="p-2 bg-zinc-800 rounded-xl group-hover:bg-indigo-500/10 transition-colors">
              <Heart size={18} className="group-hover:fill-current" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest">{post.likes}</span>
          </button>
          <button className="flex items-center gap-2 text-zinc-500 hover:text-emerald-400 transition-all group">
            <div className="p-2 bg-zinc-800 rounded-xl group-hover:bg-emerald-500/10 transition-colors">
              <MessageCircle size={18} />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest">{post.comments}</span>
          </button>
          <button className="flex items-center gap-2 text-zinc-500 hover:text-amber-400 transition-all group">
            <div className="p-2 bg-zinc-800 rounded-xl group-hover:bg-amber-500/10 transition-colors">
              <Share2 size={18} />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest">{post.shares}</span>
          </button>
        </div>
        
        <button className="p-2.5 text-zinc-700 hover:text-indigo-400 hover:bg-zinc-800 rounded-xl transition-all">
          <Bookmark size={18} />
        </button>
      </div>
    </div>
  );
};
