import { IState } from "../../../reducers";
import { connect } from "react-redux";
import { CreateVisualizationComponent } from "./CreateVisualizationComponent";

import {createVisualizationActionMapper} from "../../../action-mappers/create-visualization-action-mapper"
import {viewCurriculumListActionMapper} from  "../../../action-mappers/view-curriculum-list-action-mapper"

const mapStateToProps = (state:IState) => {
  return({
    createVIsualization:state.newVisualization.createVIsualization,
    errormessage:state.newVisualization.errorMessage,
    curriculumList:state.curriculum.curriculumList
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
