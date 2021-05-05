export const Functions = () => {

    const sum = (num1: number, num2: number): number  => {
        return num1 + num2
    }

    return (
        <>
            <h3>Functions </h3>
            <span>el resultado es {sum(3, 2)}</span>
        </>
    )
}
