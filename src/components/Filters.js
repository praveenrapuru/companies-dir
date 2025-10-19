import React from "react";
import { Search } from "lucide-react"; // install lucide-react for icons (npm i lucide-react)

export default function Filters({
  search, setSearch,
  industries, industry, setIndustry,
  locations, location, setLocation,
  sortBy, setSortBy,
  view, setView
}) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-md flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
      
      {/* 🔍 Search Input */}
      <div className="relative flex-1 w-full md:w-96">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search companies by name, industry, or location..."
          className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
        />
        {search && (
          <button
            onClick={() => setSearch("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
          >
            ✕
          </button>
        )}
      </div>

      {/* 🏷 Filters */}
      <div className="flex flex-wrap gap-3">
        <select
          value={industry}
          onChange={e => setIndustry(e.target.value)}
          className="px-3 py-2 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          {industries.map(i => <option key={i} value={i}>{i}</option>)}
        </select>

        <select
          value={location}
          onChange={e => setLocation(e.target.value)}
          className="px-3 py-2 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          {locations.map(l => <option key={l} value={l}>{l}</option>)}
        </select>

        <select
          value={sortBy}
          onChange={e => setSortBy(e.target.value)}
          className="px-3 py-2 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="name-asc">Name ↑</option>
          <option value="name-desc">Name ↓</option>
        </select>

        {/* 💠 View Toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setView("table")}
            className={`px-3 py-2 rounded-xl text-sm transition-all ${
              view === "table"
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
            }`}
          >
            Table
          </button>
          <button
            onClick={() => setView("cards")}
            className={`px-3 py-2 rounded-xl text-sm transition-all ${
              view === "cards"
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
            }`}
          >
            Cards
          </button>
        </div>
      </div>
    </div>
  );
}
