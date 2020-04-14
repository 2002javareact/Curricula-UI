
import { Form, FormGroup, Label, Col, Input, Button, Table, InputGroup, InputGroupAddon, InputGroupText, ButtonGroup, Card } from 'reactstrap'
import { Redirect } from 'react-router'
import { Category } from '../../models/Category'
import { SyntheticEvent } from 'react'
import React from 'react'


//prop interface

//state interface?

interface ICreateCatProps
{
    CreateCat: Category
    errorMessage:string
    createCatActionMapper:(ci:number, cc: string, cn: string )=>void
}


 interface ICatState {
  categoryId: number
  categoryColor: string  
  categoryName: string
 	
 	}


export class CreateCategoryComponent extends React.Component<ICreateCatProps, ICatState> {

   
    constructor(props:any)
    {
        super(props)
        this.state = 
        {   categoryId: 0,
            categoryColor: '',
            categoryName: '', 
	      
	   
        }
    }

submitNewCategory = async (e: SyntheticEvent) => 
{
    e.preventDefault()
    this.props.createCatActionMapper(this.state.categoryId, this.state.categoryColor,this.state.categoryName)
    this.setState({    
        
        categoryId: 0, 
        categoryColor:'', 
        categoryName: '',  
      
    })
    
}


createCategoryId = (e: any) => {

    this.setState({
      categoryId: e.currentTarget.value
    })
}
createCategoryColor = (e: any) => {

    this.setState({
      categoryColor: e.currentTarget.value
    })
}

createCategoryName = (e: any) => {

    this.setState({
      categoryName: e.currentTarget.value
    })
}




  render() {
    return (
      <div>


        <Form onSubmit={this.submitNewCategory}>
                         <FormGroup row>
                              <Label for="Create Catagory id" sm={3}> Catagory id</Label>
                              <Col sm={6}>
                                  <Input onChange={this.createCategoryId} value={this.state.categoryId} 
                                  type="number" name="catNumber" id="catNumber" placeholder="Please Enter The Catagory Id" required />
                              </Col>
                              </FormGroup>
                              <br/>
                        
                              
                              <FormGroup row>
                              <Label for="Create Category Color" sm={3}>Category Color</Label>
                              <Col sm={6}>
                                  <Input onChange={this.createCategoryColor} value={this.state.categoryColor} 
                                  type="text" name=" catCategoryColor" id="catCategoryColor" placeholder="Please enter the color" required />
                              </Col>
                              </FormGroup>
                              <br/>


                              <FormGroup row>
                              <Label for="Create Category Name" sm={3}>Category Name</Label>
                              <Col sm={6}>
                              <Input onChange={this.createCategoryName} value={this.state.categoryName} 
                                  type="text" name=" createCatName" id="createCatName" placeholder="Please enter the Catagory Name" required />
                             
                              </Col>
                              </FormGroup>
                             
                              <br/>
                          <Button color='info'>Submit</Button>
                      </Form>

                     
        
                      <p>{this.props.errorMessage}</p>

                  </div>
    );
  }
}
