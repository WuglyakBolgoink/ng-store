/**
 * @see https://docs.banksapi.de/customer.html#tan-medium
 * @example
 * {
 *     "mediaClass": "MOBIL",
 *     "name": "Mobil",
 *     "validFrom": "2019-03-11T11:59:24",
 *     "validTo": "2019-03-11T11:59:24"
 * }
 */
export interface TanMedia {
    mediaClass: string;

    name: string;

    validFrom: string;

    validTo: string;
}
