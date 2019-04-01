/**
 * @see https://docs.banksapi.de/customer.html#message
 * @example
 * {
 *     "level":"ERROR",
 *     "code":"BA1011",
 *     "message":"Zugangsdaten nicht korrekt",
 *     "details":"Bitte überprüfen Sie Ihre Zugangsdaten und versuchen Sie es erneut..."
 * }
 */
export interface Message {
    level: string;

    code: string;

    message: string;

    details: string;
}
