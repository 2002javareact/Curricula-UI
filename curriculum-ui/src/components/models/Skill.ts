import { Category } from "./Category"

export class skill{
    skillId: number 
    skillName: string
    category: Category 
    constructor(skillId:number,skillName:string, category:Category)
    {
        this.skillId = skillId
        this.skillName = skillName
        this.category = category
    }
}