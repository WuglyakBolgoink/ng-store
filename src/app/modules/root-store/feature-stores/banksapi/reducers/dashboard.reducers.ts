import {
    DashboardActionTypes,
    DashboardActionUnion
} from '@app/modules/root-store/feature-stores/banksapi/actions/dashboard.actions';
import {
    initialState,
    State
} from '@app/modules/root-store/feature-stores/banksapi/states/banksapi.state';
import { Status } from '@app/modules/root-store/root-state';

export function dashboardReducer(state = initialState, action: DashboardActionUnion): State {
    switch (action.type) {
        case DashboardActionTypes.DASHBOARD_LOAD: {
            return {
                ...state,
                status: Status.LOADING,
                error: null
            };
        }

        case DashboardActionTypes.DASHBOARD_LOAD_SUCCESS: {
            // todo: fix logic!
            return {
                ...state,
                status: Status.LOADED,
                error: null
            };
        }

        case DashboardActionTypes.DASHBOARD_LOAD_FAILURE: {
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
