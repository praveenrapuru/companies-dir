# Companies Directory – React Frontend

A responsive **React + Tailwind CSS** frontend application that displays a list of companies with filtering, sorting, and pagination features.  
This project focuses on frontend development and JSON API integration.

---

## Features

-  Built with **React.js**
-  Styled using **Tailwind CSS**
-  Search companies by name, industry, or location
-  Filter by **Industry** and **Location**
-  Sort by company name (ascending/descending)
-  Pagination (client-side)
-  Toggle between **Table** and **Card**
-  Fetch data from a static JSON (`https://mocki.io/v1/62d84df6-0326-4d62-a367-385282fba568`)
-  Clean component-based architecture
-  Fully responsive design

---

## Quick Start

- Install dependencies: `npm install`
- Start dev server: `npm start`
- Open: `http://localhost:3000`


## Folder Structure

companies-directory/
│
│
├── public/
│ ├── video.webm # Demo video file
│ 
├── src/
│ ├── components/
│ │ ├── CompanyDirectory.jsx # Main logic (fetch, filter, pagination)
│ │ ├── Filters.jsx # Filter/search/sort controls
│ │ ├── CompanyTable.jsx # Table & card view handler
│ │ └── CompanyCard.jsx # Individual card layout
│ │
│ ├── App.jsx # Root component (imports only)
│ └── index.css # Tailwind setup
│
├── package.json
├── tailwind.config.cjs
└── README.md

## Deployment link

[Live Demo on netlify](https://companies-dir.netlify.app/)

## Demo Video

GitHub README pages don’t reliably play embedded videos. Use the link or thumbnail below to open the video in your browser.

- Watch: [public/video.webm](public/video.webm)
- If the preview page opens, click “Download” or “View raw” to play.

Clickable thumbnail:

[![Open Demo Video](public/video.webm)](public/video.webm)
