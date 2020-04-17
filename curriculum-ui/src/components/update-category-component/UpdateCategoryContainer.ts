import { IState } from "../../reducers";
import { UpdateCategoryComponent } from "./UpdateCategoryComponent";
import { updateCategoryActionMapper } from "../../action-mappers/update-category-action-mapper";
import { connect } from "react-redux";

const mapStateToProps = (state: IState) => {
  return {
    //Passes in the updated category to the component
    updatedCategory: state.allCategory.updatedCategory,
    errorMessage: state.allCategory.errorMessage
  };
};

const mapDispatchToProps = {
  updateCategoryActionMapper
};
//Used to connect the container to the component
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateCategoryComponent);
