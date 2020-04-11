import { IState } from "../../../reducers";
import { connect } from "react-redux";
import { CreateVisualizationComponent } from "./CreateVisualizationComponent";
import {createVisualizationActionMapper} from "../../../action-mappers/create-visualization-Action-mapper"

const mapStateToProps = (state:IState) => {
  return({
  })
}

const mapDispatchToProps = {
  createVisualizationActionMapper
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateVisualizationComponent)