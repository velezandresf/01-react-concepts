import { useCounter } from '../hooks/useCounter';

export const CounterWithHook = () => {

    const {value, sum} = useCounter(0);

    return (
        <>
            <h3>Counter with Hook : <small>{ value }</small></h3>

            <button
                className="btn btn-primary"
                onClick= { () => sum(1) }
            >
                +1
            </button>
            &nbsp;
            <button
                className="btn btn-primary"
                onClick= { () => sum(-1) }
            >
                -1
            </button>
        </>
    )
}
