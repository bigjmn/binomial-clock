import { useEffect, useState } from "react";
import Clock from 'react-clock'
import { useClock } from "../hooks/useClock";
import "react-clock/dist/Clock.css"
import AlarmSet from "./AlarmSet";

const ClockFace = () => {
    const {time, setAlarmOn, setAlarmTime, beeping} = useClock()

    return (
        <div>
            <Clock value={new Date(time)} />
            <AlarmSet />

        </div>
    )


}
export default ClockFace