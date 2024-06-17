import React, {useState, useEffect} from "react";
import Header from "./shared/Header";
import AccountSettings from "./components/AccountSettings";
import CreateAccount from "./components/CreateAccount";
import Index from "./components/Index";
import Login from "./components/Login";
import PlanList from "./components/PlanList";
import Plan from "./components/Plan";
import EditPlan from "./components/EditPlan";
import CreatePlan from "./components/CreatePlan";
import Profile from "./components/Profile";
import ProfileSettings from "./components/ProfileSettings";
import Roster from "./components/Roster";
import Footer from "./shared/Footer"


function App() {
  const [user, setUser] = useState({})

  useEffect (() => {
    localStorage.getItem("user")
  }, [user])

  return (
    <div className="App">
        <Header user={user} setUser={setUser}/>
        <AccountSettings/>
        <CreateAccount user={user} setUser={setUser} />
        <Index/>
        <Login user={user} setUser={setUser}/>
        <PlanList/>
        <Plan/>
        <EditPlan/>
        <CreatePlan/>
        <Profile/>
        <ProfileSettings/>
        <Roster/>
        <Footer/>
    </div>
  );
}

export default App;
