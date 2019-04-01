/**
 * @see https://docs.banksapi.de/#relation
 * @example
 * {
 *     "rel":"say_hello",
 *     "href":"https://banksapi.io/hello/"
 * }
 */
export interface Relation {
    rel: string;

    href: string;
}
