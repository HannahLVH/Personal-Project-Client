import React, {useState} from "react";

const CreateAccount = () => {
    const [signUp, setSignUp] = useState({});

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setSignUp((prevSetSignUp) => ({...prevSetSignUp, [name]: value}))
    }

    const handleSignUpSubmit = (e) => {
        e.preventDefault();
        console.log("Method running successfully")
        console.log(signUp)
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
            </div>
            <div className="form-container">
                <form action="#" onSubmit={handleSignUpSubmit}>
                    <div className="form-fields">
                        <label htmlFor="role">Sign up as:</label>
                        <select className="manage-pp-select" name="manage-pp-options" id="manage-pp-options" defaultValue={"selected"} required>
                            <option value="selected">Select an option:</option>
                            <option value="teacher">Teacher</option>
                            <option value="student">Student</option>
                        </select>
                    </div>
                    <div className="form-fields">
                    <span className="label-input-container">
                        <div>
                            <label for="firstName"> First Name: </label>
                            <input type="text" name="firstName" id="firstName" placeholder="First Name"
                            value={signUp.firstName}
                            onChange={handleSignUpSubmit}
                            required />
                        </div>
                    </span>
                    <span className="label-input-container">
                    <div>
                        <label for="lastName"> Last Name: </label>
                        <input type="text" name="lastName" id="lastName" placeholder="Last Name"
                        value={signUp.lastName}
                        onChange={handleSignUpSubmit}
                        required />
                    </div>
                    </span>
                    <span className="label-input-container">
                    <div>
                        <label for="username">Email Address: </label>
                        <input type="text" name="username" id="username" placeholder="Email"
                        value={signUp.username}
                        onChange={handleSignUpSubmit}
                        required/>
                    </div>
                    </span>
                    <span className="label-input-container">
                    <div>
                        <label for="password">Password: </label>
                        <input type="text" name="password" id="password" placeholder="Password"
                        value={signUp.password}
                        onChange={handleSignUpSubmit}
                        required />
                    </div>
                    </span>
                    <span className="enter-button">
                        <br/>
                        <button className="submit-button yellow-button">Submit</button>
                    </span>
                    </div>
                </form>
            </div>
            <br/>
        </div>
      </main>
    )
  }

export default CreateAccount;