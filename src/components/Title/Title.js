import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import './Title.css';

class Title extends Component {
  
  constructor(props){
    super(props);
    this.logout = this.logout.bind(this);
    this.state = {
      redirect: false
    }
  }

  logout(){
    sessionStorage.setItem("userData",'');
    sessionStorage.clear();
    this.setState({redirect: true});

  }

  render() {
    if(this.state.redirect){
      return (<Redirect to={'/'}/>)
    }
    return (
      <div className="row">
      <div className="medium-12 columns">
      <ul><li><a href="/orders"  className="right">Orders</a></li>
      <li><a href="#" onClick={this.logout} className="right">Logout</a></li>
      </ul>
      <h1>Welcome {this.props.name}</h1>
      </div>
      </div>
    );
  }
}

export default Title;