import { Dispatch } from "redux";
import { FetchAllCategories } from "../remote/category-remote";

//Possible Category types to be sent to the reducer
export const categoriesTypes = {
  GET_ALL_CATEGORIES: "PROJECT-2_GET_ALL_CATEGORIES",
  FAILED_TO_RETRIEVE_CATEGORIES: "PROJECT-2_FAILED_TO_RETRIEVE_CATEGORIES"
};

//Function that sends all categories found in the database as payload to the reducer. If failed, throws exception
export const getAllCategoriesActionMapper = () => async (
  dispatch: Dispatch
) => {
  try {
    //Variable used to store the response of the remote function (which should return an array of all the categories in database)
    let categoryArray = await FetchAllCategories();
    //Dispatches the appropriate type and all categories to the reducer
    dispatch({
      type: categoriesTypes.GET_ALL_CATEGORIES,
      payload: {
        categoryArray
      }
    });
  } catch (e) {
    //Dispatches the appropriate type when the categories fail to be retrieved for any reason
    dispatch({
      type: categoriesTypes.FAILED_TO_RETRIEVE_CATEGORIES
    });
  }
};
