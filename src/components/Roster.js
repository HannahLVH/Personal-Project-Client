import React, { useState, useEffect } from "react";
// import studentData from "../data/studentData";
// import {useParams} from "react-router-dom";

const Roster = () => {
    // const {studentRole} = useParams();

    const [roster, setRoster] = useState([]);

    useEffect (() => {
        fetch(`http://localhost:8080/user/student-roster`, {
        method: "GET",
        })
        .then((response) => response.json())
        .then((result) => {
            if(result.statusCode === 200)
            {
                // console.log(result)
                setRoster(result.data)
            } else {
                throw new Error(result.error.message)
            }
        })
        .catch((error) =>console.log("Error", error))
    }, [])

        
    return (
      <main>
            <div className="content-section">
        <div className="text-container-1">
                <span className="content-header">
                    <header className="table-header">
                        <h1>Student Roster</h1>
                    </header>
                </span>
            <div className="table-container">
                <div className="table-wrapper">
                    <table className="manage-table">
                        <thead>
                            <tr>
                                <th>STUDENT NAME</th>
                                {/* <th></th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {roster.map((student) => 
                            <tr key={student._id}>
                                <td>{student.firstName} {student.lastName}</td>
                                {/* <td className="plans-buttons">
                                    <button className="cambridge-button"><a href={`/profile/:userId`}>View Profile</a></button>
                                </td> */}
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

export default Roster;