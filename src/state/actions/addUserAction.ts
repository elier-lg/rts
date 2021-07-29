import { UserActionType } from '../action-types';
import { Person } from '../interfaces';

interface AddPersonStartAction {
  type: UserActionType.ADD_USER_START;
}

interface AddPersonSuccessAction {
  type: UserActionType.ADD_USER_SUCCESS;
  payload: Person;
}

interface AddPersonErrorAction {
  type: UserActionType.ADD_USER_ERROR;
  payload: string;
}

export type AddPersonAction =
  | AddPersonStartAction
  | AddPersonSuccessAction
  | AddPersonErrorAction;
