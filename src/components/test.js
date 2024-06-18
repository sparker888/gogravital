import * as React from "react"

const MyButton = () => {
  const [count, setCount] = React.useState(0)
  return (
    <div>
      <button onClick={() => setCount(count+1)}>{count}</button>
    </div>
  )
}
export default MyButton
