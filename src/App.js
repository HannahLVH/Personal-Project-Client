import React from "react";
import Header from "./shared/Header";
import AccountSettings from "./components/AccountSettings";
import CreateAccount from "./components/CreateAccount";
import CreatePlan from "./components/CreatePlan";
import Index from "./components/Index";
import Login from "./components/Login";
import Plans from "./components/Plans";
import ProfileSettings from "./components/ProfileSettings";
import Roster from "./components/Roster";
import Footer from "./shared/Footer"


function App() {
  return (
    <div className="App">
        <Header/>
        <AccountSettings/>
        <CreateAccount/>
        <CreatePlan/>
        <Index/>
        <Login/>
        <Plans/>
        <ProfileSettings/>
        <Roster/>
        <Footer/>
    </div>
  );
}

export default App;
