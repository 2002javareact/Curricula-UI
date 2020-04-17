import { HttpError } from "./HttpErrors";

export class CategoryNotFoundError extends HttpError {
  constructor() {
    super("Category Not Found", 404);
  }
}
