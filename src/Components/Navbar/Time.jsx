import React, { useEffect, useState } from 'react'
import { Section, TimeDiv, Timer } from './style'

const Time = () => {
  const [date, setDate] = useState({ hour: "", minute: "", status: "" })
  const getSeconds = () => {
    setInterval(() => {
      const newDate = new Date()
      let hour = newDate.getHours()
      let minute = newDate.getMinutes()

      hour = hour < 10 ? '0' + hour : hour
      minute = minute < 10 ? '0' + minute : minute

      if (hour > 12) {
        hour = hour % 12
        setDate((d) => {
          return { ...d, status: "PM" }
        })
      } else {
        setDate((d) => {
          return { ...d, status: "AM" }
        })
      }

      setDate((d) => { return { ...d, hour, minute } })
    }, 1000);
  }
  useEffect(() => {
    getSeconds()
  }, [])
  return (
    <TimeDiv>
      <Timer>{date.hour}:{date.minute}</Timer>
      <Timer status="true">PM</Timer>
    </TimeDiv>
  )
}

export default Time