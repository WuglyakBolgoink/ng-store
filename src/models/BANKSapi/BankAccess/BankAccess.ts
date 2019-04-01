/* tslint:disable:max-line-length */

import { BankProduct } from '@models/BANKSapi/BankAccess/BankProduct';
import { Institute } from '@models/BANKSapi/BankAccess/Institute';
import { Relation } from '@models/BANKSapi/BankAccess/Relation';
import { TanMedia } from '@models/BANKSapi/BankAccess/TanMedia';
import { TanMethod } from '@models/BANKSapi/BankAccess/TanMethod';
import { Message } from '@models/BANKSapi/Message';

export interface BankAccess {
    activeTanMethod: TanMethod;

    bankProducts: BankProduct[];

    institute: Institute;

    relations: Relation[];

    status: string;

    sync: boolean;

    tanMedia: TanMedia[];

    tanMethods: TanMethod[];

    updatedAt: string;

    messages: Message[];

    // custom properties (defined only in F/E)

    cBankId?: string;
}

export interface BankAccesses {
    [bankAccessId: string]: BankAccess;
}
