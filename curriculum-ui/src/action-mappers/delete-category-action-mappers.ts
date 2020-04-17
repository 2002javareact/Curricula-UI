import { Dispatch } from "redux";
import { deleteCategoryById } from "../remote/category-remote";

//Possible Category types to be sent to the reducer
export const deleteCategoryType = {
  SUCCESSFUL: "DELETE_CATEGORY",
  CATEGORY_NOT_FOUND: "DELETE_CATEGORY_NOT_FOUND",
  INTERNAL_SERVER: "DELETE_CATEGORY_INTERNAL_SERVER_ERROR"
};

//Function that takes in the ID of the category that needs to be deleted and sends info as payload to the reducer. If failed, throws exception
export const CategoryDeleteByIdActionMapper = (categoryId: number) => async (
  dispatch: Dispatch
) => {
  try {
    //Variable used to store the response of the remote function
    let deletedCategory = await deleteCategoryById(categoryId);
    //Dispatches the appropriate type and the deleted category to the reducer
    dispatch({
      type: deleteCategoryType.SUCCESSFUL,
      payload: {
        deletedCategory
      }
    });
  } catch (e) {
    //Dispatches the appropriate type when the category is not found or if there is an internal server error
    if (e.status === 404) {
      dispatch({
        type: deleteCategoryType.CATEGORY_NOT_FOUND
      });
    } else {
      dispatch({
        type: deleteCategoryType.INTERNAL_SERVER
      });
    }
  }
};
