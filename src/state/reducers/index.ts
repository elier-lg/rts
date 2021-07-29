import { combineReducers } from 'redux';
import personsReducer from './persons';

const reducers = combineReducers({
  users: personsReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
