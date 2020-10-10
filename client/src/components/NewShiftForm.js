import React, {Component} from 'react';
import {Col, Row,Button, Form, FormGroup, Label, Input, FormText, Container} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
class NewShiftForm extends Component{
    constructor(props){
        super(props)
        
        this.state = {
            shiftStartDate:0,
            shiftStartTime:0,
            shiftEndDate:0,
            shiftEndTime:0
                    }
    }

    handleStartTimeChange=(event)=>{
        this.setState({shiftStartTime: event.target.value});
      }
    handleEndTimeChange=(event)=>{
        this.setState({shiftEndTime: event.target.value});
    }
    handleStartDateChange=(event)=>{
        this.setState({shiftStartDate: event.target.value});
    }
    handleEndDateChange=(event)=>{
        this.setState({shiftEndDate: event.target.value});
    }
    render(){
        return(
            <Container>
            <Label style={{position:"relative"}}>New Coverage Request</Label>
            <Form>
                <Row sm={10} form>
                    <FormGroup name="ShiftStartForm">
                        <Label>From:</Label>
                        <Input type="date" name="shiftDateStart" placeholder="Enter Date" onChange={this.handleStartDateChange} value={this.state.shiftStartDate}/>
                        <Label>Start Time:</Label>
                        <Input type="time" name="shiftTimeStart" placeholder="Enter Time" onChange={this.handleStartTimeChange} value={this.state.shiftStartTime}/>
                    </FormGroup>
                    <FormGroup name="ShiftEndForm">
                        <Label>To:</Label>
                        <Input type="date" name="shiftDateEnd" placeholder="Enter Date" onChange={this.handleEndDateChange} value={this.state.shiftEndDate}/>
                        <Label>End Time:</Label>
                        <Input type="time" name="shiftTimeEnd" placeholder="Enter Time" onChange={this.handleEndTimeChange} value={this.state.shiftEndTime}/>
                    </FormGroup>
                </Row>
            </Form>
            </Container>
        );
    }
}

export default NewShiftForm