export const BasicTypes = () => {

    const name: string = "Andres";
    const age: number = 39;
    const isActive: boolean = false;

    const powers: string[] = [ 'speed', 'flight', 'breath under water' ];

    return (
        <>
            <h3>Basic Types</h3>
            { name }, { age }, { (isActive) ? "Active" : "Not Active" }
            <br></br>
            { powers.join(', ') }
        </>
    )
}
