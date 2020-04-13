import { IState } from "../../../reducers";
import { connect } from "react-redux";
import { CreateVisualizationComponent } from "./CreateVisualizationComponent";
import { createVisualizationActionMapper } from "../../../action-mappers/create-visualization-action-mapper";

const mapStateToProps = (state: IState) => {
  return {};
};

const mapDispatchToProps = {
  //TODO viewskillactionmapper
  createVisualizationActionMapper
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateVisualizationComponent);
