import { BankAccessesState, DashboardState } from '@app/modules/root-store/feature-stores/banksapi';

export enum Status {
    LOADED = '[LOADED]',
    LOADING = '[LOADING]',
    ERROR = '[ERROR]',
}

export interface RootState {
    banksApi: BankAccessesState.State;
    dashboard: DashboardState.State;
}
