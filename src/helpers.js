// it's the world's ugliest function!
const nextAlarm = (curr, hours, mins) => {

    let currTime = new Date(curr)
    let alarmTime = new Date(curr)

    //if the alarm is set for earlier than the current time, make it for tomorrow
    alarmTime.setHours(hours, mins, 0)
    if (currTime.getTime()-alarmTime.getTime() > 0) alarmTime.setDate(alarmTime.getDate()+1)
    console.log(alarmTime)
    return alarmTime
}