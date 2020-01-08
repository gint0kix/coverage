import React, {Component} from 'react';
import { Button } from 'reactstrap';
import NewShiftForm from './NewShiftForm';
class ShiftRequestButton extends Component{
    render(){
        return(
            <Button
                color="dark"
                style={{marginBottom: '2rem'}}
                onClick={()=>{
                    const {shift}= <NewShiftForm/>
                }}>

            </Button>
        );
    }
}

export default ShiftRequestButton;