import React from "react";

const Index = () => {
    return (
      <main>
        <div className="content-section">
            <div className="text-container-1">
                <span className="content-header">
                    <header>
                        <h1>It's Practice Time!</h1>
                    </header>
                </span>
                <div>
                    <p>Practice Time is the studio companion for your instrument practice sessions. Whether you are a music student, teacher or performing artist, Practice Time will help you plan and track your practice sessions, and provide tools to stay on task so every minute with your instrument is a minute well spent. </p>
                </div>
            </div>
            <section className="features-section">
                <div className="text-container-2">
                    <h2>With Practice Plan you can:</h2>
                    <ul>
                    <li><p>Plan and create instrument practice routines with an organized and flexible layout.</p></li>
                    <li><p>Write different practice activities and annotations according to your needs.</p></li>
                    </ul>
                </div>
                <div className="planner-sample">
                    <h3>Planner Sample:</h3>
                    <img src="./images/feature-examples/feature-example-1.png" className="feature-example-img" alt="Example of Practice Plan" style={{width: "600px"}}/>
                </div>
            </section>
            <br/>
        </div>
      </main>
    )
  }

export default Index;