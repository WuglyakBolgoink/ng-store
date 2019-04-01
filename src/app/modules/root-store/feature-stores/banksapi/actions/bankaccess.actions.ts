import { HttpErrorResponse } from '@angular/common/http';
import { BankAccesses } from '@models/BANKSapi/BankAccess/BankAccess';
import { Action } from '@ngrx/store';

export enum ActionTypes {
    // ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---
    // Request/Response Actions:

    // Dispatch Action to start fetching data
    BANK_ACCESS_LOAD_REQUEST = '[BANKSapi] BankAccess Load Request',

    // Send action if request was failed
    BANK_ACCESS_LOAD_FAILURE = '[BANKSapi] BankAccess Load Failure',

    // Send action if request was successful
    BANK_ACCESS_LOAD_SUCCESS = '[BANKSapi] BankAccess Load Success',

    // ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---

    // Get initial cached values for Dashboard from server
    DASHBOARD_GET = '[Dashboard] BankAccess Get Dashboard',
    DASHBOARD_GET_SUCCESS = '[Dashboard] BankAccess Get Dashboard SUCCESS',
    DASHBOARD_GET_FAILURE = '[Dashboard] BankAccess Get Dashboard FAILURE',

    // Calculate Dashboard values from all BankAccesses
    DASHBOARD_UPDATE = '[Dashboard] BankAccess Recalculate Dashboard values',

    // ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---

    BANK_ACCESS_REFRESH_ALL = '[BANKSapi] BankAccess Refresh All',
    BANK_ACCESS_REFRESH = '[BANKSapi] BankAccess Refresh',

    // ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---
}

// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- --

export class BankAccessLoadRequestAction implements Action {
    readonly type = ActionTypes.BANK_ACCESS_LOAD_REQUEST;
}

export class BankAccessLoadFailureAction implements Action {
    readonly type = ActionTypes.BANK_ACCESS_LOAD_FAILURE;

    constructor(public payload: { error: HttpErrorResponse }) {
    }
}

export class BankAccessLoadSuccessAction implements Action {
    readonly type = ActionTypes.BANK_ACCESS_LOAD_SUCCESS;

    constructor(public payload: { bankAccesses: BankAccesses }) {
    }
}

// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- --

export class BankAccessDashboardGetAction implements Action {
    readonly type = ActionTypes.DASHBOARD_GET;
}

export class BankAccessDashboardCalculateAction implements Action {
    readonly type = ActionTypes.DASHBOARD_UPDATE;
}

// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- --

export class BankAccessRefreshAllAction implements Action {
    readonly type = ActionTypes.BANK_ACCESS_REFRESH_ALL;
}

export class BankAccessRefreshAction implements Action {
    readonly type = ActionTypes.BANK_ACCESS_REFRESH;

    constructor(public payload: { bankAccessId: string }) {
    }
}

// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- --

export type ActionUnion =
    | BankAccessLoadRequestAction
    | BankAccessLoadFailureAction
    | BankAccessLoadSuccessAction
    | BankAccessRefreshAllAction
    | BankAccessRefreshAction
    | BankAccessDashboardGetAction
    | BankAccessDashboardCalculateAction;
