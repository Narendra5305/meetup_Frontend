import axios from "axios"
import React ,{useEffect , useState} from "react"
import "./pageCss/groupPage.css"
import Loading from "../component/loading"
import { useNavigate } from "react-router-dom"


const GroupPage =()=>{
    const navigate = useNavigate();
    const [groupData, setGroupData] = useState([])

    useEffect(()=>{
        try {
            const fetchData =async() =>{
                const response =await axios.get("https://meetup-backend-8rsw.onrender.com/groups")
                const authData = JSON.parse(localStorage.getItem('authData'));
               
                const userId =authData.userId
                const groups = response.data.Groups ;
               
                setGroupData(groups)
                
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
        <div className="group-main">
            <h1>Group Data</h1>
            <div className="group-cont">
                
                {groupData.map((group)=>(

                        <div key={group._id} className="group-card">
                            <img src={group.image} alt="group image" /> 
                            <h2>{group.name}</h2>
                            <h6>Location:{group.location}</h6>
                            <p>{group.description}</p>
                            <button onClick={()=>navigate(`/groupDetails/${group._id}`)}>View Details</button>

                        </div>

                    
                ))}

            </div>
        </div>
    )

}



export default GroupPage;