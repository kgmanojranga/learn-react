import './App.css'

import Heading from "./components/Heading.tsx";
import Section from "./components/Section.tsx";
import Counter from "./components/Counter.tsx";

function App() {

    // const name:string = "Yasindu"

    return (
        <>
            {/*<Heading title={name} age={28} />*/}
            <Heading title={"My Name is Manoj"} age={28}/>
            <Section children= {"Children as a Argument"} title={"Title is Optional"}></Section>
            <Counter/>
        </>
    )
}

export default App
