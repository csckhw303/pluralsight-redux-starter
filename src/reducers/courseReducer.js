export default function courseReducer(state = [], action) {
   switch (action.type) {
     case 'CREATE_COURSE':
           return [...state, object.assign({},action.coure)];

     default:
           return state;
   }
}
