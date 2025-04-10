import React from "react";
import { useNavigate } from "react-router-dom";

import "./componentCss/navbar.css"

const Navbar =() =>{
    const navigate = useNavigate();
    return(
       <div id="navbar">
            <div className="navbar-1">
                <div onClick={()=> navigate('/')} className="navbar-1-child-1">
                    <img src="https://cdn.worldvectorlogo.com/logos/meetup-1.svg" alt="meetup logo" />
                </div>
                <div className="navbar-1-child-2">
                    <input type="Text" />
                    <input type="text" value="Kanpur , IN" />
                    <div className="navbar-1-child-2-img">
                        <img src="https://www.svgrepo.com/show/532555/search.svg" alt="search-logo" />
                    </div>
                </div>
                
            </div>
            <div className="navbar-2">
                
                <div className="navbar-2-child-1">
                    <button>Start a new group - 30%</button>
                </div>

                <div className="navbar-2-child-2">
                    <div className="navbar-2-child-2-1">
                        <p>PRO</p>
                        <p>Try for free</p>
                    </div>

                    <div className="navbar-2-child-2-2">
                        <img src="https://www.svgrepo.com/show/509193/people.svg" alt="connection img" />
                        <p>Connections</p>
                    </div>

                    <div className="navbar-2-child-2-3">
                        <img src="https://www.svgrepo.com/show/517761/messages.svg" alt="message logo" />
                        <p>Messages</p>
                    </div>

                    <div className="navbar-2-child-2-4">
                        <img src="https://www.svgrepo.com/show/522617/notification.svg" alt="notification logo" />
                        <p>Notifications</p>
                    </div>

                    
                    <div onClick={()=>navigate("/signin")} className="navbar-2-child-2-5">
                        
                        <img src="https://www.svgrepo.com/show/513224/man.svg" alt="profile image" />
                        
                    </div>

                </div>
            </div>

       </div>
    )
}

export default Navbar ;