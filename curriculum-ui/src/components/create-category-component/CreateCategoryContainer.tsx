import { IState } from "../../reducers/index";
import { connect } from "react-redux";
import { createCatActionMapper } from "../../action-mappers/create-categories-action-mappers";
import { getAllCategoriesActionMapper } from "../../action-mappers/getall-categories-action-mappers";
import { CreateCategoryComponent } from "./CreateCategoryComponent";

const mapStateToProps = (state: IState) => {
  return {
    //Passes in the newly created category to the component
    createCat: state.createCategory.createCat,
    errorMessage: state.createCategory.errorMessage
  };
};
const mapDispatchToProps = {
  createCatActionMapper,
  getAllCategoriesActionMapper
};
//Used to connect the container to the component
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateCategoryComponent);
