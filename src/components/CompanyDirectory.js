import React, { useEffect, useState, useMemo } from "react";
import Filters from "./Filters";
import CompanyTable from "./CompanyTable";

export default function CompanyDirectory() {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [search, setSearch] = useState("");
  const [industry, setIndustry] = useState("All");
  const [location, setLocation] = useState("All");
  const [sortBy, setSortBy] = useState("name-asc");
  const [view, setView] = useState("table");

  const [page, setPage] = useState(1);
  const perPage = 8;

  useEffect(() => {
    let cancelled = false;
    async function load() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("/companies.json");
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        if (!cancelled) setCompanies(data);
      } catch (err) {
        if (!cancelled) setError(err.message || "Failed to load");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => { cancelled = true; };
  }, []);

  const industries = useMemo(() => ["All", ...Array.from(new Set(companies.map(c => c.industry)))], [companies]);
  const locations = useMemo(() => ["All", ...Array.from(new Set(companies.map(c => c.location)))], [companies]);

  const filtered = useMemo(() => {
    let arr = companies.slice();
    if (search.trim()) {
      const q = search.toLowerCase();
      arr = arr.filter(c => c.name.toLowerCase().includes(q) || (c.industry + " " + c.location).toLowerCase().includes(q));
    }
    if (industry !== "All") arr = arr.filter(c => c.industry === industry);
    if (location !== "All") arr = arr.filter(c => c.location === location);

    if (sortBy === "name-asc") arr.sort((a,b)=> a.name.localeCompare(b.name));
    else if (sortBy === "name-desc") arr.sort((a,b)=> b.name.localeCompare(a.name));

    return arr;
  }, [companies, search, industry, location, sortBy]);

  useEffect(() => setPage(1), [search, industry, location, sortBy]);

  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / perPage));
  const paginated = filtered.slice((page-1)*perPage, page*perPage);

  return (
    <>
      <Filters
        search={search} setSearch={setSearch}
        industries={industries} industry={industry} setIndustry={setIndustry}
        locations={locations} location={location} setLocation={setLocation}
        sortBy={sortBy} setSortBy={setSortBy}
        view={view} setView={setView}
      />

      <section className="mt-4">
        {loading ? (
          <div className="space-y-4">
            <div className="h-8 w-1/3 skeleton" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[...Array(6)].map((_,i)=> <div key={i} className="p-4 skeleton h-36" />)}
            </div>
          </div>
        ) : error ? (
          <div className="p-6 bg-red-50 text-red-800 rounded">{`Error loading companies: ${error}`}</div>
        ) : total === 0 ? (
          <div className="p-6 bg-yellow-50 text-yellow-800 rounded">No companies match your filters.</div>
        ) : (
          <>
            <CompanyTable data={view === "table" ? paginated : filtered} view={view} />

            {view === "table" && (
              <div className="mt-4 flex items-center justify-between">
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Showing <b>{(page-1)*perPage + 1}</b> - <b>{Math.min(page*perPage, total)}</b> of <b>{total}</b>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={()=> setPage(p => Math.max(1,p-1))}
                    disabled={page===1}
                    className="px-3 py-1 rounded bg-white dark:bg-gray-800 border disabled:opacity-50"
                  >Prev</button>
                  <div className="text-sm">Page {page} / {totalPages}</div>
                  <button
                    onClick={()=> setPage(p => Math.min(totalPages,p+1))}
                    disabled={page===totalPages}
                    className="px-3 py-1 rounded bg-white dark:bg-gray-800 border disabled:opacity-50"
                  >Next</button>
                </div>
              </div>
            )}
          </>
        )}
      </section>
    </>
  );
}
