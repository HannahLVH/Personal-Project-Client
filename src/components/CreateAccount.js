import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import "../components/mediaQueries.css";


const CreateAccount = () => {
    const navigate = useNavigate();
    const [signUp, setSignUp] = useState({
        firstName: "",
        lastName: "",
        role: "",
        username: "",
        password: ""
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setSignUp((prevSetSignUp) => ({...prevSetSignUp, [name]: value}))
    }

    const handleSignUpSubmit = (e) => {
        e.preventDefault();
        console.log("Method running successfully")
        console.log(signUp)
        const body = {
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            role: e.target.role.value,
            username: e.target.username.value,
            password: e.target.password.value
        }
        fetch("http://localhost:8080/signup", {
            method: "POST",
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify(body),
        })
        .then((response) => response.json())
        .then((result) => {
            if(result.statusCode === 200) {
                localStorage.setItem("user", JSON.stringify(result.data));
                console.log("Success! You are signed up");
                navigate("/")
            } else {
                throw new Error (result.error.message)
            }
        })
        .catch((error) => console.log("Error", error));
    }

    return (
      <main>
        <div className="content-section">
            <div className="text-container-1">
                <span className="content-header">
                    <header>
                        <h1>CREATE ACCOUNT</h1>
                    </header>
                </span>
            <div className="form-container">
                <form action="#" onSubmit={handleSignUpSubmit}>
                    <div className="form-fields">
                        <span className="label-input-container">
                            <label htmlFor="role">Sign up as:</label>
                            <select className="manage-pp-select" name="role" id="role" defaultValue={"selected"} onChange={handleInputChange} required>
                                <option value="selected">Select an option:</option>
                                <option value="teacher">Teacher</option>
                                <option value="student">Student</option>
                            </select>
                        </span>
                        <span className="label-input-container">
                                <label htmlFor="firstName"> First Name: </label>
                                <input className="manage-pp-select" type="text" name="firstName" id="firstName" placeholder="First Name"
                                value={signUp.firstName}
                                onChange={handleInputChange}
                                required />   
                        </span>
                        <span className="label-input-container">
                        
                            <label htmlFor="lastName"> Last Name: </label>
                            <input className="manage-pp-select" type="text" name="lastName" id="lastName" placeholder="Last Name"
                            value={signUp.lastName}
                            onChange={handleInputChange}
                            required />
                    
                        </span>
                        <span className="label-input-container">
                        
                            <label htmlFor="username">Email Address: </label>
                            <input className="manage-pp-select" type="text" name="username" id="username" placeholder="Email"
                            value={signUp.username}
                            onChange={handleInputChange}
                            required/>
                    
                        </span>
                        <span className="label-input-container">
                        
                            <label htmlFor="password">Password: </label>
                            <input className="manage-pp-select" type="text" name="password" id="password" placeholder="Password"
                            value={signUp.password}
                            onChange={handleInputChange}
                            required />
                    
                        </span>
                        <span className="enter-button">
                            <br/>
                            <button className="submit-button yellow-button">Submit</button>
                        </span>
                   </div>
                </form>
            </div>
            </div>
            <br/>
        </div>
      </main>
    )
  }

export default CreateAccount;