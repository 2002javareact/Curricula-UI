import { Dispatch } from "redux";
import { CreateCategory } from "../remote/category-remote";

//Possible Category types to be sent to the reducer
export const CreateCatTypes = {
  CREATE_CATEGORY: "CAT_CREATE_CATEGORY",
  FAILED_TO_CREATE_CATEGORY: "CAT_FAIL_TO_CREATE_CATEGORY"
};

//Function that takes in category fields (see Category model) and sends info as payload to the reducer. If failed, throws exception
export const createCatActionMapper = (
  categoryId: number,
  categoryColor: string,
  categoryName: string
) => async (dispatch: Dispatch) => {
  try {
    //Variable used to store the response of the remote function (which should return the newly created category)
    let createCat = await CreateCategory(
      categoryId,
      categoryColor,
      categoryName
    );
    //Dispatches the appropriate type and the new category to the reducer
    dispatch({
      type: CreateCatTypes.CREATE_CATEGORY,
      payload: {
        createCat
      }
    });
  } catch (e) {
    //Dispatches the appropriate type when a category fails to be created
    dispatch({
      type: CreateCatTypes.FAILED_TO_CREATE_CATEGORY
    });
  }
};
