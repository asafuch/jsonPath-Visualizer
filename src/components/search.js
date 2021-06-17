import React, { Component } from 'react'
import {connect} from "react-redux"
import "./search.css"

class Search extends Component {
    constructor(props){
        super(props)
        this.state={
            data:""
        }
    }
    handleData=()=>{
        //if there is any data in redux store.found 
        if(this.props.found.length>0){
            //mapping the data
            const data=this.props.found.map((item,index)=>{
                //if the type of item == "string" it means your jsonpath was currect
                if(typeof(item)==="string"||typeof(item)==="number"){
                    //returning a div with the item name
                        return(   
                            <div className="search-content">
                                <h2>{item}</h2>
                            </div>
                        )
                }               
            })
          return data
        }else{
            //if there is no values in props.found it will return the following message
            return(
                <h3>Make sure to type the correct JSONPath, <a type="_blank" href="https://www.npmjs.com/package/jsonpath-plus">JSONPath documentation</a></h3>
            )
        }
    }
    render() {
        return (
            <div className="search-container">
               {this.handleData() }
            </div>
        )
    }
}

const mapStateToProps=state=>{
    return{
        found:state.found,
        
    }
}

export default connect(mapStateToProps)(Search)
