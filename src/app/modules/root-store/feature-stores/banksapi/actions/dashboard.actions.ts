import { HttpErrorResponse } from '@angular/common/http';
import { BankAccesses } from '@models/BANKSapi/BankAccess/BankAccess';
import { Action } from '@ngrx/store';

export enum DashboardActionTypes {
    // [IN] Get initial cached values for Dashboard from server
    DASHBOARD_LOAD = '[Dashboard] Dashboard Load',

    // [OUT]
    DASHBOARD_LOAD_SUCCESS = '[Dashboard] Dashboard Load Request SUCCESS',

    // [OUT]
    DASHBOARD_LOAD_FAILURE = '[Dashboard] Dashboard Load Request FAILURE',

    // ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- --

    // [IN] Calculate Dashboard values from all BankAccesses
    DASHBOARD_CALCULATE = '[Dashboard] Dashboard Refresh',

    // ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- --
    // [IN] Refresh Dashboard from server
    DASHBOARD_REFRESH = '[Dashboard] Dashboard Refresh',

    // [OUT]
    DASHBOARD_REFRESH_SUCCESS = '[Dashboard] Dashboard Refresh Request SUCCESS',

    // [OUT]
    DASHBOARD_REFRESH_FAILURE = '[Dashboard] Dashboard Refresh Request FAILURE',
}

// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- --

export class DashboardLoadAction implements Action {
    readonly type = DashboardActionTypes.DASHBOARD_LOAD;
}

export class DashboardLoadFailureAction implements Action {
    readonly type = DashboardActionTypes.DASHBOARD_LOAD_FAILURE;

    constructor(public payload: { error: HttpErrorResponse }) {
    }
}

export class DashboardLoadSuccessAction implements Action {
    readonly type = DashboardActionTypes.DASHBOARD_LOAD_SUCCESS;

    constructor(public payload: { dashboard: BankAccesses }) {
    }
}

// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- --

export class DashboardRefreshAction implements Action {
    readonly type = DashboardActionTypes.DASHBOARD_REFRESH;
}

export class DashboardRefreshFailureAction implements Action {
    readonly type = DashboardActionTypes.DASHBOARD_REFRESH_FAILURE;

    constructor(public payload: { error: HttpErrorResponse }) {
    }
}

export class DashboardRefreshSuccessAction implements Action {
    readonly type = DashboardActionTypes.DASHBOARD_REFRESH_SUCCESS;

    constructor(public payload: { dashboard: BankAccesses }) {
    }
}

// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- --

/**
 * @deprecated Can we replace this with selectors?
 */
export class DashboardCalculateAction implements Action {
    readonly type = DashboardActionTypes.DASHBOARD_CALCULATE;
}

// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- --

export type DashboardActionUnion =
    | DashboardLoadAction
    | DashboardLoadFailureAction
    | DashboardLoadSuccessAction
    | DashboardRefreshAction
    | DashboardRefreshFailureAction
    | DashboardRefreshSuccessAction
    | DashboardCalculateAction;
