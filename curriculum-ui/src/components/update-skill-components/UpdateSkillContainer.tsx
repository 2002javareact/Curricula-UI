import {UpdateSkillComponent} from "./UpdateSkillComponent"
import { connect } from "react-redux"
import { IState } from "../../reducers"
import {updateSkillActionMapper} from "../../action-mappers/update-skill"
import {getAllCategoriesActionMapper} from "../../action-mappers/categories-getall-action-mappers"

const mapStateToProps = (state:IState) => {
    return {
        allCategory: state.allCategory.allCategory,
        skillToUpdate: state.updateSkillsState.skillToUpdate,
        errorMessage: state.getAllSkills.errorMessage        
    }
}

const mapDispatchToProps = {
    updateSkillActionMapper,
    getAllCategoriesActionMapper,
}

export default connect(mapStateToProps,mapDispatchToProps)(UpdateSkillComponent)

