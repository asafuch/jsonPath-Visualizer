const initialState={
    selectedfile:"",
  
    found:"",

}

const reducer =(state=initialState,action)=>{
    switch(action.type){
        case "UPLOAD":
            return{
                ...state,
                selectedfile:action.payload
            }
       
        case "SEARCH":
            return{
                ...state,
                found:action.payload
            }
     
        default:
            return{
                ...state
            }
    }
}

export default reducer