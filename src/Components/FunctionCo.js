import React, {useState, useEffect} from 'react'

const AppFunc=()=>{

const [names, setNames] = useState("");
const [toggle, setToggle] = useState(false);
const [counter, setCounter] = useState(0);

useEffect(() =>{
console.log("Component DidMount")


},[]);


useEffect(() =>{
    counter ?console.log("Counter Increament") : console.log("only Initialize")
    
    },[counter]);



return (

    <>
    <h1>hello</h1>
{names}

<br/>

{counter}

<button onClick={() => setCounter(counter + 1)}>Update Counter</button>
<button onClick={() => setToggle(!counter)}>Toggle</button>

    </>

)
 
    
}

export default AppFunc;