/* tslint:disable:object-literal-shorthand */
import { Injectable } from '@angular/core';
import { BanksApiService } from '@app/services/banks-api.service';
import { Actions } from '@ngrx/effects';

@Injectable()
export class DashboardEffects {
    constructor(
        private banksApiService: BanksApiService,
        private actions$: Actions
    ) {
    }

    // @Effect()
    // getBankAccesses$: Observable<ActionUnion> = this.actions$.pipe(
    //     // skip all and wait only action with name "BANK_ACCESS_LOAD_REQUEST"
    //     ofType<BankAccessLoadRequestAction>(
    //         ActionTypes.BANK_ACCESS_LOAD_REQUEST
    //     ),
    //     // Start action befor send HTTP Request
    //     // startWith(new BankAccessLoadRequestAction()),
    //     // Send BANKSapi GET Request
    //     switchMap(() => {
    //             console.log('[EFFECTS] Start effect getBankAccesses$');
    //             return this.banksApiService
    //                 .getAll()
    //                 .pipe(
    //                     map((bankAccesses: BankAccesses) => {
    //                         console.log('[EFFECTS] getBankAccesses$ SUCCESS');
    //
    //                         // Send SUCCESS Action
    //                         return new BankAccessLoadSuccessAction({
    //                             bankAccesses: bankAccesses
    //                         });
    //                     }),
    //                     catchError((error: HttpErrorResponse) => {
    //                         console.log('[EFFECTS] getBankAccesses$ FAILURE');
    //
    //                         // Send FAILURE Action
    //                         return observableOf(new BankAccessLoadFailureAction({
    //                             error: error
    //                         }));
    //                     })
    //                 );
    //         }
    //     )
    // );
}
