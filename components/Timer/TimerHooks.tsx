import React, { useEffect, useState } from 'react'

const TimerHooks = (date: Date) => {
    const [timer, setTimer] = useState(date.getTime() - (new Date()).getTime());
    const seconds = timer > 0 ? Math.floor((timer / 1000) % 60) : 0;
    const minutes = timer > 0 ? Math.floor((timer / 1000 / 60) % 60) : 0;
    const hours = timer > 0 ? Math.floor((timer / 1000 / 60 / 60) % 24) : 0;
    const days = timer > 0 ? Math.floor(timer / 1000 / 60 / 60 / 24) : 0;
    useEffect(() => {
        setInterval(() => {
            if(timer < 0){
                return;
            }
            setTimer(date.getTime() - (new Date()).getTime())
        }, 1000)
    }, [])

    return { timer, seconds, minutes, hours, days }
}

export default TimerHooks;