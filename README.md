# React JWT Auth Template

## About

# HelpingHand
![alt text](OIP.webp)


## 📌 About HelpingHand
**HelpingHand** is a role-based task management platform designed to bridge the gap between everyday users and skilled professionals.  

- **Users** can create tasks (with categories, locations, urgency, etc.), manage them, and accept offers from professionals.  
- **Professionals** can view tasks in their expertise categories, send offers, comment, and mark tasks as complete once done.  

This app was built to simulate a real-world **gig economy workflow**, where trust, transparency, and usability are crucial.

---

## 🚀 Getting Started

### Live Demo
https://ahelpinghand.netlify.app/

### Planning Materials
📂 [Wireframes, ERD, & User Stories] project/
HelpiingHand-frontend/
 ├─ src/
 │   ├─ components/
 │   │   ├─ DashBoard
 |   |   |-DashBoard.jsx
 |   |   |
 |   |   |-Landing/ 
 |   |   |-Landing.jsx
 |   |   |
 |   |   |-Nvabar/
 |   |   |-Navbar.jsx
 |   |   |
 |   |   |-Profiles
 |   |   |-professionalProfile.jsx
 |   |   |-Userprofile.jsx
 |   |   |
 |   |   |-SignInForm
 |   |   |─ SignIn.jsx
 |   |   |
 |   |   |-SignUpForm
 |   |   |─ SignUp.jsx
 |   |   |
 │   │   ├─ tasks/
 │   │   │   ├─ TaskList.jsx
 │   │   │   ├─ TaskForm.jsx
 │   │   │   ├─ TaskDetail.jsx
 │   │   │   └─ OfferList.jsx
 │   │
 │   ├─ context/
 │   │   ├─ UserContext.jsx
 │   │   └─ ProfessionalContext.jsx
 │   │
 │   ├─ services/
 │   │   ├─ authService.js
 │   │   ├─ userService.js
 │   │   ├─ professionalService.js
 │   │   └─ taskService.js
 │   │
 │   ├─ App.jsx
 │   ├─ main.jsx
 │   └─ index.css
 │
 ├─ .env
 ├─ package.json
 └─ vite.config.js


## 🚫 Access Control Rules

- ❌ Professionals **cannot create** tasks.  
- 👁️ Users **cannot see** others' tasks.  
- ✏️ Tasks **cannot be edited or deleted** after an offer is accepted.  
- ✅ Only the **accepted professional** can complete the task.  
- 🔐 Only the **task owner** can accept or reject offers.  





### Back-End Repository
💻 [ HelpingHand API Repo] https://github.com/qudratullah-khurram/github-collaboration

---

## 🙏 Attributions
- [React](https://react.dev/) for building the frontend  
- [Express](https://expressjs.com/) & [Node.js](https://nodejs.org/) for the backend API  
- [MongoDB](https://www.mongodb.com/) for database management  
- [JWT](https://jwt.io/) for secure authentication  
- [React Router](https://reactrouter.com/) for navigation  
- [Tailwind CSS](https://tailwindcss.com/) (or custom CSS) for styling  
- Icons: [Lucide](https://lucide.dev/)  

---

## 🛠️ Technologies Used
- **Frontend:** React (Hooks, Context API), React Router, Axios  
- **Backend:** Node.js, Express, MongoDB, JWT Authentication  
- **Styling:** CSS3 / Tailwind (customized for dashboard look)  
- **Authentication:** JWT with role-based access (User vs Professional)  
- **Deployment:** (e.g., Vercel/Netlify for frontend, Render/Heroku for backend)  

---

## 📌 Core Features
✅ User Sign Up & Login  
✅ Professional Sign Up & Login  
✅ Role-based Authentication (User vs Professional)  
✅ User Creates Tasks (title, description, category, location, urgency)  
✅ Professionals View Tasks in Their Categories  
✅ Professionals Send Offers to Tasks  
✅ Users Accept or Reject Offers  
✅ Task Commenting  
- Users: comment on their own tasks  
- Professionals: comment in their categories  
✅ Professionals Mark Tasks as Complete  
✅ View Basic Profiles (User ↔ Professional)  

---

## 🔮 Next Steps (Planned Enhancements)
- **Notification System** (real-time task updates, offers, and comments)  
- **Map Integration** (location-based task search)  
- **Scheduling & Availability** (professionals set working hours, users book slots)  
- **Ratings & Reviews** (post-task feedback for both users and professionals)  
- **Mobile App** (React Native for iOS & Android)  

---

💡 Built with teamwork, modern web technologies, and the vision to connect people who need help with those who can provide it.


Fork and clone this repository to your local machine.

After moving into the cloned directory, run `npm i` to download the dependencies.

Create a `.env` file in the root of the project and add the following:

```plaintext
VITE_BACK_END_SERVER_URL=http://localhost:3000
```

Start the app with `npm run dev`.
