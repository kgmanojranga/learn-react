type PersonProps = {
    names: {
        firstName: string
        lastName: string
    }[]
}

export function PersonList(props: PersonProps) {

    return (
        <>
            {props.names.map(name => {
                return (<h3>{name.firstName} {name.lastName}</h3>)
            })}
        </>
    )
}