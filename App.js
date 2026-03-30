import React from "react"
import ReactDOM from "react-dom/client"

const FirstComp = ()=>(
    <h1>Hello from first component!!!!</h1>
)

const MainComp = () =>(
    
        <>
            <FirstComp />
            <h2>Render first component inside the main component</h2>
        </>
    
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MainComp/>)