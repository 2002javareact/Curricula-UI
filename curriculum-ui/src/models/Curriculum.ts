
export class Curriculum {
  curriculumId:number
  curriculumName:string
  skills:Array<any>
  constructor(curriculumId:number,curriculumName:string,skills:Array<any>){
    this.curriculumId=curriculumId;
    this.curriculumName=curriculumName;
    this.skills=skills;
  }
}