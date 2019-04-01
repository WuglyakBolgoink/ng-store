/* tslint:disable:object-literal-shorthand */
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
    ActionTypes, BankAccessLoadFailureAction,
    BankAccessLoadRequestAction, BankAccessLoadSuccessAction, ActionUnion
} from '@app/modules/root-store/feature-stores/banksapi/actions/bankaccess.actions';
import { BanksApiService } from '@app/services/banks-api.service';
import { BankAccesses } from '@models/BANKSapi/BankAccess/BankAccess';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

@Injectable()
export class BanksAccessEffects {
    constructor(
        private banksApiService: BanksApiService,
        private actions$: Actions
    ) {
    }

    @Effect()
    getBankAccesses$: Observable<ActionUnion> = this.actions$.pipe(
        // skip all and wait only action with name "BANK_ACCESS_LOAD_REQUEST"
        ofType<BankAccessLoadRequestAction>(
            ActionTypes.BANK_ACCESS_LOAD_REQUEST
        ),
        // Start action befor send HTTP Request
        // startWith(new BankAccessLoadRequestAction()),
        // Send BANKSapi GET Request
        switchMap(() => {
                console.log('[EFFECTS] Start effect getBankAccesses$');
                return this.banksApiService
                    .getAll()
                    .pipe(
                        map((bankAccesses: BankAccesses) => {
                            console.log('[EFFECTS] getBankAccesses$ SUCCESS');

                            // Send SUCCESS Action
                            return new BankAccessLoadSuccessAction({
                                bankAccesses: bankAccesses
                            });
                        }),
                        catchError((error: HttpErrorResponse) => {
                            console.log('[EFFECTS] getBankAccesses$ FAILURE');

                            // Send FAILURE Action
                            return observableOf(new BankAccessLoadFailureAction({
                                error: error
                            }));
                        })
                    );
            }
        )
    );
}
