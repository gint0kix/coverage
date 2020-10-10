import {CSSTransition, TransitionGroup} from 'react-transition-group';
import React, {Component} from 'react';
import { Container, ListGroup, ListGroupItem } from 'reactstrap';
import ShiftRequestButton from './ShiftRequestButton';
import NewShiftForm from './NewShiftForm';
class AvailableShifts extends Component{
    state={
        shifts:[
            {
                Company:"Test Company",
                StoreNumber:123,
                ShiftStart:"2020-01-13T16:00:00",
                ShiftEnd:"2020-01-13T20:00:00",
                Description:"Test Description",
                Poster:"Tester1",
                DatePosted:"2020-01-12T16:00:00",
                Taken:false
            },
            {
                Company:"Test Company2",
                StoreNumber:1421,
                ShiftStart:"2020-01-14T6:00:00",
                ShiftEnd:"2020-01-14T14:00:00",
                Description:"Test Descriptionss",
                Poster:"Tester2",
                DatePosted:"2020-01-12T16:00:00",
                Taken:false
            }]
    }
    
    render(){
        const {shifts}= this.state;
        return(
            <Container>
                <NewShiftForm/>
                <ShiftRequestButton/>
                <ListGroup>
                    {shifts.map(({Company, ShiftStart, ShiftEnd})=>(
                        <CSSTransition key={Company} timeout={500} classNames="fade">
                            <ListGroupItem>
                                {ShiftStart} To {ShiftEnd}
                            </ListGroupItem>
                        </CSSTransition>
                    ))}
                </ListGroup>
            </Container>
        );
    }
}
export default AvailableShifts;