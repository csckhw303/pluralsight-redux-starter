import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as matchAction from '../../actions/matchActions';
import MatchList from './MatchList';
import {browserHistory} from 'react-router';

class MatchPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToAddMatchPage = this.redirectToAddMatchPage.bind(this);
    this.state ={
      match: {title:""}
    };
  }

  redirectToAddMatchPage() {
    browserHistory.push('/match');
  }
  render() {
        const {matches} = this.props;

        return (
            <div>
              <h1>Matches</h1>
              <input type="submit"
                     value="Add New Match"
                     className="btn btn-primary"
                     onClick={this.redirectToAddMatchPage} />
              <MatchList matches={matches} />
            </div>
        );
  }
}
MatchPage.propTypes = {
   actions: PropTypes.object,
   matches: PropTypes.array
};
function mapStateToProps(state, ownProps) {
  return {
    matches: state.matches
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(matchAction, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (MatchPage);
