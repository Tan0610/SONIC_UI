"use client";
import { Play, Plus } from "lucide-react";

interface ContentItem {
  id: string;
  title: string;
  artist: string;
  duration?: string;
  plays?: string;
}

interface ContentListProps {
  title: string;
  items: ContentItem[];
  type: "album" | "single";
}

export default function ContentList({ title, items, type }: ContentListProps) {
  return (
    <div className="bg-[var(--card-background)] rounded-xl border border-[var(--border-color)] p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <button className="text-orange-500 hover:text-orange-400 text-sm font-medium">
          View All
        </button>
      </div>

      <div className="space-y-3">
        {items.map((item, index) => (
          <div
            key={item.id}
            className="flex items-center space-x-4 p-3 rounded-lg hover:bg-white/5 transition-colors group"
          >
            {/* Track Number */}
            <div className="w-8 h-8 flex items-center justify-center text-gray-400 text-sm">
              <span className="group-hover:hidden">{String(index + 1).padStart(2, '0')}</span>
              <Play className="w-4 h-4 hidden group-hover:block text-white" />
            </div>

            {/* Album Art Placeholder */}
            <div className="w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg flex items-center justify-center">
              <div className="w-6 h-6 bg-white/20 rounded"></div>
            </div>

            {/* Content Info */}
            <div className="flex-1 min-w-0">
              <h4 className="text-white font-medium text-sm truncate">{item.title}</h4>
              <p className="text-gray-400 text-xs truncate">{item.artist}</p>
            </div>

            {/* Duration/Stats */}
            <div className="text-gray-400 text-xs">
              {item.duration || item.plays}
            </div>

            {/* Add Button */}
            <button className="opacity-0 group-hover:opacity-100 p-1 hover:bg-white/10 rounded transition-all">
              <Plus className="w-4 h-4 text-gray-400 hover:text-white" />
            </button>
          </div>
        ))}
      </div>

      {/* Add New Button */}
      <button className="w-full mt-4 p-3 border-2 border-dashed border-gray-600 rounded-lg text-gray-400 hover:text-white hover:border-gray-500 transition-colors flex items-center justify-center space-x-2">
        <Plus className="w-4 h-4" />
        <span className="text-sm font-medium">Add New {type === 'album' ? 'Album' : 'Single'}</span>
      </button>
    </div>
  );
}
