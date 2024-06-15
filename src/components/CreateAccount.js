import React from "react";

const CreateAccount = () => {
    return (
      <main>
        <div className="content-section">
            <div className="text-container-1">
                <span className="content-header">
                    <header>
                        <h1>CREATE ACCOUNT</h1>
                    </header>
                </span>
                <div>
                    <h2>Who are you?</h2>
                    <span className="create-account-buttons">
                        <button>Teacher</button>
                        <button>Student</button>
                        <button>Musician</button>
                    </span>
                </div>
            </div>
        <br/>
    </div>
      </main>
    )
  }

export default CreateAccount;