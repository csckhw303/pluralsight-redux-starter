/**
 * Created by ChungCh on 6/9/2017.
 */
import (createStore) from 'redux';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState
  );
}
