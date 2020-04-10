import {IState} from "../../../reducers/";
import { connect } from "react-redux";
import { ViewAndUpdateCurriculumComponent } from "./ViewAndUpdateCurriculumComponent";
import {updateCurriculumActionMapper} from "../../../action-mappers/update-curriculum-action-mapper";
import {getCurriculumByIdActionMapper} from 
"../../../action-mappers/get-curriculum-by-id-action-mapper";


const mapStateToProps = (state:IState) =>{

    return{

    updateCurriculum: state.updateCurriculum.updateCurriculum,
    getCurriculumById: state.getCurriculumById.getCurriculumById,
    errorMessageForUpdate: state.updateCurriculum.errorMessage,
    errorMessageForById: state.getCurriculumById.errorMessage
    }

}


const mapDispatchToProps = {

    updateCurriculumActionMapper,
    getCurriculumByIdActionMapper


}


export default connect(mapStateToProps,mapDispatchToProps)(ViewAndUpdateCurriculumComponent);