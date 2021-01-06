import React from 'react';
import './mount.css';

class DerivedFromState extends React.Component {
    constructor(props) {
      super(props);
      this.state = {carname: "Audi"};
    }
    static getDerivedStateFromProps(props, state) {
      return {carname: props.cname };
    }
    render() {
      return (
         <div className="Mount">
           <h1>My Favorite Car is {this.state.carname}</h1>
         </div>
      );
    }
  }

  export default DerivedFromState;