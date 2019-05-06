import React from 'react';
import Cal from 'react-calendar';
import classes from './calander.module.css'

class Calendar extends React.Component{
    state = {
        date: new Date()
    }

    onChange = date => {this.setState({date})}
    render(){
        return(
            <div>
            <Cal 
                onChange={this.onChange}
                value={this.state.date}
                calendarType= "US"
                className={classes.Calander} 
            />
            </div>
        )
    }
}

export default Calendar;