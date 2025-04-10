import React, { useEffect, useState } from "react";
import "./pageCss/events.css"
import axios from "axios";
import Loading from "../component/loading";

const Events =() =>{
    const [groupData, setGroupData] = useState([])


    useEffect(()=>{
        try {
            const fetchData =async() =>{
                const response =await axios.get("https://meetup-backend-8rsw.onrender.com/groups")
                const authData = JSON.parse(localStorage.getItem('authData'));
               
                const userId =authData.userId
                const groups = response.data.Groups ;
                const groupDataByOrgainizer = groups.filter((ele)=>ele.organizer._id ===userId);
                setGroupData(groupDataByOrgainizer)
                
            }
            
            fetchData()
        } catch (error) {
            console.log("there has been an error while fethching event data")
        }
    },[])


    if (groupData.length ===0){
        return(
            <>
              <Loading/>
            </>
        )
    }

    

    return(
        
        <div className="events">
            <div className="events-child">
                {groupData.map((group)=>(
                    <div key={group._id} className="event-card">

                        <h3>Orgainized By : <span>{group.name}</span></h3>
                        <div className="event-card-part-1">
                            <p>Events</p>
                            {group.events.length ===0 ? <p>No Any Events</p>:group.events.map((event) => (
                                <div className="event-card-part-1-child" key={event._id}>
                                    <p>{event.title}</p>
                                    <p>{event.description}</p>
                                    <p>Date:{event.date.slice(0,10)}</p>
                                    <p>{event.location}</p>

                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Events ;