import React from "react"

const TestComponent = () => {
  const handleEvent = () => {
    if (typeof window !== "undefined" && window.plausible) {
      window.plausible("TestEvent")
    } else {
      console.error("Plausible is not available")
    }
  }

  return (
    <div>
      <button onClick={handleEvent}>Test Plausible Event</button>
    </div>
  )
}

export default TestComponent
