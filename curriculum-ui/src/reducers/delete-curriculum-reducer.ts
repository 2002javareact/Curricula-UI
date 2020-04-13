import { Curriculum } from "../models/Curriculum";
import { IDeleteCurriculumState } from ".";
import { deleteCurriculumTypes } from "../action-mappers/delete-curriculum-action-mapper";
import { AnyAction } from "redux";

const initialState: IDeleteCurriculumState = {
	deleteCurriculum: new Curriculum(0, "", []),
	errorMessage: "",
};

export const deleteCurriculumReducer = (
	state = initialState,
	action: AnyAction
) => {
	switch (action.type) {
		case deleteCurriculumTypes.DELETE_CURRICULUM: {
			return {
				...state,
				deleteCurriculum: action.payload.deleteCurriculum,
			};
		}
		case deleteCurriculumTypes.FAILED_TO_DELETE_CURRICULUM: {
			return {
				...state,
				errorMessage: action.payload.errorMessage,
			};
		}
		default:
			return state;
	}
};
