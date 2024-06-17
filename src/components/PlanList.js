import React, {useState, useEffect} from "react";
import planData from "../data/planData";

const PlanList = () => {
    const [plans, setPlans] = useState([]);

    useEffect (() => {
        setPlans(planData);
    }, [])

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
                                    <th>DATE CREATED</th>
                                    <th>CREATED BY</th>
                                    <th>MANAGE</th>
                                </tr>
                            </thead>
                            <tbody>
                                {plans.map((plan) =>
                                <tr key={plan.id}>
                                    <td>{plan.createdOn}</td>
                                    <td>{plan.createdBy.username}</td>
                                    <td>
                                        <select className="manage-pp-select" name="manage-pp-options" id="manage-pp-options">
                                            <option selected>Select an option:</option>
                                            <option value="completed-value">Completed</option>
                                            <option value="pending-value">Pending</option>
                                            <option value="assign-to-value">Assign to student</option>
                                            <option value="duplicate-value">Duplicate value</option>
                                            <option value="edit-value">Edit</option>
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

export default PlanList;