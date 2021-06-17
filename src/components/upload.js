import React, { Component } from 'react'
import {connect} from "react-redux"
import * as actions from "../actionsReducers/actions"
import "./upload.css"
class Upload extends Component {
    constructor(props){
        super(props)
        this.state={
            selectedFile:"",
            content:""
        }
    }
    //setting new filereader to a variable
    fileReader=new FileReader()
    handleFileRead=()=>{
        //saving filereader result into a const
        const content=this.fileReader.result
        //uploading the file to the redux global store
        this.props.uploadFile(content)
    }
    //when the file input changes this function runs
    handleChange=(e)=>{
        this.setState({selectedFile:""})
        this.props.uploadFile("")
        //setting the state to the first file found (our required file)
       this.setState({selectedFile:e.target.files[0]})
       //when filereader finishes loading it calls handlefileread function
       this.fileReader.onloadend=this.handleFileRead
       //reading it as text
       this.fileReader.readAsText(e.target.files[0])
       
    }
  
    render() {
        return (
            <div className="container">
                <div>
                    <label className="file" for ="fileupload">Choose File</label>
                    <input id="fileupload" className="input" type="file" accept="text/json" onChange={this.handleChange} ></input>
                </div>
        </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        selectedfile:state.selectedfile
    }
    
}
const mapDispatchToProps=(dispatch)=>{
    
    return{
        uploadFile:(file)=>dispatch(actions.uploadFile(file))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Upload)