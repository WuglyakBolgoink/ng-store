import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { BanksapiDashboardComponent } from '@app/components/banksapi-dashboard/banksapi-dashboard.component';
import { FooterComponent } from '@app/components/footer/footer.component';
import { HeaderComponent } from '@app/components/header/header.component';
import { RootStoreModule } from '@app/modules/root-store/root-store.module';
import { BanksapiDetailsPageComponent } from '@app/pages/banksapi-details-page/banksapi-details-page.component';
import { BanksapiDetailsTurnoversPageComponent } from '@app/pages/banksapi-details-turnovers-page/banksapi-details-turnovers-page.component';
import { IndexPageComponent } from '@app/pages/index-page/index-page.component';

// ---- see https://angular.io/guide/i18n#i18n-pipes
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import { ProgressbarComponent } from './components/progressbar/progressbar.component';
// the second parameter 'de' is optional
registerLocaleData(localeDe, 'de');
// ^----^

@NgModule({
    declarations: [
        AppComponent,
        BanksapiDashboardComponent,
        IndexPageComponent,
        BanksapiDetailsPageComponent,
        BanksapiDetailsTurnoversPageComponent,
        HeaderComponent,
        FooterComponent,
        ProgressbarComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        RootStoreModule
    ],
    providers: [
        { provide: LOCALE_ID, useValue: 'de' }
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
