import {createRoot}  from "react-dom/client";

const root=createRoot(document.getElementById("root"));


// root.render(<h1>React Application🤩</h1>)

//JSX-Javascript Extension markup language-1.It is a extension to javascript syntax.
//2.using JSX we can write html& js at sampe place

//we can write javascript in {}
// root.render(<h1>React Application {2+3}Star🤩</h1>)

//Rule of JSX-1.All tag should closed by paired by 2.There should be only one parent element.

//using those rule and using JSX fragment.

// root.render(<>
//             <h1>React Application {2+3}Star🤩</h1>
//             <h1>Hello Everyone...</h1>
//             </>)

//COMPONENT in react-It is a simple javascript function that returns JSX.
   //We must write component name in upper camel case ex.SayHelloWorld()
       //we write in any type of function
         //component provide as reusability.
               
                   function SayHello(){
                    const randomNumber=Math.floor(Math.random()*10)
                    return<h2>My First APP 🤩{randomNumber}</h2>
                }

//PROPS=1.props are just functional parameter passed to component
    // 2.we use props to customize component
// function WelcomeFriends(props){
   // console.log(props)
                    
                   function WelcomeFriends(xyz){ //xyz is props

                    //structure format:
                    //1.packing structure    const xyz={
                    //                        name:"tanvii"
                    //                        city:"Nashik" }

                    //2.unpacking destructure format
                    const {name,city}=xyz
                    console.log(xyz)
                    return<h2>Welcome to all specially {xyz.name} from {xyz.city}🤩🥳</h2>
                    }
                
                
                //call to component in JSX
                // <SayHello/>

                root.render(<>
                <SayHello/>
                <SayHello/>
                <SayHello/>

                <WelcomeFriends  name="tanvii" city="pune"/>
                {/* we convert into object first then pass this object into coponent {name:"tanvii" city:"pune"} */}
                <WelcomeFriends  name="kartiki" city="Nashik"/>
                 </>)

      // curently is in Development ENVIRONMENT(DEVELOPMENT VERSION)
      //production- build process means html,css and javascript is in one file =IT IS USE FOR REMOVING SPACE AND OPTIMIZE CODE FOR PRODUCTION
