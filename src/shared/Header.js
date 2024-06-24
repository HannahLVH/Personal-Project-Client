import React, { useState} from "react";
import {useNavigate, Link} from "react-router-dom";
// import userData from "../data/userData";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import "./Header.css"
import "../components/mediaQueries.css"



const Header = ({user, setUser}) => {
  const navigate = useNavigate();
//   const user._id = "6648dba36cf94ff0c2d6ee85";
  const [dropdown, setDropdown] = useState(false);

    // useEffect(() => {
    //     const findUser = userData.find((user) => user._id === user._id);
    //     setUser(findUser);
    // }, [setUser]);

  

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
};

const toggleDropdown = () => {
    setDropdown(!dropdown);
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
                        
                        {user?.username ? (
                        <>
                        <li className="nav-horizontal-menu"><Link to={`/plans/${user._id}`}>MY PLANS</Link></li>
                        <li className="nav-horizontal-menu"><Link to={`/create-plan/${user._id}`}>NEW PLAN</Link></li>
                        <li className="nav-horizontal-menu"><Link to={`/student-roster`}>STUDENT ROSTER</Link></li>
                        <li className="nav-horizontal-menu"><Link to={`/profile/${user._id}`}>PROFILE</Link></li>
                        <li className="nav-horizontal-menu"><Link to="/" onClick={handleLogout}>LOGOUT</Link></li>
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
                {/* <i class="fa-solid fa-bars" style="color: #F4F1DE;"></i>*/}
                <FontAwesomeIcon icon={faBars} onClick={toggleDropdown}></FontAwesomeIcon>
                {dropdown && (
                <ul className={`hamburger-dropdown ${dropdown ? 'open' : ''}`}>
                     <li><Link to="/">HOME</Link></li>
                        {user?.username ? (
                            <>
                                <li><Link to={`/plans/${user._id}`}>MY PLANS</Link></li>
                                <li><Link to={`/create-plan/${user._id}`}>NEW PLAN</Link></li>
                                <li><Link to={`/student-roster`}>STUDENT ROSTER</Link></li>
                                <li><Link to={`/profile/${user._id}`}>PROFILE</Link></li>
                                <li><Link to="/" onClick={handleLogout}>LOGOUT</Link></li>
                            </>
                        ) : (
                            <>
                                <li><Link to="/signup">CREATE ACCOUNT</Link></li>
                                <li><Link to="/login">LOGIN</Link></li>
                            </>
                        )}
                </ul>
                )}
            </div>
            </nav>
        </div>
      </main>
    )
  }

export default Header;