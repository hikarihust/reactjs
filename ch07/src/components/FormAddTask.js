import React, { Component } from 'react';

class FormAddTask extends Component {
    render() {
        return (                            
            <form className="form-inline">
                <div className="form-group">
                    <input type="text" defaultValue name="task" className="form-control" placeholder="Task" />
                </div>
                <button type="submit" className="btn btn-info">Add</button>
            </form>
        );
    }
}

export default FormAddTask;
