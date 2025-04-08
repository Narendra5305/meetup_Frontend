import React, { useState } from "react";
import "./componentCss/calendar.css"


import { 
    startOfMonth,
    endOfMonth,
    startOfWeek,
    endOfWeek,
    addDays ,
    addMonths,
    subMonths,
    format,
    isSameMonth ,
    isSameDay
} from 'date-fns';

const Calendar = () =>{
    const [currentMonth , setCurrentMonth] = useState(new Date());
    const [selectedDate , setSelectedDate] = useState(new Date());
    
    const RenderHeader = () =>{
        return(
            <div className="calendar-header">
                <button onClick={()=>setCurrentMonth(subMonths(currentMonth,1))}>◀</button>
                <span>{format(currentMonth,"MMMM yyyy")}</span>
                <button onClick={()=>setCurrentMonth(addMonths(currentMonth ,1))}>▶</button>
            </div>
        )
    }

    const RenderDays = () =>{
        const weakDays = ["Su",'Mo' , 'Tu' , 'We' , 'Th' ,"Fr" ,"Sa"]
        return(
            <div className="calendar-grid">
                {weakDays.map((day)=>(
                    <div key={day} className="calendar-day-name">
                        {day}
                    </div>
                ))}
            </div>
        )
    }


    const RenderCells = () =>{
        const monthStart = startOfMonth(currentMonth);
        const monthEnd = endOfMonth(monthStart);
        const startDate = startOfWeek(monthStart);
        const endDate = endOfWeek(monthEnd);

        const rows =[];
        let days = [];
        let day = startDate ;

        while (day <=endDate){
            for (let i =0 ; i< 7 ; i++){
                const cloneDay = day ;
                const isCurrentMonth = isSameMonth(day , monthStart);
                const isToday = isSameDay(day , new Date());

                days.push(
                    <div key={day} className={`calendar-cell ${!isCurrentMonth ? "calendar-other-month":""} ${isToday ? "calendar-selected":""}`}
                    onClick={()=>setSelectedDate(cloneDay)}
                    >
                        {format(day,"d")}

                    </div>
                );
                day = addDays(day,1) 
            }

            rows.push(
                <div className="calendar-grid" key={day}>
                    {days}
                </div>
            )
            days=[];
        }

        return(
            <div>{rows}</div>
        )
    }

    const RenderFooter = () => (
        <div className="footer-buttons">
          <button>This week</button>
          <button>This weekend</button>
          <button>Next week</button>
        </div>
    );




    return(
        <div className="calendar-container">
            <RenderHeader/>
            <RenderDays/>
            <RenderCells/>
            <RenderFooter/>
        </div>
        
    )
    

}



export default Calendar;
