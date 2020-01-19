import React, { Component } from 'react';
import {AlertContainer, Alert} from "react-bs-notifier";

class Notify extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isShow: true
        }
    }

    handleDismiss = () => {
        this.setState({ isShow: false });
    }

    render() {
        let { isShow } = this.state;
        if (!isShow) return null;

        return (
            <AlertContainer position="top-left">
                <Alert headline="title" type="danger" timeout={3000} onDismiss={this.handleDismiss}>
                    This is a message that explains what happened in a little more detail.
                </Alert>
            </AlertContainer>
        );
    }
}

export default Notify;
