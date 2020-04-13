import { IState } from "../../../reducers"
import { connect } from "react-redux"
import {ViewAllVisualizationComponent} from "./ViewAllVisualizationComponent"
import {getAllVisualizationsActionMapper,getOneVisualizationActionMapper} from "../../../action-mappers/get-all-visualizations-action-mapper"


const mapStateToProps = (state:IState) => {
    return {
        allVisualizations: state.allVisualizations.allVisualizations,
        visualization: state.allVisualizations.visualization,
        errorMessage: state.allVisualizations.errorMessage,

    }
}

const mapDispatchToProps = {
    getAllVisualizationsActionMapper,
    getOneVisualizationActionMapper
    
}

export default connect(mapStateToProps,mapDispatchToProps)(ViewAllVisualizationComponent)
