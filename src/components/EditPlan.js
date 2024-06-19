import React, { useEffect, useState } from "react";
// import planData from "../data/planData";
import { useParams } from "react-router-dom";

const EditPlan = () => {
    // const _id = "1";
    const {id} = useParams();
    const [editPlan, setEditPlan] = useState({
            title: "",
            activity: "",
            practiceNotes: "",
    })
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        // const findPlan = planData.find((plan) => plan._id === _id);
        // setEditPlan(findPlan);
        fetch(`http://localhost:8080/user/plan/${id}`, {
            method: "GET",
            headers: {"Content-Type": "application/json"},
        })
        .then((response) => response.json())
        .then((result) => {
            if(result.statusCode === 200)
            {
                console.log(result)
                setEditPlan(result.data)
            } else {
                throw new Error(result.error.message)
            }
        })
        .catch((error) => setErrorMessage("Error", error))
    }, [id])

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setEditPlan((prevEditPlan) => ({...prevEditPlan, [name]: value}))
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const body = {
            title: e.target.title.value,
            activity: e.target.activity.value,
            practiceNotes: e.target.practiceNotes.value,    
        }
        
        console.log("Method running successfully", editPlan);

        fetch(`http://localhost:8080/user/edit-plan/${id}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify(body),
        })
        .then((response) => response.json())
        .then((result) => {
            if(result.statusCode === 200) {
                console.log("Success! Book updated", result)
                setEditPlan(result.data)
                // navigate("/admin")
            } else {
                throw new Error (result.error.message)
            }
        })
        .catch((error) => setErrorMessage("Error", error));
        console.log(errorMessage)
    }
    
    console.log(id);

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