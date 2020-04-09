import { IState } from "../../../reducers"
import { connect } from "react-redux"
import {viewAllVisualizationComponent} from "./ViewAllVisualizationComponent"
import {getAllVisualizationsActionMapper} from "../../../action-mappers/get-all-visualizations-action-mapper"

const mapStateToProps = (state:IState) => {
    return {
        allVisualizations: state.allVisualizations.allVisualizations,
        errorMessage: state.allVisualizations.errorMessage        
    }
}

const mapDispatchToProps = {
    getAllVisualizationsActionMapper
}

export default connect(mapStateToProps,mapDispatchToProps)(viewAllVisualizationComponent)
