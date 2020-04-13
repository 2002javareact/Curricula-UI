import { curriculaClient } from "./CurriculaClient";
import { Curriculum } from "../models/Curriculum";

export const curriculaDeleteCurriculum = async (curriculum_id: number) => {
	try {
		let response = await curriculaClient.get("/curriculum/" + curriculum_id);
		return response.data;
	} catch (e) {
		if (e.status === 500) {
			throw e;
		} else {
		}
	}
};
