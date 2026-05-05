import React from 'react';
import { X, Image as ImageIcon, Link as LinkIcon, Video, Tag, Smile, Globe, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { User } from '@/types';

interface CreatePostModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: User;
}

export const CreatePostModal: React.FC<CreatePostModalProps> = ({ isOpen, onClose, user }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl overflow-hidden"
          >
            <div className="flex items-center justify-between p-6 border-b border-slate-50">
              <h3 className="text-lg font-bold text-slate-800">Create Post</h3>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-slate-50 rounded-full text-slate-400 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <img src={user.avatar} alt={user.name} className="w-12 h-12 rounded-xl" referrerPolicy="no-referrer" />
                <div>
                  <h4 className="font-bold text-slate-800">{user.name}</h4>
                  <button className="flex items-center gap-1.5 px-2 py-0.5 bg-slate-50 rounded-lg text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                    <Globe size={12} />
                    Public
                    <ChevronDown size={12} />
                  </button>
                </div>
              </div>

              <textarea 
                placeholder="What's on your mind?"
                className="w-full h-40 bg-transparent border-none focus:ring-0 text-slate-600 placeholder:text-slate-300 resize-none text-lg outline-none"
              />

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 mb-6">
                 <p className="text-xs font-bold text-slate-500 mb-4 px-2 uppercase tracking-widest">Add to your post</p>
                 <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                       <button className="p-2 hover:bg-white hover:shadow-sm rounded-xl transition-all text-blue-500"><ImageIcon size={20} /></button>
                       <button className="p-2 hover:bg-white hover:shadow-sm rounded-xl transition-all text-orange-500"><LinkIcon size={20} /></button>
                       <button className="p-2 hover:bg-white hover:shadow-sm rounded-xl transition-all text-red-500"><Video size={20} /></button>
                       <button className="p-2 hover:bg-white hover:shadow-sm rounded-xl transition-all text-indigo-500"><Tag size={20} /></button>
                       <button className="p-2 hover:bg-white hover:shadow-sm rounded-xl transition-all text-yellow-500"><Smile size={20} /></button>
                    </div>
                 </div>
              </div>

              <button 
                onClick={onClose}
                className="w-full py-4 bg-brand-primary text-white font-bold rounded-2xl shadow-lg shadow-blue-100 hover:bg-blue-600 transition-all text-sm uppercase tracking-widest"
              >
                Share
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
