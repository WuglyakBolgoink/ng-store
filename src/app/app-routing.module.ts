import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BanksapiDetailsPageComponent } from '@app/pages/banksapi-details-page/banksapi-details-page.component';
import { BanksapiDetailsTurnoversPageComponent } from '@app/pages/banksapi-details-turnovers-page/banksapi-details-turnovers-page.component';
import { IndexPageComponent } from '@app/pages/index-page/index-page.component';

const routes: Routes = [
    {
        path: '', component: IndexPageComponent
    },
    {
        path: 'ba', component: BanksapiDetailsPageComponent
    },
    {
        path: 'ba/:bid', component: BanksapiDetailsTurnoversPageComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
