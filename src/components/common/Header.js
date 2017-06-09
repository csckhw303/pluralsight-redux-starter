/**
 * Created by ChungCh on 6/9/2017.
 */

import React from 'react';
import { Link, IndexLink} from 'react-router';
const Header =  () => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/about" activeClasName="active">About</Link>
      {" | "}
      <Link to="/courses" activeClasName="active">courses</Link>
    </nav>
  );
};

export default Header;
