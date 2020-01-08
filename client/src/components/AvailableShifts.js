import {CSSTransition, TransitionGroup} from 'react-transition-group';
import React, {Component} from 'react';
import { Container } from 'reactstrap';

class AvailableShifts extends Component{
    state={
        shifts:[]
    }
    
    render(){
        const {shifts}= this.state;
        return(
            <Container>
            </Container>
        );
    }
}
export default AvailableShifts;