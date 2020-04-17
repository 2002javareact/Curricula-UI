import { IState } from "../../reducers";
import { ViewAllCategoriesComponent } from "./ViewAllCategoriesComponent";
import { getAllCategoriesActionMapper } from "../../action-mappers/getall-categories-action-mappers";
import { CategoryDeleteByIdActionMapper } from "../../action-mappers/delete-category-action-mappers";
import { connect } from "react-redux";

const mapStateToProps = (state: IState) => {
  return {
    //Passes in the array of all categories to the component
    allCategory: state.allCategory.allCategory,
    //Passes in the deleted category to the component
    deletedCategory: state.deleteCategoryById.deleteCategoryById,
    errorMessage: state.allCategory.errorMessage
  };
};

const mapDispatchToProps = {
  getAllCategoriesActionMapper,
  CategoryDeleteByIdActionMapper
};

//Used to connect the container to the component
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewAllCategoriesComponent);
