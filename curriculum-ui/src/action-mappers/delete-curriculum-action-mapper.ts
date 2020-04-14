import { Dispatch } from "redux";
import { curriculaDeleteCurriculum } from "../remote/curriculum-delete-remote";
import { Curriculum } from "../models/Curriculum";

export const deleteCurriculumTypes = {
	DELETE_CURRICULUM: "CURRICULA_DELETE_CURRICULUM",
	FAILED_TO_DELETE_CURRICULUM: "CURRICULA_FAILED_TO_DELETE_CURRICULUM",
};

export const deleteCurriculumActionMapper = (curriculum_id: number) => async (
	dispatch: Dispatch
) => {
	try {
		let deleteCurriculum: Curriculum = await curriculaDeleteCurriculum(
			curriculum_id
		);
		dispatch({
			type: deleteCurriculumTypes.DELETE_CURRICULUM,
			payload: {
				deleteCurriculum,
			},
		});
		dispatch({
			type: deleteCurriculumTypes.FAILED_TO_DELETE_CURRICULUM,
			payload: {
				deleteCurriculum,
			},
		});
	} catch (e) {
		//todo
	}
};
