import React from "react";

const Login = () => {
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
                            <form action="#">
                                <div className="form-fields">
                                    <span className="label-input-container">
                                        <label htmlFor="username">Email Address: </label>
                                        <input type="username" name="username" id="username" placeholder="Email"/>
                                    </span>
                                    <span className="label-input-container">
                                        <label htmlFor="password">Password: </label>
                                        <input type="password" name="password" id="password" placeholder="Password" />
                                    </span>
                                    <span className="enter-button">
                                        <br/>
                                        <button className="enter-button yellow-button">Enter</button>
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