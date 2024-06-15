import React from "react";

const CreatePlan = () => {
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
                        <form action="#">
                                <div>
                                    <div className="pp-section">
                                        <div className="pp-label-input-container">
                                            <label className="pp-tools">Activity #1:</label>
                                            <textarea className="pp-textarea" id="pp-activity-text" name="pp-activity-text" placeholder="Example: Warm ups / Scales"></textarea>
                                        </div>  
                                        <div className="pp-label-input-container">
                                            <label className="pp-notes">Annotations:</label>
                                            <textarea className="pp-textarea" id="pp-annotations-text" name="pp-annotations-text" placeholder="What should be the focus of this activity?"></textarea>
                                        </div>  
                                    </div>
                                </div>
                                <div>
                                    <div className="pp-section">
                                        <div className="pp-label-input-container">
                                            <label className="pp-tools">Activity #2:</label>
                                            <textarea className="pp-textarea" id="pp-activity-text" name="pp-activity-text" placeholder="Example: Exercises / Etudes"></textarea>
                                        </div>  
                                        <div className="pp-label-input-container">
                                            <label className="pp-notes">Annotations:</label>
                                            <textarea className="pp-textarea" id="pp-annotations-text" name="pp-annotations-text" placeholder="What should be the focus of this activity?"></textarea>
                                        </div>  
                                    </div>
                                </div>
                                <div className="pp-section">
                                    <div className="pp-label-input-container">
                                        <label className="pp-tools">Activity #3:</label>
                                        <textarea className="pp-textarea" id="pp-activity-text" name="pp-activity-text" placeholder="Example: Warm ups / Scales"></textarea>
                                    </div>  
                                    <div className="pp-label-input-container">
                                        <label className="pp-notes">Annotations:</label>
                                        <textarea className="pp-textarea" id="pp-annotations-text" name="pp-annotations-text" placeholder="What should be the focus of this activity?"></textarea>
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