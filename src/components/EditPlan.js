import React, { useEffect, useState } from "react";
// import planData from "../data/planData";
import { useParams, useNavigate } from "react-router-dom";

const EditPlan = () => {
    const navigate = useNavigate();
    const {planId} = useParams();
    const [plan, setPlan] = useState({
        title: "",
        activity: "",
        practiceNotes: "",
    })
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        // const findPlan = planData.find((plan) => plan._planId === _planId);
        // setPlan(findPlan);
        fetch(`http://localhost:8080/user/plan/${planId}`, {
            method: "GET",
            headers: {"Content-Type": "application/json"},
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
        .catch((error) => setErrorMessage("Error", error))
    }, [planId])

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setPlan((prevEditPlan) => ({...prevEditPlan, [name]: value}))
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const body = {
            title: e.target.title.value,
            activity: e.target.activity.value,
            practiceNotes: e.target.practiceNotes.value,    
        }
        
        console.log("Method running successfully", plan);

        fetch(`http://localhost:8080/user/edit-plan/${planId}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify(body),
        })
        .then((response) => response.json())
        .then((result) => {
            if(result.statusCode === 201) {
                console.log("Success! The practice plan was updated successfully", result)
                setPlan(result.data)
                navigate(`/plan/${planId}`)
            } else {
                throw new Error (result.error.message)
            }
        })
        .catch((error) => setErrorMessage("Error", error, errorMessage));
    }
    
    console.log(plan);

    return (
        <main>
            <div className="content-section">
            <div className="text-container-1">
                <span className="content-header">
                    <header>
                        <h1>Edit Plan</h1>
                    </header>
                </span>
                <div className="new-pp-form-container">
                    <div className="new-pp-form-fields">
                        <form action="#" onSubmit={handleFormSubmit}>
                                <div>
                                    <div className="pp-section">
                                    <div className="pp-label-input-container">
                                            <label className="pp-tools" htmlFor="title">Title:</label>
                                            <textarea className="pp-textarea" id="title" name="title" value={plan.title} onChange={handleInputChange} required></textarea>
                                        </div>
                                        <div className="pp-label-input-container">
                                            <label className="pp-tools" htmlFor="activity">Activity #1:</label>
                                            <textarea className="pp-textarea" id="activity" name="activity" value={plan.activity} onChange={handleInputChange} required></textarea>
                                        </div>  
                                        <div className="pp-label-input-container">
                                            <label className="pp-notes" htmlFor="practiceNotes">Practice Notes:</label>
                                            <textarea className="pp-textarea" id="practiceNotes" name="practiceNotes" value={plan.practiceNotes} onChange={handleInputChange} required></textarea>
                                        </div>  
                                    </div>
                                </div>
                                <div className="pp-buttons">
                                    {/* <div className="add-section-button">
                                        <button className="cambridge-button">ADD SECTION +</button>
                                    </div>             */}
                                    <div className="save-button">
                                        <button className="cambridge-button" type="submit">SAVE</button>
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
}

export default EditPlan