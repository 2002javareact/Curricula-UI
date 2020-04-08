import { IState } from "../../../reducers";
import { connect } from "react-redux";
import { CreateVisualizationComponent } from "../CreateVisualizationComponent";


const mapStateToProps = (state:IState) => {
  return({
  })
}

const mapDispatchToProps = {
  //TODO viewskillactionmapper
  createVisualizationActionMapper
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateVisualizationComponent)