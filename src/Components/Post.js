import React, { Component } from 'react';
import PDF from './PDF';
import './post.css';

class Post extends Component{
    state={
        username: "",
        email: "",
        password:"",
        phone:"",
        postSubmitted:false
    }

    onChange = input => e =>{
        this.setState({
            [input]: e.target.value
        });
    }
    submitPost = (e) => {
        
        if(!this.state.username || !this.state.email || !this.state.phone || !this.state.password){
            alert('All fields are required!');
            e.preventDefault();
        }else{
            this.setState({
                postSubmitted: true
            });
        }
    }
    render()
    {
        return(
            <>
            { !this.state.postSubmitted ?
          (<div className='container'>
            <div className="jumbotron mt-3">
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='well well-sm'>
                            <form className="form-horizontal" method="post">
                                <fieldset>
                                    <legend className='text-center header'>Register</legend>
                                    <div className="form-group">
                                        <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                        <label for = "username">Username: </label>
                                        <input name="username" onChange={this.onChange('username')} type="text" placeholder="Enter username" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                        <label for = "email">EmailAddress: </label>
                                        <input name="email" onChange={this.onChange('email')} type="email" placeholder="Enter email" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                        <label for = "password">Password: </label>
                                        <input name="password" onChange={this.onChange('password')} type="password" placeholder="Enter password" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                        <label for = "phone">PhoneNo: </label>
                                        <input name="phone" onChange={this.onChange('phone')} type="phone" placeholder="Enter phone" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <button type="button" onClick={this.submitPost} className="btn btn-primary btn-lg">Submit</button>
                                    </div>
                               </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
                        

           </div>
          </div>) : (
            <PDF username = {this.state.username} email = {this.state.email} password={this.state.password} phone={this.state.phone}/>
          )
    }
            </>
        );
    }
}
export default Post;