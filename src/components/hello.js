import React, { useState, useEffect } from "react"

export function LifeCycle() {
  const [number, setNumber] = useState(0)
  useEffect(() => {
    console.log("component did mount with useeffect")
    return () => {
      console.log("component will unmount with useeffect")
    }
  }, [number])

  return (
    <div>
      <h2>number is {number}</h2>
      <button className="block" onClick={() => setNumber(number + 1)}>
        Increment
      </button>
      <button className="block" onClick={() => setNumber(number - 1)}>
        Decrement
      </button>
    </div>
  )
}

export default LifeCycle
