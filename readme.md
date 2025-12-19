🚀 Smart Job Tracker – Chrome Extension for LinkedIn

A Chrome extension that enhances the LinkedIn job search experience by injecting a Simplify-style sidebar UI, automatically extracting job information, and allowing users to save and track job application statuses.

Built with Chrome Extension (MV3), React, and Vite

✨ Features

✅ Inject a React sidebar UI into LinkedIn job pages (Simplify-style)

✅ Automatically extract job information from LinkedIn

Job title

Company

Location

✅ Real-time job detection when switching job listings

✅ Save job & track application status

Not Saved

Saved

Applied

Interview

Offer

✅ Persistent storage using chrome.storage

✅ Clean separation between:

Content Script (DOM extraction)

Injected React UI

Background logic



🛠 Tech Stack

JavaScript (ES6+)

React

Vite

Chrome Extension Manifest V3

Chrome Storage API

DOM Parsing & Mutation Handling

📦 Installation (Local Development)

1️⃣ Clone the repository

git clone https://github.com/yao961002/google-extension.git
cd google-extension


2️⃣ Build the injected React UI

cd injected-ui
npm install
npm run build


This will generate dist-ui/sidebar.js

3️⃣ Load extension into Chrome

Open chrome://extensions

Enable Developer mode

Click Load unpacked

Select the project root folder

4️⃣ Open LinkedIn job pages 🎯
The sidebar will appear automatically.
