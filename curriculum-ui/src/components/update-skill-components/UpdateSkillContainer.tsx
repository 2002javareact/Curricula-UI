import {UpdateSkillComponent} from "./UpdateSkillComponent"
import { connect } from "react-redux"
import { IState } from "../../reducers"
import {updateSkillActionMapper} from "../../action-mappers/update-skill"

const mapStateToProps = (state:IState) => {
    return {
        skillToUpdate: state.updateSkillsState.skillToUpdate,
        errorMessage: state.getAllSkills.errorMessage        
    }
}

const mapDispatchToProps = {
    updateSkillActionMapper
}

export default connect(mapStateToProps,mapDispatchToProps)(UpdateSkillComponent)

