import React from 'react';
import './mount.css';

class CompUpdate extends React.Component {
    constructor(props) {
      super(props);
      this.state = {username: "Madhu"};
    }
    shouldComponentUpdate() {
      return true;
    }
    changeName = () => {
      this.setState({username: "Bala"});
    }
    render() {
      return (
        <div className="Mount">
        <h1>The Username is {this.state.username}</h1>
        <button type="button" onClick={this.changeName}>Change Name</button>
        </div>
      );
    }
}

export default CompUpdate;