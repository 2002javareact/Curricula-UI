import { Category } from "../models/Category";
import { CategoryNotFoundError } from "../errors/CategoryNotFoundError";
import { InternalServiceError } from "../errors/InternalServiceError";
import { curriculaClient } from "./CurriculaClient";

//Function used to get a category by id. Returns a Category
export async function getCategoryById(
  categoryId: number | undefined
): Promise<Category> {
  try {
    //Uses Axios client to sent HTTP request to database
    let res = await curriculaClient.get(`/category/${categoryId}`);

    if (res.status === 400) {
      throw new CategoryNotFoundError();
    }
    return res.data;
  } catch (e) {
    if (e.status === 400) {
      throw e;
    } else if (e.status === 404) {
      throw new CategoryNotFoundError();
    } else {
      throw new InternalServiceError();
    }
  }
}

//Function used to get all categories. Returns an array of type Category
export const FetchAllCategories = async () => {
  try {
    //Uses Axios client to sent HTTP request to database
    let allCategory = await curriculaClient.get(`/category`);

    if (allCategory.status === 400) {
      throw new CategoryNotFoundError();
    }
    return allCategory.data;
  } catch (e) {
    if (e.status === 400) {
      throw e;
    } else if (e.status === 404) {
      throw new CategoryNotFoundError();
    } else {
      console.log(e);
      throw new InternalServiceError();
    }
  }
};

//Function used to create a category. Returns a Category
export async function CreateCategory(
  categoryId: number,
  categoryColor: string,
  categoryName: string
): Promise<Category> {
  let catData = {
    categoryId,
    categoryColor,
    categoryName
  };
  try {
    //Uses Axios client to sent HTTP request to database
    let allCategory = await curriculaClient.post("/category", catData);

    if (allCategory.status === 404) {
      throw new CategoryNotFoundError();
    }
    return allCategory.data;
  } catch (e) {
    if (e.status === 404) {
      throw e;
    } else {
      throw new InternalServiceError();
    }
  }
}

//Function used to update a category. Returns a Category
export async function updateCategory(
  categoryId: number,
  categoryColor: string,
  categoryName: string
): Promise<Category> {
  let updatedCategory = {
    categoryId,
    categoryColor,
    categoryName
  };
  try {
    //Uses Axios client to sent HTTP request to database
    let res = await curriculaClient.patch(`/category`, updatedCategory);

    if (res.status === 400) {
      throw new CategoryNotFoundError();
    }
    return res.data;
  } catch (e) {
    if (e.status === 400) {
      throw e;
    } else if (e.status === 404) {
      throw new CategoryNotFoundError();
    } else {
      throw new InternalServiceError();
    }
  }
}

//Function used to delete a category by id. Returns void
export async function deleteCategoryById(
  categoryId: number | undefined
): Promise<void> {
  try {
    //Uses Axios client to sent HTTP request to database
    let res = await curriculaClient.delete(`/category/${categoryId}`);

    return res.data;
  } catch (e) {
    if (e.status === 400) {
      throw e;
    } else if (e.status === 404) {
      throw new CategoryNotFoundError();
    } else {
      throw new InternalServiceError();
    }
  }
}
