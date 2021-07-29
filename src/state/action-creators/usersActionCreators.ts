import axios from 'axios';
import { Dispatch } from 'redux';
import { UserActionType } from '../action-types';
import { SearchUsersAction, AddPersonAction } from '../actions';
import config from '../../config';
import { Person } from '../interfaces';

export const searchUsers = (term: string) => {
  return async (dispatch: Dispatch<SearchUsersAction>) => {
    dispatch({
      type: UserActionType.SEARCH_USERS_START,
    });
    try {
      const { data } = await axios.get(`${config.usersApiBaseUrl}Persons/all`, {
        params: {
          text: term,
        },
      });
      const users = data.map((result: Person) => {
        return result;
      }) as Person[];

      dispatch({
        type: UserActionType.SEARCH_USERS_SUCCESS,
        payload: users,
      });
    } catch (err) {
      dispatch({
        type: UserActionType.SEARCH_USERS_ERROR,
        payload: err.message,
      });
    }
  };
};

export const addUser = (user: Person) => {
  return async (dispatch: Dispatch<AddPersonAction>) => {
    dispatch({
      type: UserActionType.ADD_USER_START,
    });
    try {
      const userForm = new FormData();
      const keys = Object.keys(user);
      const userObj = JSON.parse(JSON.stringify(user));
      keys.forEach(k => {
        userForm.append(k, userObj[k]);
      });
      const { data } = await axios.post(
        `${config.usersApiBaseUrl}Persons`,
        userForm,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      dispatch({
        type: UserActionType.ADD_USER_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: UserActionType.ADD_USER_SUCCESS,
        payload: err.message,
      });
    }
  };
};
