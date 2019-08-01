import React from 'react';
import Aux from '../../../hoc/aux/aux';
import Backdrop from '../backdrop/backdrop';
import { connect } from 'react-redux';
import * as actions from '../../../actions/index';
import { Modal , ModalBody , ModalHeader, ModalFooter, Button} from 'reactstrap'

class ModalContainer extends React.Component{
    render(){
        return(
            <Aux>
                <Backdrop show={this.props.modal} />
                <div>
                    <Modal size="md" isOpen={this.props.modal} className={this.props.className}>
                        <ModalHeader style={{display:'inline'}}>
                                {this.props.title}
                                <Button color="outline-danger" size="sm" style={{float:"right"}} onClick={this.props.toggleModal} >Cancel</Button>
                        </ModalHeader>
                        <ModalBody>
                            {this.props.children}
                        </ModalBody>
                    </Modal>
                </div>
            </Aux>
        )
    }
}
function mapStateToProps(state){
    return { modal : state.sideDrawerAndAcitveLink.modal }
}
export default connect(mapStateToProps , actions)(ModalContainer)