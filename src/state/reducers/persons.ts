import { UserActionType } from '../action-types';
import { SearchUsersAction, AddPersonAction } from '../actions';
import { Person } from '../interfaces';

interface UsersState {
  loading: boolean;
  error: string | null;
  data: Person[];
}

const initialState = {
  loading: false,
  error: '',
  data: [],
} as UsersState;

const persons = (
  state: UsersState = initialState,
  action: SearchUsersAction | AddPersonAction
): UsersState => {
  if (action.type.startsWith('SEARCH'))
    return searchPersons(state, action as SearchUsersAction);
  if (action.type.startsWith('ADD'))
    return addPerson(state, action as AddPersonAction);
  else return state;
};

const searchPersons = (
  state: UsersState = initialState,
  action: SearchUsersAction
): UsersState => {
  switch (action.type) {
    case UserActionType.SEARCH_USERS_START:
      return { loading: true, error: null, data: [] };
    case UserActionType.SEARCH_USERS_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case UserActionType.SEARCH_USERS_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

const addPerson = (
  state: UsersState = initialState,
  action: AddPersonAction
): UsersState => {
  switch (action.type) {
    case UserActionType.ADD_USER_START:
      return { loading: true, error: null, data: state.data };
    case UserActionType.ADD_USER_SUCCESS:
      return {
        loading: false,
        error: null,
        data: [...state.data, action.payload],
      };
    case UserActionType.ADD_USER_ERROR:
      return { loading: false, error: action.payload, data: state.data };
    default:
      return state;
  }
};

export default persons;
