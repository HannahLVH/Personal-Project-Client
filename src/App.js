import React, {useState, useEffect} from "react";
import {Routes, Route} from "react-router-dom";
import Header from "./shared/Header";
import AccountSettings from "./components/AccountSettings";
import CreateAccount from "./components/CreateAccount";
import Index from "./components/Index";
import Login from "./components/Login";
import PlanList from "./components/PlanList";
import StudentPlans from "./components/StudentPlans";
import Plan from "./components/Plan";
import EditPlan from "./components/EditPlan";
import CreatePlan from "./components/CreatePlan";
import Profile from "./components/Profile";
import EditProfile from "./components/EditProfile";
import Roster from "./components/Roster";
import Footer from "./shared/Footer"


function App() {
  const [user, setUser] = useState(localStorage.getItem("user") || {})

  useEffect (() => {
    localStorage.getItem("user")
  }, [user])

  return (
    <div className="App">
        <Header 
        user={user} setUser={setUser}
        />
        <Routes>
          <Route path="/" element={<Index/>}/>
          <Route path="/signup" element={<CreateAccount/>} user={user} setUser={setUser}/>
          <Route path="/login" element={<Login/>} user={user} setUser={setUser}/>
          <Route path="/account-settings" element={<AccountSettings/>}/>
          <Route path="/plans/:userId" element={<PlanList/>} />
          <Route path="/student/:userId" element={<StudentPlans/>} />
          <Route path="/plan/:planId" element={<Plan/>}/>
          <Route path="/edit-plan/:planId" element={<EditPlan/>}/>
          <Route path="/create-plan/:userId" element={<CreatePlan/>}/>
          <Route path="/profile/:userId" element={<Profile/>}/>
          <Route path="/edit-profile/:userId" element={<EditProfile/>}/>
          <Route path="/student-roster" element={<Roster/>}/>

          {/* TEST */}
          <Route path="/plans" element={<PlanList/>} />
          <Route path="/student" element={<StudentPlans/>} />
          <Route path="/plan" element={<Plan/>}/>
          <Route path="/edit-plan" element={<EditPlan/>}/>
          <Route path="/create-plan" element={<CreatePlan/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/edit-profile" element={<EditProfile/>}/> 
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
