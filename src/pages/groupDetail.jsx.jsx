import { useParams } from "react-router-dom";
import axios from "axios";
import React,{useEffect , useState} from "react";
import Loading from "../component/loading";
import "./pageCss/groupDetails.css"



const GroupDetailsPage =()=>{
    const {id} = useParams();


    const [groupData, setGroupData] = useState([])

    useEffect(()=>{
        try {
            const fetchData =async() =>{
                const response =await axios.get("https://meetup-backend-8rsw.onrender.com/groups")
                
               
               
                const groups = response.data.Groups ;

                const group = groups.filter((group)=>group._id===id)
               
                setGroupData(group[0])
                
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


    console.log(groupData)


    return(
        <div className="groupDetailPage-main-cont">
            <div className="groupDetailPage-cont">
                <div className="groupDetailPage-cont-1">
                    <img src={groupData.image} alt="" />
                    <h1>{groupData.name}</h1>
                    <p>{groupData.description}</p>
                </div>
                <div className="groupDetailPage-cont-2">
                    <h2>Orgainizer: {groupData.organizer.name}</h2>
                    <p>Verified Orgainizer : {groupData.organizer.isVerified ===true ? "Verified 🟢":"Not Verified 🔴"}</p>
                    <div className="groupDetailPage-cont-2-img">
                        <img src="https://img.freepik.com/premium-vector/map-with-destination-location-point-city-map-with-street-river-gps-map-navigator-concept_34645-1078.jpg" alt="map" />
                        <p>{groupData.location}</p>
                        
                    </div>
                    <div className="group-events">
                            <h3>Events</h3>
                            {groupData.events.map((event)=>(
                                <h3>{event.title}</h3>
                            ))}
                    </div>
                </div>

            </div>

        </div>
    )

}



export default GroupDetailsPage;