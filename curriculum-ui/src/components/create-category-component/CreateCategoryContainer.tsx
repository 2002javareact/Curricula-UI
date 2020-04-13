import { IState } from "../../reducers/index"
import { connect } from "react-redux";
import {createCatActionMapper} from "../../action-mappers/create-categories-action-mappers"
import { CreateCategoryComponent } from "./CreateCategoryComponent";


const mapStateToProps = (state:IState) =>{
    return {
        createCat:state.createCategory.createCat, //createCategory
        errorMessage: state.createCategory.errorMessage,
        
    }
}
const mapDispatchToProps = {
    createCatActionMapper
}
export default connect(mapStateToProps,mapDispatchToProps)(CreateCategoryComponent)