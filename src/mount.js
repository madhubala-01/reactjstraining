import React from 'react';
import './mount.css';


class Mount extends React.Component{
    constructor(props) {
      super(props);
      this.state = {username: "Madhu"};
    }
    componentDidMount() {
      setTimeout(() => {
        this.setState({username: "Bala"})
      }, 1500)
    }
    render() {
      return (
         <div className ="Mount">
           <h1>Username is {this.state.username}</h1>
           <p>The name will be change automatically using componentDidMount method</p>
        </div> 
      );
    }
  }

  export default Mount;