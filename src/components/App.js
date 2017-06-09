/**
 * Created by ChungCh on 6/8/2017.
 */

import React,{PropTypes} from 'react';
import Header from './common/Header';

class App extends React.Component {
  render(){
    return (
       <div className="container-fluid">
        <Header />
         {this.props.children}
       </div>
    );
  }
}
//prop validation- all of the props should be listed in here
App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;


