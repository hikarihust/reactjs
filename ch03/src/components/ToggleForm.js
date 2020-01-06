import React, { Component } from 'react';
import { connect } from 'react-redux'

class ToggleForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
       
    };

    this.handleToggleForm = this.handleToggleForm.bind(this);
  }

  handleToggleForm = () => {
    this.setState({
      isShowForm: !this.state.isShowForm,
      itemSelected: null
    })
  }

  render() {
    const { isShowForm } = this.props;
    let btnName = isShowForm ? "Close Form" : "Open Form";
    let btnClass = isShowForm ? "btn-success" : "btn-info";
    
    return (
      <div className="form-group add-task">
        <button onClick={this.handleToggleForm} type="button" className={`btn ${btnClass} btn-block`}>{ btnName }</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      isShowForm: state.isShowForm
  }
}

export default connect(mapStateToProps, null)(ToggleForm);
