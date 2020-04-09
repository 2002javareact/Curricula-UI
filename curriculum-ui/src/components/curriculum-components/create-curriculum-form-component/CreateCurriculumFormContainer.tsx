import { IState } from "../../../reducers";
import { connect } from "react-redux";
import { CreateCurriculumFormComponent } from "./CreateCurriculumFormComponent";
import { createCurriculumActionMapper } from '../../../action-mappers/create-curriculum-action-mapper';


const mapStateToProps = (state:IState) => {
  return({
  })
}

const mapDispatchToProps = {
  //TODO viewskillactionmapper
  createCurriculumActionMapper
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateCurriculumFormComponent)