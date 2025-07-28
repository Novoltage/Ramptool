import { useState } from "react";
import { useEffect } from "react";
import './Clicks.css'


export function Clicks(){

    const [points, setPoints ] = useState(()=> {
        const localValue = localStorage.getItem("CLICKS")
        if(localValue == null) return[]
    
        return JSON.parse(Number(localValue))
      });



    useEffect(()=>{
        localStorage.setItem("CLICKS", JSON.stringify(points))})
    
    function Add(n){

        setPoints(points + n )
    }

    function Substract(n){


        setPoints(points - n)
    }

    function Reset(){

        setPoints(0)
    }

return(
<>

<section className="Grid">
        <div className="Clicks-div">
            <p className="Clicks">{ points }</p>
        </div>

        <div className="Big-button"> 

            <button className="custom-btn btn-11" onClick={()=>Add(1)} > +1 </button>

        </div>


        <div className="Lower-button">
            <button className="Add" onClick={()=>Add(10)} > +10 </button>
            <button className="custom-btn Reset" onClick={()=>Reset()} > Reset </button>
            <button className="Minus" onClick={()=>Substract(1)} > -1 </button>
            <button className="Minus" onClick={()=>Substract(10)} > -10 </button>
        </div>


</section>


</>
);


}