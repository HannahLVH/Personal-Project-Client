import React, {useState, useEffect} from "react";
// import planData from "../data/planData";
import {useParams} from "react-router-dom";

const PlanList = () => {
    const {userId} = useParams();

    const [plans, setPlans] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    
    useEffect (() => {
        // setPlans(planData);
        fetch(`http://localhost:8080/user/plans/${userId}`, {
            method: "GET",
        })
        .then((response) => response.json())
        .then((result) => {
            if(result.statusCode ===200)
            {
                // console.log(result)
                setPlans(result.data)
            } else {
                throw new Error(result.error.message)
            }
        })
        .catch((error) => setErrorMessage("Error", error))
}, [userId])

console.log("Error:", errorMessage)

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
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {plans.map((plan) =>
                                <tr key={plan.id}>
                                    <td>{plan.title}</td>
                                    <td>{plan.createdOn}</td>
                                    <td>{plan.createdBy.username}</td>
                                    <td>
                                        <button><a href={`/plan/${plan._id}`}>View</a></button>
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