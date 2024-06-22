import React, {useEffect, useState} from "react";
import "../components/mediaQueries.css";
import { useParams, useNavigate } from "react-router-dom";


const CreatePlan = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({})
    const {userId} = useParams();
    // const {planId} = useParams();
    const [students, setStudents] = useState([]);
    const [createPlan, setCreatePlan] = useState({
        createdBy: userId, 
        assignedTo: "", 
        title: "",
        activity: "",
        practiceNotes: ""
    });
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        fetch(`http://localhost:8080/user/profile/${userId}`)
            .then(response => response.json())
            .then(result => {
                if (result.statusCode === 200) {
                    setUser(result.data);
                } else {
                    throw new Error(result.error.message);
                }
            })
            .catch(error => console.error("Error", error));
    }, [userId]);

    useEffect(() => {
        fetch(`http://localhost:8080/user/student-roster`, {
        method: "GET",
        })
        .then((response) => response.json())
        .then((result) => {
            if(result.statusCode === 200)
            {
                console.log(result)
                setStudents(result.data)
            } else {
                throw new Error(result.error.message)
            }
        })
        .catch((error) => console.log("Error", error))
    }, [])

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setCreatePlan((prevCreatePlan) => ({...prevCreatePlan, [name]: value}))
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("Method running successfully", createPlan)
        const body = {
            createdBy: userId,
            assignedTo: e.target.assignedTo.value,
            title: e.target.title.value,
            activity: e.target.activity.value,
            practiceNotes: e.target.practiceNotes.value,    
        }

        console.log(body);
        
        fetch(`http://localhost:8080/user/create-plan/${userId}`, {
            method: "POST",
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify(body),
        })
        .then((response) => response.json())
        .then((result) => {
            if(result.statusCode === 200) {
                console.log("Success! The practice plan was created successfully", result)
                setCreatePlan(result.data)
                console.log(result.data._id)
                navigate(`/plan/${result.data._id}`)
            } else {
                throw new Error (result.error.message)
            }
        })
        .catch((error) => setErrorMessage("Error", error, errorMessage))
    }

    console.log(createPlan)

    return (
      <main>
        <div className="content-section">
            <div className="text-container-1">
                <span className="content-header">
                    <header>
                        <h1>Create New Plan</h1>
                    </header>
                </span>
                <div className="new-pp-form-container">
                    <div className="new-pp-form-fields">
                        <form action="#" onSubmit={handleFormSubmit}>
                                <div>
                                    <div className="pp-section">
                                    <div className="pp-label-input-container">
                                            <label className="pp-tools" htmlFor="title">Title:</label>
                                            <textarea className="pp-textarea" id="title" name="title" placeholder="Example: Practice Plan for Audition" value={createPlan.title} onChange={handleInputChange} required></textarea>
                                        </div>
                                        <div className="pp-label-input-container">
                                            <label className="pp-tools" htmlFor="activity">Activity:</label>
                                            <textarea className="pp-textarea" id="activity" name="activity" placeholder="Example: Warm ups / Scales" value={createPlan.activity} onChange={handleInputChange} required></textarea>
                                        </div>  
                                        <div className="pp-label-input-container">
                                            <label className="pp-tools" htmlFor="practiceNotes">Practice Notes:</label>
                                            <textarea className="pp-textarea" id="practiceNotes" name="practiceNotes" placeholder="What should be the focus of this activity?" value={createPlan.practiceNotes} onChange={handleInputChange} required></textarea>
                                        </div>
                                        <div className="pp-label-input-container">
                                            <label className="pp-tools" htmlFor="assignedTo">Assign to:</label>
                                          
                                            <select className="pp-textarea" id="assignedTo" name="assignedTo" placeholder="What should be the focus of this activity?" defaultValue="select" onChange={handleInputChange} required>
                                                <option value="select" disabled>Select Student:</option>
                                            {students.map((student)=>
                                                <option key={student._id} value={student._id}>{student.firstName} {student.lastName}</option>
                                                )}
                                            </select>
                                            
                                        </div>  
                                        <div className="pp-label-input-container"><p className="pp-textarea">Created by: {user.username}</p></div>
                                    </div>
                                </div>
                                <div className="pp-buttons">
                                    <div className="add-section-button">
                                        <button className="cambridge-button">ADD SECTION +</button>
                                    </div>            
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

export default CreatePlan;