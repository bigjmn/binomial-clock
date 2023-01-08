import {useEffect, useState} from 'react'

const AlarmSet = () => {
    const [alarmHours, setAlarmHours] = useState(8)
    const [alarmMinutes, setAlarmMinutes] = useState(0)
    const [isPM, setIsPM] = useState(false)
    
    return (
        <div>
            <select value={alarmHours} onChange={(e) => setAlarmHours(e.target.value)}>
                {Object.keys(Array(60).fill(60)).map((m, i) => (
                    <option value={i}>{i}</option>
                ))}
            </select>
        </div>
    )
}
export default AlarmSet