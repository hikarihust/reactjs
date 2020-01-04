import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            task_id: '',
            task_name: '',
            task_level: 0
        };

        this.handleCancel = this.handleCancel.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    UNSAFE_componentWillMount(){
        let item = this.props.itemSelected;
        if(item) {
            this.setState({
                task_id: item.id,
                task_name: item.name,
                task_level: item.level,
            });
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if(nextProps.itemSelected) {
            let item = nextProps.itemSelected;
            this.setState({
                task_id: item.id,
                task_name: item.name,
                task_level: item.level,
            });
        }
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    handleSubmit(event) {
        let item = {
            name: this.state.task_name,
            id: this.state.task_id,
            level: this.state.task_level
        };
        this.props.onClickSubmit(item);
        event.preventDefault();
    }

    handleCancel() {
        this.props.onClickCancel();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="form-inline justify-content-between">
                <div className="form-group">
                    <label className="sr-only" htmlFor>label</label>
                    <input value={ this.state.task_name } onChange={this.handleChange} name="task_name" type="text" className="form-control" placeholder="Task Name" />
                </div>

                <div className="form-group">
                    <label className="sr-only" htmlFor>label</label>
                    <select value={ this.state.task_level } onChange={this.handleChange} name="task_level" className="form-control" required="required">
                        <option value={0}>Small</option>
                        <option value={1}>Medium</option>
                        <option value={2}>High</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
                <button onClick={ this.handleCancel } type="button" className="btn btn-secondary">Cancel</button>
            </form>
        );
    }
}

export default Form;
