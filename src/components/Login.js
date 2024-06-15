import React, {useState} from "react";

const Login = () => {
    const [login, setLogin] = useState({});

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const {name, value} = e.target;
        setLogin((prevSetLogin) => ({...prevSetLogin, [name]: value}));
        console.log("Method running successfully")
        console.log(login)
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
                                        <input type="text" name="username" id="username" placeholder="Email" value={login.username} onChange={handleLoginSubmit}required/>
                                    </span>
                                    <span className="label-input-container">
                                        <label htmlFor="password">Password: </label>
                                        <input type="text" name="password" id="password" placeholder="Password" value={login.password} onChange={handleLoginSubmit} required/>
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