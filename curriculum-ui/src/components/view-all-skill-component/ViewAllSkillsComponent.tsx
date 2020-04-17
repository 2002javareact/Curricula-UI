import { Skill } from "../../models/Skill"
import { Row, Button, Card,  CardTitle, CardText, CardDeck } from "reactstrap"
import { IState } from "../../reducers"
import { connect } from "react-redux"
import React, { SyntheticEvent } from "react"
import { viewAllSkillsActionMapper, deleteSkillActionMapper } from "../../action-mappers/skill-action-mapper"
import { getAllCategoriesActionMapper } from "../../action-mappers/getall-categories-action-mappers"
import { Category } from "../../models/Category"
import { Redirect } from "react-router"


//this is the variable that will be mapped into component
//this declares the action mappers being used in the component 
export interface IViewAllSkillsProps{
    allSkills:Skill[]
    allCategory:Category[]
    errorMessage:string
    viewAllSkillsActionMapper:()=>void   
    getAllCategoriesActionMapper:()=>void
    deleteSkillActionMapper:(id:number)=>void
}

//this is used to redirect the webpage to update skills from an update button
export interface IViewAllSkillState{
    redirect:boolean
}



/*This class is a child of the React.component framework
**It is fed a state and a prop. 
**It returns a render of all skills with a legend in each skill explaining what category those skills belong to. 
**These skills are also sorted by the name of the category.*/ 
export class ViewAllSkillsComponent extends React.Component<IViewAllSkillsProps,IViewAllSkillState>{
    constructor(props:any){
        super(props)
        this.state ={
            redirect: false
        }
    }

    //checks wether the component has mounted and if not mounts the component. 
    componentWillMount(){
            return (this.props.viewAllSkillsActionMapper(),this.props.getAllCategoriesActionMapper())
    }

    //this is the actio taken when updtate button is clicked
    update = async (e: SyntheticEvent) =>{
        e.preventDefault()
        return (
            <Redirect to = "/skills/update"/>
        )
    }

    //this is the action taken when delete button is clicked
    delete = (id:number) => async (e: SyntheticEvent) =>{
        e.preventDefault()
        this.props.deleteSkillActionMapper(id)

    }

    //this function sets redirect to true if update button is clicked and the page is 
    //redirected to updtate. 
    setRedirect = () => {
        this.setState({
          redirect: true
        })
      }

      //if redirect in state is true then the page redirects to the update skill form
      renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/skills/update' />
        }
    }

        //this function sorts all skills and all categories by category name and then renders the 
        //skills in a row of three skills per row with a matching category. 
        render(){   
        this.props.allSkills.sort((a,b) =>{
            return a.category.categoryName.localeCompare(b.category.categoryName)})

            let view = this.props.allSkills.map((skill) => { 

            return (
            <>
                <div className="col-3 mx-1 my-1 ">
                <Card className=" p-1 col-8 w-100 isualizationCard shadow-custom">
                <CardTitle>{skill.skillName}</CardTitle>
                <CardText style={{color: skill.category.categoryColor}}>{skill.category.categoryName} ███</CardText>
                {this.renderRedirect()}
                <Row className="d-flex justify-content-center">
                <Button onClick = {this.setRedirect} className="col-4"color="info">Update</Button>
                <Button onClick = {this.delete(skill.skillId)} className="col-4" color="danger">Delete</Button>                
                </Row>
               </Card>
               </div>
            </>
        )})     

        this.props.allCategory.sort((a,b) =>{
            return a.categoryName.localeCompare(b.categoryName)}) 

        let legend = this.props.allCategory.map((category) => {
            return(
                <>
                <Button className="rounded-pill text-light m-auto font-weight-bold p-10"
                                style={{backgroundColor: category.categoryColor}}>{category.categoryName}</Button>
                </>
            )
        })
     
        return(
            <>
                <h3 className = "skillTitle">All Skills</h3>
            
                <Row className="d-flex justify-content-center">
                        {view}
                </Row>        
            </>
            

        )
    }
}
//maps the state in the store to the props of the component 
const mapStateToProps = (state:IState) => {
    return {
        allSkills: state.skills.allSkills,
        allCategory:state.allCategory.allCategory,
        errorMessage: state.skills.errorMessage        
    }
}
//maps the action mappers to the components 
const mapDispatchToProps = {
    viewAllSkillsActionMapper,
    getAllCategoriesActionMapper,
    deleteSkillActionMapper
}

//stores component to the store. 
export default connect(mapStateToProps,mapDispatchToProps)(ViewAllSkillsComponent)

