import React, {useState} from 'react'

const PropCheck = (prop) => {

const [namec, setName] = useState(0);


const nameup = () =>{

    namec = setName("fayyaz");
    
}



return (

    <>
    
    <h1>hellow wolrd{prop.price}</h1>
    <button onClick={nameup}> check</button>
    <h1>{namec}</h1>

    </>

)

}

export default PropCheck;