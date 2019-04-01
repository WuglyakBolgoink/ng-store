import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BankAccesses } from '@models/BANKSapi/BankAccess/BankAccess';
import { Observable } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable()
export class BanksApiService {

    constructor(
        private http: HttpClient
    ) {
    }

    getAll(): Observable<BankAccesses> {
        return this.http
            .get<BankAccesses>('http://localhost:3333/banksapi')
            .pipe(
                tap(() => {
                    console.log('[BanksApiService][getAll()][start 1s pause]');
                }),
                delay(1000),
                tap(() => {
                    console.log('[BanksApiService][getAll()][return BankAccesses]');
                })
            );
    }
}
