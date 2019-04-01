import { Relation } from '@models/BANKSapi/BankAccess/Relation';
import { Message } from '@models/BANKSapi/Message';

/**
 * @see https://docs.banksapi.de/customer.html#bankprodukt
 * @example
 * {
 *     "accountHolder": "Fritz Testm?ller",
 *     "accountNumber": "9012345680",
 *     "balance": 25843.69,
 *     "balanceDatasource": "SONSTIGE",
 *     "balanceDate": "2019-03-11 00:00:00",
 *     "bankCode": "12345678",
 *     "bic": "XXX12345678",
 *     "category": "DEPOT",
 *     "categoryLabel": "Depot",
 *     "currency": "EUR",
 *     "id": "9012345680",
 *     "instituteName": "Demo Provider",
 *     "messages": [],
 *     "productDescription": "Investmentdepot",
 *     "relations": [
 *         {
 *             "href": "https://...",
 *             "rel": "self"
 *         },
 *         {
 *             "href": "https://...",
 *             "rel": "get_depot_postion"
 *         }
 *     ],
 *     "updatedAt": "2019-03-11 11:59:24"
 * }
 */
export interface BankProduct {
    accountHolder: string;

    accountNumber: string;

    balance: number;

    balanceDatasource?: string;

    balanceDate: string;

    bankCode: string;

    bic: string;

    category: string;

    categoryLabel: string;

    creditLimit: number;

    currency: string;

    disposedAmount: number;

    overdraftFacility: number;

    id: string;

    instituteName: string;

    iban: string;

    messages: Message[];

    productDescription: string;

    relations: Relation[];

    updatedAt: string;
}
