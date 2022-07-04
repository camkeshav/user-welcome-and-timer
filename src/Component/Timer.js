import { useEffect, useState } from "react"

const Timer = () => {
    const [counter, setCounter] = useState(0);

    // setInterval(() => {
    //     setCounter(counter +1)
    // }, 1000);

    useEffect(() => {
        const timerInterval = setInterval(() => {
            setCounter(previousValue => previousValue + 1);
        }, 1000);

        return () => {
            console.log("Timer is unmounted");
            clearInterval(timerInterval);
        }
    }, [])

    return (
        <div>
            <h2>{counter} seconds</h2>
        </div>
    )
}

export default Timer