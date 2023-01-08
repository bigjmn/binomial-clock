import {useEffect, useState} from 'react'

export const useClock = () => {
    const [time, setTime] = useState(Date.now())
    const [alarmTime, setAlarmTime] = useState(null)
    const [alarmOn, setAlarmOn] = useState(false)
    const [beeping, setBeeping] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(t => Math.random()<.5 ? t+3000 : t-1000)
            console.log('tick')
        }, 1000)
        

        return () => {
            clearInterval(interval)
        }
    }, [])

    useEffect(() => {
        if (alarmOn && alarmTime && alarmTime < time) setBeeping(true)
    }, [alarmTime, time, alarmOn])

    const syncTime = () => {
        setTime(Date.now())
    }

    return {time, setAlarmOn, setAlarmTime, beeping}

}