import React from 'react';
import FirstPage from './FormPages/firstPage';
import SecondPage from './FormPages/secondPage';
import ThirdPage from './FormPages/thirdPage';

class addEmployee extends React.Component{
    state = { page: 1 }

    nextPage = () => {
        this.setState({ page : this.state.page + 1 })
    }

    previousPage = () => {
        this.setState({ page : this.state.page - 1 })
    }

    render(){
        const { onSubmit } = this.props
        const { page } = this.state
        
        return (
            <div>
                {page === 1 && <FirstPage onSubmit = {this.nextPage} />}
                {page === 2 && (
                    <SecondPage 
                        previousPage={this.previousPage}
                        onSubmit={this.nextPage}
                    />
                )}
                {page === 3 && (
                    <ThirdPage 
                        previousPage={this.previousPage}
                        onSubmit={onSubmit} 
                    />
                )}
            </div>
            
        )
    }
    
}

export default addEmployee;