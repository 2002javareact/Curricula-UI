import { IState } from "../../../reducers"
import { ViewAllCategoriesComponent } from "./ViewAllCategoriesComponent"
import { getAllCategoriesActionMapper } from "../../../action-mappers/categories-getall-action-mappers"
import { connect } from "react-redux"

const mapStateToProps = (state:IState) => {
    return {
        allCategory: state.allCategory.allCategory,
        errorMessage: state.allCategory.errorMessage        
    }
}

const mapDispatchToProps = {
    getAllCategoriesActionMapper
}

export default connect(mapStateToProps,mapDispatchToProps)(ViewAllCategoriesComponent)