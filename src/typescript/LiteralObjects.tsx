interface Person {
    fullName: String;
    age: number;
    address: Address
}

interface Address {
    country: String;
    houseNo: number;
}

export const LiteralObjects = () => {

    const person: Person = {
        fullName: 'Andres',
        age: 39,
        address: {
            country: 'Canada',
            houseNo: 615
        }
    }
    return (
        <>
            <h3> Literal Objects</h3>
            <code>
                <pre>
                    { JSON.stringify(person, null, 2)}
                </pre>
            </code>
        </>
    )
}
