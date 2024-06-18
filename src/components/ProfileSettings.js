import React, {useEffect,useState } from "react";
import userData from "../data/userData";

const ProfileSettings = () => {
    const id = "6648dba36cf94ff0c2d6ee85";
    const [user, setUser] = useState({})

    useEffect(() => {
        const findUser = userData.find((user) => user._id === id);
        setUser(findUser);
    }, [id])

    const handleSettingsSubmit = (e) => {
        const {name, value} = e.target;
        setUser((prevUser) => ({...prevUser, [name]: value}));
        console.log("Method running successfully")
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
                <form action="#" onSubmit={handleSettingsSubmit}>
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
                    <label htmlFor="username">Username:</label>
                    <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder={user.username} 
                    />
                    <div className="save-button">
                    {/* <button className="cambridge-button">EDIT</button> */}
                    </div>
                </div>
                <div>
                    <span>Role: {user.role}</span>
                    <br/>
                    <span>*Role cannot be changed </span>
                </div>
                <div className="profile-form-section">
                    <label htmlFor="about-me">About Me:</label>
                    <textarea
                    type="text"
                    name="about-me"
                    id="about-me"
                    placeholder={user.about}
                    ></textarea>
                    <span className="save-button">
                    <br/>
                    <button className="cambridge-button">SAVE</button>
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

export default ProfileSettings;
