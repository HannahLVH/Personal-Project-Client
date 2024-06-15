import React, {useState} from "react";

const CreatePlan = () => {
    const [createPlan, setCreatePlan] = useState({
        // activity: "",
        // practiceNotes: ""
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setCreatePlan((prevCreatePlan) => ({...prevCreatePlan, [name]: value}))
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("Method running successfully")
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
                                            <label className="pp-tools" htmlFor="activity">Activity #1:</label>
                                            <textarea className="pp-textarea" id="activity" name="activity" placeholder="Example: Warm ups / Scales" value={createPlan.activity} onChange={handleInputChange} required></textarea>
                                        </div>  
                                        <div className="pp-label-input-container">
                                            <label className="pp-notes" htmlFor="practiceNotes">Practice Notes:</label>
                                            <textarea className="pp-textarea" id="practiceNotes" name="practiceNotes" placeholder="What should be the focus of this activity?" value={createPlan.practiceNotes} onChange={handleInputChange} required></textarea>
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

export default CreatePlan;