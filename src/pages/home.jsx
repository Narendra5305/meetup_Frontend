import React, { useEffect, useState } from "react";
import "./pageCss/home.css"
import axios from "axios";
import Calendar from "../component/calender"
import Loading from "../component/loading";
import { useNavigate } from "react-router-dom";



const Home =() =>{

    const [groups,setGroup] = useState([])
    const [events,setEvent] = useState([])

    const navigate = useNavigate();
    

    useEffect(()=>{
        try {
            const fetchData = async() =>{
                const response =await axios.get("https://meetup-backend-8rsw.onrender.com/groups/")
                const responseEvent =await axios.get("https://meetup-backend-8rsw.onrender.com/events/")
                setGroup(response.data.Groups)
                setEvent(responseEvent.data.eventData)
            }
            fetchData()
        } catch (error) {
            console.log("there has been an error", error)
        }
    },[])

    if (events.length===0 && groups.length===0){
        return(
            <>
                <Loading/>
            </>
        )
    }

    

    return(
       <div id="home">
            <div className="home-child">
                <div className="home-child-1">
                    <div>
                        <Calendar/>
                    </div>

                    <div className="home-child-1-child-new-part">

                        <div className="home-child-1-child-new-part-child-1">
                            
                            <h2>Your next events</h2>
                            <a onClick={()=> navigate('/events')} >View All</a>
                            
                        </div>

                        <div className="home-child-1-child-new-part-child-2">
                            <img src="https://secure.meetupstatic.com/next/images/icons/rsvp-ticket.svg?w=32" alt="ticket logo" />
                            <p>You have not registered for any events</p>
                            <p>Events you have registered for will appear here.</p>
                        </div>

                        <div className="home-child-1-child-new-part-child-3">
                            <h2>Find your people with Meetup+</h2>
                            <img src="https://secure.meetupstatic.com/next/images/member-profile/avatars-mobile.webp?w=64" alt="member image" />
                            <button>Start your 7-day free trial</button>
                        </div>

                        <div className="home-child-1-child">
                            <div className="home-child-1-child-1">
                                <h3>Your groups</h3>
                            </div>
                            <div className="home-child-1-child-2">
                                <a onClick={()=> navigate('/group')}>See all your groups</a>
                            </div>
                        </div>

                        <div  className="home-child-1-child-2">
                            {groups.map((group=>(
                                <div onClick={()=>navigate(`/groupDetails/${group._id}`)} key={group._id} className="group-cards-home">
                                    <div className="group-cards-home-img"><img src={group.image} alt="group image" /></div>
                                    <div className="group-cards-home-title"><h3>{group.name}</h3></div>
                                </div>
                            )))}

                        </div>

                    </div>


                </div>

                <div className="home-child-2">
                    <div className="home-child-2-child">
                        <div className="home-child-2-child-1">
                            <h3>Events</h3>
                        </div>

                        <div className="home-child-2-child-2">
                            {events.map((event)=>(
                                <div key={event._id} className="home-event-cards">
                                    <div className="home-event-cards-1">
                                        <img src={event.group.image} alt="event group image" />
                                    </div>
                                    <div className="home-event-cards-2">
                                        <h1>{event.title}</h1>
                                        <p>{event.description}</p>
                                        <p>{event.location}</p>
                                        <p>Date:{event.date.slice(0,10)}</p>
                                        <a onClick={()=>navigate(`/groupDetails/${event.group._id}`)} className="home-event-cards-2-go" href=""><img src="https://www.svgrepo.com/show/347781/link-external.svg" alt="link go" /></a>
                                        <a className="home-event-cards-2-bookmark" href=""><img src="https://www.svgrepo.com/show/347682/bookmark.svg" alt="bookmark go" /></a>
                                    </div>
                                    
                                    
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
       </div>
    )
}

export default Home ;