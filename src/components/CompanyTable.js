import React from "react";
import CompanyCard from "./CompanyCard";

export default function CompanyTable({ data = [], view = "table" }) {
  if (view === "cards") {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map(c => <CompanyCard key={c.id} company={c} />)}
      </div>
    );
  }

  return (
    <div className="overflow-x-auto bg-white dark:bg-gray-800 p-2 rounded shadow-sm">
      <table className="min-w-full divide-y">
        <thead className="text-left text-sm text-gray-500 dark:text-gray-300">
          <tr>
            <th className="px-3 py-3">Name</th>
            <th className="px-3 py-3 hidden md:table-cell">Industry</th>
            <th className="px-3 py-3">Location</th>
            <th className="px-3 py-3 hidden lg:table-cell">Employees</th>
            <th className="px-3 py-3">Website</th>
          </tr>
        </thead>
        <tbody className="text-sm">
          {data.map(c => (
            <tr key={c.id} className="border-t hover:bg-gray-50 dark:hover:bg-gray-700">
              <td className="px-3 py-3">{c.name}</td>
              <td className="px-3 py-3 hidden md:table-cell">{c.industry}</td>
              <td className="px-3 py-3">{c.location}</td>
              <td className="px-3 py-3 hidden lg:table-cell">{c.employees}</td>
              <td className="px-3 py-3">
                <a href={c.website} target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 underline text-sm">Visit</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
