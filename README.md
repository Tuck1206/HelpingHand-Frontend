# React JWT Auth Template

## About

This application is designed to connect users with technical or skilled professionals for task-
based services such as fixing phones, repairing cars, computer troubleshooting, carpentry, 
building work, and more. Users can post tasks, and professionals can offer their services in 
response.
📝 User Features
Users must sign up and then sign in to access the platform.
Once signed in, users can:
oCreate tasks under any category.
oAdd attachments (e.g. photos or documents) to provide context for their 
tasks.
View, edit, and comment only on tasks they have created.
Receive offers from professionals and choose to accept or decline them.
View professional profiles and ratings.
View a list of completed tasks, with partial details of professionals' past 
work.
Leave a rating for professionals after a task is completed.
📝 Professional Features
Professionals must also sign up and sign in to access their dashboard.
During sign-up, professionals must choose one or more categories of expertise.
Once signed in, professionals can:
View tasks only in their selected categories.
Search and filter tasks by location, category, and task title.
Comment on any tasks within their selected categories.
Send price offers to users for relevant tasks.
View user profiles and ratings before offering.
Mark tasks as completed once work is finished.
View a history of previously completed tasks.
Optionally delete completed tasks from their own profile/task list.
Leave a rating for users after task completion.
📝 Authentication & Authorization
Both users and professionals must register and authenticate to use the platform.
Role-based access ensures:
Users can only manage their own tasks.
Professionals can only see and interact with tasks in their selected categories.
📝 Shared Features
Commenting System:
Users can comment only on their own tasks.
Professionals can comment on any tasks that fall under their selected 
categories.
Rating System:
After task completion, both users and professionals can rate each other.
Ratings are visible on user and professional profiles.
Profile Viewing:
Users and professionals can view each other’s public profiles, which include 
basic info, ratings, and partial task history.
Task History Visibility:
Users can see a portion of the professional's past completed tasks.
Professionals can see a portion of tasks created by users.
📝  Planned Enhancements (Future Features)
🔔 Notifications System
Real-time alerts for task updates, new offers, comments, and status changes.
🔔 Map Integration
Location-based task display and filtering for professionals.
🔔 Scheduling System
Professionals can set their availability; users can select preferred time slots.
⭐ Profile Rating Display
Average ratings shown on user and professional profiles for credibility

This repo is a React JWT Auth template meant to be paired with a back-end app utilizing JWT tokens.

## Getting started

Fork and clone this repository to your local machine.

After moving into the cloned directory, run `npm i` to download the dependencies.

Create a `.env` file in the root of the project and add the following:

```plaintext
VITE_BACK_END_SERVER_URL=http://localhost:3000
```

Start the app with `npm run dev`.
