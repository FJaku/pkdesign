import { bindActionCreators } from "redux";

const servicesReducer = ( state = 'hidden', action) => {
    switch(action.type){
        case 'SHOWSERVICES':
            return 'show'
        case 'HIDESERVICES':
            return 'hidden'
        default:
            return state
    }      
}

export { servicesReducer }