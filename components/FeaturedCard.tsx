"use client";
import { Heart, Users, Play } from "lucide-react";

interface FeaturedCardProps {
  title: string;
  genre: string;
  collaborations: string;
  likes: string;
  monthlyListeners: string;
  imageUrl?: string;
  gradient?: string;
}

export default function FeaturedCard({
  title,
  genre,
  collaborations,
  likes,
  monthlyListeners,
  imageUrl,
  gradient = "gradient-card-1"
}: FeaturedCardProps) {
  return (
    <div className={`relative p-6 rounded-xl ${gradient} text-white overflow-hidden`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 right-4 w-32 h-32 rounded-full border-2 border-white/20"></div>
        <div className="absolute bottom-4 right-8 w-20 h-20 rounded-full border border-white/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="mb-4">
          <span className="text-xs bg-white/20 px-2 py-1 rounded-full">Recent IP</span>
        </div>

        <h2 className="text-3xl font-bold mb-2">{title}</h2>
        
        <div className="mb-6">
          <p className="text-sm opacity-90">Genre: {genre}</p>
          <p className="text-sm opacity-90">Collaborations: {collaborations}</p>
        </div>

        <div className="flex items-center space-x-6 mb-6">
          <div className="flex items-center space-x-2">
            <Heart className="w-4 h-4" />
            <span className="text-sm font-medium">{likes} Likes</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4" />
            <span className="text-sm font-medium">{monthlyListeners} Monthly Listeners</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <button className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors">
            <Play className="w-4 h-4" />
            <span className="text-sm font-medium">Play</span>
          </button>
          <button className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            View Details
          </button>
        </div>
      </div>

      {/* Artist Image */}
      {imageUrl && (
        <div className="absolute right-6 top-1/2 transform -translate-y-1/2">
          <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-white/20"></div>
          </div>
        </div>
      )}
    </div>
  );
}
