
# 💰 Personal Finance Tracker

A web-based personal finance tracker that allows users to manage their income and expenses, categorize spending, and visualize data through graphs. Built using **HTML, CSS, JavaScript, MySQL**, and optionally **Node.js** for backend functionality.

---

## 🚀 Features

- 🧾 Add, edit, and delete income and expense entries
- 📊 View summary of total expenses and income
- 🔍 Filter by category and date
- 📅 Date picker for custom entries
- 📈 Interactive charts using Chart.js
- 👤 Optional user login (if backend is added)
- 📤 Export data to CSV (optional)

---

## 🛠️ Tech Stack

| Layer       | Technology              |
|-------------|-------------------------|
| Frontend    | HTML, CSS, JavaScript   |
| Backend     | Node.js (Optional)      |
| Database    | MySQL                   |
| Charts      | Chart.js                |
| UI Styling  | Bootstrap / Tailwind CSS|

---

## 🗂️ Folder Structure

finance-tracker/
│
├── index.html                # Landing page / User login page
├── dashboard.html            # Main dashboard page for tracking expenses/incomes
├── css/                      # Folder containing custom CSS styles
│   └── style.css             # Custom styles for the project (responsive, UI)
├── js/                       # Folder for JavaScript files
│   └── main.js               # Core logic for handling expenses, income, and DOM manipulation
├── sql/                      # Folder for MySQL database-related files
│   └── schema.sql            # SQL schema for creating database tables (expenses, categories, etc.)
├── README.md                 # Documentation of the project
