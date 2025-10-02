
import { Routes, Route } from 'react-router'
import SignIn from './components/SignInForm/SignInForm';
import SignUp from './components/SignUpForm/SignUpForm';
import Navbar from './components/NavBar/NavBar';
import TaskList from './components/Tasks/TaskList';
import TaskForm from './components/Tasks/TaskForm';
import TaskDetail from './components/Tasks/TaskDetails';
import UserProfile from './components/profiles/UserProfile';
import ProfessionalProfile from './components/profiles/ProfessionalProfile';


const App = () => (
  <>
   <Navbar />
    <main className>
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />

        <Route path="/user/*" element={
          
            <div className>
              <div className><TaskForm /></div>
              <div className><TaskList role="user" /></div>
            </div>
          
        } />

        <Route path="/pro/*" element={
     
            <div>
              <TaskList role="professional" />
            </div>
         
        } />

        <Route path="/tasks/:id" element={<TaskDetail />} />
        <Route path="/profiles/user/:id" element={<UserProfile />} />
        <Route path="/profiles/pro/:id" element={<ProfessionalProfile />} />

        <Route path="*" element={<SignIn />} />
      </Routes>
    </main>
  </>
);

export default App;
