Smart Job Tracker – Chrome Extension for LinkedIn

A Chrome extension that enhances the LinkedIn job search experience by injecting a Simplify-style sidebar UI, automatically extracting job information, and allowing users to save and track job application statuses.

Built with Chrome Extension (MV3), React, and Vite.

────────────────────────
Features

• Injects a React-based sidebar UI into LinkedIn job pages (Simplify-style)

• Automatically extracts job information from LinkedIn
• Job title
• Company
• Location

• Detects job changes in real time when switching between job listings

• Allows users to save jobs and track application status
• Not Saved
• Saved
• Applied
• Interview
• Offer

• Persists job data using the Chrome Storage API (chrome.storage)

• Maintains a clean architectural separation between
• Content scripts (DOM extraction and page monitoring)
• Injected React UI (sidebar interface)
• Background logic (state persistence and coordination)

────────────────────────
Tech Stack

• JavaScript (ES6+)
• React
• Vite
• Chrome Extension (Manifest V3)
• Chrome Storage API
• DOM parsing and mutation handling

────────────────────────
Installation (Local Development)

Clone the repository

git clone https://github.com/yao961002/google-extension.git

cd google-extension

Build the injected React UI

cd injected-ui
npm install
npm run build

This will generate dist-ui/sidebar.js

Load the extension into Chrome

• Open chrome://extensions
• Enable Developer mode
• Click Load unpacked
• Select the project root folder

Open LinkedIn job pages

The sidebar will appear automatically on LinkedIn job posting pages.
