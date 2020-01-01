import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return (
            <form action method="POST" className="form-inline justify-content-between">
                <div className="form-group">
                    <label className="sr-only" htmlFor>label</label>
                    <input type="text" className="form-control" placeholder="Task Name" />
                </div>
                <div className="form-group">
                    <label className="sr-only" htmlFor>label</label>
                    <select name="ds" className="form-control" required="required">
                    <option value={0}>Small</option>
                    <option value={1}>Medium</option>
                    <option value={2}>High</option>
                    </select>
                </div>
                <button type="button" className="btn btn-primary">Submit</button>
                <button type="button" className="btn btn-secondary">Cancel</button>
            </form>
        );
    }
}

export default Form;
