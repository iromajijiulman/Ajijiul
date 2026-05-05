import React from 'react';
import { MapPin, Users, ListFilter } from 'lucide-react';
import { Event } from '@/types';

const mockEvents: Event[] = [
  {
    id: 'e1',
    title: 'Planning Masterclass',
    location: '24 Royal Ln. Mesa, New Jersey',
    date: '24',
    day: 'THU',
    month: 'AUG',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800',
    participants: ['https://i.pravatar.cc/150?u=e1p1', 'https://i.pravatar.cc/150?u=e1p2', 'https://i.pravatar.cc/150?u=e1p3']
  },
  {
    id: 'e2',
    title: 'Monumental Event Planning',
    location: '63 Elgin St. Celina, Delaware',
    date: '27',
    day: 'WED',
    month: 'AUG',
    image: 'https://images.unsplash.com/photo-1540575861501-7cc041496660?auto=format&fit=crop&q=80&w=800',
    participants: ['https://i.pravatar.cc/150?u=e2p1', 'https://i.pravatar.cc/150?u=e2p2']
  },
  {
    id: 'e3',
    title: 'Summer Nights Concert Series',
    location: '45 Washington Ave. Manchester',
    date: '28',
    day: 'SAT',
    month: 'AUG',
    image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=800',
    participants: ['https://i.pravatar.cc/150?u=e3p1', 'https://i.pravatar.cc/150?u=e3p2', 'https://i.pravatar.cc/150?u=e3p3', 'https://i.pravatar.cc/150?u=e3p4']
  },
  {
    id: 'e4',
    title: 'Artisan Market and Craft Fair',
    location: '85 Preston Rd. Inglewood, Maine',
    date: '31',
    day: 'MON',
    month: 'AUG',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800',
    participants: ['https://i.pravatar.cc/150?u=e4p1', 'https://i.pravatar.cc/150?u=e4p2']
  }
];

export const EventView: React.FC = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-10">
        <div>
          <h2 className="text-3xl font-bold text-zinc-100 mb-2">Upcoming Events</h2>
          <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest leading-none">Global Node Connectivity Schedule</p>
        </div>
        <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-2xl text-[10px] uppercase font-bold tracking-widest shadow-lg shadow-indigo-600/20 transition-all active:scale-95 flex items-center gap-2">
           Sort by: <span className="text-white/80">Active</span>
           <ListFilter size={14} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-20">
        {mockEvents.map((event) => (
          <div key={event.id} className="bg-bg-card border border-border-card rounded-[2.5rem] overflow-hidden shadow-soft hover:border-zinc-700 transition-all group cursor-pointer">
            <div className="relative h-48 sm:h-60">
              <img 
                src={event.image} 
                alt={event.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-6 right-6 w-14 h-18 bg-zinc-950/80 backdrop-blur-md border border-zinc-800 rounded-2xl flex flex-col items-center justify-center shadow-lg">
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest leading-none mb-1">{event.month}</span>
                <span className="text-xl font-black text-indigo-400 leading-none my-1">{event.date}</span>
                <div className="w-4 h-0.5 bg-indigo-500 rounded-full"></div>
              </div>
              <div className="absolute top-6 left-6 bg-emerald-500/90 text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-lg">
                ACTIVE
              </div>
            </div>
            
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-indigo-400 uppercase tracking-widest mb-3">
                 <span>{event.day} 10:00 AM UPLINK</span>
              </div>
              <h3 className="text-lg font-bold text-zinc-100 mb-3 group-hover:text-indigo-400 transition-colors uppercase tracking-tight">{event.title}</h3>
              
              <div className="flex items-center gap-2 text-zinc-500 mb-8">
                <MapPin size={14} className="text-indigo-500" />
                <span className="text-xs font-bold uppercase tracking-wider">{event.location}</span>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-zinc-800/50">
                <div className="flex -space-x-3">
                   {event.participants.map((p, idx) => (
                     <img 
                      key={idx} 
                      src={p} 
                      alt="participant" 
                      className="w-8 h-8 rounded-xl border-2 border-zinc-900 shadow-lg"
                      referrerPolicy="no-referrer"
                     />
                   ))}
                   <div className="w-8 h-8 rounded-xl bg-zinc-800 border-2 border-zinc-900 flex items-center justify-center text-[10px] font-bold text-zinc-500 font-mono">
                      +12
                   </div>
                </div>
                <button className="px-6 py-2.5 bg-zinc-900 border border-zinc-800 text-zinc-300 text-[10px] font-bold uppercase tracking-widest rounded-xl hover:bg-indigo-600 hover:text-white hover:border-indigo-500 transition-all">
                  Join Event
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
