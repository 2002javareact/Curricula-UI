import React, { SyntheticEvent } from "react";
import {
	Container,
	Button,
	Row,
	Col,
	Card,
	CardTitle,
	CardText,
	CardColumns,
	InputGroup,
	Input,
	InputGroupButtonDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	Label,
	UncontrolledDropdown,
	Form,
	FormGroup,
	Badge,
	CardBody,
} from "reactstrap";
import { Curriculum } from "../../../models/Curriculum";
import {
	BrowserRouter as Router,
	Route,
	Link,
	useParams,
	Redirect,
} from "react-router-dom";
import { Skill } from "../../../models/Skill";
import { Category } from "../../../models/Category";

interface IViewAndUpdateCurriculumProps {
   updateCurriculumActionMapper:(c:Curriculum)=>any,
    updatedCurriculum: Curriculum,
    curriculum:Curriculum,
    getCurriculumByIdActionMapper:(id:number)=>any,
    match:any,
    // allSkills: Skill[],
    getAllCategoriesActionMapper:()=>any
    getSkillsByCategoryIdActionMapper:(id:number)=>any,
    viewAllSkillsActionMapper:() => void,
    errorMessageSkills:string,
    allCategory:Array<Category>,
    skillsByCategoryId:Array<Skill>
		deleteCurriculumActionMapper: (id: number) => any;

}

interface IViewAndUpdateCurriculumState {
	currentSkillList: Array<any>;
	isShowUpdate: boolean;
	skills: Curriculum[];
	existSkillList: Array<any>;
	notExistSkillList: Array<any>;
	categoryId: number;
	name: string;
	isLoading: boolean;
	alert: string;
	isRedirect:boolean
}

export class ViewAndUpdateCurriculumComponent extends React.Component<
	IViewAndUpdateCurriculumProps,
	IViewAndUpdateCurriculumState
> {
	constructor(props: any) {
		super(props);
		this.state = {
			name: "",
			currentSkillList: [],
			isShowUpdate: false,
			skills: [],
			existSkillList: [],
			notExistSkillList: [],
			categoryId: 1,
			isLoading: false,
			alert: "",
			isRedirect:false
		};

		this.handlerName = this.handlerName.bind(this);
		this.handlerCategory = this.handlerCategory.bind(this);
		this.handlerAddSkill = this.handlerAddSkill.bind(this);
		this.handlerRemoveSkill = this.handlerRemoveSkill.bind(this);
		this.submitCategory = this.submitCategory.bind(this);
		this.submitCurriculum = this.submitCurriculum.bind(this);
		this.submitDeleteCurriculum = this.submitDeleteCurriculum.bind(this);
	}
	async componentDidMount() {
		let id;
		if (this.props.match) {
			id = this.props.match.params.id;
			console.log(id);
		}
		if (id) {
			// let curriculumId = this.props.getCurriculumByIdActionMapper(parseInt(id));
			await this.props.getCurriculumByIdActionMapper(parseInt(id));
			//     console.log("We are in this id: " + id)
			// this.setState({curriculum: curriculumId});
		}

		if (this.props.allCategory) {
			await this.props.getAllCategoriesActionMapper();
		}
		let emptyArr: Array<Skill> = [];
		this.props.curriculum.skills.forEach((skill: Skill) =>
			emptyArr.push(skill)
		);
		this.setState({
			existSkillList: emptyArr,
		});

		//     if(this.props.allSkills.length === 0){this.props.viewAllSkillsActionMapper()}

		// else{

		// }
	}

	/*
      InitalState: // occur in component did mount
        - curriculum's skill
      existing: // handler or update
        - initalstate + changes
      not existing
        - changes not
    */
	static getDerivedStateFromProps(
		props: any,
		state: IViewAndUpdateCurriculumState
	) {
		const notExistSkillList = props.skillsByCategoryId.filter(
			(el: Skill) =>
				!state.existSkillList.some((item: Skill) => el.skillId === item.skillId)
		);

		return {
			notExistSkillList: notExistSkillList,
		};
	}

	async submitDeleteCurriculum(e: SyntheticEvent) {
		e.preventDefault();
		 await this.props
			.deleteCurriculumActionMapper(this.props.curriculum.curriculumId)
			.then((e: any) => {
				this.setState({ isLoading: false });
				this.setState({isRedirect: true })
			});
		this.props.deleteCurriculumActionMapper(
			this.props.curriculum.curriculumId
		);
	}

	async submitCurriculum(e: SyntheticEvent) {
		e.preventDefault();
		//TODO
		if (this.state.existSkillList.length === 0) {
			this.setState({ alert: "Please include at least one skill" }, () =>
				setTimeout(() => this.setState({ alert: "" }), 5000)
			);
		} else {
			this.setState({ isLoading: true });
			const curriculum = new Curriculum(
				this.props.curriculum.curriculumId,
				this.state.name,
				this.state.existSkillList
			);
			const response = await this.props
				.updateCurriculumActionMapper(curriculum)
				.then((e: any) => {
					this.setState({ isLoading: false });
				});
			this.props.getCurriculumByIdActionMapper(
				this.props.curriculum.curriculumId
			);
		}
	}
	handlerCategory(e: any) {
		this.setState({ categoryId: e.target.value });
	}
	submitCategory(e: SyntheticEvent) {
		e.preventDefault();
		this.props.getSkillsByCategoryIdActionMapper(this.state.categoryId);
	}
	handlerAddSkill(e: SyntheticEvent, skill: Skill) {
		const newSkillList = [...this.state.existSkillList, skill].sort(
			(a: Skill, b: Skill) => {
				return a.category.categoryId - b.category.categoryId;
			}
		);
		this.setState({ existSkillList: newSkillList });
		this.setState({
			notExistSkillList: this.state.notExistSkillList.filter(
				(el: Skill) => el.skillId !== skill.skillId
			),
		});
	}
	handlerRemoveSkill(e: SyntheticEvent, skill: Skill) {
		const newNotSkillList = [...this.state.existSkillList, skill];
		this.setState({ notExistSkillList: newNotSkillList });
		this.setState({
			existSkillList: this.state.existSkillList.filter(
				(el: Skill) => el.skillId !== skill.skillId
			),
		});
	}
	public updateCurriculumSubmit = () => this.setState((prevState)=>({isShowUpdate:!prevState.isShowUpdate}));
	handlerName(e:any){this.setState({name:e.target.value||undefined})}
	render() {
		return (
			//TODO: Give option to keep Curriculum Name
					//isShowUpdate = true
					
				<Container className="curriculum-view-update-container">
					{this.state.isRedirect && <Redirect to={"/curriculum"}/> }
						<Row className="p-4 m-4 border border-light shadow-custom text-left rounded bg-light">
							{!this.props.curriculum ? (								
								<Col>
									<h3>No Curriculum found</h3>
								</Col>
							):(
								<React.Fragment>
									<Col lg={12}>
										<h3>
											Curriculum: {this.props.curriculum.curriculumName}
										</h3>
									</Col>
									<Col lg={12}>
										<Button
											onClick={this.submitDeleteCurriculum}
											className="curriculum-view-update-buttons"
											color="danger"
										>
											Delete Curriculum
										</Button>
										<Button
											onClick={this.updateCurriculumSubmit}
											className="curriculum-view-update-buttons"
											color="primary"
										>
											Update Curriculum
										</Button>
									</Col>
									{/* <Col>
                                <Card className="curriculum-view-update-card">
                                    <CardTitle><h3 className="curriculum-view-update-left-text">Skills:</h3></CardTitle>
                                    <CardColumns>
                                        {this.props.curriculum.skills.map(skills => <CardText>{skills.skillName}</CardText>)}
                                    </CardColumns>
                                </Card>
                            </Col> */}
									<Col lg={12}>
										<p className="curriculum-view-update-left-text">
											Current curriculum:
										</p>
									</Col>
									{this.props.curriculum.skills.map((skills) => (
										<Card className="curriculum-view-update-card-skills">
											<CardTitle>{skills.skillName}</CardTitle>
										</Card>
									))}
									<Col lg={12}>
										<br />
										<p className="curriculum-view-update-left-text">
											Update curriculum:
										</p>
									</Col>

									{this.state.isShowUpdate &&
									<Col lg={12}>
										<Form>
											<Form>
												<FormGroup>
													<Label className="text-left">
														Enter new name of the Curriculum
													</Label>
													<Input
														type="text"
														onChange={this.handlerName}
														placeholder="Enter the Curriculum Name"
														defaultValue={this.state.name}
													/>
												</FormGroup>
											</Form>

											<Form onSubmit={this.submitCurriculum}>
												<Button
													color="primary"
													type="submit"
													className="my-3 col-sm-12"
												>
													Submit
												</Button>
											</Form>
											<FormGroup>
												<Label className="curriculum-view-update-left-text">
													Category
												</Label>
											</FormGroup>
											{/* This form gets the catagories by dropdown*/}
											<Form inline onSubmit={this.submitCategory}>
												<FormGroup className="col-sm-10 pl-0">
													<Label className="text-align-left col-sm-2">
														Category
													</Label>
													<Input
														type="select"
														name="category"
														className="col-sm-10"
														onChange={this.handlerCategory}
													>
														{this.props.allCategory.map((el: Category) => (
															<option value={el.categoryId}>
																{el.categoryName}
															</option>
														))}
													</Input>
												</FormGroup>
												<Button color="primary" className="col-sm-2">
													Search
												</Button>
											</Form>

											{/* This form gets the Skills by catagories*/}
											<Form className="shadow-custom">
												<FormGroup>
													{this.state.existSkillList.length !== 0 && (
														<React.Fragment>
															<Label>
																Skills Currently in this Curriculum:
															</Label>
															{this.state.existSkillList.map((el: Skill) => (
																<Card
																	style={{
																		backgroundColor: el.category.categoryColor,
																	}}
																>
																	<CardBody>
																		<CardTitle className="text-light font-weight-bold">
																			{el.skillName}
																		</CardTitle>
																		<Button
																			className="text-light font-weight-bold"
																			color="danger"
																			onClick={(e: SyntheticEvent) =>
																				this.handlerRemoveSkill(e, el)
																			}
																		>
																			Remove
																		</Button>
																	</CardBody>
																</Card>
															))}
														</React.Fragment>
													)}
													{this.state.notExistSkillList.length !== 0 && (
														<React.Fragment>
															<Label>
																Skills Currently Not in this Curriculum
															</Label>
															{this.state.notExistSkillList.map((el: Skill) => (
																<Card
																	style={{
																		backgroundColor: el.category.categoryColor,
																	}}
																>
																	<CardBody>
																		<CardTitle className="text-light font-weight-bold">
																			{el.skillName}
																		</CardTitle>
																		<Button
																			className="text-light font-weight-bold"
																			color="primary"
																			onClick={(e: SyntheticEvent) =>
																				this.handlerAddSkill(e, el)
																			}
																		>
																			Add
																		</Button>
																	</CardBody>
																</Card>
															))}
														</React.Fragment>
													)}
												</FormGroup>
											</Form>
										</Form>
									</Col>
									}
								</React.Fragment>
							)}
						</Row>
					</Container>
					//isShow is false
		// 			<Container className="curriculum-view-update-container">
		// 				<Row className="p-4 m-4 border border-secondary">
		// 					{this.props.curriculum ? (
		// 						<React.Fragment>
		// 							<Col lg={12}>
		// 								<h3>
		// 									Curriculum: {this.props.curriculum.curriculumName}
		// 								</h3>
		// 							</Col>
		// 							<Col lg={12}>
		// 								<Button
		// 									onClick={this.submitDeleteCurriculum}
		// 									className="curriculum-view-update-buttons"
		// 									color="danger"
		// 								>
		// 									Delete Curriculum
		// 								</Button>
		// 								<Button
		// 									onClick={this.updateCurriculumSubmit}
		// 									className="curriculum-view-update-buttons"
		// 									color="primary"
		// 								>
		// 									Update Curriculum
		// 								</Button>
		// 							</Col>
		// 							<Col>
		// 								<Card className="curriculum-view-update-card">
		// 									<CardTitle>
		// 										<h3 className="curriculum-view-update-left-text">
		// 											Skills:
		// 										</h3>
		// 									</CardTitle>
		// 									<CardText>
		// 										{this.props.curriculum.skills.map((skills) => (
		// 											<Badge
		// 												pill
		// 												className="curriculum-view-update-pills"
		// 												style={{
		// 													backgroundColor: skills.category.categoryColor,
		// 												}}
		// 											>
		// 												{skills.skillName}
		// 											</Badge>
		// 										))}
		// 									</CardText>
		// 								</Card>
		// 							</Col>
		// 						</React.Fragment>
		// 					) : (
		// 						<Col>
		// 							<h3>No Curriculum found</h3>
		// 						</Col>
		// 					)}
		// 				</Row>
		// 			</Container>
		// 		)}
		// 	</React.Fragment>
		// );\
		)
	}
}
