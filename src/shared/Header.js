import React, {useEffect} from "react";
import {useNavigate, Link} from "react-router-dom";
import userData from "../data/userData";
import "./Header.css"
import "../components/mediaQueries.css"



const Header = ({user, setUser}) => {
  const navigate = useNavigate();
  const userId = "6648dba36cf94ff0c2d6ee85";

    useEffect(() => {
        const findUser = userData.find((user) => user._id === userId);
        setUser(findUser);
    }, [setUser]);

  

  const handleLogout = (e) => {
    fetch("http://localhost:8080/logout", {
        method: "GET",
        headers: {"Content-Type": "application/json",
        },
    })
        .then((response) => response.json())
        .then((result) => {
            if(result.statusCode === 200) {
                setUser({});
                localStorage.removeItem("user");
                console.log("You logged out successfully!")
                navigate("/");
            } else {
                throw new Error (result.error.message);
                
            }
        })
        .catch((error) => console.log("Error", error)); 
        navigate("/");
}

    return (
      <main>
        <div className="nav-section">
            <nav className="nav-container">
                <span className="nav-logo-background">
                <Link to="/"><img src="/images/Practice-Time-Logo.png" alt="practice time logo: a black letter 'p' over a black letter 't'" className="nav-logo-img" style={{width: "180px"}}/></Link>
                </span>
                <div className="nav-menu-container">
                    <ul className="nav-menu-list nav-link-styling">
                        <li className="nav-horizontal-menu"><Link to="/">HOME</Link></li>
                        
                        {user.username ? (
                        <>
                        <li className="nav-horizontal-menu"><Link to={`/plans/${userId}`}>MY PLANS</Link></li>
                        <li className="nav-horizontal-menu"><Link to="/create-plan">NEW PLAN</Link></li>
                        <li className="nav-horizontal-menu"><Link to={`/profile/${userId}`}>PROFILE</Link></li>
                        <li className="nav-horizontal-menu"><a href="#" onClick={handleLogout}>LOGOUT</a></li>
                        </>
                        ) : (
                        <>
                        <li className="nav-horizontal-menu"><Link to="/signup">CREATE ACCOUNT</Link></li> 
                        <li className="nav-horizontal-menu"><Link to="/login">LOGIN</Link></li>
                        </>
                        )}
                    </ul>
                </div>
                <div className="hamburger-menu">
                    <i className="fa-solid fa-bars" style={{color: "#ffffff"}}></i> 
                </div>
            </nav>
        </div>
      </main>
    )
  }

export default Header;