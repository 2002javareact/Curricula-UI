import UpdateSkillComponent from "./UpdateSkillComponent"
import { connect } from "react-redux"

const mapStateToProps = (state:IState) => {
    return {
        skillToUpdate: state,
        errorMessage: state.getAllSkills.errorMessage        
    }
}

const mapDispatchToProps = {
    updateSkillActionMapper
}

export default connect(mapStateToProps,mapDispatchToProps)(UpdateSkillComponent)

