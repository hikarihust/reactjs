import React, { Component } from 'react';

class FormSign extends Component {
	handleChange = (event) => {
		const target = event.target;    // input selectbox
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
    }
    
    render() {
        return (                            
            <form className="form-horizontal">
                <div className="form-group">
                    <label htmlFor="inputEmail3" className="col-sm-2 control-label">Email</label>
                    <div className="col-sm-6">
                        <input type="text" value="" onChange={this.handleChange} name="email" className="form-control" id="inputEmail3" placeholder="Email" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="inputPassword3" className="col-sm-2 control-label">Password</label>
                    <div className="col-sm-6">
                        <input type="text" value="" onChange={this.handleChange} name="password" className="form-control" id="inputPassword3" placeholder="Password" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-6">
                        <button type="submit" className="btn btn-success">Sign in</button>
                    </div>
                </div>
            </form>
        );
    }
}

export default FormSign;
