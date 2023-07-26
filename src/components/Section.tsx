import {ReactNode} from "react";


type SectionProps = {children: ReactNode, title?: string}
export default function Section({children, title = "My Sub Heading"}: SectionProps) {
    return (
        <section>
            <input type={"text"} placeholder={"first-name"}/>
            <h1>{title}</h1>
            <p>{children}</p>
        </section>
    )
}