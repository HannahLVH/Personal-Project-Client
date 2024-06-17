import React, { useEffect, useState } from "react";
import planData from "../data/planData";

const EditPlan = () => {
    const id = "1";
    const [editPlan, setEditPlan] = useState({})

    useEffect(() => {
        const findPlan = planData.find((plan) => plan.id === id);
        setEditPlan(findPlan);
    }, [id])

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setEditPlan((prevEditPlan) => ({...prevEditPlan, [name]: value}))
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("Method running successfully")
    }

    console.log(editPlan)

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
                                            <textarea className="pp-textarea" id="title" name="title" value={editPlan.title} onChange={handleInputChange} required></textarea>
                                        </div>
                                        <div className="pp-label-input-container">
                                            <label className="pp-tools" htmlFor="activity">Activity #1:</label>
                                            <textarea className="pp-textarea" id="activity" name="activity" value={editPlan.activity} onChange={handleInputChange} required></textarea>
                                        </div>  
                                        <div className="pp-label-input-container">
                                            <label className="pp-notes" htmlFor="practiceNotes">Practice Notes:</label>
                                            <textarea className="pp-textarea" id="practiceNotes" name="practiceNotes" value={editPlan.practiceNotes} onChange={handleInputChange} required></textarea>
                                        </div>  
                                    </div>
                                </div>
                                <div className="pp-buttons">
                                    <div className="add-section-button">
                                        <button className="cambridge-button">ADD SECTION +</button>
                                    </div>            
                                    <div className="save-button">
                                        <button className="cambridge-button">SAVE</button>
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