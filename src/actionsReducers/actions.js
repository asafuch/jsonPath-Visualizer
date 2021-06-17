//uploading file action, file is sent
export const uploadFile= (file)=> {
    return{
        type:"UPLOAD",
        payload:file
    }
}

//searching using the found result in app.js
export const searched=(content)=>{
    return{
        type:"SEARCH",
        payload:content
    }
}

