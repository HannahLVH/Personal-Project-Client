import React from "react";

const ProfileSettings = () => {
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
                        <form action="#">
                                <div className="profile-pic-section-container">
                                    <label for="profile-pic">Profile Picture:</label>
                                        <div className="profile-pic-section">
                                            <div className="profile-pic-thumbnail-container">
                                                <span className="profile-pic-thumbnail"></span>
                                                <span className="profile-pic-input"><input type="file"  name="profile-pic" id="profile-pic" accept="image/*"/></span>
                                            </div>
                                        </div>
                                </div>
                            <div className="profile-form-section">
                                <label for="username">Username:</label>
                                <input type="username" name="username" id="username" placeholder="Username" />
                                <div className="save-button">
                                <button className="cambridge-button">EDIT</button>
                                </div>
                            </div>
                            <div className="profile-form-section">
                                <label for="about-me">About Me:</label>
                                <textarea type="about-me" name="about-me" id="about-me" placeholder="About me"></textarea>
                                <span className="save-button">
                                    <button className="cambridge-button">EDIT</button>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <br/>
        </div>
      </main>
    )
  }

export default ProfileSettings;