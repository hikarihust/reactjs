import React, { Component } from 'react';
import { connect } from 'react-redux'

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
        this.updateItem(this.props.itemSelected);
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        this.updateItem(nextProps.itemSelected);
    }

    updateItem(item){
        if(item) {
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
        let { isShowForm } = this.props;
        if(!isShowForm) return null;

        return (
            <form onSubmit={this.handleSubmit} className="form-inline justify-content-between">
                <div className="form-group">
                    <label className="sr-only" htmlFor="task_name">label</label>
                    <input value={ this.state.task_name } onChange={this.handleChange} name="task_name" type="text" className="form-control" placeholder="Task Name" />
                </div>

                <div className="form-group">
                    <label className="sr-only" htmlFor="task_level">label</label>
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

const mapStateToProps = state => {
    return {
        isShowForm: state.isShowForm
    }
  }
  
export default connect(mapStateToProps, null)(Form);
