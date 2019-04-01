import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BanksAccessEffects } from '@app/modules/root-store/feature-stores/banksapi/effects/bankaccess.effects';
import { DashboardEffects } from '@app/modules/root-store/feature-stores/banksapi/effects/dashboard.effects';
import { bankAccessesReducer } from '@app/modules/root-store/feature-stores/banksapi/reducers/bankaccess.reducers';
import { dashboardReducer } from '@app/modules/root-store/feature-stores/banksapi/reducers/dashboard.reducers';
import { BanksApiService } from '@app/services/banks-api.service';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        StoreModule.forFeature(
            'banksApi',
            bankAccessesReducer
        ),
        StoreModule.forFeature(
            'dashboard',
            dashboardReducer
        ),
        EffectsModule.forFeature([
            BanksAccessEffects,
            DashboardEffects
        ])
    ],
    providers: [
        BanksApiService
    ]
})
export class BanksApiModule {
}
