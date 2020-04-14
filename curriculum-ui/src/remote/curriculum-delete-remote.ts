import { curriculaClient } from "./CurriculaClient";


export const curriculaDeleteCurriculum = async (curriculum_id: number) => {
	try {
		let response = await curriculaClient.delete("/curriculum/" + curriculum_id);
		return response.data;
	} catch (e) {
		if (e.status === 500) {
			throw e;
		} else {
		}
	}
};
