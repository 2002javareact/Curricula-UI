// import { Skill } from "../models/Skill"
// import { Card, CardText, Container, Row } from "reactstrap"
// import { IState } from "../../reducers"
// import { connect } from "react-redux"
// import React from "react"



// export interface IViewAllSkillsProps{
//     allSkills:Skill[]
//     errorMessage:string
//     //viewAllComponentsActionMapper:()=>void
// }


// export class UpdateSkillComponent extends React.Component<IViewAllSkillsProps,any>{
//     componentDidMount(){
//         if(this.props.allSkills.length === 0)
//         return (this.props.viewAllComponentsActionMapper())

//         else{}
//     }

//     render(){
//         let view = this.props.allSkills.map((skill) => {
//             return (
//            <Card className = "skill">
//                <CardText style={{backgroundColor: skill.category.categoryColor}}>{skill.skillName}</CardText>
//            </Card>
//         )})
//         return(
//             <>
//                 <Card style = {{textAlign: "center"}}>
//                 <h4>All Skills</h4>
//                 </Card>
//                 <Container className ="listOfSkills">
//                     <Row xs="4">
//                         {view}
//                     </Row>
//                 </Container>
//             </>
//         )
//     }
// }

// const mapStateToProps = (state:IState) => {
//     return {
//         allSkills: state.getAllSkills.allSkills,
//         errorMessage: state.getAllSkills.errorMessage        
//     }
// }

// const mapDispatchToProps = {
//     viewAllComponentsActionMapper
// }

// export default connect(mapStateToProps,mapDispatchToProps)(ViewAllSkillsComponent)

