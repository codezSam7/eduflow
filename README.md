## EduFlow

A modern teacher dashboard for school management (MVP) built with React + Tailwind CSS.  
Started as a school project to solve real problems in Nigerian schools: heavy paperwork, manual attendance, assignment tracking.

Not fully responsive yet (focused on desktop teacher use first), but mobile-friendly in key places.

📦 Technologies

- Vite + React.js
- Tailwind CSS
- Lucide React (icons)
- React Router DOM
- JavaScript (plain JSX, no TypeScript yet)

🦄 Features (MVP)

Here's what teachers can do right now:

- **Dashboard Overview** — See today's classes, attendance %, pending assignments, quick stats
- **Digital Attendance** — Pick class/date, toggle students present/absent, bulk actions, live counts
- **Assignments & Grading** — Create assignments, view list, see submissions, enter grades + feedback
- **Login** — Simple mock auth with nice split-screen branding (left: school vibe, right: form)
- **Sidebar Navigation** — Clean, persistent menu with active states

🎯 Keyboard Shortcuts (basic for now)

- None yet — planning to add Ctrl+Z undo, etc. later

👩🏽‍💻 The Process
I started with login + branding screen, then built the main layout (sidebar + header).  
Next came the dashboard with fake stats and quick buttons.  
Then attendance (toggles, search, bulk mark) — this felt like the biggest win because teachers hate manual registers.  
After that, assignments (create, list, grade submissions).  
All data is mocked with useState for now — no backend yet.

Along the way I documented decisions (like why Manrope font, indigo colors for trust/education feel).  
Writing the "what I learned" part really helped me understand state management, component organization, and responsive thinking better.

🧠 What I Learned

- React Routing & Protected Routes — Using react-router-dom + localStorage for simple auth guard
- Complex State Management — useState for students/assignments, deriving counts (present %, graded)
- Tailwind Best Practices — Reusable classes, responsive grids (grid-cols-1 md:grid-cols-4), hover/focus states
- UI/UX Thinking — Making forms easy on mobile, live updates (toggle → count changes instantly)
- Component Composition — Stat cards, quick buttons, tables — reusable patterns
- Debugging Layouts — Fixed sidebar on mobile with transform/translate tricks
- Planning MVP — Focusing on 3 core features instead of building everything at once

📈 Overall Growth  
This project forced me to think about real users (Nigerian teachers with maybe slow internet/phones).  
I learned to prioritize value (attendance saves hours weekly) over fancy features.

💭 How can it be improved?

- Add real backend (Node/Express + MongoDB or Firebase)
- Make it fully responsive (especially attendance table on small screens)
- Student login/submission portal
- Parent notifications (SMS/email stubs)
- Export attendance/grades to PDF/Excel
- Dark mode toggle
- Real file uploads for assignments
- Role-based access (admin, teacher, student)
- Offline support (IndexedDB or service workers)
