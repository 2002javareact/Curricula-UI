import { IState } from "../../reducers"
import { connect } from "react-redux"
import { ViewAllCurriculumComponent } from "./ViewAllCurriculumComponent"
import { viewCurriculumListActionMapper } from '../../action-mappers/get-all-curriculum-action-mapper';

const mapStateToProps = (state:IState) => {
  return({
    curriculumList:state.allCurriculum.curriculumList
  })
}

const mapDispatchToProps = {
  viewCurriculumListActionMapper
}

export default connect(mapStateToProps,mapDispatchToProps)(ViewAllCurriculumComponent);