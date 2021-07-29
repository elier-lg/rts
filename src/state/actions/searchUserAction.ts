import { UserActionType } from '../action-types';
import { Person } from '../interfaces';

interface SearchPersonStartAction {
  type: UserActionType.SEARCH_USERS_START;
}

interface SearchPersonSuccessAction {
  type: UserActionType.SEARCH_USERS_SUCCESS;
  payload: Person[];
}

interface SearchPersonErrorAction {
  type: UserActionType.SEARCH_USERS_ERROR;
  payload: string;
}

export type SearchUsersAction =
  | SearchPersonStartAction
  | SearchPersonSuccessAction
  | SearchPersonErrorAction;
