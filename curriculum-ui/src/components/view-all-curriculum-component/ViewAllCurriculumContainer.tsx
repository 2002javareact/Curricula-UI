import { IState } from "../../reducers"
import { connect } from "react-redux"
import { ViewAllCurriculumComponent } from "./ViewAllCurriculumComponent"
import { viewCurriculumListActionMapper } from '../../action-mappers/view-curriculum-list-action-mapper';

const mapStateToProps = (state:IState) => {
  return({
    curriculumList:state.allCurriculum.curriculumList
  })
}

const mapDispatchToProps = {
  viewCurriculumListActionMapper
}

export default connect(mapStateToProps,mapDispatchToProps)(ViewAllCurriculumComponent);