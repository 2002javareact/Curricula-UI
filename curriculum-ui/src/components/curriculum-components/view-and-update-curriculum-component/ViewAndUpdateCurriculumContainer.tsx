import {IState} from "../../../reducers/";
import { connect } from "react-redux";
import { ViewAndUpdateCurriculumComponent } from "./ViewAndUpdateCurriculumComponent";
import {viewAndUpdateCurriculumActionMapper} from "../../../action-mappers/view-and-update-curriculum-action-mapper";


const mapStateToProps = (state:IState) =>{

    return{

    viewandUpdateCurriculum: state.viewUpdateCurriculum.viewandUpdateCurriculum,
    errorMessage: state.viewUpdateCurriculum
    }

}


const mapDispatchToProps = {

    viewAndUpdateCurriculumActionMapper
}


export default connect(mapStateToProps,mapDispatchToProps)(ViewAndUpdateCurriculumComponent);