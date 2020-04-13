import { IState } from "../../../reducers";
import { connect } from "react-redux";
import { CreateVisualizationComponent } from "./CreateVisualizationComponent";
<<<<<<< HEAD
import { createVisualizationActionMapper } from "../../../action-mappers/create-visualization-Action-mapper";
=======
>>>>>>> fef35688d524d83fe3198aa79330e4d5a9a9c750

import {createVisualizationActionMapper} from "../../../action-mappers/create-visualization-Action-mapper"
import {viewCurriculumListActionMapper} from  "../../../action-mappers/view-curriculum-list-action-mapper"

const mapStateToProps = (state:IState) => {
  return({
    createVIsualization:state.newVisualization.createVIsualization,
    errormessage:state.newVisualization.errorMessage,
    curriculumList:state.allCurriculum.curriculumList
  })
}

const mapDispatchToProps = {
  //TODO viewskillactionmapper
  createVisualizationActionMapper,
  viewCurriculumListActionMapper
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateVisualizationComponent);
