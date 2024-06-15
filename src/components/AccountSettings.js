import React from "react";

const AccountSettings = () => {
    return (
      <main>
        <div className="content-section">
            <div className="text-container-1">
                <span className="content-header">
                    <header>
                        <h1>Account Settings</h1>
                    </header>
                </span>
                <div className="account-settings-menu">
                    <span className="account-settings-buttons">
                        <button>Update Email Address</button>
                        <button>Change Password</button>
                        <button>Delete Account</button>
                    </span>
                </div>
            </div>
            <br/>
        </div>
      </main>
    )
  }

export default AccountSettings;