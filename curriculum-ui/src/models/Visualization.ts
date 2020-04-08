export class Visualization{
    visualizationId: number 
    visualizationName:string
    CurriculumList:Array<any> 
    constructor(visualizationId:number,visualizationName:string,CurriculumList:Array<any>)
    {
        this.visualizationId = visualizationId
        this.visualizationName = visualizationName
        this.CurriculumList = CurriculumList
    }
}