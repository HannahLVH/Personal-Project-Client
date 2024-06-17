import React, {useEffect, useState} from "react";
import planData from "../data/planData";

const Plan = () => {
    const id = "1";
    const [plan, setPlan] = useState({});

    useEffect(() => {
        const findPlan = planData.find((plan) => plan.id === id);
        setPlan(findPlan);
    }, [id])

    console.log(plan)

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
                        <form action="#">
                                <div>
                                    <div className="pp-section">
                                    <div className="pp-label-input-container">
                                            <span className="pp-tools" htmlFor="activity">Title:</span>
                                            <p className="pp-textarea">{plan.title}</p>
                                        </div> 
                                        <div className="pp-label-input-container">
                                            <span className="pp-tools" htmlFor="activity">Activity #1:</span>
                                            <p className="pp-textarea">{plan.activity}</p>
                                        </div>  
                                        <div className="pp-label-input-container">
                                            <span className="pp-tools" htmlFor="activity">Practice Notes:</span>
                                            <p className="pp-textarea">{plan.practiceNotes}</p>
                                        </div>  
                                    </div>
                                </div>
                                <div className="pp-buttons">            
                                    <div className="save-button">
                                        <button className="cambridge-button">EDIT PLAN</button>
                                    </div>
                                </div>
                        </form>
                    </div>
                </div>
            </div>
        <br/>
        </div>
        </main>
    )
};

export default Plan
