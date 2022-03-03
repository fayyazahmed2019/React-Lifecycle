import React, {useEffect, useState} from "react";

const LifeCycle =()=>{


const [Count, setCount] = useState(0);

const [formula, setFormula] = useState(10*4);


useEffect(() =>{

document.title =  `About (${Count})`;

console.log("first time refresh chala")

});

// }); useeffect baar baar chalega

// },[]); use effect aik baar chalega

return(

    <>
    {Count}

<input value={Count*formula}></input>
    <button onClick={()=>setCount(Count + 1)}>Click</button>    

    

    
    </>
)

}


export default LifeCycle;