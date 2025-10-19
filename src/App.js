import React from "react";
import CompanyDirectory from "./components/CompanyDirectory";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4 md:p-8">
      <header className="max-w-6xl mx-auto mb-6">
        <h1 className="text-2xl md:text-3xl font-semibold">Companies Directory</h1>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
          Browse, filter, sort and paginate through companies.
        </p>
      </header>

      <main className="max-w-6xl mx-auto">
        <CompanyDirectory />
      </main>
    </div>
  );
}
