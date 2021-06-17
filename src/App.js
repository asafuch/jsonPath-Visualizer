import React, { Component } from 'react'
import Upload from './components/upload'
import "./app.css"
import JsonComp from './components/tree/json'
import {connect} from "react-redux"
import {JSONPath} from 'jsonpath-plus';
import Search from './components/search'
import * as actions from "./actionsReducers/actions"
 class App extends Component {
   constructor(props){
     super(props)
    
   }
   handleChange=(e)=>{
     
      const {selectedfile}=this.props
      //parsing the json file into an object
      let json=JSON.parse(selectedfile)
      //make use of JSONPath libary, using the input value to change the path attribute and returning the value
      const result = JSONPath({path:e.target.value,json:json,resultType:"value"})
      //using redux function named "searched"
      this.props.searched(result)
   }
  render() {
    return (
      <div>
        <div className="split">
          {/* this div is responsible of uploading the file and creating the "tree" */}
          <div>
          <Upload></Upload>
          {/* if the file was transfered to redux (which means the upload proccess was succesful) the app will carry on and create the tree (JsonComp is and helper component to make the tree) */}
            {this.props.selectedfile.length ? <JsonComp data={this.props.selectedfile} ></JsonComp> : <h3>Upload Your JSON File</h3>}
          </div>
          <div>
            {/* if the file was transfered to redux the app will create the input field and the "Search" component */}
            {this.props.selectedfile.length ? (
              <>
              <div>
              <label htmlFor="json">Use JSON Path Syntax To Search: </label>
              <input  onInput={this.handleChange} id="json"></input>
            </div>
            <Search></Search>
            </>
            )
            :null}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps=(state)=>{
  return{
    selectedfile:state.selectedfile,
    found:state.found,

  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    searched:(value)=>dispatch(actions.searched(value))
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(App)