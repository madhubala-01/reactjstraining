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
    getSnapshotBeforeUpdate(name, name1) {
        document.getElementById("before").innerHTML =
        "Before the update, the name was " + name1.username;
      }
      componentDidUpdate() {
        document.getElementById("after").innerHTML =
        "The updated name is " + this.state.username;
      }
    render() {
      return (
         <div className ="Mount">
           <h1>Username is {this.state.username}</h1>
           <p>The name will be change automatically using componentDidMount method</p>
           <div id="before"></div>
           <div id="after"></div>
        </div> 
      );
    }
  }

  export default Mount;