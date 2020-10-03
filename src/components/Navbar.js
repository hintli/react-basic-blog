import React from 'react';
import {Link,NavLink,withRouter} from 'react-router-dom';

const Navbar = (props) => {
    // setTimeout(() => {
    //     props.history.push("/contact");
    //  },3000);
    return (
        <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">Yılan Efdal Blogu</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/">Home</Link></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>
    )
}

    export default withRouter(Navbar);