import React, {useEffect, useState} from "react";
// import planData from "../data/planData";
import { useParams, useNavigate } from "react-router-dom";

const Plan = () => {
    // const _planId = "1";
    const navigate = useNavigate();
    const {planId} = useParams();
    const [plan, setPlan] = useState({});
    // const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        fetch(`http://localhost:8080/user/plan/${planId}`, {
            method: "GET",
        })
        .then((response) => response.json())
        .then((result) => {
            if(result.statusCode === 200)
            {
                console.log(result)
                setPlan(result.data)
            } else {
                throw new Error(result.error.message)
            }
        })
        .catch((error) => console.log ("Error", error))
        
    }, [planId])

    // console.log(errorMessage)

    console.log(planId)
    return (
        <main>
            <div className="content-section">
            <div className="text-container-1">
                <span className="content-header">
                    <header>
                        <h1>Plan</h1>
                    </header>
                </span>
                <div className="new-pp-form-container">
                    <div className="new-pp-form-fields">
                        {/* <form action="#"> */}
                                <div>
                                    <div className="pp-section">
                                        <div className="pp-label-input-container">
                                            <span className="pp-tools" htmlFor="activity">Title:</span>
                                            <p className="pp-textarea">{plan.title}</p>
                                        </div> 
                                        <div className="pp-label-input-container">
                                            <span className="pp-tools" htmlFor="activity">Activity:</span>
                                            <p className="pp-textarea">{plan.activity}</p>
                                        </div>  
                                        <div className="pp-label-input-container">
                                            <span className="pp-tools" htmlFor="activity">Practice Notes:</span>
                                            <p className="pp-textarea">{plan.practiceNotes}</p>
                                        </div>  
                                        <div className="pp-label-input-container">
                                            <span className="pp-tools" htmlFor="createdBy">Created by:</span>
                                            <span className="pp-textarea">{plan.createdBy ? plan.createdBy.username : "Unknown"}</span>
                                        </div>  
                                    </div>
                                </div>
                                <div className="pp-buttons">            
                                    <div className="save-button">
                                        <button className="cambridge-button" onClick={() => navigate(`/edit-plan/${planId}`)}>EDIT PLAN</button>
                                    </div>
                                </div>
                        {/* </form> */}
                    </div>
                </div>
            </div>
        <br/>
        </div>
        </main>
    )
};

export default Plan
