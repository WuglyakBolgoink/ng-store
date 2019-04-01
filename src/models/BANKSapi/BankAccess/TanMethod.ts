/**
 * @see https://docs.banksapi.de/customer.html#sicherheitsverfahren
 * @example
 * {
 *     "coding": 1,
 *     "hint": "Mock-TAN",
 *     "name": "Mock-TAN"
 * }
 */
export interface TanMethod {
    coding: number;

    hint: string;

    name: string;
}
