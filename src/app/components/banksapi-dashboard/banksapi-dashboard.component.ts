import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RootState } from '@app/modules/root-store/root-state';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-banksapi-dashboard',
    templateUrl: './banksapi-dashboard.component.html',
    styles: [],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BanksapiDashboardComponent implements OnInit {

    amount: number = 0;

    private subscriptions: Subscription[] = [];

    constructor(
        private store: Store<RootState>
    ) {
    }

    ngOnInit() {
    }
}
