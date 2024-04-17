
import React from "react";
import Count from "./Count";
import './../styles/App.css';

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <Count/>
    </div>
  )
}

export default App
// const App = () => {
//   const [input, setInput] = useState(0)
//   const handleClick = ()=>{
//     setInput(input+1);
//   }
  
//     return (
//       <div>
//           <p>Button clicked {input} times</p>
//           <button onClick={handleClick}>Click me</button>
//       </div>
//     )
//   }
  
//   export default App
