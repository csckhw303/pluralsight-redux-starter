/**
 * Created by chungch on 6/30/2017.
 */
import React, {PropTypes} from 'react';
import { Link } from 'react-router';


const MatchListRow = ({match}) => {
  return (
    <tr>
      <td><Link to={'/match/' + match.key}>{match.short_name}</Link></td>
      <td>{match.title}</td>
      <td>{match.msgs.info}</td>
      <td>{match.innings.b_1.runs}</td>
      <td>{match.innings.a_1.runs}</td>
      <td>{match.start_date.iso}</td>
    </tr>
  );
};

MatchListRow.prototype = {
  matches: PropTypes.array.isRequired,
  match: PropTypes.object
};

export default MatchListRow;
