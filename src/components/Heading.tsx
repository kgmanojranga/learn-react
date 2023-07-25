import {ReactElement} from 'react'

type HeadingProps = {title: string, age: number}

const Heading = ({title, age}: HeadingProps): ReactElement => {
    return (
        <>
            <h1>{title}</h1>
            <p>{age}</p>
        </>
    )
};

export default Heading