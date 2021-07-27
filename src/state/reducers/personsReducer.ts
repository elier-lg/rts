import { UserActionType } from '../action-types';
import { UserAction } from '../actions';
import { User } from '../interfaces'


interface UserState {
  loading: boolean;
  error: string | null;
  data: User[];
}

const initialState = {
  loading: false,
  error: '',
  data: []
} as UserState

const reducer = (
  state: UserState = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case UserActionType.SEARCH_USERS:
      return { loading: true, error: null, data: [] };
    case UserActionType.SEARCH_USERS_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case UserActionType.SEARCH_USERS_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
