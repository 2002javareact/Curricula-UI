import { IState } from "../../reducers"
import { ViewAllCategoriesComponent } from "./ViewAllCategoriesComponent"
import { getAllCategoriesActionMapper } from "../../action-mappers/categories-getall-action-mappers"
import { connect } from "react-redux"

const mapStateToProps = (state:IState) => {
    return {
        allCategories: state.allCategory.allCategory,
        //loggedUser: state.loggedUser.loggedUser,
        errorMessage: state.allCategory.errorMessage        
    }
}

const mapDispatchToProps = {
    getAllCategoriesActionMapper
}

export default connect(mapStateToProps,mapDispatchToProps)(ViewAllCategoriesComponent)