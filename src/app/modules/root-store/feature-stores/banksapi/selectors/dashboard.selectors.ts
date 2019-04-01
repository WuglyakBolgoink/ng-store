/* tslint:disable:no-redundant-jsdoc */

import { IDashboardState } from '@app/modules/root-store/feature-stores/banksapi/states/dashboard.state';
import { RootState } from '@app/modules/root-store/root-state';
import { createFeatureSelector, MemoizedSelector } from '@ngrx/store';

export const getDashboardState: MemoizedSelector<RootState, IDashboardState> =
    createFeatureSelector<RootState, IDashboardState>('dashboard');

// /**
//  * @param {RootState} state
//  * @returns {IBankAccessState[]}
//  */
// export const getAllBankAccesses: (state: RootState) => IBankAccessState[] =
//     bankAccessFeatureAdapter.getSelectors(getBanksApiState).selectAll;
//
// export const getBankAccessesLoading = createSelector(
//     getBanksApiState,
//     (state: IBankAccessesState): boolean => {
//         console.log('[SELECTOR:getBankAccessesLoading] state:', state);
//         return state.status === Status.LOADING;
//     }
// );
//
// export const getBankAccessesLoaded = createSelector(
//     getBanksApiState,
//     (state: IBankAccessesState): boolean => {
//         console.log('[SELECTOR:getBankAccessesLoaded] state', state);
//         return state.status === Status.LOADED;
//     }
// );
