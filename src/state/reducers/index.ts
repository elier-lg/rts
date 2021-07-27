import { combineReducers } from 'redux';
import personReducer from './personsReducer';

const reducers = combineReducers({
  users: personReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
