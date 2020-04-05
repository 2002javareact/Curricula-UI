
export class Curriculum {
  id:number
  name:string
  skillList:Array<any>
  constructor(id:number,name:string,skillList:Array<any>){
    this.id=id;
    this.name=name;
    this.skillList=skillList;
  }
}