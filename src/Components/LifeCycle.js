import React, {useEffect, useState} from "react";

const LifeCycle =()=>{


const [Count, setCount] = useState(0);

useEffect(() =>{

console.log("first time refresh chala")

},[]);



return(

    <>
    {Count}

    <button onClick={()=>setCount(Count + 1)}>Click</button>    

    

    
    </>
)

}


export default LifeCycle;