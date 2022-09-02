import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Toast from 'react-bootstrap/Toast';

class Header extends React.Component {
  render() {
    return (
      <div>
        <Toast>
          <Toast.Header >
            <strong className="me-auto">Welcome To findCity App</strong>
            <small>☺️</small>
          </Toast.Header>
          <Toast.Body>Hello, world! You Can find all data you need here by clicking on search button</Toast.Body>
        </Toast>
      </div>
    );
  }
}
export default Header;
