import { UserActionType } from '../action-types';
import { User } from '../interfaces';

interface SearchUsersAction {
  type: UserActionType.SEARCH_USERS;
}

interface SearchUsersSuccessAction {
  type: UserActionType.SEARCH_USERS_SUCCESS;
  payload: User[];
}

interface SearchUsersErrorAction {
  type: UserActionType.SEARCH_USERS_ERROR;
  payload: string;
}

export type UserAction =
  | SearchUsersAction
  | SearchUsersSuccessAction
  | SearchUsersErrorAction;
