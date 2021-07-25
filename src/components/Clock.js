import React, { useState } from 'react'

function Clock() {

    const [currTime, setcurrTime] = useState(new Date().toLocaleTimeString())
    const [currDate, setcurrDate] = useState(new Date().toDateString())

    setInterval(() => {
        setcurrTime(new Date().toLocaleTimeString())
        setcurrDate(new Date().toDateString())
    }, 1000)

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh", background: "#070535" }}>
            <div className="d-flex flex-column" style={{ border: "solid 1px #fff", padding: "7%" }}>
                <h1 style={{ color: "#fff" }}>{currDate}</h1>
                <h1 style={{ fontSize: "4em", color: "#fff" }}>{currTime}</h1>
            </div>
        </div>
    )
}

export default Clock
