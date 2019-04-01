import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BanksApiModule } from '@app/modules/root-store/feature-stores/banksapi/banksapi.module';
import { metaReducers, reducers } from '@app/modules/root-store/root-reducers/root.reducer';
import { environment } from '@env/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

const DEV_TOOLS_CONFIG = {
    name: 'ng-store App DevTools',
    // maximum allowed actions to be stored in the history tree. The oldest actions are removed once maxAge is reached.
    // It's critical for performance. Default is false (infinite).
    maxAge: 25,
    // connect to the Devtools Extension in log-only mode. Default is false which enables all extension features.
    logOnly: false
};

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        BanksApiModule,

        /**
         * StoreModule.forRoot is imported once in the root module, accepting a bankAccessesReducer
         * function or object map of bankAccessesReducer functions. If passed an object of
         * reducers, combineReducers will be run creating your application
         * meta-bankAccessesReducer. This returns all providers for an @ngrx/store
         * based application.
         */
        StoreModule.forRoot(reducers, { metaReducers: metaReducers }),

        /**
         * EffectsModule.forRoot() is imported once in the root module and
         * sets up the effects class to be initialized immediately when the
         * application starts.
         *
         * See: https://github.com/ngrx/platform/blob/master/docs/effects/api.md#forroot
         */
        EffectsModule.forRoot([]),

        /**
         * Store devtools instrument the store retaining past versions of state
         * and recalculating new states. This enables powerful time-travel
         * debugging.
         *
         * To use the debugger, install the Redux Devtools extension for either
         * Chrome or Firefox
         *
         * See: https://github.com/zalmoxisus/redux-devtools-extension
         */
        !environment.production ? StoreDevtoolsModule.instrument(DEV_TOOLS_CONFIG) : []
    ]
})
export class RootStoreModule {
}
