import './App.css'

import Heading from "./components/Heading.tsx";

function App() {

    // const name:string = "Yasindu"

    return (
        <>
            <input type={"text"} placeholder={"first-name"} value={"Kasun"}/>
            {/*<Heading title={name} age={28} />*/}
            <Heading title={"My Name is Manoj"} age={28}/>
        </>
    )
}

export default App
