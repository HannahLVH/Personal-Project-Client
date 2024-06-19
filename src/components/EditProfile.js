import React, {useEffect,useState } from "react";
// import userData from "../data/userData";
import {useParams, useNavigate} from "react-router-dom";

const EditProfile = () => {
    const navigate = useNavigate();
    const {userId} = useParams();
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        username: "",
        role: "",
        about: ""
    });
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        // const findUser = userData.find((user) => user._id === id);
        // setUser(findUser);
        fetch(`http://localhost:8080/user/profile/${userId}`, {
            method: "GET",
            headers: {"Content-Type": "application/json"},
        })
        .then((response) => response.json())
        .then((result) => {
            if(result.statusCode === 200)
            {
                console.log(result)
                setUser(result.data)
            } else {
                throw new Error(result.error.message)
            }
        })
        .catch((error) => setErrorMessage("Error", error))
    }, [userId])

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setUser((prevSetUser) => ({...prevSetUser, [name]: value}))
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();
        const body = {
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            username: e.target.username.value,
            about: e.target.about.value
        }

        console.log("Method running successfully", user);

        fetch(`http://localhost:8080/user/edit-profile/${userId}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body),
        })
        .then((response) => response.json())
        .then((result) => {
            console.log("Status Code", result)
            if(result.statusCode === 201) {
                console.log("Success! Your profile was updated successfully", result)
                setUser(result.data)
                navigate(`/profile/${userId}`)
            } else {
                throw new Error (result.error.message)
            }
        })
        .catch((error) => setErrorMessage("Error", error, errorMessage));
        
    }

    console.log(user)
    
    return (
    <main>
        <div className="content-section">
        <div className="text-container-1">
            <span className="content-header">
            <header>
                <h1>Edit Profile</h1>
            </header>
            </span>
            <div className="profile-form-container">
            <div className="profile-form-fields">
                <form action="#" onSubmit={handleEditSubmit}>
                <div className="profile-form-section">
                    <label htmlFor="firstName">First Name:</label>
                    <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={user.firstName} 
                    onChange={handleInputChange}
                    required
                    />
                    <div className="save-button">
                    </div>
                </div>
                <div className="profile-form-section">
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={user.lastName} 
                    onChange={handleInputChange}
                    required
                    />
                    <div className="save-button">
                    </div>
                </div>
                <div className="profile-form-section">
                    <label htmlFor="username">Username:</label>
                    <input
                    type="text"
                    name="username"
                    id="username"
                    value={user.username} 
                    onChange={handleInputChange}
                    required
                    />
                    <div className="save-button">
                    </div>
                </div>
                <div>
                    <span>Role: {user.role}</span>
                    <br/>
                    <span>*Role cannot be changed </span>
                </div>
                <div className="profile-form-section">
                    <label htmlFor="about">About Me:</label>
                    <textarea
                    type="text"
                    name="about"
                    id="about"
                    value={user.about}
                    onChange={handleInputChange}
                    ></textarea>
                    <span className="save-button">
                    <br/>
                    <button className="cambridge-button" type="submit">SAVE</button>
                    </span>
                </div>
                </form>
            </div>
            </div>
        </div>
        <br />
        </div>
    </main>
    );
};

export default EditProfile;
