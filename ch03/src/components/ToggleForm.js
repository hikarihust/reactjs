import React, { Component } from 'react';
import { actToggleForm, actUnSelectItem } from './../actions'
import { connect } from 'react-redux'

class ToggleForm extends Component {

  constructor(props) {
    super(props);
  }

  toggleForm = () => {
    this.props.handleToggle();
  }

  render() {
    const { isShowForm } = this.props;
    let btnName = isShowForm ? "Close Form" : "Open Form";
    let btnClass = isShowForm ? "btn-success" : "btn-info";
    
    return (
      <div className="form-group add-task">
        <button onClick={this.toggleForm} type="button" className={`btn ${btnClass} btn-block`}>{ btnName }</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      isShowForm: state.isShowForm
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleToggle: () => {
      dispatch(actToggleForm());
      dispatch(actUnSelectItem());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToggleForm);
