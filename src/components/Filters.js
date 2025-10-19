import React from "react";

export default function Filters({
  search, setSearch,
  industries, industry, setIndustry,
  locations, location, setLocation,
  sortBy, setSortBy,
  view, setView
}) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow-sm flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
      <div className="flex-1 flex gap-3">
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search name / industry / location..."
          className="px-3 py-2 rounded border w-full md:w-96 bg-white dark:bg-gray-900"
        />

        <select value={industry} onChange={e => setIndustry(e.target.value)} className="px-3 py-2 rounded border bg-white dark:bg-gray-900">
          {industries.map(i => <option key={i} value={i}>{i}</option>)}
        </select>

        <select value={location} onChange={e => setLocation(e.target.value)} className="px-3 py-2 rounded border bg-white dark:bg-gray-900">
          {locations.map(l => <option key={l} value={l}>{l}</option>)}
        </select>
      </div>

      <div className="flex items-center gap-3">
        <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="px-3 py-2 rounded border bg-white dark:bg-gray-900">
          <option value="name-asc">Name ↑</option>
          <option value="name-desc">Name ↓</option>
        </select>

        <div className="flex items-center gap-2 text-sm">
          <button
            onClick={() => setView("table")}
            className={`px-3 py-1 rounded ${view==='table' ? 'bg-blue-600 text-white' : 'bg-white dark:bg-gray-800'}`}
          >Table</button>
          <button
            onClick={() => setView("cards")}
            className={`px-3 py-1 rounded ${view==='cards' ? 'bg-blue-600 text-white' : 'bg-white dark:bg-gray-800'}`}
          >Cards</button>
        </div>
      </div>
    </div>
  );
}
