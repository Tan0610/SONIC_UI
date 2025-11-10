"use client";
import { Bell, Settings } from "lucide-react";
import { WalletConnect } from "./walletConnect";

export default function DashboardHeader() {
  return (
    <header className="h-16 bg-[var(--card-background)] border-b border-[var(--border-color)] flex items-center justify-between px-6">
      {/* Left side - Page title will be dynamic */}
      <div>
        <h1 className="text-xl font-semibold text-white">Hello, Michael!</h1>
      </div>

      {/* Right side - Actions */}
      <div className="flex items-center space-x-4">
        {/* Launch dApp Button */}
        <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
          Launch dApp
        </button>

        {/* Register IP Button */}
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
          Register IP
        </button>

        {/* Notifications */}
        <button className="p-2 text-gray-400 hover:text-white transition-colors">
          <Bell className="w-5 h-5" />
        </button>

        {/* Settings */}
        <button className="p-2 text-gray-400 hover:text-white transition-colors">
          <Settings className="w-5 h-5" />
        </button>

        {/* Wallet Connect */}
        <WalletConnect />
      </div>
    </header>
  );
}
