import React, {Component} from 'react';
import {Col, Row,Button, Form, FormGroup, Label, Input, FormText, Container} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
class NewShiftForm extends Component{
    render(){
        return(
            <Container>
            <Label style={{position:"relative"}}>New Coverage Request</Label>
            <Form>
                <Row sm={10} form>
                    <FormGroup name="ShiftStartForm">
                        <Label>From:</Label>
                        <Input type="date" name="shiftDateStart" placeholder="Enter Date"/>
                        <Label>Start Time:</Label>
                        <Input type="time" name="shiftTimeStart" placeholder="Enter Time"/>
                    </FormGroup>
                    <FormGroup name="ShiftEndForm">
                        <Label>To:</Label>
                        <Input type="date" name="shiftDateEnd" placeholder="Enter Date"/>
                        <Label>End Time:</Label>
                        <Input type="time" name="shiftTimeEnd" placeholder="Enter Time"/>
                    </FormGroup>
                </Row>
            </Form>
            </Container>
        );
    }
}

export default NewShiftForm