import { IState } from "../../reducers"
import { ViewAllCategoriesComponent } from "./ViewAllCategoriesComponent"
import { getAllCategoriesActionMapper } from "../../action-mappers/get-all-categories-action-mapper"
import { connect } from "react-redux"

const mapStateToProps = (state:IState) => {
    return {
        allCategory: state.allCategory.allCategory,
        //loggedUser: state.loggedUser.loggedUser,
        errorMessage: state.allCategory.errorMessage        
    }
}

const mapDispatchToProps = {
    getAllCategoriesActionMapper
}

export default connect(mapStateToProps,mapDispatchToProps)(ViewAllCategoriesComponent)
