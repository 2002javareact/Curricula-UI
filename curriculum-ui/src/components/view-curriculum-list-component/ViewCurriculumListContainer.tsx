import { IState } from "../../reducers"
import { connect } from "react-redux"
import { ViewCurriculumListComponent } from "./ViewCurriculumListComponent"
import { viewCurriculumListActionMapper } from '../../action-mappers/view-curriculum-list-action-mapper';

const mapStateToProps = (state:IState) => {
  return({
    curriculumList:state.curriculumList.curriculumList
  })
}

const mapDispatchToProps = {
  viewCurriculumListActionMapper
}

export default connect(mapStateToProps,mapDispatchToProps)(ViewCurriculumListComponent);