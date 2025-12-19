Smart Job Tracker – Chrome Extension for LinkedIn

Smart Job Tracker is a Chrome extension that enhances the LinkedIn job search experience by injecting a Simplify-style sidebar UI, automatically extracting job information, and allowing users to save and track job application statuses.

Built with Chrome Extension (Manifest V3), React, and Vite.

Features

Inject a React sidebar UI into LinkedIn job pages (Simplify-style)

Automatically extract job information from LinkedIn, including:

Job title

Company

Location

Real-time job detection when switching between job listings

Save jobs and track application status:

Not Saved

Saved

Applied

Interview

Offer

Persistent storage using chrome.storage

Clean separation of responsibilities:

Content Script for DOM extraction

Injected React UI for user interaction

Background logic for persistence and messaging

Tech Stack

JavaScript (ES6+)

React

Vite

Chrome Extension Manifest V3

Chrome Storage API

DOM Parsing and Mutation Handling

Installation (Local Development)
1. Clone the repository
git clone https://github.com/yao961002/google-extension.git
cd google-extension

2. Build the injected React UI
cd injected-ui
npm install
npm run build


This will generate dist-ui/sidebar.js.

3. Load the extension into Chrome

Open chrome://extensions

Enable Developer mode

Click Load unpacked

Select the project root folder

4. Open LinkedIn job pages

The sidebar will appear automatically on supported LinkedIn job pages.
