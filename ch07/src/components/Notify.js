import React, { Component } from 'react';
import {AlertContainer, Alert} from "react-bs-notifier";
import {connect} from 'react-redux';

import { actHideNotify } from '../actions';

class Notify extends Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     isShow: true
        // }
    }

    handleDismiss = () => {
        this.props.hideNotify();
    }

    render() {
        let {style, title, content, isShow} = this.props.item;
        if (!isShow) return null;

        return (
            <AlertContainer position="top-left">
                <Alert headline={ title } type={ style } timeout={3000} onDismiss={this.handleDismiss}>
                    { content }
                </Alert>
            </AlertContainer>
        );
    }
}

const mapStateToProps = state => {
    return {
        item: state.notify
    }
}

const mapDispatchToProps = (dispatch) => {
	return {
		hideNotify: () => {
			dispatch(actHideNotify());
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Notify);
