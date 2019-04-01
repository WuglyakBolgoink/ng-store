import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import {
    BankAccessLoadRequestAction,
    BankAccessRefreshAllAction
} from '@app/modules/root-store/feature-stores/banksapi/actions/bankaccess.actions';
import { IBankAccessState } from '@app/modules/root-store/feature-stores/banksapi/states/banksapi.state';
import {
    getAllBankAccesses,
    getBankAccessesLoaded,
    getBankAccessesLoading
} from '@app/modules/root-store/feature-stores/banksapi/selectors/bankaccess.selectors';
import { RootState } from '@app/modules/root-store/root-state';
import { BankAccess, BankAccesses } from '@models/BANKSapi/BankAccess/BankAccess';
import { BankProduct } from '@models/BANKSapi/BankAccess/BankProduct';
import { select, Store } from '@ngrx/store';
import { forEach as _forEach } from 'lodash';
import { Observable, Subscription } from 'rxjs';

@Component({
    selector: 'app-index-page',
    templateUrl: './index-page.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class IndexPageComponent implements OnInit, OnDestroy {

    isLoading: boolean = false;

    bankAccesses$: Observable<IBankAccessState[]>;
    bankAccessesLoading$: Observable<boolean>;
    bankAccessesLoaded$: Observable<boolean>;

    private subscriptions: Subscription[] = [];

    constructor(
        private store: Store<RootState>
    ) {
    }

    ngOnInit() {
        this.bankAccesses$ = this.store
            .pipe(
                select(getAllBankAccesses)
            );

        this.bankAccessesLoading$ = this.store
            .pipe(
                select(getBankAccessesLoading)
            );
        this.bankAccessesLoaded$ = this.store
            .pipe(
                select(getBankAccessesLoaded)
            );

        // this.subscriptions.push(this.bankAccesses$.subscribe((data) => {
        //     console.log('[bankAccesses$ data]', data);
        // }));
        //
        // this.subscriptions.push(this.bankAccessesLoading$.subscribe((data) => {
        //     console.log('[bankAccessesLoading$ data]', data);
        // }));
        //
        // this.subscriptions.push(this.bankAccessesLoaded$.subscribe((data) => {
        //     console.log('[bankAccessesLoaded$ data]', data);
        // }));
    }

    public ngOnDestroy(): void {
        _forEach(this.subscriptions, (subscription: Subscription) => {
            subscription.unsubscribe();
        });
    }

    /**
     * @todo...
     */
    public clickAdd(): void {
        console.log('[clickAdd]');
    }

    /**
     * @description Load all bank accesses.
     */
    public clickLoad(): void {
        console.log('[clickLoad] dispatch BANK_ACCESS_LOAD_REQUEST action');

        this.store.dispatch(new BankAccessLoadRequestAction());
    }

    public clickRefresh(): void {
        console.log('[clickRefresh]');

        this.store.dispatch(new BankAccessRefreshAllAction());
    }

    public trackByBankAccesses(index: number, item: BankAccess): string | number {
        console.log('[trackBybankAccessesFn] index', index, 'item', item);
        return item.cBankId || index;
    }

    public trackByBankProducts(index: number, item: BankProduct): string {
        console.log('[trackByBankprodukteFn] index', index, 'item', item);
        return item.id;
    }
}
