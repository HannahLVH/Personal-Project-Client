import React, {useState, useEffect} from "react";
// import planData from "../data/planData";
import {useParams} from "react-router-dom";

const StudentPlans = () => {
    const {userId} = useParams();
    const [studentPlans, setStudentPlans] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect (() => {
        // setPlans(planData);
        fetch(`http://localhost:8080/user/student/${userId}`, {
            method: "GET",
        })
        .then((response) => response.json())
        .then((result) => {
            
            if(result.statusCode ===200)
            {
                console.log(result)
                setStudentPlans(result.data)
            } else {
                throw new Error(result.error.message)
            }
        })
        .catch((error) => setErrorMessage("Error", error))
}, [userId])

console.log("Error:", errorMessage)
console.log("Id:", userId)
console.log(studentPlans)

    return (
      <main>
        <div className="content-section">
            <div className="text-container-1">
                <span className="content-header">
                    <header className="table-header">
                        <h1>My Practice Plans</h1>
                    </header>
                </span>
                <div className="table-container">
                    <div className="table-wrapper">
                        <table className="manage-table">
                            <thead>
                                <tr>
                                    <th>TITLE</th>
                                    <th>DATE CREATED</th>
                                    <th>CREATED BY</th>
                                    <th>MANAGE</th>
                                </tr>
                            </thead>
                            <tbody>
                                {studentPlans.map((plan) =>
                                <tr key={plan.id}>
                                    
                                    <td>{plan.title}</td>
                                    <td>{plan.createdOn}</td>
                                    <td>{plan.createdBy.username}</td>
                                    <td>
                                        <select className="manage-pp-select" name="manage-pp-options" id="manage-pp-options" defaultValue={"selected"}>
                                            <option value="selected">Select an option:</option>
                                            <option value="completed-value">Completed</option>
                                            <option value="pending-value">Pending</option>
                                            {/* <option value="assign-to-value">Assign to student</option> */}
                                            {/* <option value="duplicate-value">Duplicate value</option> */}
                                            {/* <option value="edit-value">Edit</option> */}
                                            <option value="archive-value">Archive</option>
                                        </select>
                                    </td>
                                </tr>
                                )}
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

export default StudentPlans;