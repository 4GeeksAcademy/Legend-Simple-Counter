import { useEffect, useState } from "react"
import SimpleCounter from "./SimpleCounter"


function App() {
  const [ counter, setCounter] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counter => counter + 1)
    }, 1000)
    console.log(counter)

    return () => clearInterval(interval)
  }, [counter])

function calculateSeconds(aCounter, placeValue){
  return Math.floor(aCounter / placeValue) % 10
}

  return (
    <>
      <SimpleCounter 
      thousandsDigits = {calculateSeconds(counter,1000)}
      hundredsDigits = {calculateSeconds(counter,100)}
      tensDigits = {calculateSeconds(counter,10)}
      onesDigits = {calculateSeconds(counter,1)}
      />
     
    </>
  )
}

export default App

