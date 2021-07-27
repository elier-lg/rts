import axios from 'axios';
import { Dispatch } from 'redux';
import { UserActionType } from '../action-types';
import { UserAction } from '../actions';
import config from '../../config';
import { User } from '../interfaces';

export const searchUsers = (term: string) => {
    return async (dispatch: Dispatch<UserAction>) => {
        dispatch({
            type: UserActionType.SEARCH_USERS,
        });
        try {
            const { data } = await axios.get(`${config.usersApiBaseUrl}Persons/all`,
                {
                    params: {
                        text: term,
                    },
                }
            );
            const users = data.map((result: User) => {
                return result;
            });

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
