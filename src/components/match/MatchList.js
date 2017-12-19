/**
 * Created by chungch on 6/30/2017.
 */
import React, {PropTypes} from 'react';
import MatchListRow from './MatchListRow';

const MatchList = ({matches}) => {
  return (
           <table className="table">
               <thead>
                 <th>&nbsp;</th><th>Title</th><th>Message</th><th>b1 Runs</th><th>b2 Runs</th><th>ISO</th>
               </thead>
               <tbody>
               {matches.map(match =>
                 <MatchListRow key={match.data.card.key} match={match.data.card} />)}
               </tbody>

           </table>
  );
};

MatchList.prototype = {
  match: PropTypes.array.required
}

export default MatchList;
