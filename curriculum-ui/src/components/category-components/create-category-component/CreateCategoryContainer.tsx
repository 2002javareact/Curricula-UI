import { IState } from "../../../reducers/index"
import { connect } from "react-redux";
import {createCatActionMapper} from "../../../action-mappers/categories-create-action-mappers"
import { CreateCategoryComponent } from "./CreateCategoryComponent";


const mapStateToProps = (state:IState) =>{
    return {
        createCategory:state.createCategory.createCategory,
        errorMessage: state.createCategory.errorMessage,
        
    }
}
const mapDispatchToProps = {
    createCatActionMapper
}
export default connect(mapStateToProps,mapDispatchToProps)(CreateCategoryComponent)