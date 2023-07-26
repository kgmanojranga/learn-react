import './App.css'

import Heading from "./components/Heading.tsx";
import Section from "./components/Section.tsx";
import Counter from "./components/Counter.tsx";
import {PersonList} from "./components/PersonList.tsx";

function App() {



    // const name:string = "Yasindu"

    type Personprops = {
        firstName: string,
        lastName: string
    }

    let nameList: Personprops[]= [
        {
            firstName: "Jason",
            lastName: "Mamoa"
        },
        {
            firstName: "Bruice",
            lastName: "Wayne"
        },
        {
            firstName: "Sharukh",
            lastName: "Khan"
        }
    ];

    return (
        <>
            {/*<Heading title={name} age={28} />*/}
            <Heading title={"My Name is Manoj"} age={29}/>
            <Section children= {"Children as a Argument"} title={"Title is Optional"}></Section>
            <Counter/>
            <PersonList names = {nameList}/>
        </>
    )
}

export default App
