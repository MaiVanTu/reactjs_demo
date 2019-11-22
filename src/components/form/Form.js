import React from 'react';

class Form extends React.Component {

    submitForm(event) {
        event.preventDefault();
        console.log(event)
    }

    render() {
        return (
        <div className="row">
            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                
                <div className="panel panel-primary">
                      <div className="panel-heading">
                            <h3 className="panel-title">Form</h3>
                      </div>
                      <div className="panel-body">
                            
                            <form action="" method="POST" role="form" >
                                <legend>Form title</legend>
                            
                                <div className="form-group">
                                    <label>Username</label>
                                    <input type="text" name="username"  className="form-control" id="" placeholder="Input field"/>
                                </div>

                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" name="password" className="form-control" id="" placeholder="Input field"/>
                                </div>
                            
                                
                            
                                <button type="submit" className="btn btn-primary">Submit</button>&nbsp;
                                <button type="reset" className="btn btn-primary">Reset</button>
                            </form>
                            
                      </div>
                </div>
                
            </div>
        </div>
        )
        
    }
}

export default Form;