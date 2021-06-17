import React, { Component } from 'react'
import "./collapse.css";
import {AiOutlineArrowRight,AiOutlineArrowDown} from "react-icons/ai"

class Collapse extends Component {
    constructor(props){
        super(props)
        this.state={
            active:"",
            height:"0px",
            Arrow:<AiOutlineArrowRight></AiOutlineArrowRight>,
            child:""
        }
    }
    
    toggleCollapse=(childObj)=>{
        //making the css move

        this.state.active==="" ? this.setState({active:"active"}) : this.setState({active:""})
        this.state.active==="active" ? this.setState({height:"0px"}) : this.setState({height:`initial`})
        //if state.active = "active" the arrow will point right, if it = to "" it will point down
        this.state.active==="active" ? this.setState({Arrow:<AiOutlineArrowRight></AiOutlineArrowRight>}) : this.setState({Arrow:<AiOutlineArrowDown></AiOutlineArrowDown>})
        //if childobj (the previous props.value ) is not anull and the type of it is an object
        if(childObj !=null && typeof(childObj)==="object"){
            //it will map through it
            const children=Object.entries(childObj).map((value,index)=>{
                //and will return a new div that calls the same function, making a recursion until met with the else statement
                //as said in json.js, prime is the first value (parent) and value is the children, the children will then be passed on as the object when another click occure
                //each time a collapse component is creating, the level is increasing by one
                return(<div key={`${index}a`}><Collapse prime={value[0]} value={value[1]} level={this.level+1}></Collapse></div>)
            })
            //setting the state to the div and later displaying it in the collapse_text div
            this.setState({child:children})
        }
        else if(typeof(childObj)==="string"||typeof(childObj)==="number"){
            //when met with something that is not an object and not anull, but the type of it is a string/number it will set it to the props.value itself
            this.setState({child:childObj})
        }
    }
    //if the component did not retrieve a level it will start at 0, the level is not really required, ive added it so it would be easier to inspect
    level=this.props.level ||0
    render() {
        return (
                <div level={this.level} className="collapse_container">
                {/* the state affects the css,and on this button the onclick is being triggered */}
                <button className={`collapse ${this.state.active}`} onClick={()=>this.toggleCollapse(this.props.value)}>
                    {/* arrow is changing occurding to the button active state */}
                    {this.state.Arrow}
                    
                    <p className="collapse_title">{this.props.prime}</p>
                </button>
                <div
                    style={{maxHeight:`${this.state.height}`}}
                    className="collapse_content"
                >
                    <div>
                        <div className="collapse_text">
                            {/* creating the child nodes, when clicked */}
                            {this.state.child}
                        </div>
                    </div>
                </div>
            </div>
            
            
        )
    }
}


export default Collapse