import {
    ActionTypes,
    ActionUnion
} from '@app/modules/root-store/feature-stores/banksapi/actions/bankaccess.actions';
import {
    bankAccessFeatureAdapter,
    initialState, State
} from '@app/modules/root-store/feature-stores/banksapi/states/banksapi.state';
import { Status } from '@app/modules/root-store/root-state';
import { map as _map } from 'lodash-es';

export function bankAccessesReducer(state = initialState, action: ActionUnion): State {
    switch (action.type) {
        case ActionTypes.BANK_ACCESS_LOAD_REQUEST: {
            return {
                ...state,
                status: Status.LOADING,
                error: null
            };
        }

        case ActionTypes.BANK_ACCESS_LOAD_SUCCESS: {
            const list = _map(action.payload.bankAccesses, (bankAccess, bankAccessId) => {
                return {
                    id: bankAccessId,
                    bankAccess: bankAccess
                };
            });
            return bankAccessFeatureAdapter.addAll(list, {
                ...state,
                status: Status.LOADED,
                error: null
            });
        }

        case ActionTypes.BANK_ACCESS_LOAD_FAILURE: {
            return {
                ...state,
                status: Status.ERROR,
                error: action.payload.error
            };
        }

        default: {
            return state;
        }
    }
}
