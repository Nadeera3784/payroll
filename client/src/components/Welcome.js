import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';
import './Welcome.css';

class Signin extends React.Component {
    onSubmit = formProps => {
        this.props.signin(formProps, ()=>{
            this.props.history.push('/dashboard');
        })
    }

    componentDidMount(){
        if(this.props.authenticated){
            this.props.history.push('/dashboard');
        }
    }

    render(){
        const { handleSubmit } = this.props
        return (
            <div className='welcome'>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5>Sign In</h5> 
                            <h6>Payroll and HRM system</h6>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit(this.onSubmit)}>
                                <div className="form-group">
                                    <fieldset>
                                        <label>Email</label>
                                        <Field 
                                            name='email'
                                            type='text'
                                            component='input'
                                            autoComplete='none'
                                            className='form-control'
                                        />
                                    </fieldset>
                                </div>
                                <div className="form-group">
                                    <fieldset className="form-group">
                                        <label>Password</label>
                                        <Field 
                                            name='password'
                                            type='password'
                                            component='input'
                                            autoComplete='none'
                                            className='form-control'
                                        />
                                    </fieldset>
                                </div>

                                <div style={{color:'red'}}>
                                    {this.props.errorMessage}
                                </div>
                                <div className="modal-footer">
                                    <button className="btn btn-primary">Sign Up</button>
                                </div>
                            </form>
                        </div>
                    </div>   
                </div>    
            </div>
        )
    }
}
function mapStateToProps(state){
    return { errorMessage: state.auth.errorMessage , authenticated : state.auth.authenticated }
}                        
export default compose( // compose Allowing to apply mutiple HOC with clean way
    connect(mapStateToProps, actions),
    reduxForm( {form: 'signup'} )// form: signup is the name of the form
)(Signin); 
