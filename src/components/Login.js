import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const Login = ({setUser}) => {
    const navigate = useNavigate();
    const [login, setLogin] = useState({
        username: "",
        password: "",
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setLogin((prevSetLogin) => ({...prevSetLogin, [name]: value}));
    }

    const handleLoginSubmit = (e) => {
        const body = {
            username: e.target.username.value,
            password: e.target.password.value
        }
        e.preventDefault();
        console.log("Method running successfully", login)
        fetch("http://localhost:8080/login/local", {
            method: "POST",
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify(body),
        })
        .then((response) => response.json())
        .then((result) => {
            console.log("Result", result)
            if(result.statusCode === 200) {
                setUser(result.data)
                localStorage.setItem("user", JSON.stringify(result.data));
                console.log("Success! You are logged in", result);
                navigate(`/profile/${result.data._id}`)
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
                        <h1>LOGIN</h1>
                        </header>
                    </span>
                        <div className="form-container">
                            <form action="#" onSubmit={handleLoginSubmit}>
                                <div className="form-fields">
                                    <span className="label-input-container">
                                        <label htmlFor="username">Email Address</label>
                                        <input type="text" name="username" id="username" placeholder="Email" value={login.username} onChange={handleInputChange}required/>
                                    </span>
                                    <span className="label-input-container">
                                        <label htmlFor="password">Password: </label>
                                        <input type="text" name="password" id="password" placeholder="Password" value={login.password} onChange={handleInputChange} required/>
                                    </span>
                                    <span className="enter-button">
                                        <br/>
                                        <button className="enter-button yellow-button">LOGIN</button>
                                    </span>
                                </div>
                            </form>
                        </div>
                    <br/>
                </div>
            </div>
      </main>
    )
  }

export default Login;