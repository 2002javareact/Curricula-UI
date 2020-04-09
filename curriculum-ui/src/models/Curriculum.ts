
export class Curriculum {
  curriculumId:number
  curriculumName:string
  skillList:Array<any>
  constructor(curriculumId:number,curriculumName:string,skillList:Array<any>){
    this.curriculumId=curriculumId;
    this.curriculumName=curriculumName;
    this.skillList=skillList;
  }
}