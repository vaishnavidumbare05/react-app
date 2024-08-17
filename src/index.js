import {createRoot}  from "react-dom/client";
//we use any name for import in default export
//import GoodMorning from "./app";

//we use same name for import in named export
import GreetingGM ,{ GreetingGA , GreetingGE } from "./app";
const root=createRoot(document.getElementById("root"));

 root.render(<>
 <h1>All Greeting</h1>
 <GreetingGM/>
 <GreetingGA/>
 <GreetingGE/>
 </> )
      