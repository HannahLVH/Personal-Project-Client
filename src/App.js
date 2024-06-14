import React, {useState} from "react";

function App() {
  const [user, setUser] = useState(localStorage.getItem("user") || {})
  
  return (
    <div className="App">

    </div>
  );
}

export default App;
