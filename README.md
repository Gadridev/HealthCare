# HealtCare - Admission Form System

A modern, responsive web application for managing healthcare admission requests. Built with vanilla JavaScript, HTML5, and Tailwind CSS.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [How to Use](#how-to-use)
- [Technical Details](#technical-details)
- [Future Enhancements](#future-enhancements)

---

## 🎯 Overview

**HealtCare** is a client-side web application that allows users to:
- Submit admission requests through a user-friendly form
- View all submitted requests in a clean, organized table
- Manage requests with search, filter, and pagination capabilities

**Technology Stack:**
- **Frontend:** HTML5, CSS3 (Tailwind CSS), Vanilla JavaScript
- **Storage:** Browser LocalStorage (client-side data persistence)
- **Styling:** Tailwind CSS v4 (via CDN)

---

## ✨ Features

### 1. **Admission Form** (`index.html`)
- ✅ Clean, responsive form layout
- ✅ Equal-width labels and inputs (aligned grid design)
- ✅ Form validation (all fields required)
- ✅ Duplicate detection (prevents duplicate entries by email, name, or surname)
- ✅ Error messages with smooth animations
- ✅ Mobile-responsive design

**Form Fields:**
- Nom (Name)
- Prénom (Surname)
- Téléphone (Phone)
- Email
- Motif (Reason)
- Date souhaitée (Desired Date)

### 2. **Data Table** (`table.html`)
- ✅ Displays all submitted requests
- ✅ Search bar (UI ready - functionality to be implemented)
- ✅ Filter dropdown (UI ready - functionality to be implemented)
- ✅ Pagination system (5 items per page)
- ✅ Delete functionality
- ✅ Responsive table design
- ✅ "Add New Request" button to return to form

### 3. **Data Management**
- ✅ LocalStorage persistence (data survives page refresh)
- ✅ Real-time data updates
- ✅ Automatic navigation after form submission

---

## 📁 Project Structure

```
formAdmission/
│
├── index.html          # Main form page
├── table.html          # Data table page
├── script.js           # Form submission logic
├── table.js            # Table display & pagination logic
├── erasebg-transformed.png  # Logo image
└── README.md           # This file
```

### File Descriptions

| File | Purpose |
|------|---------|
| `index.html` | Admission form interface with validation |
| `table.html` | Data table with search, filter, and pagination UI |
| `script.js` | Handles form submission, validation, and localStorage operations |
| `table.js` | Manages table rendering, pagination, and delete operations |

---

## 🚀 How to Use

### **Step 1: Open the Application**
1. Open `index.html` in a web browser
2. The form page will load automatically

### **Step 2: Fill Out the Form**
1. Enter all required information:
   - Name, Surname, Phone, Email, Reason, Desired Date
2. Click **"Ajouter une demande"** (Add Request) button
3. If validation passes, you'll be redirected to the table page

### **Step 3: View Requests**
1. On the table page, you'll see all submitted requests
2. Use pagination controls to navigate through pages (5 items per page)
3. Click **"Delete"** to remove a request
4. Click **"+ Nouvelle demande"** to add another request

### **Step 4: Search & Filter** *(Coming Soon)*
- Search bar: Filter by name, email, or motif
- Filter dropdown: Filter by date range (Today, This Week, This Month)

---

## 🔧 Technical Details

### **Data Storage**
- Uses **Browser LocalStorage** (key: `"data"`)
- Data format: JSON array of objects
- Example structure:
```json
[
  {
    "nom": "John",
    "prenom": "Doe",
    "email": "john@example.com",
    "motif": "Consultation",
    "date": "2024-01-15"
  }
]
```

### **Form Validation**
- All fields are required
- Duplicate check: Prevents entries with same email, name, or surname
- Error messages display for 1.5 seconds

### **Pagination Logic**
- **Page Size:** 5 items per page
- **Calculation:**
  - `startIndex = (currentPage - 1) × pageSize`
  - `endIndex = startIndex + pageSize`
  - Uses JavaScript `slice()` to display only current page items

### **Responsive Design**
- Mobile-first approach
- Breakpoints: `sm:` (640px), `lg:` (1024px)
- Form switches from grid to stacked layout on mobile
- Table becomes horizontally scrollable on small screens

---

## 🎨 Design Highlights

### **Color Scheme**
- **Primary:** `#FBD207` (Yellow) - Used for logo background and buttons
- **Neutral:** Gray scale for text, borders, and backgrounds
- **Accent:** Red for delete buttons, blue for hover states

### **Typography**
- Font: System default (sans-serif)
- Headings: Bold, large sizes
- Body: Medium weight, readable sizes

### **UI Components**
- Rounded corners (`rounded-xl`, `rounded-lg`)
- Subtle shadows (`shadow-sm`, `shadow-lg`)
- Smooth transitions on hover and focus
- Focus rings for accessibility

---

## 🔮 Future Enhancements

### **Planned Features:**
1. ✅ **Search Functionality** - Implement search bar to filter by name, email, motif
2. ✅ **Filter Functionality** - Add date range filtering (Today, This Week, This Month)
3. ✅ **Edit Functionality** - Allow users to edit existing requests
4. ✅ **Export Data** - Download table data as CSV or PDF
5. ✅ **Sorting** - Click column headers to sort data
6. ✅ **Advanced Pagination** - Show page numbers with ellipsis for many pages
7. ✅ **Backend Integration** - Connect to a server/database instead of LocalStorage

---

## 📝 Notes for Presentation

### **Key Points to Highlight:**
1. **No Backend Required** - Everything runs client-side using LocalStorage
2. **Modern UI/UX** - Clean, professional design with Tailwind CSS
3. **Responsive** - Works on desktop, tablet, and mobile devices
4. **Extensible** - Easy to add new features (search, filter, edit)
5. **User-Friendly** - Clear error messages and intuitive navigation

### **Demo Flow:**
1. Show the form page → Fill out a sample request
2. Show validation → Try submitting with empty fields
3. Show duplicate detection → Try adding the same email twice
4. Show the table → Display all requests with pagination
5. Show delete → Remove a request
6. Show responsive design → Resize browser window

---

## 🛠️ Setup Instructions

### **Requirements:**
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server or installation needed
- Internet connection (for Tailwind CSS CDN)

### **Running the Application:**
1. Download/clone the project files
2. Open `index.html` in your browser
3. That's it! No build process or dependencies to install
