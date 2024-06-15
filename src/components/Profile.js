import React, {useEffect,useState } from "react";
import userData from "../data/userData"

const ProfileSettings = () => {
    const id = "1";
    const [user, setUser] = useState({})

    useEffect(() => {
        const findUser = userData.find((user) => user.id === id);
        setUser(findUser);
    }, [id])

    // console.log(user)

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
                <div className="profile-pic-section-container">
                    <label htmlFor="profile-pic">Profile Picture:</label>
                    <div className="profile-pic-section">
                    <div className="profile-pic-thumbnail-container">
                        <span className="profile-pic-thumbnail"></span>
                        <span className="profile-pic-input">
                        <input
                            type="file"
                            name="profile-pic"
                            id="profile-pic"
                            accept="image/*"
                        />
                        </span>
                    </div>
                    </div>
                </div>
                <div className="profile-form-section">
                    
                    <span> Username: {user.username} </span>
                
                </div>
                <div>
                    <span>Role: {user.role}</span>
                    <br/>
                    <span>*Role cannot be changed </span>
                </div>
                <div className="profile-form-section">
                    <span> About me: {user.about}</span>
                    <span className="save-button">
                    <br/>
                    <button className="cambridge-button">EDIT PROFILE</button>
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

export default ProfileSettings;
