import React from 'react'
import Collapse from "./collapse";
const JsonComp = (props) => {

    var jsonObject;
    //if the data is string (json file)
    if (typeof props.data === 'string'){
        //parse the json into an object
      jsonObject = JSON.parse(props.data);
   
    }else{
        //if it is not a string and an object was uploaded, save and do not parse
      jsonObject = props.data;
    }
      return(
          //mapping the object
        Object.entries(jsonObject).map((value, index) => {
            //returning a collapse div for each key
          return(<div  key = {index}><Collapse
            //prime is the parent node it will show you the primary key
            prime = {value[0]}
            //value is the child node, each click (inside collapse.js) on the div shown, will pass the childnode as the new object. creating recursion until a string value is met
            value = {value[1]}
          /></div>)
        })
      )
  }
  export default JsonComp;
  
