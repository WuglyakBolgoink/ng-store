/**
 * @see https://docs.banksapi.de/customer.html#kontoumsatz
 * @example
 * {
 *     "amount": -14.6,
 *     "bookingText": "",
 *     "counteraccountBic": "",
 *     "counteraccountHolder": "Stadt Nuernberg",
 *     "counteraccountIban": "",
 *     "primanotaNumber": "0",
 *     "purpose": "KAZ 220100341056Grundabgaben 16.02. 2015Schweppermannstr. 1 / We 3GID D E20ZZZ00000013189 SEPA-LASTS. End-to-End-Ref.: 11001734607 COR1 / Mandatsref.: 000015348460 Gläubiger-ID: DE20ZZZ00000013189 Ref. IP21504493501535/26028",
 *     "transactionCode": ""
 * }
 */
export interface Turnover {
    /**
     * @description betrag => Number Wenn vorhanden Betrag mit zwei Nachkommastellen.
     */
    amount: number;

    // buchungstext => Wenn vorhanden Der Buchungstext des Umsatzes
    bookingText: string;

    // gegenkontoBic => Wenn vorhanden BIC des Gegenkontos
    counteraccountBic: string;

    // gegenkontoInhaber => Wenn vorhanden Inhaber des Gegenkontos
    counteraccountHolder: string;

    // gegenkontoIban => Wenn vorhanden IBAN des Gegenkontos
    counteraccountIban: string;

    // primanotaNummer => Wenn vorhanden Primanota-Nummer des Umsatzes
    primanotaNumber: string;

    // verwendungszweck => Wenn vorhanden Der Verwendungszweck des Umsatzes
    purpose: string;

    // gvCode => Wenn vorhanden Der ZKA-GV-Code des Umsatzes
    transactionCode: string;
}
