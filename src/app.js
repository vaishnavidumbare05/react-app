//MODULE SYSTEM :two type o export 1.Named export 2.Default export

/*Named Export:1.For Named export we use keyword export{
                                                         Component Name,
                                                         component Name         
                                                                }
               2.For import we use same name with import keyword.
               3.Multiple export should be there in file.

*/
/* DEFAULT EXPORT:1.For default export we use keyword [export default]
                  2.for import we use desired name with import keyword
                  3.only one default export should be there per file

    why default export use-1.it is main component 2.mostly use component

*/

//external css
import "./app.css" ;

//internal css
  const GoodMorningHeader={
    //we convert cabab case into camel case
    backgroundColor:"white",
    color:"magenta",
    fontSize:"30px",
}
function GreetingGM(){
    const date=new Date();

    const currentHour = date.getHours();
    const currentMinute= date.getMinutes();
    
    return (
    <h1 style={GoodMorningHeader}>Good Morning🌅 {currentHour}:{currentMinute}</h1>
    )
    
}
function GreetingGA(){
    const date=new Date();

    const currentHour = date.getHours();
    const currentMinute= date.getMinutes();
    
    return (
        //inline css
    <h1 style ={{
        color:"chocolate",
        padding:"5px",
          margin:"5px",
     }}>
        Good Afternoon🌞 {currentHour}:{currentMinute}</h1>
    )
    
}

  const GreetingGE =  () => {
    const date=new Date();

    const currentHour = date.getHours();
    const currentMinute= date.getMinutes();
    
    return (
    <h1 className="header">Good Evening🌆 {currentHour}:{currentMinute}</h1>
    )
    
}
//default export ,only one export per file
//for default export commamd like-(export default (component name))
export default GreetingGM;

//named export multiple export per file
export{
    GreetingGA,
    GreetingGE
}