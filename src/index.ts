import { useEffect, useState } from "react";

export function useIntervalTime( intervalMs :number = 1000 ): Date {
    const [ time, setTime ] = useState< Date >(() => new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime( new Date());
        }, intervalMs );
        return () => clearInterval( intervalId );
    }, []);

    return time;
}
