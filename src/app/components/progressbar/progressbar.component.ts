import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { getBankAccessesLoading } from '@app/modules/root-store/feature-stores/banksapi/selectors/bankaccess.selectors';
import { RootState } from '@app/modules/root-store/root-state';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-progressbar',
    templateUrl: './progressbar.component.html',
    styles: [],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressbarComponent implements OnInit {
    bankAccessesLoading$: Observable<boolean>;

    constructor(
        private store: Store<RootState>
    ) {
    }

    ngOnInit() {
        this.bankAccessesLoading$ = this.store
            .pipe(
                select(getBankAccessesLoading)
            );
    }

}
