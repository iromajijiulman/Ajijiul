import React, { useState } from 'react';
import { Sidebar } from './components/layout/Sidebar';
import { Header } from './components/layout/Header';
import { RightSidebar } from './components/layout/RightSidebar';
import { View, User } from './types';
import { motion, AnimatePresence } from 'motion/react';

import { FeedView } from './components/feed/FeedView';
import { EventView } from './components/events/EventView';
import { VideosView } from './components/videos/VideosView';
import { MarketplaceView } from './components/marketplace/MarketplaceView';

// Mock initial user
const currentUser: User = {
  id: 'u1',
  name: 'Jakob Botosh',
  handle: '@jakobbotosh',
  avatar: 'https://i.pravatar.cc/150?u=jakob',
  followers: 2300,
  following: 235,
  posts: 80
};

export default function App() {
  const [activeView, setActiveView] = useState<View>('feed');

  return (
    <div className="min-h-screen bg-bg-surface flex">
      <Sidebar 
        activeView={activeView} 
        onViewChange={setActiveView} 
        user={currentUser} 
      />
      
      <main className="flex-1 pl-64 pr-80 pt-20">
        <Header user={currentUser} />
        
        <div className="p-8 max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeView}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {activeView === 'feed' && <FeedView user={currentUser} />}
              {activeView === 'event' && <EventView />}
              {activeView === 'videos' && <VideosView />}
              {activeView === 'marketplace' && <MarketplaceView />}
            </motion.div>
          </AnimatePresence>
        </div>

        <RightSidebar view={activeView} />
      </main>
    </div>
  );
}
