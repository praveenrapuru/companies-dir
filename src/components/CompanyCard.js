import React from "react";

export default function CompanyCard({ company }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow-sm flex flex-col justify-between">
      <div>
        <h3 className="font-semibold text-lg">{company.name}</h3>
        <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">{company.industry} • {company.location}</div>
        <div className="text-sm mt-2">Employees: <span className="font-medium">{company.employees}</span></div>
      </div>

      <div className="mt-3 flex items-center justify-between">
        <a href={company.website} target="_blank" rel="noreferrer" className="text-sm underline">Visit website</a>
        <button className="px-3 py-1 rounded bg-gray-100 dark:bg-gray-700 text-sm">View</button>
      </div>
    </div>
  );
}
