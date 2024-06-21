import React, {useEffect,useState } from "react";
// import userData from "../data/userData"
import {useParams, useNavigate} from "react-router-dom";

const Profile = () => {
    // const id = "6648dba36cf94ff0c2d6ee85";
    const navigate = useNavigate();
    const {userId} = useParams();
    const [user, setUser] = useState({})

    useEffect(() => {
        // const findUser = userData.find((user) => user._id === id);
        // setUser(findUser);
        fetch(`http://localhost:8080/user/profile/${userId}`,{
            method: "GET",
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
        .catch((error) => console.log ("Error", error))
        
    }, [userId])

    // console.log(user)
    console.log(userId)

    return (
    <main>
        <div className="content-section">
        <div className="text-container-1">
            <span className="content-header">
            <header>
                <h1>My Profile</h1>
            </header>
            </span>
            <div className="profile-form-container">
            <div className="profile-form-fields">
                <div className="profile-form-section">
                    <span className="profile-label"> Name:</span>
                    <span>{user.firstName} {user.lastName} </span>
                </div>
                <div className="profile-form-section">
                    <span className="profile-label"> Username:</span>
                    <span>{user.username}</span>
                </div>
                <div className="profile-form-section">
                    <span className="profile-label">Role:</span>
                    <span>{user.role}</span>
                </div>
                <div className="profile-form-section">
                    <span className="profile-label"> About me: </span>
                    <span >{user.about}</span>
                </div>
                <div className="profile-form-section">
                    <span className="save-button">
                    <br/>
                    <button className="cambridge-button" onClick={() => navigate(`/edit-profile/${userId}`)}>EDIT PROFILE</button>
                    </span>
                </div>
            </div>
            </div>
        </div>
        <br />
        </div>
    </main>
    );
};

export default Profile;
