/* tslint:disable:no-redundant-jsdoc */
import {
    IBankAccessesState,
    bankAccessFeatureAdapter,
    IBankAccessState
} from '@app/modules/root-store/feature-stores/banksapi/states/banksapi.state';
import { RootState, Status } from '@app/modules/root-store/root-state';
import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';

export const getBanksApiState: MemoizedSelector<RootState, IBankAccessesState> =
    createFeatureSelector<RootState, IBankAccessesState>('banksApi');

/**
 * @param {RootState} state
 * @returns {IBankAccessState[]}
 */
export const getAllBankAccesses: (state: RootState) => IBankAccessState[] =
    bankAccessFeatureAdapter.getSelectors(getBanksApiState).selectAll;

export const getBankAccessesLoading = createSelector(
    getBanksApiState,
    (state: IBankAccessesState): boolean => {
        console.log('[SELECTOR:getBankAccessesLoading] state:', state);
        return state.status === Status.LOADING;
    }
);

export const getBankAccessesLoaded = createSelector(
    getBanksApiState,
    (state: IBankAccessesState): boolean => {
        console.log('[SELECTOR:getBankAccessesLoaded] state', state);
        return state.status === Status.LOADED;
    }
);
