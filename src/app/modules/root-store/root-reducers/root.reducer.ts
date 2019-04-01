import {
    BankAccessesReducer,
    DashboardReducer
} from '@app/modules/root-store/feature-stores/banksapi/';
import { RootState } from '@app/modules/root-store/root-state';
import { environment } from '@env/environment';
import {
    ActionReducer,
    ActionReducerMap,
    MetaReducer
} from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';

/**
 * console.log all actions
 */
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
    return (state, action) => {
        console.group('[STORE][$debug$]');
        console.log('[STORE][$debug$] state', state);
        console.log('[STORE][$debug$] action', action);
        console.groupEnd();

        return reducer(state, action);
    };
}

export const reducers: ActionReducerMap<RootState> = {
    banksApi: BankAccessesReducer.bankAccessesReducer,
    dashboard: DashboardReducer.dashboardReducer
    // , router: RouterReducer.routerReducer,
};

export const metaReducers: MetaReducer<RootState>[] = !environment.production ? [
    storeFreeze,
    debug
] : [];
