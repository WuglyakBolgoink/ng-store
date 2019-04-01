import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from '@app/app.module';
import { environment } from '@env/environment';

console.log('[environment]', JSON.stringify(environment, null, 2));

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .then((success) => {
        console.log('[APP] Bootstrap app success', success);
    })
    .catch((error) => {
        console.error('[APP] Bootstrap app failure', error);
    });

