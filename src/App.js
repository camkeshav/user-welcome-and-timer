import { useState } from "react";
import Timer from "./Component/Timer";
import User from "./Component/User";


const App = () => {

  const [toggle, setToggle] = useState(false);
  return (
    <div>
    {toggle ? <p>Alternate Component</p> : <Timer/>}
    <button onClick={() => {setToggle(!toggle)}}>Toggle</button>
    </div>
  )
}

export default App;
