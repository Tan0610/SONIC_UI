"use client";
import DashboardLayout from "@/components/DashboardLayout";
import FeaturedCard from "@/components/FeaturedCard";
import ContentList from "@/components/ContentList";
import { StatCard } from "@/components/StatCard";
import { 
  FileText, 
  Users, 
  Shield, 
  TrendingUp,
  Music,
  Disc3
} from "lucide-react";

export default function Home() {
  // Sample data for the dashboard
  const latestAlbums = [
    { id: "1", title: "Random Access Memories", artist: "Daft Punk", duration: "74:24" },
    { id: "2", title: "Glow On", artist: "Turnstile", duration: "38:12" },
    { id: "3", title: "Dopethrone", artist: "Electric Wizard", duration: "71:08" },
    { id: "4", title: "The Narcotic Story", artist: "Oxbow", duration: "45:33" },
  ];

  const latestSingles = [
    { id: "1", title: "Feel Good Inc.", artist: "Gorillaz", plays: "2.1M" },
    { id: "2", title: "Get Lucky", artist: "Daft Punk", plays: "1.8M" },
    { id: "3", title: "Ace of Spades", artist: "Motörhead", plays: "956K" },
    { id: "4", title: "My War", artist: "Black Flag", plays: "743K" },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Featured Content */}
        <FeaturedCard
          title="DIE FOR YOU"
          genre="R&B Music"
          collaborations="3"
          likes="50,851"
          monthlyListeners="2.1M"
          gradient="gradient-card-1"
        />

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard
            value="0"
            label="Registered IP dSEPs"
            icon={FileText}
            gradient="gradient-card-2"
          />
          <StatCard
            value="3"
            label="Creator Credentials"
            icon={Shield}
            gradient="gradient-card-3"
          />
          <StatCard
            value="1254"
            label="Profile Views"
            icon={TrendingUp}
            gradient="gradient-card-4"
            trend={{ value: "12%", isPositive: true }}
          />
        </div>

        {/* Content Lists */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ContentList
            title="Latest Album"
            items={latestAlbums}
            type="album"
          />
          <ContentList
            title="Latest Singles"
            items={latestSingles}
            type="single"
          />
        </div>

        {/* Your Registered IPs Section */}
        <div className="bg-[var(--card-background)] rounded-xl border border-[var(--border-color)] p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Your Registered IPs</h3>
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <Music className="w-8 h-8 text-gray-400" />
            </div>
            <p className="text-gray-400 mb-4">No registered IPs yet. Create your first one!</p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium transition-colors">
              Register Your First IP
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
