import React from "react";
import studentData from "../data/userData";
import userData from "../data/userData";

const Roster = () => {
    return (
      <main>
            <div className="content-section">
        <div className="text-container-1">
                <span className="content-header">
                    <header className="table-header">
                        <h1>Student Roster</h1>
                    </header>
                </span>
            <div className="table-container">
                <div className="table-wrapper">
                    <table className="manage-table">
                        <thead>
                            <tr>
                                <th>STUDENT NAME</th>
                                {/* <th>DATE ADDED</th> */}
                                <th>MANAGE STUDENT</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userData.map((user) => 
                            <tr>
                                <td>{user.firstName} {user.lastName}</td>
                                {/* <td>_/_/___</td> */}
                                <td>
                                    <select className="manage-pp-select" name="manage-pp-options" id="manage-pp-options">
                                        <option selected>Select an option:</option>
                                        <option value="view-profile-value">View Student Profile</option>
                                        <option value="view-plans-value">View Plans</option>
                                        <option value="create-new-pp-value">Create New Plan</option>
                                        <option value="remove-value">Remove Student</option>
                                    </select>
                                </td>
                            </tr>
                            )}
                            {/* <tr className="gray-bg">
                                <td>First Last</td>
                                <td>_/_/___</td>
                                <td>
                                    <select className="manage-pp-select" name="manage-pp-options" id="manage-pp-options">
                                        <option selected>Select an option:</option>
                                        <option value="view-profile-value">View Student Profile</option>
                                        <option value="view-plans-value">View Plans</option>
                                        <option value="create-new-pp-value">Create New Plan</option>
                                        <option value="remove-value">Remove Student</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>First Last</td>
                                <td>_/_/___</td>
                                <td>
                                    <select className="manage-pp-select" name="manage-pp-options" id="manage-pp-options">
                                        <option selected>Select an option:</option>
                                        <option value="view-profile-value">View Student Profile</option>
                                        <option value="view-plans-value">View Plans</option>
                                        <option value="create-new-pp-value">Create New Plan</option>
                                        <option value="remove-value">Remove Student</option>
                                    </select>
                                </td>
                            </tr>
                            <tr className="gray-bg">
                                <td>First Last</td>
                                <td>_/_/___</td>
                                <td>
                                    <select className="manage-pp-select" name="manage-pp-options" id="manage-pp-options">
                                        <option selected>Select an option:</option>
                                        <option value="view-profile-value">View Student Profile</option>
                                        <option value="view-plans-value">View Plans</option>
                                        <option value="create-new-pp-value">Create New Plan</option>
                                        <option value="remove-value">Remove Student</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>First Last</td>
                                <td>_/_/___</td>
                                <td>
                                    <select className="manage-pp-select" name="manage-pp-options" id="manage-pp-options">
                                        <option selected>Select an option:</option>
                                        <option value="view-profile-value">View Student Profile</option>
                                        <option value="view-plans-value">View Plans</option>
                                        <option value="create-new-pp-value">Create New Plan</option>
                                        <option value="remove-value">Remove Student</option>
                                    </select>
                                </td>
                            </tr>
                            <tr className="gray-bg">
                                <td>First Last</td>
                                <td>_/_/___</td>
                                <td>
                                    <select className="manage-pp-select" name="manage-pp-options" id="manage-pp-options">
                                        <option selected>Select an option:</option>
                                        <option value="view-profile-value">View Student Profile</option>
                                        <option value="view-plans-value">View Plans</option>
                                        <option value="create-new-pp-value">Create New Plan</option>
                                        <option value="remove-value">Remove Student</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>First Last</td>
                                <td>_/_/___</td>
                                <td>
                                    <select className="manage-pp-select" name="manage-pp-options" id="manage-pp-options">
                                        <option selected>Select an option:</option>
                                        <option value="view-profile-value">View Student Profile</option>
                                        <option value="view-plans-value">View Plans</option>
                                        <option value="create-new-pp-value">Create New Plan</option>
                                        <option value="remove-value">Remove Student</option>
                                    </select>
                                </td>
                            </tr>
                            <tr className="gray-bg">
                                <td>First Last</td>
                                <td>_/_/___</td>
                                <td>
                                    <select className="manage-pp-select" name="manage-pp-options" id="manage-pp-options">
                                        <option selected>Select an option:</option>
                                        <option value="view-profile-value">View Student Profile</option>
                                        <option value="view-plans-value">View Plans</option>
                                        <option value="create-new-pp-value">Create New Plan</option>
                                        <option value="remove-value">Remove Student</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>First Last</td>
                                <td>_/_/___</td>
                                <td>
                                    <select className="manage-pp-select" name="manage-pp-options" id="manage-pp-options">
                                        <option selected>Select an option:</option>
                                        <option value="view-profile-value">View Student Profile</option>
                                        <option value="view-plans-value">View Plans</option>
                                        <option value="create-new-pp-value">Create New Plan</option>
                                        <option value="remove-value">Remove Student</option>
                                    </select>
                                </td>
                            </tr>
                            <tr className="gray-bg">
                                <td>First Last</td>
                                <td>_/_/___</td>
                                <td>
                                    <select className="manage-pp-select" name="manage-pp-options" id="manage-pp-options">
                                        <option selected>Select an option:</option>
                                        <option value="view-profile-value">View Student Profile</option>
                                        <option value="view-plans-value">View Plans</option>
                                        <option value="create-new-pp-value">Create New Plan</option>
                                        <option value="remove-value">Remove Student</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>First Last</td>
                                <td>_/_/___</td>
                                <td>
                                    <select className="manage-pp-select" name="manage-pp-options" id="manage-pp-options">
                                        <option selected>Select an option:</option>
                                        <option value="view-profile-value">View Student Profile</option>
                                        <option value="view-plans-value">View Plans</option>
                                        <option value="create-new-pp-value">Create New Plan</option>
                                        <option value="remove-value">Remove Student</option>
                                    </select>
                                </td>
                            </tr>
                            <tr className="gray-bg">
                                <td>First Last</td>
                                <td>_/_/___</td>
                                <td>
                                    <select className="manage-pp-select" name="manage-pp-options" id="manage-pp-options">
                                        <option selected>Select an option:</option>
                                        <option value="view-profile-value">View Student Profile</option>
                                        <option value="view-plans-value">View Plans</option>
                                        <option value="create-new-pp-value">Create New Plan</option>
                                        <option value="remove-value">Remove Student</option>
                                    </select>
                                </td>
                            </tr> */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <br/>
    </div>
      </main>
    )
  }

export default Roster;