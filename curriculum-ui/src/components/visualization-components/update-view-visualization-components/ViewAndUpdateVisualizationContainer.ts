import { IState } from "../../../reducers"
import { connect } from "react-redux"
import {ViewAndUpdateVisualizationComponent} from "./ViewAndUpdateVisualizationComponent"
import {getOneVisualizationActionMapper} from "../../../action-mappers/get-all-visualizations-action-mapper"
import {updateVisualizationActionMapper} from "../../../action-mappers/update-visualization-action-mapper"

const mapStatetoProps = (state: IState) => {
    return {
        visualization: state.allVisualizations.visualization,
        errorMessage: state.allVisualizations.errorMessage
    }
}

const mapDispatchToProps = {
    getOneVisualizationActionMapper,
    updateVisualizationActionMapper
}

export default connect(mapStatetoProps,mapDispatchToProps)(ViewAndUpdateVisualizationComponent)