import { Dispatch } from "redux";
import { Category } from "../models/Category";
import { updateCategory } from "../remote/category-remote";

//Possible Category types to be sent to the reducer
export const updateCategoryTypes = {
  UPDATE_CATEGORY: "UPDATE_CATEGORY",
  FAILED_TO_UPDATE_CATEGORY: "FAILED_TO_UPDATE_CATEGORY"
};

//Function that takes in category fields (see Category model), updates the specified category, and sends info as payload to the reducer. If failed, throws exception
export const updateCategoryActionMapper = (
  categoryId: number,
  categoryColor: string,
  categoryName: string
) => async (dispatch: Dispatch) => {
  try {
    //Variable used to store the response of the remote function (which should return the category that was updated in the database)
    let updatedCategory: Category = await updateCategory(
      categoryId,
      categoryColor,
      categoryName
    );
    //Dispatches the appropriate type and the updated category to the reducer
    dispatch({
      type: updateCategoryTypes.UPDATE_CATEGORY,
      payload: {
        updatedCategory
      }
    });
  } catch (e) {
    //Dispatches the appropriate type when the categories fails to be updated
    dispatch({
      type: updateCategoryTypes.FAILED_TO_UPDATE_CATEGORY
    });
  }
};
